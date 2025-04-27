import "./App.css";

function App() {
  return <div class="App">
		<header>
			<h1>Watchlist</h1>
		</header>
		<main>
			<section class="add-media-form">
				<input
					type="text"
					name="title"
					id="titleInput"
					placeholder="Title of Media"
				/>
				<button type="submit">Add</button>
			</section>
			<section class="watchlist">
				<article class="media-entry">
					<h2 class="media-title">Title</h2>
					<p class="media-date-added">Apr 27 2025</p>
				</article>
				<article class="media-entry">
					<h2 class="media-title">Title</h2>
					<p class="media-date-added">Apr 27 2025</p>
				</article>
			</section>
		</main>
	</div>;
}

export default App;
