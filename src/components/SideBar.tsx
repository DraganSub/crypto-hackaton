import { useState } from "react";
import { Menu } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { HomeOutlined, LineChartOutlined, BulbOutlined } from "@ant-design/icons"
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const sideMenuClass = classNames(
    "side-menu", {
    "open": isMenuOpen,
    "collapsed": !isMenuOpen
  });



  const sidebarClassName = classNames(
    "sidebar", {
    "is-dark": theme === "dark"
  })

  const titleLinkClassName = classNames(
    "link--no-style",
    {
      "is--white": theme === "dark"
    }
  )

  return (
    <div className={sidebarClassName}>
      <Link to="/home" className={titleLinkClassName}>
        <div className="avatar__logo">
          <Avatar
            src="https://raw.githubusercontent.com/chrisstef/3-commas-verse/master/src/images/3commas_logo.png"
            alt="logo"
            style={{ borderRadius: "5px" }}
          />
          <h2 className={titleLinkClassName}>3CommasVerse</h2>
        </div>
      </Link>
      {/* <Switch onChange={handleSwitchChange} defaultChecked={defaultCheckedSwitch} /> */}
      <div className="sidebar__menu">
        <div className="hamburger-menu" style={{ color: theme === "dark" ? "#fff" : "black" }}>
          <i className="fa-solid fa-bars icon__24" onClick={toggleNavMenu}></i>
        </div>
        <Menu
          className={sideMenuClass}
          style={{
            backgroundColor: theme === "dark" ? "#254B62" : "#fff",
            width: "100",
          }}
          defaultSelectedKeys={[`${pathname}`]}
          selectedKeys={[`${pathname}`]}

          items={[
            {
              key: '/home',
              icon: <HomeOutlined style={{ color: "black" }} />,
              label: <Link to="/home">Home</Link>,
              className: theme === "dark" ? "sidemenu-item__is--dark" : ""
            },
            {
              key: '/cryptocurrencies',
              icon: <LineChartOutlined style={{ color: "black" }} />,
              label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
              className: theme === "dark" ? "sidemenu-item__is--dark" : ""
            },
            {
              key: '/news',
              icon: <BulbOutlined style={{ color: "black" }} />,
              label: <Link to="/news">News</Link>,
              className: theme === "dark" ? "sidemenu-item__is--dark" : ""
            },
          ]}
        >
        </Menu>
      </div>
    </div >
  )
}