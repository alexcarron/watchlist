import { MediaListProvider } from "../../context/MediaListContext";
import AddMediaForm from "../AddMediaForm/AddMediaForm";
import Watchlist from "../Watchlist/Watchlist";
import "./App.css";

function App() {
  return (
		<MediaListProvider>
			<div className="App">
				<header>
					<h1>Watchlist</h1>
				</header>
				<main>
					<AddMediaForm />
					<Watchlist />
				</main>
			</div>
		</MediaListProvider>
	);
}

export default App;
