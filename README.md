# memory-typescript-redux

Prepared as part of a JS talk.

Build status: [![CircleCI](https://circleci.com/gh/parse/memory-typescript-redux.svg?style=svg)](https://circleci.com/gh/parse/memory-typescript-redux)

Demonstrates a classic memory game using tooling such as:

* Typescript
* redux
* redux-saga
* react-router v4
* create-react-app that **has not been ejected** (using create-react-app-typescript).

Features:

* Kept the ability to eject as usual from create-react-app using ``yarn run eject``
* "Toasts" powered by redux-saga
* Redux store hydration
* Server Side Rendering

## Installation

```sh
# Install TypeScript execution environment for node
yarn global add ts-node

# Install a TypeScript compiler (requires `typescript` by default).
yarn global add typescript

# Install other dependencies
yarn install
```

## Usage
```sh
# Development (without SSR)
yarn run start

# Development (with SSR)
yarn run build
yarn run start:server

# Updating styles
yarn run sass
```

## Comments
Having a good pipeline for styles was not part of the scope of this repository.

## Screenshot

![Screenshot](https://user-images.githubusercontent.com/60202/31231467-47f3a86a-a9e7-11e7-9c33-c5311fc73dcd.png?raw=true)
