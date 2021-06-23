import {exec as legacyExec} from 'child_process'
import path                 from 'path'
import util                 from 'util'

/**
 * Created on 1400/3/31 (2021/6/21).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

const exec = util.promisify(legacyExec)

const {stdout, stderr} = await exec('git rev-parse --show-toplevel').catch((err) => {
	console.error(`Git Error! Maybe you are on CI and there is no git installed. If so, you don't need to do anything.`)
	process.exit(0)
})
if (stderr) {
	console.error(`Git Error! Maybe you are on CI and there is no git installed. If so, you don't need to do anything.`)
	process.exit(0)
}

const gitRootPath = stdout.trim()

export const gitPreCommitPath = path.join(gitRootPath, '.git/hooks/pre-commit')
export const libPreCommitPath = 'src/pre-commit'
export const storedPreCommitPath = path.join(gitRootPath, '.git/hooks/pre-commit--old')
