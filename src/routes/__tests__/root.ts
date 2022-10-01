import { describe, expect, test } from '@jest/globals';

import { sayHello } from '../root';

describe('Root Routes', () => {
    test('GET request returns Hello said', () => {
        expect(sayHello()).toBe('Hello World');
    });
});
