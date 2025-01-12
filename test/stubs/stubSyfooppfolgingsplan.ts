import nock from "nock";
import { SYFOOPPFOLGINGSPLANSERVICE_ROOT } from "@/apiConstants";
import { oppfolgingsplanMock } from "../../mock/syfooppfolgingsplanservice/oppfolgingsplanMock";
import { oppfolgingsplanerLPSMock } from "../../mock/syfooppfolgingsplanservice/oppfolgingsplanLPSMock";
import { dokumentinfoMock } from "../../mock/syfooppfolgingsplanservice/dokumentinfoMock";
import { historikkoppfolgingsplanMock } from "../../mock/syfooppfolgingsplanservice/historikkoppfolgingsplanMock";

export const stubOppfolgingsplanApi = (scope: nock.Scope, fnr: string) => {
  return scope
    .get(`${SYFOOPPFOLGINGSPLANSERVICE_ROOT}/oppfolgingsplan/${fnr}`)
    .reply(200, () => oppfolgingsplanMock);
};

export const stubOppfolgingsplanLPSApi = (scope: nock.Scope, created: Date) => {
  return scope
    .get(`${SYFOOPPFOLGINGSPLANSERVICE_ROOT}/oppfolgingsplan/lps`)
    .reply(200, () => oppfolgingsplanerLPSMock(created));
};

export const stubDokumentinfoApi = (
  scope: nock.Scope,
  oppfolgingsplanId: number
) => {
  return scope
    .get(
      `${SYFOOPPFOLGINGSPLANSERVICE_ROOT}/dokument/${oppfolgingsplanId}/dokumentinfo`
    )
    .reply(200, () => dokumentinfoMock);
};

export const stubOppfolgingsplanHistorikkApi = (
  scope: nock.Scope,
  fnr: string
) => {
  scope
    .get(`${SYFOOPPFOLGINGSPLANSERVICE_ROOT}/oppfolgingsplan/${fnr}/historikk`)
    .reply(200, () => historikkoppfolgingsplanMock);
};
