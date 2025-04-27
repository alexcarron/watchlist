import AddMediaForm from "../AddMediaForm/AddMediaForm";
import Watchlist from "../Watchlist/Watchlist";
import "./MainPage.css";

function MainPage() {
  return (
		<div className="body">
			<header>
				<h1>Watchlist</h1>
			</header>
			<main>
				<AddMediaForm />
				<Watchlist />
			</main>
		</div>
	);
}

export default MainPage;
