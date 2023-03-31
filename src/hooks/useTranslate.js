import useLang from "./useLang";
import useSWR from "swr";

const fetcher = (data) => fetch(data).then((res) => res.json());

export default function useTranslate(...components) {
  const { langShort } = useLang();

  const { data } = useSWR(`/i18n/${langShort}.json`, fetcher);

  let res = {};
  if (data) {
    for (let component of components) {
      res = { ...res, ...data[component] };
    }
  }

  return res;
}
