[![Build Status](https://travis-ci.com/Nalhin/Portfolio.svg?branch=master)](https://travis-ci.com/Nalhin/Portfolio)
[![Codecov](https://codecov.io/gh/Nalhin/Portfolio/branch/master/graph/badge.svg)](https://codecov.io/gh/Nalhin/Portfolio)

# Personal Portfolio

Portfolio website written in Typescript, utilizing React server side rendering (Next.js) for better performance.
Utilizes Github's Graphql API to display my github activity.

## Technology Stack

* Typescript
* React
* Apollo Client
* GraphQL
* I18next
* Emotion
* Express
* Jest
* React Testing Library
* Travis
* Codecov

## Folder structure

```
src
├── components (reusable components)
├── constants (constant values)
├── interfaces (typescript interfaces)
├── lib (external libraries like i18n)
├── pages (routes)
├── server (custom express server)
├── styles (emotion theme and style variables)
└── utils (utility functions)
```

## Requirements

Install node package manager [npm](https://www.npmjs.com/).
You should be able to run the following commands.

```bash
node --version
npm --version
```

## Installation

```bash
git clone https://github.com/Nalhin/Portfolio
cd Portfolio
npm install
npm run build
```

##  Start

```bash
npm run start
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
