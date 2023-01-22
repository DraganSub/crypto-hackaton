import CoinStats from "../components/CoinStats";
import CryptoList from "../components/CryptoList";
import NewsList from "../components/NewsList";

export default function HomePage() {
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
                        <a className="show-more-btn">Show more</a>
                    </div>
                    <CryptoList limit={10} />
                </section>

                <section className="crypto-news">
                    <div className="crypto__title-group">
                        <h2 className="crypto-news__title">
                            Latest Crypto News
                        </h2>
                        <a className="show-more-btn">Show more</a>
                    </div>
                    <div className="crypto__grid__lg">
                        {<NewsList limit="7" />}
                    </div>
                </section>
            </section>
        </div>
    );
}
