import Card from "antd/es/card/Card";
import Input from "rc-input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services";
import { coin } from "../types";

export default function CryptoList({ limit }: { limit: number }) {
    const { data, isLoading, error } = useGetCoinsQuery(limit);
    const [coinList, setCoinList] = useState(data?.coins);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setCoinList(
            data?.coins.filter((val: { name: string }) =>
                val.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
        );
    }, [search, data]);

    if (error) return <p>error</p>;
    if (isLoading) return <p>loading...</p>;

    return (
        <>
            {limit > 10 && (
                <div className="crypto__search">
                    <Input
                        type="text"
                        placeholder="Search Cryptocurrency"
                        className="search__input"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}
            <div className="crypto__grid">
                {coinList?.map((val) => (
                    <Link to={`/crypto/${val.uuid}`}>
                        <CryptoCard {...val} key={val.name} />
                    </Link>
                ))}
            </div>
        </>
    );
}
function CryptoCard(props: coin) {
    const { name, price, iconUrl, rank, change, marketCap, uuid } = props;

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
        </Card >
    );
}

const CryptoImg = ({ url }: { url: string }) => {
    // just example, need to make this generic
    return <img className="crypto__img" src={url} />;
};
