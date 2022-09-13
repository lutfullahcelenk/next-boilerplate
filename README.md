# Getting Started

First, install the dependencies by running `yarn install`. <br />
To initialize husky hooks run `yarn prepare`.<br />
To run the development server `yarn dev`.

## Git Merge Conflict Bypass Husky

To merge a branch to another while running git merge, add --no-verify flag: `git merge --no-verify`

## Git Commit Message Structure

Commit messages should start with (feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert) following by `:`. <br />
Example: `git commit -m "feat: button component created`. <br />

## Cypress

To open cypress console run `yarn cypress:open`
To run the tests on terminal run `yarn test`

## .env

Please create and .env file and add this entry `BASE_API_URL='http://localhost:3000/api'`
