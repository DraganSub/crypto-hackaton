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
    stats: {
        total: number;
    };
};
