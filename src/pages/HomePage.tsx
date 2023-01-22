import Card from "antd/es/card/Card";
import { Link } from "react-router-dom";
import CryptoList from "../components/CryptoList";
import NewsList from "../components/NewsList";

export default function HomePage() {
    return (
        <div className="homepage">
            <section className="hero_section">
                <h2 className="hero-title">Global Crypto Stats</h2>
                <div className="hero_info_container">
                    <div className="hero__total">
                        <div className="hero__label">
                            Total Cryptocurrencies
                        </div>
                        <div className="hero__data">22,988</div>
                    </div>

                    <div className="hero__total">
                        <div className="hero__label">Total Exchanges</div>
                        <div className="hero__data">179</div>
                    </div>

                    <div className="hero__total">
                        <div className="hero__label">Total Market Cap</div>
                        <div className="hero__data">1.1T</div>
                    </div>

                    <div className="hero__total">
                        <div className="hero__label">Total 24h Volume</div>
                        <div className="hero__data">79B</div>
                    </div>
                </div>

                <section className="crypto-currency">
                    <div className="crypto__title-group">
                        <h2 className="crypto-currency__title">
                            Top 10 Cryptocurrencies
                        </h2>
                        <a className="show-more-btn">Show more</a>
                    </div>
                    <div className="crypto__grid">
                        <CryptoList />
                    </div>
                </section>

                <section className="crypto-news">
                    <div className="crypto__title-group">
                        <h2 className="crypto-news__title">
                            Latest Crypto News
                        </h2>
                        <a className="show-more-btn">Show more</a>
                    </div>
                    <div className="crypto__grid__lg">{<NewsList />}</div>
                </section>
            </section>
        </div>
    );
}

const CryptoImg = () => {
    // just example, need to make this generic
    return (
        <img
            className="crypto__img"
            src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
        />
    );
};

const CryptoNewsImg = () => {
    // just example, need to make this generic
    return (
        <img
            className="crypto__news__img"
            src="https://www.bing.com/th?id=OVFT.iQ3k13LSf9tKUxLo2UcfyS&pid=News"
        />
    );
};
