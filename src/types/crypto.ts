export type coin = {
    name: string;
    uuid: string;
    rank: number;
    iconUrl: string;
    price: number;
    marketCap: string;
    change: string;
};

export type coins = {
    coins: coin[];
    stats: stats;
};
export type stats = {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
};
