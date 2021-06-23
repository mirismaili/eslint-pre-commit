# EsLint-Pre-Commit-Hook

> Pre-commit hook for Es-Lint

[![npm (scoped)](https://img.shields.io/npm/v/eslint-pre-commit-hook.svg)](https://npmjs.com/package/eslint-pre-commit-hook)
[![install size](https://packagephobia.now.sh/badge?p=eslint-pre-commit-hook)](https://packagephobia.now.sh/result?p=eslint-pre-commit-hook)
[![downloads](https://img.shields.io/npm/dt/eslint-pre-commit-hook.svg)](https://npmjs.com/package/eslint-pre-commit-hook) <br>
[![dependencies](https://david-dm.org/mirismaili/eslint-pre-commit-hook.svg)](https://david-dm.org/mirismaili/eslint-pre-commit-hook)
[![devDependencies](https://david-dm.org/mirismaili/eslint-pre-commit-hook/dev-status.svg)](https://david-dm.org/mirismaili/eslint-pre-commit-hook?type=dev) <br>
[![license](https://img.shields.io/github/license/mirismaili/eslint-pre-commit-hook.svg)](https://github.com/mirismaili/eslint-pre-commit-hook/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/mirismaili/eslint-pre-commit-hook.svg?style=social)](https://github.com/mirismaili/eslint-pre-commit-hook/fork)
[![Stars](https://img.shields.io/github/stars/mirismaili/eslint-pre-commit-hook.svg?style=social)](https://github.com/mirismaili/eslint-pre-commit-hook)

```bash
npm i eslint-pre-commit-hook -D
```

or:

```bash
yarn add eslint-pre-commit-hook -D
```

## Usage

**There is no further requirements after installation.** It automatically sets `pre-commit` hook after installation
(check `.git/hooks/pre-commit` to sure). But you can customize its behaviour by setting `eslintPreCommitBaseCommand`
field in your `package.json` file:

```json
    "eslintPreCommitBaseCommand": "eslint --max-warnings=0"
```

The default value of the above option is `"eslint"`. Run `git commit ...` on some `js(x)` or `ts(x)` files and watch the
console to see how this works.
