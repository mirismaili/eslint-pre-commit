import fs                                      from 'fs/promises'
import {gitPreCommitPath, storedPreCommitPath} from './pre-commits-paths.js'

/**
 * Created on 1400/3/31 (2021/6/21).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

await fs.rename(storedPreCommitPath, gitPreCommitPath).catch(async _ =>
	await fs.unlink(gitPreCommitPath),
)

