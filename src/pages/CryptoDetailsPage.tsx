import React from "react";
import { BankOutlined, BorderlessTableOutlined, CheckOutlined, DollarOutlined, ExclamationCircleOutlined, MoneyCollectOutlined, ThunderboltOutlined, TrophyOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { LineChart } from "../components";

export default function CryptoDetailsPage() {

  return <section className="crypto-details">
    <div className="crypto-details__top">
      <h1>Bitcoin (BTC) Price</h1>
      <p>Bitcoin live price in US Dollar (USD). View value statistics, market cap and supply.</p>
    </div>
    <div className="crypto-details__chart">
      <LineChart />
    </div>
    <div className="crypto-details__stats">
      <div className="crypto-stats">
        <h1 className="stats__title">Bitcoin statistics</h1>
        <p className="stats__desc">An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and All time high.</p>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><BorderlessTableOutlined /> Rank</h3>
            <span className="stats-value">1</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><DollarOutlined /> Price to USD</h3>
            <span className="stats-value">$ 22.9K</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><DollarOutlined /> Market Cap</h3>
            <span className="stats-value">$439.9B</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><ThunderboltOutlined /> 24h Volume</h3>
            <span className="stats-value">$ 33.5B</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><TrophyOutlined /> All time high</h3>
            <span className="stats-value">$ 68.8K</span>
          </div>
        </Col>
      </div>
      <div className="crypto-other-stats">
        <div className="crypto-stats">
          <h1 className="stats__title">Other Stats Info</h1>
          <p className="stats__desc">An overview showing more statistics of Bitcoin, such as the number of exchanges, the total and circulating supply.</p>
          <Col span={24}>
            <div className="stats__card">
              <h3 className="stats-title"><MoneyCollectOutlined /> Number Of tickets</h3>
              <span className="stats-value">4527</span>
            </div>
          </Col>
        </div>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><BankOutlined /> Number Of Exchanges</h3>
            <span className="stats-value">144</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><ExclamationCircleOutlined /> Aprroved Supply</h3>
            <span className="stats-value"><CheckOutlined /></span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><ExclamationCircleOutlined /> Total Supply</h3>
            <span className="stats-value">19.2M</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="stats-title"><ExclamationCircleOutlined /> Circulating Supply</h3>
            <span className="stats-value">19.2M</span>
          </div>
        </Col>
      </div>
      <div className="crypto-other-stats">
      </div>
    </div>
  </section>
}
