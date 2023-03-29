import useLang from "./useLang";
import useSWR from "swr";

const fetcher = (data) => fetch(data).then((res) => res.json());

export default function useTranslate(...components) {
  const { langShort } = useLang();

  const { data, error, isLoading } = useSWR(`/i18n/${langShort}.json`, fetcher);

  const t = (component) => {
    if (error) {
      console.log(error);
    }
    return (!isLoading && data[component]) || {};
  };

  return t;
}
