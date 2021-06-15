import { expect } from "chai";
import {
  dagerMellomDatoer,
  erIdag,
  erIkkeIdag,
  leggTilDagerPaDato,
  restdatoTildato,
  restdatoTilLesbarDato,
  tilDatoMedManedNavnOgKlokkeslettWithComma,
  tilDatoMedUkedagOgManedNavn,
  tilDatoMedUkedagOgManedNavnOgKlokkeslett,
  tilLesbarDatoMedArUtenManedNavn,
  tilLesbarPeriodeMedArUtenManednavn,
  visKlokkeslett,
} from "../../src/utils/datoUtils";

describe("datoUtils", () => {
  describe("visKlokkeslett", () => {
    it("Skal vise klokkeslett på riktig format", () => {
      const d = visKlokkeslett(new Date(2017, 4, 3, 9, 0));
      expect(d).to.equal("09.00");
    });
  });

  describe("restdatoTildato", () => {
    it("Skal konvertere dato fra rest til rett format", () => {
      const restDato = "2017-02-01";
      const dato = restdatoTildato(restDato);
      expect(dato).to.equal("01.02.2017");
    });
  });

  describe("restdatoTilLesbarDato", () => {
    it("Skal konvertere dato fra rest til rett format", () => {
      const restDato = "2017-02-01";
      const dato = restdatoTilLesbarDato(restDato);
      expect(dato).to.equal("1. februar 2017");
    });
  });
  describe("tilDatoMedUkedagOgManedNavn", () => {
    it("Skal gi en string med dato, ukedag, månednavn, og år", () => {
      const restDato = "2019-03-11";
      const dato = tilDatoMedUkedagOgManedNavn(restDato);
      expect(dato).to.equal("Mandag 11. mars 2019");
    });
  });
  describe("tilDatoMedUkedagOgManedNavnOgKlokkeslett", () => {
    it("Skal gi en string med dato, ukedag, månednavn, år og klokkeslett", () => {
      const dato = tilDatoMedUkedagOgManedNavnOgKlokkeslett(
        "2021-06-04T09:34:55.422796"
      );
      expect(dato).to.equal("Fredag 4. juni 2021 kl. 09.34");
    });
  });
  describe("tilDatoMedManedNavnOgKlokkeslettSeparatedByComma", () => {
    it("Skal gi en string med dato, månednavn, år og klokkeslett med komma foran klokkeslett", () => {
      const dato = tilDatoMedManedNavnOgKlokkeslettWithComma(
        "2021-06-04T09:34:55.422796"
      );
      expect(dato).to.equal("4. juni 2021, kl. 09.34");
    });
  });
  describe("tilLesbarDatoMedArUtenManedNavn", () => {
    it("Skal gi en string med dato, måned og år, skilt av punktum, uten dag- eller månednavn", () => {
      const restDato = "2019-03-11";
      const dato = tilLesbarDatoMedArUtenManedNavn(restDato);
      expect(dato).to.equal("11.03.2019");
    });
  });
  describe("tilLesbarPeriodeMedArUtenManednavn", () => {
    it("Skal gi en string med periode der begge datoer har dato, måned og år, skilt av punktum, uten dag- eller månednavn", () => {
      const restDatoFom = "2019-03-11";
      const restDatoTom = "2019-10-02";
      const periode = tilLesbarPeriodeMedArUtenManednavn(
        restDatoFom,
        restDatoTom
      );
      expect(periode).to.equal("11.03.2019 - 02.10.2019");
    });
  });
  describe("dagerMellomDatoer", () => {
    it("Skal gi antall dager mellom to datoer", () => {
      const restDatoFom = new Date("2019-03-11");
      const restDatoTom = new Date("2019-03-15");
      const antallDager = dagerMellomDatoer(restDatoFom, restDatoTom);
      expect(antallDager).to.equal(4);
    });
  });
  describe("erIdag", () => {
    it("Skal returnere true om en dato er i dag", () => {
      const dato = new Date();
      expect(erIdag(dato)).to.equal(true);
    });
    it("Skal returnere false om en dato ikke er i dag", () => {
      const dato = new Date("2019-01-01");
      expect(erIdag(dato)).to.equal(false);
    });
  });

  describe("erIkkeIdag", () => {
    it("Skal returnere true om en dato ikke er i dag", () => {
      const dato = new Date("2019-01-01");
      expect(erIkkeIdag(dato)).to.equal(true);
    });
    it("Skal returnere false om en dato er i dag", () => {
      const dato = new Date();
      expect(erIkkeIdag(dato)).to.equal(false);
    });
  });

  describe("leggTilDagerPaDato", () => {
    it("Skal øke dato med 1 dag", () => {
      const expected = new Date("2020-10-10");
      const actual = leggTilDagerPaDato("2020-10-09", 1);
      expect(actual.toDateString()).to.equal(expected.toDateString());
    });

    it("Skal øke dato med 23 dager", () => {
      const expected = new Date("2020-11-01");
      const actual = leggTilDagerPaDato("2020-10-09", 23);
      expect(actual.toDateString()).to.equal(expected.toDateString());
    });

    it("Skal øke dato med -1 dag", () => {
      const expected = new Date("2020-10-08");
      const actual = leggTilDagerPaDato("2020-10-09", -1);
      expect(actual.toDateString()).to.equal(expected.toDateString());
    });
  });
});
