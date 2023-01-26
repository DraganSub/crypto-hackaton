import { useState } from "react";
import { Menu, Switch } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { HomeOutlined, LineChartOutlined, BulbOutlined } from "@ant-design/icons"
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();
  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const sideMenuClass = classNames(
    "side-menu", {
    "open": isMenuOpen,
    "collapsed": !isMenuOpen
  });

  const handleSwitchChange = () => {
    let newTheme = theme;
    if (theme === "light") {
      newTheme = "dark"
    } else {
      newTheme = "light"
    }
    setTheme(newTheme)
  }
  const defaultCheckedSwitch = theme === "light" ? true : false;

  return (
    <div className="sidebar">
      <Link to="/home" className="link--no-style">
        <div className="avatar__logo">
          <Avatar
            src="https://raw.githubusercontent.com/chrisstef/3-commas-verse/master/src/images/3commas_logo.png"
            alt="logo"
            style={{ borderRadius: "5px" }}
          />
          <h2 className="link--no-style">3CommasVerse</h2>
        </div>
      </Link>
      <Switch onChange={handleSwitchChange} defaultChecked={defaultCheckedSwitch} />
      <div className="sidebar__menu">
        <div className="hamburger-menu">
          <i className="fa-solid fa-bars icon__24" onClick={toggleNavMenu}></i>
        </div>
        <Menu
          className={sideMenuClass}
          style={{ backgroundColor: "#fff", width: "100" }}
          defaultSelectedKeys={[`${pathname}`]}
          selectedKeys={[`${pathname}`]}
          items={[
            {
              key: '/home',
              icon: <HomeOutlined style={{ color: "black" }} />,
              label: <Link to="/home">Home</Link>,
            },
            {
              key: '/cryptocurrencies',
              icon: <LineChartOutlined style={{ color: "black" }} />,
              label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
            },
            {
              key: '/news',
              icon: <BulbOutlined style={{ color: "black" }} />,
              label: <Link to="/news">News</Link>,
            },
          ]}
        >
        </Menu>
      </div>
    </div >
  )
}