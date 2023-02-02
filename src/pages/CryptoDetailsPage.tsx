import { useEffect } from "react";
import {
    CloseOutlined,
    BankOutlined,
    BorderlessTableOutlined,
    CheckOutlined,
    DollarOutlined,
    ExclamationCircleOutlined,
    MoneyCollectOutlined,
    ThunderboltOutlined,
    TrophyOutlined,
} from "@ant-design/icons";
import { Col } from "antd";
import { ErrorComponent, LineChart } from "../components";
import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "../services";
import { coinDetailsMapper } from "../utility";
import { StatisticsSectionPropTypes, CoinLinks } from "../types";
import { CryptoDetailsPageLoader } from "../components";
import parse from "html-react-parser";
import "../style/CryptoDetailsPage.css";
import classNames from "classnames";
import { useTheme } from "../hooks";

export default function CryptoDetailsPage(): JSX.Element | null {
    const { cryptoId } = useParams();
    const { data, isLoading, error } = useGetCoinQuery(cryptoId as string);
    const { theme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (error) return <ErrorComponent />;
    if (isLoading) return <CryptoDetailsPageLoader />;
    if (!data) {
        return null;
    }

    const mappedData = coinDetailsMapper(data);

    const { coinName, coinSymbol, description, links } = mappedData;

    const statsClassName = classNames(
        "stats__card",
        {
            "stats__card-dark": theme === "dark"
        }
    )

    const cryptoDetailsTopClassName = classNames(
        "crypto-details__top",
        {
            "crypto-details__top-dark": theme === "dark"
        }
    )

    const cryptoTitleStyleMainClassName = classNames(
        "crypto-stats__title--main",
        {
            "is--dark": theme === "dark"
        }
    )


    return (
        <section className="crypto-details">
            <div className={cryptoDetailsTopClassName}>
                <h1>
                    {coinName} ({coinSymbol}) Price
                </h1>
                <p>
                    {coinName} live price in US Dollar (USD). View value
                    statistics, market cap and supply.
                </p>
            </div>
            <div className="crypto-details__chart">
                <LineChart />
            </div>

            <StatisticsSection {...mappedData} statsClassName={statsClassName} />

            <div className="crypto-details__info">
                <div className="crypto-stats__info-container">
                    <h1 className={cryptoTitleStyleMainClassName}>
                        What is {coinName}?
                    </h1>
                    {parse(description)}
                </div>

                <LinksSection links={links} coinName={coinName} statsClassName={statsClassName} cryptoTitleStyleMainClassName={cryptoTitleStyleMainClassName} />
            </div>
        </section>
    );
}

function StatisticsSection(props: StatisticsSectionPropTypes) {
    const {
        coinName,
        coinRank,
        coinPrice,
        coinMarketCap,
        coin24hVolume,
        allTimeHigh,
        numberOfTickets,
        numberOfExchanges,
        isConfirmed,
        totalSupply,
        circulatingSupply,
        statsClassName
    } = props;

    const { theme } = useTheme();

    const statsTitleClassName = classNames(
        "stats__title",
        {
            "is--dark": theme === "dark"
        }
    )

    const statsDescClassName = classNames(
        "stats__desc",
        {
            "is--dark": theme === "dark"
        }
    )

    return (
        <div className="crypto-details__stats">
            <div className="crypto-stats">
                <h1 className={statsTitleClassName}>{coinName} statistics</h1>
                <p className={statsDescClassName}>
                    An overview showing the statistics of {coinName}, such as
                    the base and quote currency, the rank, and All time high.
                </p>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <BorderlessTableOutlined /> Rank
                        </h3>
                        <span className="stats-value">{coinRank}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <DollarOutlined /> Price to USD
                        </h3>
                        <span className="stats-value">$ {coinPrice}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <DollarOutlined /> Market Cap
                        </h3>
                        <span className="stats-value">${coinMarketCap}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <ThunderboltOutlined /> 24h Volume
                        </h3>
                        <span className="stats-value">$ {coin24hVolume}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <TrophyOutlined /> All time high
                        </h3>
                        <span className="stats-value">$ {allTimeHigh}</span>
                    </div>
                </Col>
            </div>
            <div className="crypto-other-stats">
                <div className="crypto-stats">
                    <h1 className={statsTitleClassName}>Other Stats Info</h1>
                    <p className={statsDescClassName}>
                        An overview showing more statistics of {coinName}, such
                        as the number of exchanges, the total and circulating
                        supply.
                    </p>
                    <Col span={24}>
                        <div className={statsClassName}>
                            <h3 className="stats-title">
                                <MoneyCollectOutlined /> Number Of tickets
                            </h3>
                            <span className="stats-value">
                                {numberOfTickets}
                            </span>
                        </div>
                    </Col>
                </div>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <BankOutlined /> Number Of Exchanges
                        </h3>
                        <span className="stats-value">{numberOfExchanges}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <ExclamationCircleOutlined /> Aprroved Supply
                        </h3>
                        <span className="stats-value">
                            {isConfirmed ? (
                                <CheckOutlined />
                            ) : (
                                <CloseOutlined />
                            )}
                        </span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <ExclamationCircleOutlined /> Total Supply
                        </h3>
                        <span className="stats-value">{totalSupply}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={statsClassName}>
                        <h3 className="stats-title">
                            <ExclamationCircleOutlined /> Circulating Supply
                        </h3>
                        <span className="stats-value">{circulatingSupply}</span>
                    </div>
                </Col>
            </div>
        </div>
    );
}

function LinksSection(props: { links: CoinLinks[]; coinName: string, statsClassName: string, cryptoTitleStyleMainClassName: string }) {
    const { links, coinName, statsClassName, cryptoTitleStyleMainClassName } = props;

    return (
        <div className="crypto-stats__links-container">
            <h1 className={cryptoTitleStyleMainClassName}>{coinName} Links</h1>
            {links.map((link) => (
                <Col span={24} key={link.name}>
                    <div className={statsClassName}>
                        <h3 className="crypto-stats__info-link--title">
                            {link.type}
                        </h3>
                        <a className="crypto-stats__info-link" href={link.url}>
                            {link.name}
                        </a>
                    </div>
                </Col>
            ))}
        </div>
    );
}
