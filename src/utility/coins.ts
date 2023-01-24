import { numberFormatter } from "./formatter";
import { coin } from "../types";

export const coins = [{
    value: "Bitcoin",
    label: "Bitcoin"
},
{
    value: "Ethereum",
    label: "Ethereum"
},
{
    value: "Tether USD",
    label: "Tether USD",
},
{
    value: "USDC",
    label: "USDC",
},
{
    value: "BNB",
    label: "BNB",
},
{
    value: "XRP",
    label: "XRP",
},
{
    value: "Binance USD",
    label: "Binance USD",
},
{
    value: "Cardano",
    label: "Cardano",
},
{
    value: "Dogecoin",
    label: "Dogecoin",
},
{
    value: "OKB",
    label: "OKB",
},
{
    value: "Solana",
    label: "Solana",
},
{
    value: "Polygon",
    label: "Polygon",
},
{
    value: "Polkadot",
    label: "Polkadot",
},
{
    value: "Shiba Inu",
    label: "Shiba Inu",
},
{
    value: "Chainlink",
    label: "Chainlink",
},

{
    value: "Wrapped Ether",
    label: "Wrapped Ether",
},
{
    value: "Litecoin",
    label: "Litecoin",
},
{
    value: "TRON",
    label: "TRON",
},
{
    value: "Uniswap",
    label: "Uniswap",
},
{
    value: "Dai",
    label: "Dai",
},
{
    value: "Avalanche",
    label: "Avalanche",
},
{
    value: "Wrapped BTC",
    label: "Wrapped BTC",
},
{
    value: "Cosmos",
    label: "Cosmos",
},
{
    value: "Toncoin",
    label: "Toncoin",
},
{
    value: "Monero",
    label: "Monero",
},
{
    value: "Ethereum Classic",
    label: "Ethereum Classic",
},
{
    value: "Lido DAO Token",
    label: "Lido DAO Token",
},
{
    value: "Huobi Token",
    label: "Huobi Token",
},
{
    value: "Bitcoin Cash",
    label: "Bitcoin Cash",
},
{
    value: "Frax Share",
    label: "Frax Share",
},
{
    value: "Trust Wallet Token",
    label: "Trust Wallet Token",
},
{
    value: "Stellar",
    label: "Stellar",
},
{
    value: "Algorand",
    label: "Algorand",
},
{
    value: "Hedera",
    label: "Hedera",
},
{
    value: "Aptos",
    label: "Aptos",
},
{
    value: "Filecoin",
    label: "Filecoin",
},
{
    value: "The Sandbox",
    label: "The Sandbox",
},
{
    value: "Wrapped liquid staked Ether 2.0",
    label: "Wrapped liquid staked Ether 2.0",
},
{
    value: "Decentraland",
    label: "Decentraland",
},
{
    value: "Internet Computer (DFINITY)",
    label: "Internet Computer (DFINITY)",
},
{
    value: "NEAR Protocol",
    label: "NEAR Protocol",
},
{
    value: "VeChain",
    label: "VeChain",
},
{
    value: "EnergySwap",
    label: "EnergySwap",
},
{
    value: "Frax",
    label: "Frax",
},
{
    value: "Quant",
    label: "Quant",
},
{
    value: "PancakeSwap",
    label: "PancakeSwap",
},
{
    value: "Immutable X",
    label: "Immutable X",
},
{
    value: "Cronos",
    label: "Cronos",
},
{
    value: "Aave",
    label: "Aave",
},
{
    value: "Terra Classic",
    label: "Terra Classic",
},
{
    value: "Flow",
    label: "Flow",
},
{
    value: "EOS",
    label: "EOS",
},
{
    value: "Elrond",
    label: "Elrond",
},
{
    value: "Theta Token",
    label: "Theta Token",
},
{
    value: "Chiliz",
    label: "Chiliz",
},
{
    value: "Tezos",
    label: "Tezos",
},
{
    value: "Pax Dollar",
    label: "Pax Dollar",
},
{
    value: "Paxos Standard",
    label: "Paxos Standard",
},
{
    value: "Bitcoin SV",
    label: "Bitcoin SV",
},
{
    value: "SUSHI",
    label: "SUSHI",
},
{
    value: "Synthetix Network",
    label: "Synthetix Network"
},
{
    value: "Zcash",
    label: "Zcash",
},
{
    value: "Curve DAO Token",
    label: "Curve DAO Token",
},

{
    value: "ApeCoin",
    label: "ApeCoin",
},
{
    value: "FTX Token",
    label: "FTX Token",
},

{
    value: "WOO Network",
    label: "WOO Network",
},
{
    value: "USDD",
    label: "USDD",
},

{
    value: "Maker",
    label: "Maker",
},
{
    value: "BitTorrent-New",
    label: "BitTorrent-New",
},

{
    value: "IOTA",
    label: "IOTA",
},
{
    value: "Fantom",
    label: "Fantom",
},
{
    value: "KuCoin Token",
    label: "KuCoin Token",
},
{
    value: "Ravencoin",
    label: "Ravencoin",
},
{
    value: "Axie Infinity",
    label: "Axie Infinity",
},
{
    value: "GateToken",
    label: "GateToken",
},
{
    value: "eCash",
    label: "eCash",
},
{
    value: "Dash",
    label: "Dash",
},
{
    value: "NEO",
    label: "NEO",
},
{
    value: "Tokenize Xchange",
    label: "Tokenize Xchange",
},
{
    value: "WEMIX TOKEN",
    label: "WEMIX TOKEN",
},
{
    value: "OEC Token",
    label: "OEC Token",
},
{
    value: "Bloktopia",
    label: "Bloktopia",
},
{
    value: "Nexo",
    label: "Nexo",
},
{
    value: "THORChain",
    label: "THORChain",
},
{
    value: "PAX Gold",
    label: "PAX Gold",
},
{
    value: "TrueUSD",
    label: "TrueUSD",
},
{
    value: "Klaytn",
    label: "Klaytn",
},
{
    value: "BinaryX",
    label: "BinaryX",
},
{
    value: "Optimism",
    label: "Optimism",
},
{
    value: "Ankr",
    label: "Ankr",
},
{
    value: "Compound Ether",
    label: "Compound Ether",
},
{
    value: "Compound Dai",
    label: "Compound Dai",
},
{
    value: "Zilliqa",
    label: "Zilliqa",
},
{
    value: "APENFT",
    label: "APENFT",
},
{
    value: "Osmosis",
    label: "Osmosis",
},
{
    value: "Mina Protocol Token",
    label: "Mina Protocol Token",
},
{
    value: "Vulcan Forged",
    label: "Vulcan Forged",
},
{
    value: "Celsius Network",
    label: "Celsius Network",
},
{
    value: "Baby Doge Coin",
    label: "Baby Doge Coin",
},
{
    value: "Arweave",
    label: "Arweave",
}
];

export function coinDetailsMapper(data: coin) {
    return {
        coinName: data.name,
        coinPrice: numberFormatter(Number(data.price)),
        coinSymbol: data.symbol,
        coinRank: data.rank,
        coinMarketCap: numberFormatter(Number(data.marketCap)),
        coin24hVolume: numberFormatter(Number(data['24hVolume'])),
        allTimeHigh: numberFormatter(Number(data.allTimeHigh.price)),
        numberOfTickets: data.numberOfMarkets,
        numberOfExchanges: data.numberOfExchanges,
        isConfirmed: data.supply.confirmed,
        totalSupply: numberFormatter(Number(data.supply.total)),
        circulatingSupply: numberFormatter(Number(data.supply.circulating)),
        description: data.description,
        links: data.links
    }
}
