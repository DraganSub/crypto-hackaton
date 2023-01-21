import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-credits">
        <h3>3CommasVerse</h3>
        <h3>All rights reserved.</h3>
      </div>
      <div className="footer-nav">
        {/* TODO: add links */}
        <a href="/">Home</a>
        <a href="/cryptocurrencies">Cryptocurrencies</a>
        <a href="/news">News</a>
        <a href="/github">Github</a>
      </div>
    </>
  )
}