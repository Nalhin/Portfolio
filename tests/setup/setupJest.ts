import { GlobalWithFetchMock } from 'jest-fetch-mock';
import { MockIntersectionObserver } from '../mocks/InterSectionObserver';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
// @ts-ignore
global.IntersectionObserver = MockIntersectionObserver;
