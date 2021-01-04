import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { keyValue } from "@navikt/digisyfo-npm";
import AppSpinner from "../../AppSpinner";
import Lightbox from "../../Lightbox";
import Feilmelding from "../../Feilmelding";
import Side from "../../../sider/Side";
import AvbrytMote from "../components/AvbrytMote";
import history from "../../../history";
import * as moterActions from "../../../data/mote/moter_actions";
import * as epostinnholdActions from "../../../data/mote/epostinnhold_actions";

export class AvbrytMoteSide extends Component {
  constructor(props) {
    super(props);
    this.hentInnhold();
  }

  hentInnhold() {
    const { mote } = this.props;
    if (!mote) {
      this.props.hentMoter(this.props.fnr);
    }
  }

  avbrytMote() {
    const { avbrytMote, mote, fnr } = this.props;
    avbrytMote(mote.moteUuid, fnr);
  }

  render() {
    const {
      ledetekster,
      avbryter,
      avbrytFeilet,
      hentingFeiletBool,
      fnr,
      mote,
      henter,
      arbeidstaker,
    } = this.props;
    return (
      <Side fnr={fnr} tittel="Avbryt møteforespørsel">
        {(() => {
          if (hentingFeiletBool) {
            return <Feilmelding />;
          }
          if (henter) {
            return <AppSpinner />;
          } else if (mote) {
            return (
              <Lightbox
                onClose={() => {
                  history.replace(`/sykefravaer/${fnr}/mote`);
                }}
              >
                {(() => {
                  return (
                    <AvbrytMote
                      arbeidstaker={arbeidstaker}
                      ledetekster={ledetekster}
                      avbrytFeilet={avbrytFeilet}
                      avbryter={avbryter}
                      mote={mote}
                      onSubmit={() => {
                        this.avbrytMote();
                      }}
                      avbrytHref={`/sykefravaer/${fnr}/mote`}
                    />
                  );
                })()}
              </Lightbox>
            );
          }
          return <Feilmelding />;
        })()}
      </Side>
    );
  }
}

AvbrytMoteSide.propTypes = {
  avbryter: PropTypes.bool,
  fnr: PropTypes.string,
  henter: PropTypes.bool,
  hentingFeiletBool: PropTypes.bool,
  mote: PropTypes.object,
  arbeidstaker: PropTypes.object,
  ledetekster: keyValue,
  hentMoter: PropTypes.func,
  avbrytMote: PropTypes.func,
  avbrytFeilet: PropTypes.bool,
};

export function mapStateToProps(state, ownProps) {
  const mote = state.moter.data.filter((m) => {
    return m.moteUuid === ownProps.params.moteUuid;
  })[0];
  return {
    fnr: ownProps.params.fnr,
    mote,
    arbeidstaker: state.navbruker.data,
    hentingFeiletBool:
      state.moter.hentingFeilet ||
      state.ledetekster.hentingFeilet ||
      state.navbruker.hentingFeilet,
    avbryter: state.moter.avbryter,
    ledetekster: state.ledetekster.data,
    avbrytFeilet: state.moter.avbrytFeilet,
    henter:
      state.moter.henter || state.ledetekster.henter || state.navbruker.henter,
  };
}

const AvbrytMoteContainer = connect(
  mapStateToProps,
  Object.assign({}, moterActions, epostinnholdActions)
)(AvbrytMoteSide);

export default AvbrytMoteContainer;