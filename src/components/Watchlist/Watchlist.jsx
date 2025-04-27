import { useContext } from "react";
import MediaEntry from "../MediaEntry/MediaEntry";
import "./Watchlist.css";
import MediaListContext from "../../context/MediaListContext";

function Watchlist({ sortedBy }) {
	const {mediaList} = useContext(MediaListContext);
	const sortedMediaList = [...mediaList];

	if (sortedBy === "rating") {
		sortedMediaList.sort((a, b) => b.rating - a.rating);
	}

	return <section className="watchlist">
		<article className="watchlist-header">
			<p>Title</p>
			<p>Rating</p>
			<p>Date Added</p>
		</article>
		{sortedMediaList.map(mediaEntry =>
			<MediaEntry
				key={mediaEntry.title}
				mediaEntry={mediaEntry}
			/>
		)}
	</section>;
}

export default Watchlist;