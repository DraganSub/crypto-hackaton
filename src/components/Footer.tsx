import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-credits">
        <Link to="/home" className="footer-credits__text">
          <h3>3CommasVerse</h3>
          <h3>All rights reserved.</h3>
        </Link>
      </div>
      <div className="footer-nav">
        <Link to="/home">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/news">News</Link>
        <Link to="/home">Github</Link>
      </div>
    </>
  )
}