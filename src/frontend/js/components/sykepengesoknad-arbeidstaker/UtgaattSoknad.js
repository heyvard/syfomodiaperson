import React from 'react';
import { getLedetekst } from 'digisyfo-npm';
import Alertstripe from 'nav-frontend-alertstriper';
import SykmeldingUtdrag from '../../connected-components/SykmeldingUtdrag';
import { sykepengesoknad as sykepengesoknadPt } from '../../propTypes/index';
import PropTypes from 'prop-types';

const UtgaattSoknad = ({ sykepengesoknad, fnr }) => {
    return (<div>
        <div className="panel blokk">
            <Alertstripe type="info">
                <p className="sist">{getLedetekst('sykepengesoknad.utgaatt.info.tekst')}</p>
            </Alertstripe>
        </div>
        <SykmeldingUtdrag soknad={sykepengesoknad} fnr={fnr} erApen />
    </div>);
};

UtgaattSoknad.propTypes = {
    sykepengesoknad: sykepengesoknadPt,
    fnr: PropTypes.string,
};

export default UtgaattSoknad;