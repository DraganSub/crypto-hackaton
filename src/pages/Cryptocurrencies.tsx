import { useEffect } from "react";
import { CryptoList } from "../components";

export default function Cryptocurrencies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="crypto-currency bottom_margin_150">
            <CryptoList limit={100} />
        </section>
    );
}
