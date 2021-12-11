import React from "react";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
	const currencies = [
		"BTC",
		"ETH",
		"USD",
		"INR",
		"GBP",
		"ADA",
		"SOL",
		"EUR",
		"CAD",
		"SAR",
		"AED",
	];
	const [primaryCurrency, setPrimaryCurrency] = useState("BTC");
	const [secondaryCurrency, setSecondaryCurrency] = useState("USD");
	const [amount, setAmount] = useState(1);
	const [exchangeRate, setExchangeRate] = useState(0);
	const [result, setResult] = useState(0);

	const convert = () => {
		console.log(process.env.REACT_APP_X_RAPIDAPI_KEY)
		const options = {
			method: "GET",
			url: "https://alpha-vantage.p.rapidapi.com/query",
			params: {
				from_currency: primaryCurrency,
				function: "CURRENCY_EXCHANGE_RATE",
				to_currency: secondaryCurrency,
			},
			headers: {
				"x-rapidapi-host":
					"alpha-vantage.p.rapidapi.com",
				"x-rapidapi-key": "136ceb5e1bmsh48d7eefc831247fp1bca0fjsnfaf84ea891e1"
				
				
					
			},
		};

		axios.request(options)
			.then((response) => {
				console.log(
					response.data[
						"Realtime Currency Exchange Rate"
					]["5. Exchange Rate"]
				);
				setExchangeRate(
					response.data[
						"Realtime Currency Exchange Rate"
					]["5. Exchange Rate"]
				);
				setResult(
					response.data[
						"Realtime Currency Exchange Rate"
					]["5. Exchange Rate"] * amount
				);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<div className="converter">
			<h1>Currency Converter</h1>
			<div className="primary">
				<table className="tbl">
					<tbody>
						<tr>
							<td className="curncy">
								<h3>
									Primary
									Currency:
								</h3>
							</td>
							<td>
								<input
									className="slt"
									type="number"
									value={
										amount
									}
									onChange={(
										e
									) =>
										setAmount(
											e
												.target
												.value
										)
									}
								/>
							</td>
							<select
								value={
									primaryCurrency
								}
								name="currency-option-1"
								className="currency-option"
								onChange={(e) =>
									setPrimaryCurrency(
										e
											.target
											.value
									)
								}
							>
								{currencies.map(
									(
										currency,
										_index
									) => (
										<option
											key={
												_index
											}
										>
											{
												currency
											}
										</option>
									)
								)}
							</select>
						</tr>
						<tr>
							<td className="curncy">
								<h3>
									Secondary
									Currency:
								</h3>
							</td>
							<td>
								<input
									className="slt"
									type="number"
									placeholder="Enter Number"
									value={
										result
									}
								/>
							</td>
							<select
								value={
									secondaryCurrency
								}
								className="currency-option2"
								onChange={(e) =>
									setSecondaryCurrency(
										e
											.target
											.value
									)
								}
							>
								{currencies.map(
									(
										currency,
										_index
									) => (
										<option
											key={
												_index
											}
										>
											{
												currency
											}
										</option>
									)
								)}
							</select>
						</tr>
					</tbody>
				</table>
				<button
					className="convert-btn"
					onClick={convert}
				>
					Convert
				</button>
				<div>
					<h3>
						Exchange Rate : {exchangeRate}{" "}
						{secondaryCurrency}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default CurrencyConverter;
