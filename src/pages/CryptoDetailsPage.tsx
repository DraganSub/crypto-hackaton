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
    {/* statistics region */}
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
    </div>
    {/* end statistics region */}

    <div className="crypto-details__info">
      <div className="crypto-stats__info-container">
        <h1 className="crypto-stats__title--main">What is Bitcoin?</h1>
        <p className="crypto-stats__info-text">Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>
        <h3 className="crypto-stats__info-text">Why does bitcoin have value?</h3>
        <p className="crypto-stats__info-text">
          Bitcoin’s useful qualities (decentralized, borderless, secure) aren’t the only reason the coin is worth so much. Due to its scarcity (and it’s hard to produce), Bitcoin is often nicknamed ‘Digital Gold’, in reference to ‘classic’ physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.
        </p>
        <h3 className="crypto-stats__info-text">
          No inflation in bitcoin
        </h3>
        <p className="crypto-stats__info-text">
          Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).

          As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it's only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.
        </p>
        <h3 className="crypto-stats__info-text">
          Who built Bitcoin
        </h3>
        <p className="crypto-stats__info-text">
          In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto’s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin’s most important principles, and that’s why this anonymity is perfectly in line.
        </p>
        <h3 className="crypto-stats__info-text">
          The technology of Bitcoin
        </h3>
        <p className="crypto-stats__info-text">
          The Bitcoin blockchain is a database, the so-called ‘ledger’, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.
        </p>
        <h3 className="crypto-stats__info-text">
          The technology of Bitcoin
        </h3>
        <p className="crypto-stats__info-text">
          Continue reading this blog article on how to buy your first bitcoin.
          </p>
      </div>
      <div className="crypto-stats__links-container">
        <h1 className="crypto-stats__title--main">Bitcoin Links</h1>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Website</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >bitcoin.org</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Bitcointalk</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >bitcointalk.org</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Explorer</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >blockchain.com</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Github</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >bitcoin/bitcoin</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Reddit</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >r/bitcoin</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Telegram</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >Bitcoin_Magazine</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Telegram</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >bitcoin</a>
          </div>
        </Col>
        <Col span={24}>
          <div className="stats__card">
            <h3 className="crypto-stats__info-link--title">Whitepaper</h3>
            <a className="crypto-stats__info-link" href="https://bitcoin.org/en/" >Bitcoin Whitepaper</a>
          </div>
        </Col>

      </div>
    </div>
  </section>
}
