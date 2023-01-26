import Card from "antd/es/card/Card";
import Input from "rc-input";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../services";
import { coin } from "../types";
import { numberFormatter } from "../utility";
import classNames from "classnames";
import { CryptoSkeletonLoader } from ".";
import ErrorComponent from "./ErrorComponent";
import { useTheme } from "../hooks";

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

    if (error) return <ErrorComponent />;
    if (isLoading) return <CryptoSkeletonLoader />;

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
                    <Link to={`/crypto/${val.uuid}`} key={val.name}>
                        <CryptoCard {...val} />
                    </Link>
                ))}
            </div>
        </>
    );
}
function CryptoCard(props: coin) {
    const { name, price, iconUrl, rank, change, marketCap } = props;
    const dailyChangePrice = numberFormatter(+change);
    const { theme } = useTheme();
    const dailyChangeClassname = classNames('card__value', {
        'negative': dailyChangePrice < 0,
        'positive': dailyChangePrice > 0
    });

    const cryptoCardClass = classNames("", {
        "card-is--dark": theme === "dark"
    })

    return (
        <Card title={`${rank}. ${name}`} extra={<CryptoImg url={iconUrl} />} className={cryptoCardClass} headStyle={{ color: theme === "dark" ? "#b7e7f3" : "black", borderColor: "#b7e7f3" }
        }>
            <div className="crypto__data">
                <div className="crypto__card">
                    <div className="card__label">Price:</div>
                    <div className="card__value">{numberFormatter(+price)}</div>
                </div>
                <div className="crypto__card">
                    <div className="card__label">Market Cap:</div>
                    <div className="card__value">
                        {numberFormatter(+marketCap)}
                    </div>
                </div>
                <div className="crypto__card">
                    <div className="card__label">Daily Change:</div>
                    <div className={dailyChangeClassname}>
                        {dailyChangePrice}%
                    </div>
                </div>
            </div>
        </Card >
    );
}

const CryptoImg = ({ url }: { url: string }) => {
    // just example, need to make this generic
    return <img className="crypto__img" src={url} alt="crypto" />;
};
