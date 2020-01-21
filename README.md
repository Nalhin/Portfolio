[![Build Status](https://travis-ci.org/Nalhin/Portfolio.svg?branch=master)](https://travis-ci.org/Nalhin/Portfolio)
[![codecov](https://codecov.io/gh/Nalhin/Portfolio/branch/master/graph/badge.svg)](https://codecov.io/gh/Nalhin/Portfolio)

# Personal Portfolio

Portfolio website utilizing React server side rendering (Next.js) written in Typescript.
Integrates Github Graphql v4 API to display my github activity (the latest commits, commit count in last month and much more).
Apollo Client was use for cache management and query handling via hooks.
Fully responsive, mobile first design, supports multiple resolutions and browsers.
Next.js includes a custom config - express server with nextI18NextMiddleware (needed for translations to work)
and contact endpoint, which uses sendmail in order to proxy messages to my own email.
Does not use any component library, every component has been written manually.
Emotion theming has been used for better consistency between components.
The theme interface implementation was based on [System-UI Theme Specification](https://system-ui.com/theme).
Tests with Jest and React Testing Library.

## Showcase

![home](screenshots/home.png)

![home-mobile](screenshots/home-mobile.png)

![about-mobile](screenshots/about-mobile.png)

![projects-mobile](screenshots/projects-mobile.png)

![contact-mobile](screenshots/contact-mobile.png)

## Technology Stack

* Typescript
* React
* Apollo Client
* GraphQL (Github API queries)
* I18next (React I18next, nextI18next)
* Emotion (and Themes)
* Framer Motion (Animations)
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
├── pages (Next.js Routes)
├── server (Custom express server)
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
