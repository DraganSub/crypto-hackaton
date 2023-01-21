import { Input } from "antd";
import Card from "antd/es/card/Card";
import { Link } from "react-router-dom";

export default function Cryptocurrencies() {
  const dummyId = "Qwsogvtv82FCd"
  return <section className="crypto-currency bottom_margin_150">
    <div className="crypto__search">
      <Input type="text" placeholder="Search Cryptocurrency" className="search__input" />
    </div>
    <div className="crypto__grid">
      <Card title="1. Bitcoin" extra={<CryptoImg />} >
        <Link to={`/crypto/${dummyId}`} >
          <div className="crypto__data">
            <div className="crypto__card">
              <div className="card__label link__no-style">Price:</div>
              <div className="card__value link__no-style">$23.2K</div>
            </div>
            <div className="crypto__card">
              <div className="card__label link__no-style">Market Cap:</div>
              <div className="card__value link__no-style">445.4B</div>
            </div>
            <div className="crypto__card">
              <div className="card__label link__no-style">Daily Change:</div>
              <div className="card__value link__no-style">9.65%</div>
            </div>
          </div>
        </Link>
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
  </section >
}

const CryptoImg = () => {
  // just example, need to make this generic 
  return (
    <img className="crypto__img" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" />
  )
}