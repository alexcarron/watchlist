import Watchlist from "../Watchlist/Watchlist";

function RecentlyAddedPage() {
	return (
		<div className="body">
			<header>
				<h1>Highest Rated Media</h1>
			</header>
			<main>
				<Watchlist sortedBy="date added" />
			</main>
		</div>
	);
}

export default RecentlyAddedPage