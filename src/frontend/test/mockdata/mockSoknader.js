const mockSoknader = [
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-09-01",
        "id": "28da7826-bfae-4e85-a7c6-02582f357244",
        "innsendtDato": null,
        "opprettetDato": "2018-09-10",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17537",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17538",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17539",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17540",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 01.09.2018 - 09.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17541",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17542",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17543",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17544",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17545",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17546",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17547",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17548",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17549",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17550",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17551",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17552",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17553",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17554",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17555",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17556",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17557",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17558",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17559",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17560",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "0645158f-7816-42e6-afbd-2262c3182f1f",
        "tom": "2018-09-09"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-09-01",
        "id": "2f5958ff-a609-4194-a088-23040be347f7",
        "innsendtDato": null,
        "opprettetDato": "2018-09-10",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17609",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17610",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17611",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17612",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 01.09.2018 - 09.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17613",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17614",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17615",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17616",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17617",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17618",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17619",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17620",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17621",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17622",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17623",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17624",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17625",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17626",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17627",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17628",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17629",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17630",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17631",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17632",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "579bc5e5-3158-4db0-8a79-5e91436bce02",
        "tom": "2018-09-09"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-09-01",
        "id": "19fb320a-dc70-422a-a89c-33c4fdc407bc",
        "innsendtDato": null,
        "opprettetDato": "2018-09-10",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17633",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17634",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17635",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17636",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 01.09.2018 - 09.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17637",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17638",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17639",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17640",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17641",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17642",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17643",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17644",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17645",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17646",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17647",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17648",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17649",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17650",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17651",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17652",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17653",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17654",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17655",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17656",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "2b793071-4ec2-47ef-b538-976066475bd3",
        "tom": "2018-09-09"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-09-01",
        "id": "88c357c3-60e0-4007-8be6-435e2de75729",
        "innsendtDato": null,
        "opprettetDato": "2018-09-10",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17657",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17658",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17659",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17660",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 01.09.2018 - 09.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17661",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17662",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17663",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17664",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17665",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17666",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17667",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17668",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17669",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17670",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17671",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17672",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17673",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": "2018-09-01",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17674",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17675",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17676",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 01.09.2018 - 09.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17677",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-09",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17678",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17679",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17680",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "650404f5-941c-4f3b-9658-136dec137e24",
        "tom": "2018-09-09"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "a76483db-fa36-4df4-b2ec-28511c36f41c",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17142",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17143",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17144",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17145",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 10.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17146",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17147",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17148",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17149",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17150",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17151",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17152",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17153",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17154",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17155",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17156",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17157",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17158",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17159",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17160",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17161",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17162",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17163",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17164",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17165",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "098437f7-f442-4f95-b517-803ecf8aceaf",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "43670400-ee80-4791-9cbb-2f26ed49baaa",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17166",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17167",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17168",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17169",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 10.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17170",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17171",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17172",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17173",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17174",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17175",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17176",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17177",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17178",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17179",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17180",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17181",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17182",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17183",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17184",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17185",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17186",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17187",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17188",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17189",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "f85a7102-9c35-4bc1-bae5-47e821e1752a",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "172a10b7-d448-41a4-8828-e1541ddcca7e",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17190",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17191",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17192",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17193",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 10.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17194",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17195",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17196",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17197",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17198",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17199",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17200",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17201",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17202",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17203",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17204",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17205",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17206",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17207",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17208",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17209",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17210",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17211",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17212",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17213",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "c839e3bb-597e-442a-875c-f54e47a1268d",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "db2201f2-197e-4a45-b1b1-1e3708051828",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17214",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17215",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17216",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17217",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 10.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17218",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17219",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17220",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17221",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17222",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17223",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17224",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17225",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17226",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17227",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17228",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17229",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17230",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17231",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17232",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17233",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17234",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17235",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17236",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17237",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "1079135a-10bc-4374-885c-201470810d4c",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "ebd2382d-fcab-4808-bcd0-b5f33fec990b",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17238",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17239",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 11.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17240",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-12",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17241",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 11.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17242",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17243",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17244",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17245",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17246",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17247",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17248",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17249",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17250",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17251",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17252",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17253",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 11.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17254",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17255",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17256",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17257",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 11.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17258",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17259",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17260",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17261",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "FREMTIDIG",
        "sykmeldingId": "42136749-3e2c-4e53-8f78-7c7a3e735b9d",
        "tom": "2018-09-11"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-28",
        "id": "990af614-3970-4ec3-b4f1-d93fe3b38880",
        "innsendtDato": null,
        "opprettetDato": "2018-09-06",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "17262",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17263",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "17264",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17265",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 28.08.2018 - 10.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "17266",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17267",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17268",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "17269",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "17270",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "17271",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17272",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "17273",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17274",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "17275",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "17276",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17277",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "17278",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-28",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17279",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "17280",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17281",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 28.08.2018 - 10.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "17282",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17283",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17284",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17285",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            }
        ],
        "status": "NY",
        "sykmeldingId": "d402c93a-315e-4bd9-af3c-56594e4e6900",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "248775e4-c9f2-4816-8cb3-b4a3d1f548d6",
        "innsendtDato": "2018-09-05",
        "opprettetDato": "2018-09-05",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16793",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-05",
                "min": "2018-06-05",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-06\",\"tom\":\"2018-09-07\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16794",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "KKls"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16795",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16796",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16797",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16798",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser trenger vi denne bekreftelsen fra deg:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16799",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging med NAV</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "497a0b64-1c59-40d1-9db4-ae26cf1dc020",
        "innsendtDato": "2018-09-05",
        "opprettetDato": "2018-09-05",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16786",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-05",
                "min": "2018-06-05",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-05\",\"tom\":\"2018-09-07\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16787",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Ængland"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16788",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16789",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16790",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16791",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser trenger vi denne bekreftelsen fra deg:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16792",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging med NAV eller arbeidsgiver</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "177730fa-69f1-432c-981a-abeb22f527e6",
        "innsendtDato": "2018-09-05",
        "opprettetDato": "2018-09-05",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16966",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-05",
                "min": "2018-06-05",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-05\",\"tom\":\"2018-09-14\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16967",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Knut"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16968",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16969",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16970",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16971",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser ber vi deg bekrefte:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16972",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging fra NAV eller arbeidsgiveren min</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "4a7e51a1-bdda-4630-ac72-5b8f89b6751c",
        "innsendtDato": "2018-09-10",
        "opprettetDato": "2018-09-07",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "17345",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-07",
                "min": "2018-06-07",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-12\",\"tom\":\"2018-09-16\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17346",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "dd"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17347",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "17348",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "JA"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17349",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17350",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser ber vi deg bekrefte:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "17351",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging fra NAV eller arbeidsgiveren min</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-25",
        "id": "726e5e0d-4a9b-44da-abdf-e0a87b43cff2",
        "innsendtDato": "2018-09-03",
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "15895",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "15896",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "15897",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-03",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15898",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 25.08.2018 - 02.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "15899",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15900",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15901",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "15902",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "15903",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "15904",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15905",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [
                                    {
                                        "verdi": "CHECKED"
                                    }
                                ],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "15906",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [
                                            {
                                                "verdi": "NEI"
                                            }
                                        ],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15907",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "15908",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15909",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15910",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "15911",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15912",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "15913",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15914",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "15915",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15916",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15917",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "15918",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "SENDT",
        "sykmeldingId": "9f5532be-7167-47cb-84a4-a0538890172f",
        "tom": "2018-09-02"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-25",
        "id": "23050c09-2207-4b60-a944-271f215ae9b4",
        "innsendtDato": "2018-09-03",
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "15943",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "15944",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 02.09.2018?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "15945",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-03",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [
                            {
                                "verdi": "2018-09-01"
                            }
                        ],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15946",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 25.08.2018 - 02.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "15947",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [
                            {
                                "verdi": "20"
                            }
                        ],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15948",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [
                            {
                                "verdi": "20"
                            }
                        ],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15949",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "15950",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "15951",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [
                                    {
                                        "verdi": "CHECKED"
                                    }
                                ],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "15952",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [
                                            {
                                                "verdi": "JA"
                                            }
                                        ],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15953",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [
                                    {
                                        "verdi": "CHECKED"
                                    }
                                ],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "15954",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [
                                            {
                                                "verdi": "JA"
                                            }
                                        ],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15955",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [
                                    {
                                        "verdi": "CHECKED"
                                    }
                                ],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "15956",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [
                                            {
                                                "verdi": "JA"
                                            }
                                        ],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15957",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [
                                    {
                                        "verdi": "CHECKED"
                                    }
                                ],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15958",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "15959",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [
                            {
                                "verdi": "{\"fom\":\"2018-09-01\",\"tom\":\"2018-09-02\"}"
                            }
                        ],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15960",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "15961",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15962",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "15963",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [
                            {
                                "verdi": "2018-09-01"
                            }
                        ],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15964",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [
                            {
                                "verdi": "JA"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15965",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "15966",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "SENDT",
        "sykmeldingId": "ae4a9147-f003-4a9e-8a37-845c5d14aaba",
        "tom": "2018-09-02"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-25",
        "id": "c316258d-e770-4216-8243-32fa75edd177",
        "innsendtDato": null,
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "15919",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "15920",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 20.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "15921",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-21",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15922",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 25.08.2018 - 20.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "15923",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15924",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15925",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "15926",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "15927",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "15928",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15929",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "15930",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15931",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "15932",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15933",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15934",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 25.08.2018 - 20.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "15935",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-20",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15936",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "15937",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15938",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 25.08.2018 - 20.09.2018?",
                "svar": [],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "15939",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-20",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15940",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15941",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "15942",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "FREMTIDIG",
        "sykmeldingId": "2bf16de8-c3ab-4d72-9cc2-3f9ff6f520b1",
        "tom": "2018-09-20"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-25",
        "id": "5e184210-c5dc-4eb0-af87-cf6a99083f5c",
        "innsendtDato": "2018-09-05",
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "15967",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "15968",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som frilanser før sykmeldingsperioden utløp 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "15969",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-03",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15970",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 25.08.2018 - 02.09.2018 var du 100% sykmeldt som frilanser. Jobbet du noe i denne perioden?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "15971",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som frilanser?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15972",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som frilanser?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15973",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "15974",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "15975",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "15976",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15977",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "15978",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15979",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Selvstendig næringsdrivende",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "15980",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "15981",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15982",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "15983",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15984",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "15985",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15986",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 25.08.2018 - 02.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "15987",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-02",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15988",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15989",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "15990",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "SENDT",
        "sykmeldingId": "d844b1db-65ea-435f-a7dd-89bb6985615c",
        "tom": "2018-09-02"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-25",
        "id": "d8406dc2-fbf3-44a7-be15-b9f9c2927672",
        "innsendtDato": "2018-09-10",
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "15991",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "15992",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 10.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "15993",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-11",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15994",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 25.08.2018 - 10.09.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "15995",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [
                            {
                                "verdi": "140"
                            }
                        ],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "15996",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [
                            {
                                "verdi": "99"
                            }
                        ],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "15997",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "15998",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "15999",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "16000",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16001",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "16002",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16003",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "16004",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16005",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16006",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 25.08.2018 - 10.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "16007",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": "2018-08-25",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16008",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "16009",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16010",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 25.08.2018 - 10.09.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "16011",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-09-10",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16012",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16013",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "16014",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "SENDT",
        "sykmeldingId": "c0087d29-281f-4dfc-8a24-0723cb8e7d1f",
        "tom": "2018-09-10"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": "2018-08-02",
        "id": "faadf7c1-3aac-4758-8673-e9cee1316a3c",
        "innsendtDato": "2018-09-03",
        "opprettetDato": "2018-09-03",
        "soknadstype": "SELVSTENDIGE_OG_FRILANSERE",
        "sporsmal": [
            {
                "id": "16015",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg vet at dersom jeg gir uriktige opplysninger, eller holder tilbake opplysninger som har betydning for min rett til sykepenger, kan pengene holdes tilbake eller kreves tilbake, og/eller det kan medføre straffeansvar. Jeg er også klar over at jeg må melde fra til NAV dersom jeg sitter i varetekt, soner straff eller er under forvaring.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "ANSVARSERKLARING",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16016",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Var du tilbake i fullt arbeid som selvstendig næringsdrivende før sykmeldingsperioden utløp 15.08.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "TILBAKE_I_ARBEID",
                "undersporsmal": [
                    {
                        "id": "16017",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-08-16",
                        "min": "2018-08-02",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når var du tilbake i arbeid?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "TILBAKE_NAR",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16018",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "I perioden 02.08.2018 - 15.08.2018 var du 100% sykmeldt som selvstendig næringsdrivende. Jobbet du noe i denne perioden?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "JOBBET_DU_100_PROSENT_0",
                "undersporsmal": [
                    {
                        "id": "16019",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "150",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mange timer jobber du normalt per uke som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "TIMER",
                        "tag": "HVOR_MANGE_TIMER_0",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16020",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "99",
                        "min": "1",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvor mye jobbet du totalt i denne perioden som selvstendig næringsdrivende?",
                        "svar": [],
                        "svartype": "PROSENT",
                        "tag": "HVOR_MYE_HAR_DU_JOBBET_0",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16021",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du andre inntektskilder eller arbeidsforhold?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ANDRE_INNTEKTSKILDER",
                "undersporsmal": [
                    {
                        "id": "16022",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Hvilke andre inntektskilder har du?",
                        "svar": [],
                        "svartype": "CHECKBOX_GRUPPE",
                        "tag": "HVILKE_ANDRE_INNTEKTSKILDER",
                        "undersporsmal": [
                            {
                                "id": "16023",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Arbeidsforhold",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD",
                                "undersporsmal": [
                                    {
                                        "id": "16024",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16025",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Jordbruker / Fisker / Reindriftsutøver",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_JORDBRUKER",
                                "undersporsmal": [
                                    {
                                        "id": "16026",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16027",
                                "kriterieForVisningAvUndersporsmal": "CHECKED",
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Frilanser",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG",
                                "undersporsmal": [
                                    {
                                        "id": "16028",
                                        "kriterieForVisningAvUndersporsmal": null,
                                        "max": null,
                                        "min": null,
                                        "pavirkerAndreSporsmal": false,
                                        "sporsmalstekst": "Er du sykmeldt fra dette?",
                                        "svar": [],
                                        "svartype": "JA_NEI",
                                        "tag": "INNTEKTSKILDE_FRILANSER_SELVSTENDIG_ER_DU_SYKMELDT",
                                        "undersporsmal": [],
                                        "undertekst": null
                                    }
                                ],
                                "undertekst": null
                            },
                            {
                                "id": "16029",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": "Annet",
                                "svar": [],
                                "svartype": "CHECKBOX",
                                "tag": "INNTEKTSKILDE_ANNET",
                                "undersporsmal": [],
                                "undertekst": null
                            }
                        ],
                        "undertekst": "Du trenger ikke oppgi andre ytelser fra NAV"
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16030",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du oppholdt deg utenfor Norge i perioden 02.08.2018 - 15.08.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTLAND",
                "undersporsmal": [
                    {
                        "id": "16031",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-08-15",
                        "min": "2018-08-02",
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når oppholdt du deg utenfor Norge?",
                        "svar": [],
                        "svartype": "PERIODER",
                        "tag": "PERIODER",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16032",
                        "kriterieForVisningAvUndersporsmal": "NEI",
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du søkt om å beholde sykepenger under dette oppholdet utenfor Norge?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "UTLANDSOPPHOLD_SOKT_SYKEPENGER",
                        "undersporsmal": [
                            {
                                "id": "16033",
                                "kriterieForVisningAvUndersporsmal": null,
                                "max": null,
                                "min": null,
                                "pavirkerAndreSporsmal": false,
                                "sporsmalstekst": null,
                                "svar": [],
                                "svartype": "IKKE_RELEVANT",
                                "tag": "IKKE_SOKT_UTENLANDSOPPHOLD_INFORMASJON",
                                "undersporsmal": [],
                                "undertekst": "<p>Som hovedregel kan du bare få sykepenger når du oppholder deg i Norge. Du kan lese mer om <a target=\"_blank\" href=\"https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade/Sykepenger/sykepenger-ved-utenlandsopphold\">sykepenger under utenlandsopphold på denne siden</a>.</p>"
                            }
                        ],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16034",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du vært under utdanning i løpet av perioden 02.08.2018 - 15.08.2018?",
                "svar": [
                    {
                        "verdi": "NEI"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "UTDANNING",
                "undersporsmal": [
                    {
                        "id": "16035",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": "2018-08-15",
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Når startet du på utdanningen?",
                        "svar": [],
                        "svartype": "DATO",
                        "tag": "UTDANNING_START",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16036",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er utdanningen et fulltidsstudium?",
                        "svar": [],
                        "svartype": "JA_NEI",
                        "tag": "FULLTIDSSTUDIUM",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16037",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Vær klar over at:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "VAER_KLAR_OVER_AT",
                "undersporsmal": [],
                "undertekst": "<ul><li>rett til sykepenger forutsetter at du er borte fra arbeid på grunn av egen sykdom. Sosiale eller økonomiske problemer gir ikke rett til sykepenger</li><li>du kan miste retten til sykepenger hvis du uten rimelig grunn nekter å opplyse om egen funksjonsevne eller nekter å ta imot tilbud om behandling og/eller tilrettelegging</li><li>sykepenger utbetales i maksimum 52 uker, også for gradert (delvis) sykmelding</li><li>fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul>"
            },
            {
                "id": "16038",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
                "svar": [
                    {
                        "verdi": "CHECKED"
                    }
                ],
                "svartype": "CHECKBOX",
                "tag": "BEKREFT_OPPLYSNINGER",
                "undersporsmal": [],
                "undertekst": null
            }
        ],
        "status": "SENDT",
        "sykmeldingId": "5784d264-28b3-4452-b345-e02b1d00ab5f",
        "tom": "2018-08-15"
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "e16ff778-8475-47e1-b5dc-d2ce4ad6b9ee",
        "innsendtDato": "2018-09-03",
        "opprettetDato": "2018-09-03",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16039",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-03",
                "min": "2018-06-03",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-12\",\"tom\":\"2018-09-14\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16040",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Norge"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16041",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16042",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16043",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16044",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser trenger vi denne bekreftelsen fra deg:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16045",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "175b19a8-0cbd-4e03-bb24-bddcdd844c73",
        "innsendtDato": "2018-09-03",
        "opprettetDato": "2018-09-03",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16053",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-03",
                "min": "2018-06-03",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-05\",\"tom\":\"2018-09-09\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16054",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Uganda"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16055",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16056",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16057",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16058",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser trenger vi denne bekreftelsen fra deg:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16059",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "da960777-c11a-43ef-a24f-ae4607a0d0b4",
        "innsendtDato": "2018-09-06",
        "opprettetDato": "2018-09-06",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "17338",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-06",
                "min": "2018-06-06",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-10-10\",\"tom\":\"2018-10-12\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17339",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Hellas"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "17340",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "17341",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "JA"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "17342",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "17343",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser ber vi deg bekrefte:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "17344",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging fra NAV eller arbeidsgiveren min</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    },
    {
        "aktorId": "***REMOVED***",
        "fom": null,
        "id": "40fefc24-d7ea-4926-bcb3-07879fe10cdb",
        "innsendtDato": "2018-09-05",
        "opprettetDato": "2018-09-05",
        "soknadstype": "OPPHOLD_UTLAND",
        "sporsmal": [
            {
                "id": "16904",
                "kriterieForVisningAvUndersporsmal": null,
                "max": "2019-03-05",
                "min": "2018-06-05",
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Når skal du være utenfor Norge?",
                "svar": [
                    {
                        "verdi": "{\"fom\":\"2018-09-20\",\"tom\":\"2018-09-22\"}"
                    }
                ],
                "svartype": "PERIODER",
                "tag": "PERIODEUTLAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16905",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Hvor skal du reise?",
                "svar": [
                    {
                        "verdi": "Spania"
                    }
                ],
                "svartype": "FRITEKST",
                "tag": "LAND",
                "undersporsmal": [],
                "undertekst": null
            },
            {
                "id": "16906",
                "kriterieForVisningAvUndersporsmal": "JA",
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": true,
                "sporsmalstekst": "Har du arbeidsgiver?",
                "svar": [
                    {
                        "verdi": "JA"
                    }
                ],
                "svartype": "JA_NEI",
                "tag": "ARBEIDSGIVER",
                "undersporsmal": [
                    {
                        "id": "16907",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Er du 100 % sykmeldt?",
                        "svar": [
                            {
                                "verdi": "JA"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "SYKMELDINGSGRAD",
                        "undersporsmal": [],
                        "undertekst": null
                    },
                    {
                        "id": "16908",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Har du avtalt med arbeidsgiveren din at du skal ha ferie i hele perioden?",
                        "svar": [
                            {
                                "verdi": "NEI"
                            }
                        ],
                        "svartype": "JA_NEI",
                        "tag": "FERIE",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": null
            },
            {
                "id": "16909",
                "kriterieForVisningAvUndersporsmal": null,
                "max": null,
                "min": null,
                "pavirkerAndreSporsmal": false,
                "sporsmalstekst": "Før du reiser ber vi deg bekrefte:",
                "svar": [],
                "svartype": "IKKE_RELEVANT",
                "tag": "BEKREFT_OPPLYSNINGER_UTLAND_INFO",
                "undersporsmal": [
                    {
                        "id": "16910",
                        "kriterieForVisningAvUndersporsmal": null,
                        "max": null,
                        "min": null,
                        "pavirkerAndreSporsmal": false,
                        "sporsmalstekst": "Jeg bekrefter de tre punktene ovenfor. Jeg har avklart reisen med legen og arbeidsgiveren min.",
                        "svar": [
                            {
                                "verdi": "CHECKED"
                            }
                        ],
                        "svartype": "CHECKBOX_PANEL",
                        "tag": "BEKREFT_OPPLYSNINGER_UTLAND",
                        "undersporsmal": [],
                        "undertekst": null
                    }
                ],
                "undertekst": "<ul>\n    <li>Reisen vil ikke gjøre at jeg blir dårligere </li>\n    <li>Reisen vil ikke gjøre at sykefraværet blir lengre</li>\n    <li>Reisen vil ikke hindre planlagt behandling eller oppfølging fra NAV eller arbeidsgiveren min</li>\n</ul>"
            }
        ],
        "status": "SENDT",
        "sykmeldingId": null,
        "tom": null
    }
];

export default mockSoknader;