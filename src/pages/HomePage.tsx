import { Button } from "antd";
import Card from "antd/es/card/Card";
import React from "react";

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="hero_section">
        <h2 className="hero-title">Global Crypto Stats</h2>
        <div className="hero_info_container">
          <div className="hero__total">
            <div className="hero__label">Total Cryptocurrencies</div>
            <div className="hero__data">22,988</div>
          </div>

          <div className="hero__total">
            <div className="hero__label">Total Exchanges</div>
            <div className="hero__data">179</div>
          </div>

          <div className="hero__total">
            <div className="hero__label">Total Market Cap</div>
            <div className="hero__data">1.1T</div>
          </div>

          <div className="hero__total">
            <div className="hero__label">Total 24h Volume</div>
            <div className="hero__data">79B</div>
          </div>
        </div>
      </section>

      <section className="crypto-currency">
        <div className="crypto__title-group">
          <h2 className="crypto-currency__title">Top 10 Cryptocurrencies</h2>
          <a className="show-more-btn">Show more</a>
        </div>
        <div className="crypto__grid">
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>

          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>

          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
          <Card title="1. Bitcoin" extra={<CryptoImg />} >
            <div className="crypto__data">
              <div className="crypto__card">
                <div className="card__label">Price:</div>
                <div className="card__value">$23.2K</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Market Cap:</div>
                <div className="card__value">445.4B</div>
              </div>
              <div className="crypto__card">
                <div className="card__label">Daily Change:</div>
                <div className="card__value">9.65%</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="crypto-news">
        <div className="crypto__title-group">
          <h2 className="crypto-news__title">Latest Crypto News</h2>
          <a className="show-more-btn">Show more</a>
        </div>
        <div className="crypto__grid__lg">
          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>

          <Card className="crypto_news-card">
            <div className="crypto__card__title">
              <h5>What next for French victims of the FTX cryptocurrency exchange collapse?</h5>
              <CryptoNewsImg />
            </div>
            <p>The collapse of the FTX cryptocurrency exchange has had repercussions around the globe, with more than a million clients losing money overni...</p>
            <div className="news-info">
              <p className="news-provider">newsbytesapp.com</p>
              <p className="news-time">9 hours ago</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

const CryptoImg = () => {
  // just example, need to make this generic 
  return (
    <img className="crypto__img" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" />
  )
}

const CryptoNewsImg = () => {
  // just example, need to make this generic 
  return (
    <img className="crypto__news__img" src="https://www.bing.com/th?id=OVFT.iQ3k13LSf9tKUxLo2UcfyS&pid=News" />
  )
}