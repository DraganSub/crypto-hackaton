import { useGetCoinStatsQuery } from "../services";

export default function CoinStats() {
    const { data, isLoading } = useGetCoinStatsQuery(null);
    if (isLoading) return <p>Loading...</p>;
    if (!data) return null;
    console.log(data);
    return (
        <div className="hero_info_container">
            <div className="hero__total">
                <div className="hero__label">Total Cryptocurrencies</div>
                <div className="hero__data">{data.totalCoins}</div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total Exchanges</div>
                <div className="hero__data">{data.totalExchanges}</div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total Market Cap</div>
                <div className="hero__data">{data.totalMarketCap}</div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total 24h Volume</div>
                <div className="hero__data">{data.total24hVolume}</div>
            </div>
        </div>
    );
}
