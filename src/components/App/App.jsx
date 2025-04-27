import AddMediaForm from "../AddMediaForm/AddMediaForm";
import Watchlist from "../Watchlist/Watchlist";
import "./App.css";

function App() {
  return <div class="App">
		<header>
			<h1>Watchlist</h1>
		</header>
		<main>
			<AddMediaForm />
			<Watchlist />
		</main>
	</div>;
}

export default App;
