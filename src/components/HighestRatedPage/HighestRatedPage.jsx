import Watchlist from "../Watchlist/Watchlist";

function HighestRatedPage() {
	return (
		<div className="body">
			<header>
				<h1>Highest Rated Media</h1>
			</header>
			<main>
				<Watchlist sortedBy="rating" />
			</main>
		</div>
	);
}

export default HighestRatedPage