import { fraInputdatoTilJSDato } from './datoUtils';

export const tidligsteFom = (perioder) => {
    return perioder.map(p => { return p.fom; }).sort((p1, p2) => {
        if (p1 > p2) {
            return 1;
        } else if (p1 < p2) {
            return -1;
        } return 0;
    })[0];
};

export const senesteTom = (perioder) => {
    return perioder.map(p => { return p.tom; }).sort((p1, p2) => {
        if (p1 < p2) {
            return 1;
        } else if (p1 > p2) {
            return -1;
        } return 0;
    })[0];
};

const tilDatePeriode = (periode) => {
    let fom;
    let tom;
    try {
        fom = fraInputdatoTilJSDato(periode.fom);
    } catch (e) {
        fom = periode.fom;
    }
    try {
        tom = fraInputdatoTilJSDato(periode.tom);
    } catch (e) {
        tom = periode.tom;
    }
    return { fom, tom };
};

export const periodeOverlapperMedPeriode = (periodeA_, periodeB_) => {
    const periodeA = periodeA_;
    const periodeB = periodeB_;
    try {
        const forstePeriode = periodeA.fom.getTime() < periodeB.fom.getTime() ? periodeA : periodeB;
        const andrePeriode = periodeA.fom.getTime() < periodeB.fom.getTime() ? periodeB : periodeA;
        return forstePeriode.tom.getTime() >= andrePeriode.fom.getTime();
    } catch (e) {
        return false;
    }
};

