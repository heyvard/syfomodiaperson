import mockEreg from "./ereg/mockEreg";
import { mockFastlegerest } from "./fastlegerest/mockFastlegerest";
import { mockIsnarmesteleder } from "./isnarmesteleder/mockIsnarmesteleder";
import { mockIsoppfolgingstilfelle } from "./isoppfolgingstilfelle/mockIsoppfolgingstilfelle";
import { mockIspersonoppgave } from "./ispersonoppgave/mockIspersonoppgave";
import { mockModiacontextholder } from "./modiacontextholder/mockModiacontextholder";
import { mockSyfomotebehov } from "./syfomotebehov/mockSyfomotebehov";
import { mockSyfooppfolgingsplanservice } from "./syfooppfolgingsplanservice/mockSyfooppfolgingsplanservice";
import { mockSykepengesoknadBackend } from "./sykepengesoknad/mockSykepengesoknadBackend";
import { mockSyfotilgangskontroll } from "./syfotilgangskontroll/mockSyfotilgangskontroll";
import { mockSyfobehandlendeenhet } from "./syfobehandlendeenhet/mockSyfobehandlendeenhet";
import { mockSyfoperson } from "./syfoperson/mockSyfoperson";
import { mockSyfosmregister } from "./syfosmregister/mockSyfosmregister";
import { mockIspengestopp } from "./ispengestopp/mockIspengestopp";
import { mockIsdialogmote } from "./isdialogmote/mockIsdialogmote";
import { mockIsdialogmotekandidat } from "./isdialogmotekandidat/mockIsdialogmotekandidat";
import { mockSyfoveileder } from "./syfoveileder/mockSyfoveileder";
import { mockUnleashEndpoint } from "./unleashMocks";
import { mockIsdialogmelding } from "./isdialogmelding/mockIsdialogmelding";
import { mockIsaktivitetskrav } from "./isaktivitetskrav/mockIsaktivitetskrav";
import { mockIsbehandlerdialog } from "./isbehandlerdialog/mockIsbehandlerdialog";
import { mockEsyfovarsel } from "./esyfovarsel/mockEsyfovarsel";

import express from "express";

const mockEndepunkter = (server: any) => {
  server.use(express.json());
  server.use(express.urlencoded());

  [
    mockEreg,
    mockEsyfovarsel,
    mockFastlegerest,
    mockIsnarmesteleder,
    mockIsoppfolgingstilfelle,
    mockIspersonoppgave,
    mockModiacontextholder,
    mockSyfomotebehov,
    mockSyfooppfolgingsplanservice,
    mockSykepengesoknadBackend,
    mockSyfotilgangskontroll,
    mockSyfobehandlendeenhet,
    mockSyfoperson,
    mockSyfosmregister,
    mockIsaktivitetskrav,
    mockIsbehandlerdialog,
    mockIspengestopp,
    mockIsdialogmote,
    mockIsdialogmotekandidat,
    mockIsdialogmelding,
    mockSyfoveileder,
    mockUnleashEndpoint,
  ].forEach((func) => {
    func(server);
  });
};

export default mockEndepunkter;
