import { expect } from 'chai';
import { put, call } from 'redux-saga/effects';
import { get } from '../../src/api';
import { hentEgenansattSaga } from '../../src/sagas/egenansattSagas';
import {
    HENTER_EGENANSATT,
    EGENANSATT_HENTET,
} from '../../src/actions/egenansatt_actions';

describe('egenansattSagas', () => {
    beforeEach(() => {
        process.env = {
            REACT_APP_REST_ROOT: 'http://tjenester.nav.no',
        };
    });

    const generator = hentEgenansattSaga({
        fnr: '1',
    });

    it(`Skal dispatche ${HENTER_EGENANSATT}`, () => {
        const nextPut = put({
            type: HENTER_EGENANSATT,
        });
        expect(generator.next().value).to.deep.equal(nextPut);
    });

    it('Skal dernest kalle resttjenesten', () => {
        const nextCall = call(get, `${process.env.REACT_APP_REST_ROOT}/internad/egenansatt/1`);
        expect(generator.next().value).to.deep.equal(nextCall);
    });

    it(`Skal dernest sette ${EGENANSATT_HENTET}`, () => {
        const nextPut = put({
            type: EGENANSATT_HENTET,
            data: 'mine data',
        });
        expect(generator.next('mine data').value).to.deep.equal(nextPut);
    });
});
