import Card from "antd/es/card/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetCoinsQuery } from "../services";
import { coin } from "../types";

export default function CryptoList() {
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
        <>
            <input
                placeholder="coin"
                type={"text"}
                onChange={(e) => setSearch(e.target.value)}
            />
            {coinList?.map((val) => (
                <CryptoCard
                    {...val}
                    key={val.name}
                    /* onClick={() => onClick(val.uuid)} */
                />
            ))}
        </>
    );
}

function CryptoCard(props: coin) {
    const { name, price, iconUrl, rank, change, marketCap } = props;

    const priceFixed = Number.parseFloat("" + price).toFixed(2);
    const marketCapFixed = Number.parseFloat(marketCap).toFixed(2);
    const dailyChangeFixed = Number.parseFloat(change).toFixed(2);
    return (
        <Card title={`${rank}. ${name}`} extra={<CryptoImg url={iconUrl} />}>
            <div className="crypto__data">
                <div className="crypto__card">
                    <div className="card__label">Price:</div>
                    <div className="card__value">{priceFixed}</div>
                </div>
                <div className="crypto__card">
                    <div className="card__label">Market Cap:</div>
                    <div className="card__value">{marketCapFixed}</div>
                </div>
                <div className="crypto__card">
                    <div className="card__label">Daily Change:</div>
                    <div className="card__value">{dailyChangeFixed}</div>
                </div>
            </div>
        </Card>
    );
}

const CryptoImg = ({ url }: { url: string }) => {
    // just example, need to make this generic
    return <img className="crypto__img" src={url} />;
};
