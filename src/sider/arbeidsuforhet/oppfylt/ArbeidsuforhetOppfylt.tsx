import React, { ReactElement } from "react";
import { useGetArbeidsuforhetVurderingerQuery } from "@/data/arbeidsuforhet/arbeidsuforhetQueryHooks";
import { VurderingType } from "@/data/arbeidsuforhet/arbeidsuforhetTypes";
import { OppfyltForm } from "@/sider/arbeidsuforhet/oppfylt/OppfyltForm";
import { arbeidsuforhetPath } from "@/routers/AppRouter";
import { Navigate } from "react-router-dom";

export const ArbeidsuforhetOppfylt = (): ReactElement => {
  const { data } = useGetArbeidsuforhetVurderingerQuery();
  const sisteVurdering = data[0];
  const isForhandsvarsel =
    sisteVurdering?.type === VurderingType.FORHANDSVARSEL;
  const forhandsvarselSendtDato = sisteVurdering?.varsel?.createdAt;

  return isForhandsvarsel && forhandsvarselSendtDato ? (
    <OppfyltForm forhandsvarselSendtDato={forhandsvarselSendtDato} />
  ) : (
    <Navigate to={arbeidsuforhetPath} />
  );
};
