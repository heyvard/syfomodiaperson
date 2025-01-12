import React, { ReactElement } from "react";
import {
  SykmeldingOldFormat,
  SykmeldingStatus,
} from "@/data/sykmelding/types/SykmeldingOldFormat";
import AvvistSykmeldingStatuspanel from "./AvvistSykmeldingStatuspanel";
import { AvvistSykmeldingPanel } from "./AvvistSykmeldingPanel";
import BekreftAvvistSykmelding from "./BekreftAvvistSykmelding";
import DineSykmeldingOpplysninger from "../sykmeldingOpplysninger/DineSykmeldingOpplysninger";

interface AvvistSykmeldingProps {
  sykmelding: SykmeldingOldFormat;
}

const AvvistSykmelding = ({
  sykmelding,
}: AvvistSykmeldingProps): ReactElement => {
  return (
    <>
      {sykmelding.status === SykmeldingStatus.BEKREFTET && (
        <AvvistSykmeldingStatuspanel sykmelding={sykmelding} />
      )}
      <AvvistSykmeldingPanel sykmelding={sykmelding} />
      <div className="panel blokk">
        <DineSykmeldingOpplysninger sykmelding={sykmelding} />
      </div>
      <BekreftAvvistSykmelding sykmelding={sykmelding} />
    </>
  );
};

export default AvvistSykmelding;
