import { useState } from "react";
import { Menu } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { HomeOutlined, LineChartOutlined, BulbOutlined } from "@ant-design/icons"
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const sideMenuClass = classNames(
    "side-menu", {
    "open": isMenuOpen,
    "collapsed": !isMenuOpen
  })

  return (
    <div className="sidebar">
      <div className="avatar__logo">
        <Avatar
          src="https://raw.githubusercontent.com/chrisstef/3-commas-verse/master/src/images/3commas_logo.png"
          alt="logo"
          style={{ borderRadius: "5px" }}
        />
        <h2>3CommasVerse</h2>
      </div>
      <div className="sidebar__menu">
        <div className="hamburger-menu">
          <i className="fa-solid fa-bars icon__24" onClick={toggleNavMenu}></i>
        </div>

        <Menu
          className={sideMenuClass}
          style={{ backgroundColor: "#fff", width: "100" }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: "2",
              icon: <LineChartOutlined />,
              label: <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
            },
            {
              key: "3",
              icon: <BulbOutlined />,
              label: <Link to="/News">News</Link>
            }
          ]}
        />
      </div>
    </div>
  )
}