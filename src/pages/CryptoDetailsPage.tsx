import React from "react";
import { useGetCoinHistoryQuery } from "../services";

export default function CryptoDetailsPage() {
    const { data } = useGetCoinHistoryQuery({
        id: "Qwsogvtv82FCd",
        period: "24h",
    });
    console.log(data);
    return <div>Crypto details page</div>;
}
