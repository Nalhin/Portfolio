import { TechStackIcon } from '../interfaces/TechStackIcon';

type iconsOptions = {
  [key: string]: TechStackIcon;
};

export const linkIcons = {
  youtube: { src: 'youtube', name: 'Youtube', directory: 'link' },
  github: { src: 'github', name: 'Github', directory: 'link' },
  website: { src: 'web', name: 'Website', directory: 'link' },
  websiteUnavailable: {
    src: 'website-unavailable',
    name: 'Website unavailable',
    directory: 'link',
  },
  logo: { src: 'logo', name: 'Logo', directory: 'link' },
};

export const techStackIcons: iconsOptions = {
  angular: { src: 'angular', name: 'Angular' },
  apollo: { src: 'apollo', name: 'Apollo Client' },
  archlinux: { src: 'archlinux', name: 'Arch Linux' },
  babel: { src: 'babel', name: 'Babel' },
  codecov: { src: 'codecov', name: 'Codecov' },
  css: { src: 'css', name: 'CSS' },
  emotion: { src: 'emotion', name: 'Emotion' },
  express: { src: 'express', name: 'Express' },
  github: { src: 'github', name: 'Github' },
  graphql: { src: 'graphql', name: 'GraphQL' },
  html: { src: 'html', name: 'HTML' },
  intellijIdea: { src: 'intellij-idea', name: 'Intellij Idea' },
  java: { src: 'java', name: 'Java' },
  javascript: { src: 'javascript', name: 'Javascript' },
  jest: { src: 'jest', name: 'Jest' },
  mariadb: { src: 'mariadb', name: 'MariaDB' },
  mongodb: { src: 'mongodb', name: 'MongoDB' },
  mysql: { src: 'mysql', name: 'MySQL' },
  nextjs: { src: 'nextjs', name: 'Next.js' },
  node: { src: 'nodejs', name: 'Node.js' },
  prettier: { src: 'prettier', name: 'Prettier' },
  pycharm: { src: 'pycharm', name: 'Pycharm' },
  python: { src: 'python', name: 'Python' },
  react: { src: 'react', name: 'React' },
  reactivex: { src: 'reactivex', name: 'Rxjs' },
  redux: { src: 'redux', name: 'Redux' },
  reduxSaga: { src: 'redux-saga', name: 'Redux Saga' },
  sass: { src: 'sass', name: 'Sass' },
  spring: { src: 'spring', name: 'Spring' },
  styledComponents: { src: 'styled-components', name: 'Styled Components' },
  'travis-ci': { src: 'travis-ci', name: 'Travis CI' },
  typescript: { src: 'typescript', name: 'Typescript' },
  ubuntu: { src: 'ubuntu', name: 'Ubuntu' },
  visualStudioCode: { src: 'visual-studio-code', name: 'Visual Studio Code' },
  webpack: { src: 'webpack', name: 'Webpack' },
  webstorm: { src: 'webstorm', name: 'Webstorm' },
};
