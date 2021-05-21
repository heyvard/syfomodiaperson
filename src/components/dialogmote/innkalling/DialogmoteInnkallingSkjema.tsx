import React, { ReactElement } from "react";
import Panel from "nav-frontend-paneler";
import DialogmoteInnkallingVelgArbeidsgiver from "./DialogmoteInnkallingVelgArbeidsgiver";
import DialogmoteInnkallingTidOgSted from "./DialogmoteInnkallingTidOgSted";
import DialogmoteInnkallingTekster from "./DialogmoteInnkallingTekster";
import { Form } from "react-final-form";
import {
  validerArbeidsgiver,
  validerSted,
  validerTidspunkt,
} from "../../../utils/valideringUtils";
import { opprettInnkalling } from "../../../data/dialogmote/dialogmote_actions";
import { useDispatch } from "react-redux";
import { DialogmoteInnkallingDTO } from "../../../data/dialogmote/dialogmoteTypes";
import { genererDato } from "../../mote/utils";
import { Link } from "react-router-dom";
import { useNavEnhet } from "../../../hooks/useNavEnhet";
import { AlertStripeFeil } from "nav-frontend-alertstriper";
import { useAppSelector } from "../../../hooks/hooks";
import { useFnrParam } from "../../../hooks/useFnrParam";
import { FlexRow, PaddingSize } from "../../Layout";
import { SkjemaFeiloppsummering } from "../../SkjemaFeiloppsummering";
import { useFeilUtbedret } from "../../../hooks/useFeilUtbedret";
import { TrackedFlatknapp } from "../../buttons/TrackedFlatknapp";
import { TrackedHovedknapp } from "../../buttons/TrackedHovedknapp";

interface DialogmoteInnkallingSkjemaValues {
  arbeidsgiver: string;
  klokkeslett: string;
  dato: string;
  sted: string;
  videoLink?: string;
  fritekstArbeidsgiver?: string;
  fritekstArbeidstaker?: string;
}

interface DialogmoteInnkallingSkjemaProps {
  pageTitle: string;
}

type DialogmoteInnkallingSkjemaFeil = Partial<
  Pick<
    DialogmoteInnkallingSkjemaValues,
    "arbeidsgiver" | "sted" | "klokkeslett" | "dato"
  >
>;

const texts = {
  send: "Send innkallingene",
  cancel: "Avbryt",
  errorMsg:
    "Innkallingene kunne ikke sendes på grunn av en midlertidig teknisk feil. Prøv igjen.",
};

const toInnkalling = (
  values: DialogmoteInnkallingSkjemaValues,
  fnr: string,
  navEnhet: string
): DialogmoteInnkallingDTO => ({
  tildeltEnhet: navEnhet,
  arbeidsgiver: {
    virksomhetsnummer: values.arbeidsgiver,
    fritekstInnkalling: values.fritekstArbeidsgiver,
    innkalling: [], // TODO: Implementeres ifm forhåndsvisning av innkalling
  },
  arbeidstaker: {
    personIdent: fnr,
    fritekstInnkalling: values.fritekstArbeidstaker,
    innkalling: [], // TODO: Implementeres ifm forhåndsvisning av innkalling
  },
  tidSted: {
    sted: values.sted,
    videoLink: values.videoLink,
    tid: genererDato(values.dato, values.klokkeslett),
  },
});

const DialogmoteInnkallingSkjema = ({
  pageTitle,
}: DialogmoteInnkallingSkjemaProps): ReactElement => {
  const initialValues: Partial<DialogmoteInnkallingSkjemaValues> = {};
  const dispatch = useDispatch();
  const fnr = useFnrParam();
  const navEnhet = useNavEnhet();
  const { senderInnkalling, sendInnkallingFeilet } = useAppSelector(
    (state) => state.dialogmote
  );
  const {
    feilUtbedret,
    resetFeilUtbedret,
    updateFeilUtbedret,
  } = useFeilUtbedret();

  const validate = (
    values: Partial<DialogmoteInnkallingSkjemaValues>
  ): DialogmoteInnkallingSkjemaFeil => {
    const feilmeldinger: DialogmoteInnkallingSkjemaFeil = {
      arbeidsgiver: validerArbeidsgiver(values.arbeidsgiver),
      ...validerTidspunkt({
        dato: values.dato,
        klokkeslett: values.klokkeslett,
      }),
      sted: validerSted(values.sted),
    };
    updateFeilUtbedret(feilmeldinger);

    return feilmeldinger;
  };

  const submit = (values: DialogmoteInnkallingSkjemaValues) => {
    const dialogmoteInnkalling = toInnkalling(values, fnr, navEnhet);
    dispatch(opprettInnkalling(fnr, dialogmoteInnkalling));
  };

  return (
    <Panel>
      <Form initialValues={initialValues} onSubmit={submit} validate={validate}>
        {({ handleSubmit, submitFailed, errors }) => (
          <form onSubmit={handleSubmit}>
            <DialogmoteInnkallingVelgArbeidsgiver />
            <DialogmoteInnkallingTidOgSted />
            <DialogmoteInnkallingTekster />
            {sendInnkallingFeilet && (
              <FlexRow bottomPadding={PaddingSize.MD}>
                <AlertStripeFeil>{texts.errorMsg}</AlertStripeFeil>
              </FlexRow>
            )}
            {submitFailed && !feilUtbedret && (
              <SkjemaFeiloppsummering errors={errors} />
            )}
            <FlexRow>
              <TrackedHovedknapp
                context={pageTitle}
                onClick={resetFeilUtbedret}
                spinner={senderInnkalling}
                autoDisableVedSpinner
                htmlType="submit"
              >
                {texts.send}
              </TrackedHovedknapp>
              <Link to={`/sykefravaer/${fnr}/moteoversikt`}>
                <TrackedFlatknapp context={pageTitle} htmlType="button">
                  {texts.cancel}
                </TrackedFlatknapp>
              </Link>
            </FlexRow>
          </form>
        )}
      </Form>
    </Panel>
  );
};

export default DialogmoteInnkallingSkjema;
