import fs                                                        from 'fs/promises'
import {gitPreCommitPath, libPreCommitPath, storedPreCommitPath} from './pre-commits-paths.js'

/**
 * Created on 1400/3/31 (2021/6/21).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

await fs.rename(gitPreCommitPath, storedPreCommitPath).catch(() => {})

await fs.copyFile(libPreCommitPath, gitPreCommitPath)
