import { RootState } from "../rootState";
import { useSelector } from "react-redux";
import { DialogmoteDTO, DialogmoteStatus } from "./dialogmoteTypes";

export const useAktivtDialogmote = (): DialogmoteDTO | undefined => {
  const dialogmoter = useSelector(
    (state: RootState) => state.dialogmote.dialogmoter
  );

  return dialogmoter?.find(
    (mote) =>
      mote.status === DialogmoteStatus.NYTT_TID_STED ||
      mote.status === DialogmoteStatus.INNKALT
  );
};
