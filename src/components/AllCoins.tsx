import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCoinsQuery } from "../services";

export default function AllCoins() {
    const { data, isLoading, error } = useGetCoinsQuery("");
    const [coinList, setCoinList] = useState(data?.coins);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setCoinList(
            data?.coins.filter((val) =>
                val.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
        );
    }, [search, data]);
    const onClick = (id: string) => {
        navigate(`/coins/${id}`);
    };

    if (error) return <p>error</p>;
    if (isLoading) return <p>loading...</p>;

    return (
        <div>
            <input
                placeholder="coin"
                type={"text"}
                onChange={(e) => setSearch(e.target.value)}
            />
            {coinList?.map((val) => (
                <p
                    style={{ height: "2rem" }}
                    key={val.name}
                    onClick={() => onClick(val.uuid)}
                >
                    {val.name} {val.uuid}
                </p>
            ))}
        </div>
    );
}
