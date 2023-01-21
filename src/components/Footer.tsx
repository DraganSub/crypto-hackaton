import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-credits">
        <h3>3CommasVerse</h3>
        <h3>All rights reserved.</h3>
      </div>
      <div className="footer-nav">
        {/* TODO: add links */}
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/news">News</Link>
        <Link to="/github">Github</Link>
      </div>
    </>
  )
}