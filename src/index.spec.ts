import * as AzureRest from './index';

describe('AzureRest', () => {
    it(' should return empty object for noop', done => {
        expect(AzureRest.noop()).toEqual(undefined);
        done();
    });
    it(' should prove noop is function', done => {
        expect(typeof AzureRest.noop).toBe('function');
        done();
    });
});
