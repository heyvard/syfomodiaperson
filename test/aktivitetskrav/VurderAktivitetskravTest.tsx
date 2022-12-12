import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ValgtEnhetContext } from "@/context/ValgtEnhetContext";
import { navEnhet } from "../dialogmote/testData";
import React from "react";
import { VurderAktivitetskrav } from "@/components/aktivitetskrav/vurdering/VurderAktivitetskrav";
import { queryClientWithMockData } from "../testQueryClient";
import { createAktivitetskrav } from "./testDataUtils";
import {
  changeTextInput,
  clickButton,
  daysFromToday,
  getButton,
  getTextInput,
} from "../testUtils";
import {
  AktivitetskravStatus,
  CreateAktivitetskravVurderingDTO,
} from "@/data/aktivitetskrav/aktivitetskravTypes";
import { expect } from "chai";

let queryClient: QueryClient;

const aktivitetskrav = createAktivitetskrav(
  daysFromToday(5),
  AktivitetskravStatus.NY
);
const enBegrunnelse = "Her er en begrunnelse";

const renderVurderAktivitetskrav = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <ValgtEnhetContext.Provider
        value={{ valgtEnhet: navEnhet.id, setValgtEnhet: () => void 0 }}
      >
        <VurderAktivitetskrav aktivitetskrav={aktivitetskrav} />
      </ValgtEnhetContext.Provider>
    </QueryClientProvider>
  );

describe("VurderAktivitetskrav", () => {
  beforeEach(() => {
    queryClient = queryClientWithMockData();
  });
  it("renders buttons for vurdering av aktivitetskravet", () => {
    renderVurderAktivitetskrav();

    expect(getButton("(Avventer)")).to.exist;
    expect(getButton("Sett unntak")).to.exist;
    expect(getButton("Aktivitetskravet er oppfylt")).to.exist;
  });
  it("vurder 'Aktivitetskravet er oppfylt'", () => {
    renderVurderAktivitetskrav();

    clickButton("Aktivitetskravet er oppfylt");

    expect(screen.getByRole("heading", { name: "Aktivitetskravet er oppfylt" }))
      .to.exist;

    const begrunnelseInput = getTextInput("Begrunnelse");
    changeTextInput(begrunnelseInput, enBegrunnelse);
    clickButton("Lagre");

    const vurderOppfyltMutation = queryClient.getMutationCache().getAll()[0];
    const expectedVurdering: CreateAktivitetskravVurderingDTO = {
      beskrivelse: enBegrunnelse,
      status: AktivitetskravStatus.OPPFYLT,
    };
    expect(vurderOppfyltMutation.options.variables).to.deep.equal(
      expectedVurdering
    );
  });
});