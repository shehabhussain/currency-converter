import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const NewsFeed = () => {
	const [articles, setArticles] = useState(null);
	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://crypto-news-live.p.rapidapi.com/news/coindesk",
			headers: {
				"x-rapidapi-host":
					"crypto-news-live.p.rapidapi.com",
				"x-rapidapi-key": "136ceb5e1bmsh48d7eefc831247fp1bca0fjsnfaf84ea891e1"
					
			},
		};

		axios.request(options)
			.then(function (response) {
				console.log(response.data);
				setArticles(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	const firstArticle = articles?.slice(0, 7);
	return (
		<div className="news-feed">
			<h2>News Feed</h2>
			{firstArticle?.map((article, _index) => (
				<div key={_index}>
					<a href={article.url}>
						<p className="article">
							{article.title}
						</p>
					</a>
				</div>
			))}
		</div>
	);
};

export default NewsFeed;
