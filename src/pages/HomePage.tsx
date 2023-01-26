import { useEffect } from "react";
import CoinStats from "../components/CoinStats";
import CryptoList from "../components/CryptoList";
import NewsList from "../components/NewsList";
import { Link } from "react-router-dom";
import "../style/HomePage.css";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="homepage">
            <section className="hero_section">
                <h2 className="hero-title">Global Crypto Stats</h2>
                <CoinStats />

                <section className="crypto-currency">
                    <div className="crypto__title-group">
                        <h2 className="crypto-currency__title">
                            Top 10 Cryptocurrencies
                        </h2>
                        <Link
                            to={"/cryptocurrencies"}
                            className="show-more-btn"
                        >
                            Show more
                        </Link>
                    </div>
                    <CryptoList limit={10} />
                </section>

                <section className="crypto-news">
                    <div className="crypto__title-group">
                        <h2 className="crypto-news__title">
                            Latest Crypto News
                        </h2>
                        <Link to={"/news"} className="show-more-btn">
                            Show more
                        </Link>
                    </div>
                    <div className="crypto__grid__lg">
                        {<NewsList limit="6" />}
                    </div>
                </section>
            </section>
        </div>
    );
}
