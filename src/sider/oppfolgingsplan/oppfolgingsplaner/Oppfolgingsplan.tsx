import React from "react";
import { Link } from "react-router-dom";
import Knapp from "nav-frontend-knapper";
import Feilmelding from "../../../components/Feilmelding";
import AppSpinner from "../../../components/AppSpinner";
import { SYFOOPPFOLGINGSPLANSERVICE_V2_ROOT } from "@/apiConstants";
import { OppfolgingsplanDTO } from "@/data/oppfolgingsplan/types/OppfolgingsplanDTO";
import { useDokumentinfoQuery } from "@/data/oppfolgingsplan/oppfolgingsplanQueryHooks";

function TilbakeTilOppfolgingsplaner() {
  return (
    <div className="blokk">
      <Link to={`/sykefravaer/oppfoelgingsplaner`} className="tilbakelenke">
        Til oppfølgingsplaner
      </Link>
    </div>
  );
}

interface Props {
  oppfolgingsplan: OppfolgingsplanDTO;
}

export default function Oppfolgingsplan({ oppfolgingsplan }: Props) {
  const {
    data: dokumentinfo,
    isLoading,
    isError,
  } = useDokumentinfoQuery(oppfolgingsplan.id);
  const bildeUrler: string[] = [];
  if (dokumentinfo) {
    for (let i = 1; i <= dokumentinfo.antallSider; i += 1) {
      bildeUrler.push(
        `${SYFOOPPFOLGINGSPLANSERVICE_V2_ROOT}/dokument/${oppfolgingsplan.id}/side/${i}`
      );
    }
  }

  if (isLoading) {
    return <AppSpinner />;
  }
  if (isError) {
    return <Feilmelding />;
  }
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
              `${SYFOOPPFOLGINGSPLANSERVICE_V2_ROOT}/dokument/${oppfolgingsplan.id}`
            );
            newWindow?.print();
          }}
        >
          Skriv ut
        </Knapp>
      </div>
    </div>
  );
}
