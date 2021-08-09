import React, { ReactElement } from "react";
import {
  SykmeldingOldFormat,
  SykmeldingStatus,
} from "../../../../data/sykmelding/types/SykmeldingOldFormat";
import DinSykmelding from "./DinSykmelding";
import DinSendteSykmelding from "./DinSendteSykmelding";
import DinBekreftedeSykmelding from "./DinBekreftedeSykmelding";
import DinAvbrutteSykmelding from "./DinAvbrutteSykmelding";
import DinUtgaatteSykmelding from "./DinUtgaatteSykmelding";
import LenkeTilDineSykmeldinger from "./LenkeTilDineSykmeldinger";
import Feilmelding from "../../../Feilmelding";
import AvvistSykmelding from "./avvisteSykmeldinger/AvvistSykmelding";
import KoronaSykmeldingBekreftet from "./koronasykmeldinger/KoronaSykmelding-Bekreftet";
import KoronaSykmeldingNy from "./koronasykmeldinger/KoronaSykmelding-Ny";
import KoronaSykmeldingAvbrutt from "./koronasykmeldinger/KoronaSykmelding-Avbrutt";
import { BehandlingsutfallStatusDTO } from "../../../../data/sykmelding/types/SykmeldingNewFormatDTO";

interface SykmeldingSideProps {
  dinSykmelding?: SykmeldingOldFormat;
  arbeidsgiversSykmelding?: SykmeldingOldFormat;
}

const SykmeldingSide = ({
  dinSykmelding,
  arbeidsgiversSykmelding,
}: SykmeldingSideProps): ReactElement => {
  return (() => {
    if (!dinSykmelding) {
      return <Feilmelding tittel="Fant ikke sykmelding" />;
    }
    if (
      dinSykmelding.behandlingsutfall.status ===
      BehandlingsutfallStatusDTO.INVALID
    ) {
      return (
        <div>
          <AvvistSykmelding sykmelding={dinSykmelding} />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    }
    if (dinSykmelding.egenmeldt) {
      switch (dinSykmelding.status) {
        case SykmeldingStatus.BEKREFTET: {
          return (
            <div>
              <KoronaSykmeldingBekreftet dinSykmelding={dinSykmelding} />
              <LenkeTilDineSykmeldinger />
            </div>
          );
        }
        case SykmeldingStatus.NY: {
          return (
            <>
              <KoronaSykmeldingNy sykmelding={dinSykmelding} />
              <LenkeTilDineSykmeldinger />
            </>
          );
        }
        case SykmeldingStatus.AVBRUTT: {
          return (
            <div>
              <KoronaSykmeldingAvbrutt sykmelding={dinSykmelding} />
              <LenkeTilDineSykmeldinger />
            </div>
          );
        }
        default: {
          return <Feilmelding tittel="Egenmeldingen har ukjent status" />;
        }
      }
    } else if (
      dinSykmelding.status === SykmeldingStatus.SENDT &&
      arbeidsgiversSykmelding
    ) {
      return (
        <div>
          <DinSendteSykmelding
            dinSykmelding={dinSykmelding}
            arbeidsgiversSykmelding={arbeidsgiversSykmelding}
          />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    } else if (
      arbeidsgiversSykmelding &&
      dinSykmelding.status === SykmeldingStatus.BEKREFTET
    ) {
      return (
        <div>
          <DinBekreftedeSykmelding
            dinSykmelding={dinSykmelding}
            arbeidsgiversSykmelding={arbeidsgiversSykmelding}
          />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    } else if (dinSykmelding.status === SykmeldingStatus.UTGAATT) {
      return (
        <div>
          <DinUtgaatteSykmelding sykmelding={dinSykmelding} />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    } else if (dinSykmelding.status === SykmeldingStatus.NY) {
      return (
        <div>
          <DinSykmelding sykmelding={dinSykmelding} />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    } else if (dinSykmelding.status === SykmeldingStatus.AVBRUTT) {
      return (
        <div>
          <DinAvbrutteSykmelding sykmelding={dinSykmelding} />
          <LenkeTilDineSykmeldinger />
        </div>
      );
    }
    return <Feilmelding tittel="Sykmeldingen har ukjent status" />;
  })();
};

export default SykmeldingSide;
