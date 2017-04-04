import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Side from '../sider/Side';
import MotestatusContainer from '../mote/containers/MotestatusContainer';
import * as moterActions from '../mote/actions/moter_actions';
import AppSpinner from '../components/AppSpinner';
import Lightbox from '../components/Lightbox';
import history from '../history';
import BekreftMote from '../mote/components/BekreftMote';
import Feilmelding from '../components/Feilmelding';
import * as epostinnholdActions from '../mote/actions/epostinnhold_actions';
import { MOETEPLANLEGGER } from '../menypunkter';
import { proptypes as moterPropTypes } from 'moter-npm';

export class BekreftMoteSide extends Component {
    constructor(props) {
        super(props);
        this.hentInnhold();
    }

    onSubmit() {
        const { bekreftMote, alternativ, mote, fnr } = this.props;
        bekreftMote(mote.moteUuid, alternativ.id, fnr);
    }

    hentInnhold() {
        const { alternativ, hentMoter, fnr } = this.props;
        if (!alternativ) {
            hentMoter(fnr);
        }
    }

    render() {
        const { alternativ, henterMoterBool, fnr, mote, ledetekster, bekrefter, bekreftFeilet, hentBekreftMoteEpostinnhold } = this.props;

        return (<Side tittel="Bekreft møte" aktivtMenypunkt={MOETEPLANLEGGER}>
            {
                (() => {
                    if (henterMoterBool) {
                        return <AppSpinner />;
                    } else if (alternativ) {
                        return (<div>
                            {
                                mote.status === 'OPPRETTET' && <Lightbox onClose={() => {
                                    history.replace(`/sykefravaer/${fnr}/mote`);
                                }}>
                                {
                                    (() => {
                                        return (<BekreftMote
                                            onSubmit={() => {
                                                this.onSubmit();
                                            }}
                                            mote={mote}
                                            alternativ={alternativ}
                                            ledetekster={ledetekster}
                                            avbrytHref={`/sykefravaer/${fnr}/mote`}
                                            bekrefter={bekrefter}
                                            hentEpostinnhold={(moteUuid) => {
                                                hentBekreftMoteEpostinnhold(moteUuid, alternativ.id);
                                            }}
                                            bekreftFeilet={bekreftFeilet} />);
                                    })()
                                }
                                </Lightbox>
                            }
                            <MotestatusContainer moteUuid={mote.moteUuid} />
                        </div>);
                    }
                    return <Feilmelding />;
                })()
            }
        </Side>);
    }
}

BekreftMoteSide.propTypes = {
    bekrefter: PropTypes.bool,
    bekreftFeilet: PropTypes.bool,
    alternativ: PropTypes.object,
    henterMoterBool: PropTypes.bool,
    ledetekster: PropTypes.object,
    fnr: PropTypes.string,
    mote: moterPropTypes.mote,
    hentMoter: PropTypes.func,
    hentBekreftMoteEpostinnhold: PropTypes.func,
    bekreftMote: PropTypes.func,
};

export const getMoteFraAlternativId = (moter, alternativId) => {
    if (!moter) {
        return null;
    }
    return moter.filter((mote) => {
        if (!mote.alternativer) {
            return false;
        }
        const alternativer = mote.alternativer.filter((alternativ) => {
            return `${alternativ.id}` === alternativId;
        });
        return alternativer.length > 0;
    })[0];
};

export const mapStateToProps = (state, ownProps) => {
    const alternativId = ownProps.params.alternativId;
    const mote = getMoteFraAlternativId(state.moter.data, alternativId);
    const alternativ = mote ? mote.alternativer.filter((alt) => {
        const id = `${alt.id}`;
        return id === `${alternativId}`;
    })[0] : null;
    const fnr = state.navbruker.data.fnr;

    return {
        fnr,
        bekrefter: state.moter.bekrefter,
        bekreftFeilet: state.moter.bekreftFeilet,
        henterMoterBool: state.moter.henter || state.ledetekster.henter,
        ledetekster: state.ledetekster.data,
        alternativ,
        mote,
    };
};

const BekreftMoteContainer = connect(mapStateToProps, Object.assign({}, moterActions, epostinnholdActions))(BekreftMoteSide);

export default BekreftMoteContainer;
