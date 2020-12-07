import React, { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Knapp from "nav-frontend-knapper";
import { hentDokumentinfo } from "../../actions/dokumentinfo_actions";
import Feilmelding from "../Feilmelding";
import AppSpinner from "../AppSpinner";

interface PlanVisningProps {
  dokumentinfo: any;
  fnr: string;
  oppfolgingsplan: any;
}

const PlanVisning = (planVisningProps: PlanVisningProps) => {
  const { dokumentinfo, fnr, oppfolgingsplan } = planVisningProps;
  const bildeUrler = [];
  for (let i = 1; i <= dokumentinfo.antallSider; i += 1) {
    bildeUrler.push(
      `${process.env.REACT_APP_OPPFOLGINGSPLANREST_ROOT}/internad/dokument/${oppfolgingsplan.id}/side/${i}`
    );
  }

  const TilbakeTilOppfolgingsplaner = () => {
    return (
      <div className="blokk">
        <Link
          to={`/sykefravaer/${fnr}/oppfoelgingsplaner`}
          className="tilbakelenke"
        >
          Til oppfølgingsplaner
        </Link>
      </div>
    );
  };

  return (
    <div className="blokk--l">
      <TilbakeTilOppfolgingsplaner />
      <div className="pdfbilder blokk--s">
        {bildeUrler.map((bildeUrl, index) => {
          return (
            <div key={index} className="pdfbilde">
              <img
                width="944"
                height="1222"
                className="pdfbilde__bilde"
                key={bildeUrl}
                src={bildeUrl}
                alt="Bilde av oppfølgingsplan"
              />
            </div>
          );
        })}
      </div>
      <TilbakeTilOppfolgingsplaner />
      <div className="knapperad">
        <Knapp
          type="standard"
          onClick={() => {
            const newWindow = window.open(
              `${process.env.REACT_APP_OPPFOLGINGSPLANREST_ROOT}/internad/dokument/${oppfolgingsplan.id}`
            );
            newWindow?.print();
          }}
        >
          Skriv ut
        </Knapp>
      </div>
    </div>
  );
};

interface OppfolgingsplanProps {
  fnr: string;
  oppfolgingsplan: any;
}

const Oppfolgingsplan = (oppfolgingsplanWrapperProps: OppfolgingsplanProps) => {
  const { fnr, oppfolgingsplan } = oppfolgingsplanWrapperProps;

  const dispatch = useDispatch();

  const dokumentinfoState = useSelector((state: any) => state.dokumentinfo);
  const oppfolgingsplanDokumentinfoReducer =
    dokumentinfoState[oppfolgingsplan.id] || {};

  const harForsoktHentetAlt = oppfolgingsplanDokumentinfoReducer.hentingForsokt;
  const henter = !harForsoktHentetAlt;
  const hentingFeilet = oppfolgingsplanDokumentinfoReducer.hentingFeilet;
  const dokumentinfo =
    oppfolgingsplanDokumentinfoReducer &&
    oppfolgingsplanDokumentinfoReducer.data;

  useEffect(() => {
    dispatch(hentDokumentinfo(oppfolgingsplan.id));
  }, []);

  return (() => {
    if (henter) {
      return <AppSpinner />;
    }
    if (hentingFeilet) {
      return <Feilmelding />;
    }
    return (
      <PlanVisning
        oppfolgingsplan={oppfolgingsplan}
        dokumentinfo={dokumentinfo}
        fnr={fnr}
      />
    );
  })();
};

export default Oppfolgingsplan;