import { CryptoList } from "../components";

export default function Cryptocurrencies() {
    return (
        <section className="crypto-currency bottom_margin_150">
            <CryptoList limit={100} />
        </section>
    );
}
