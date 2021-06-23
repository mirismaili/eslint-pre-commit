#!/usr/bin/env node

import {exec as legacyExec} from 'child_process'
import fs                   from 'fs/promises'
import util                 from 'util'

/**
 * Created on 1400/4/1 (2021/6/22).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

const exec = util.promisify(legacyExec)
const DEF_BASE_COMMAND = 'eslint --max-warnings=0'

const {stdout, stderr} = await exec(
	'git diff --cached --name-only --diff-filter=ACMRTUXB', // `ACMRTUXB` => all changes except "Delete". See:
)                                                           // https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203

if (stderr)
	throw Error(stderr)

const filesList = stdout.split('\n').filter(relativePath => /\.[jt]sx?$/.test(relativePath))
const joinedList = filesList.join(' ')

const userDefinedBaseCommand = JSON.parse(await fs.readFile('package.json', 'utf-8')).eslintPreCommitBaseCommand

const eslintPreCommitBaseCommand = userDefinedBaseCommand ?? DEF_BASE_COMMAND

const SEPARATOR = ' \\\n\t'

console.log('>>', eslintPreCommitBaseCommand + SEPARATOR + filesList.join(SEPARATOR), '\n')

let exitCode
await exec(eslintPreCommitBaseCommand + ' ' + joinedList).then(({stdout, stderr}) => {
	console.log(stderr)
	console.log(stdout)
	exitCode = 0
}).catch(({stdout, stderr}) => {
	console.error(stderr)
	console.error(stdout)
	exitCode = 1
})

console.log('Exit code:', exitCode, '\nPre-commit process', exitCode ? 'FAILED!' : 'SUCCEEDED.')
process.exit(exitCode)
