import { get } from "@/api/axios";
import { SYFOPERSON_ROOT } from "@/apiConstants";
import { useQuery } from "@tanstack/react-query";
import { useValgtPersonident } from "@/hooks/useValgtBruker";
import { minutesToMillis } from "@/utils/utils";

export const egenansattQueryKeys = {
  egenansatt: (fnr: string) => ["egenansatt", fnr],
};

export const useEgenansattQuery = () => {
  const fnr = useValgtPersonident();
  const path = `${SYFOPERSON_ROOT}/person/egenansatt`;
  const fetchEgenansatt = () => get<boolean>(path, fnr);
  return useQuery({
    queryKey: egenansattQueryKeys.egenansatt(fnr),
    queryFn: fetchEgenansatt,
    enabled: !!fnr,
    staleTime: minutesToMillis(60 * 12),
  });
};
