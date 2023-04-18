import useSWR from "swr";
import useLang from "./useLang";

interface questions {
    data: Array<any> | undefined,
    isLoading: boolean,
    error: Error | undefined
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useQuestions(){
    const { langShort } = useLang()
    const { data, isLoading, error }: questions = useSWR(process.env.REACT_APP_SERVER_URI + "/api/v1/questions?lang=" + langShort, fetcher)

    return {
        data, isLoading, error
    }
}