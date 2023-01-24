import { useState } from "react";
import { Menu } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { HomeOutlined, LineChartOutlined, BulbOutlined } from "@ant-design/icons"
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();
  console.log([`${pathname}`])
  const { Item } = Menu;
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
          defaultSelectedKeys={[`${pathname}`]}
          onSelect={() => { }}
        >
          <NavLink to="/home">
            <div className={pathname.includes("/home") ? "active" : ""}>
              <Item key="/home" style={{ backgroundColor: "transparent" }} >
                <span className="padding_right-15"><HomeOutlined style={{ color: "black" }} /></span>
                <span>Home</span>
              </Item>
            </div>
          </NavLink>
          <NavLink to="/cryptocurrencies">
            <div className={pathname.includes("/cryptocurrencies") ? "active" : ""}>
              <Item key="/cryptocurrencies" style={{ backgroundColor: "transparent" }}>
                <span className="padding_right-15"><LineChartOutlined style={{ color: "black" }} /></span>
                <span>Cryptocurrencies</span>
              </Item>
            </div>
          </NavLink>
          <NavLink to="/news">
            <div className={pathname.includes("/news") ? "active" : ""}>
              <Item key="/news" style={{ backgroundColor: "transparent" }} >
                <span className="padding_right-15"><BulbOutlined style={{ color: "black" }} /></span>
                <span>News</span>
              </Item>
            </div>
          </NavLink>
        </Menu>
      </div>
    </div>
  )
}