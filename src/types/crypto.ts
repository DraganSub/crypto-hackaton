
export type coin = {
    name: string;
    uuid: string;
    rank: number;
    iconUrl: string;
    price: number;
    marketCap: string;
    change: string;
    btcPrice: string;
    coinRankingUrl: string;
    color: string;
    description: string;
    fullyDilutedMarketCap: string;
    listedAt: number;
    lowVolume: boolean;
    notices: string | null;
    numberOfExchanges: number;
    numberOfMarkets: number;
    priceAt: number;
    symbol: string;
    tier: number;
    websiteUrl: string;
    sparkline: string[];
    supply: CoinSupply;
    tags: string[];
    links: CoinLinks[];
    allTimeHigh: AllTimeHigh;
    '24hVolume': string;
};

export type AllTimeHigh = {
    price: number;
    timestamp: number;
}

export type CoinLinks = {
    name: string;
    type: string;
    url: string;
}

export type CoinSupply = {
    circulating: string;
    confirmed: boolean;
    max: string;
    supplyAt: number;
    total: string;
}

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
export type change = {
    price: number;
    timestamp: number;
};
export type priceHistory = {
    change: number;
    history: change[];
};

export type StatisticsSectionPropTypes = {
    coinName: string,
    coinRank: number,
    coinPrice: string | number,
    coinMarketCap: string | number,
    coin24hVolume: string | number,
    allTimeHigh: string | number,
    numberOfTickets: number,
    numberOfExchanges: number,
    isConfirmed: boolean,
    totalSupply: string | number,
    circulatingSupply: string | number
    statsClassName: string;
}
