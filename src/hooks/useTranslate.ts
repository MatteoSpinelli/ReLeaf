import useLang from "./useLang";
import useSWR from "swr";

const fetcher = (data: any) => fetch(data).then((res) => res.json());

interface Translations {
  [key: string]: string;
}

export default function useTranslate(...components: string[]): Translations {
  const { langShort } = useLang();

  const { data } = useSWR(`/i18n/${langShort}.json`, fetcher);

  let res = {};
  if (data) {
    for (let component of components) {
      res = { ...res, ...data[component] };
    }
  }

  return res as Translations;
}
