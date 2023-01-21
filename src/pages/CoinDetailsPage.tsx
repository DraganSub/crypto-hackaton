import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "../services";

export default function CoinDetails() {
    const { id } = useParams();

    const { data, isLoading, error } = useGetCoinQuery(id as string);

    if (error) return <p>error</p>;
    if (isLoading) return <p>"Loading....</p>;
    if (data)
        return (
            <p>
                {data.name} {id}
            </p>
        );
    return null;
}
