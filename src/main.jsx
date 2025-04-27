import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import MainPage from "./components/MainPage/MainPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MediaListProvider from "./context/MediaListProvider.jsx";
import HighestRatedPage from "./components/HighestRatedPage/HighestRatedPage.jsx";
import RecentlyAddedPage from "./components/RecentlyAddedPage/RecentlyAddedPage.jsx";

createRoot(document.getElementById("root")).render(
	<MediaListProvider>
		<BrowserRouter basename="/watchlist">
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/highest-rated" element={<HighestRatedPage />}></Route>
				<Route path="/recently-added" element={<RecentlyAddedPage />}></Route>
			</Routes>
		</BrowserRouter>
	</MediaListProvider>
);
