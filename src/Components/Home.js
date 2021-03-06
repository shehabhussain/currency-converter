import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import Footer from "./Footer";


const Home = () => {
	return (
		<div className="header">
			<h1 className="title">CRYPTO CONVERTER</h1>
			<div className="home">
				
				<CurrencyConverter />
				
			</div>
			<div className="social">
				<div className="link">
				<a className="link" href="https://www.instagram.com/shehab_hussain/">
					<img
						className="icons"
						src="./Social/ig.png"
						alt="social"
					/>
				</a>
				</div>
				<div className="link">
				<a className="link" href="https://www.facebook.com/shehab.hussain.7">
					<img
						className="icons"
						src="./Social/fb.png"
						alt="social"
					/>
				</a>
				</div>
				<div className="link">
				<a className="link" href="https://twitter.com/shehab_hussain7">
					<img
						className="icons"
						src="./Social/twt.png"
						alt="social"
					/>
				</a>
				</div>
				<div className="link">
				<a  href="https://github.com/shehabhussain">
					<img
						className="icons"
						src="./Social/github.png"
						alt="social"
					/>
				</a>
				</div>
				
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
