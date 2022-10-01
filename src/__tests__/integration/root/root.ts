import { describe, expect, test } from '@jest/globals';
import request from 'supertest';

import app from '../../../server';

describe('Test example', () => {
    test('GET /', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.text).toMatchSnapshot();
            })
            .end((err) => {
                if (err) return done(err);
                return done();
            });
    });
});
