import { useContext } from "react";
import MediaEntry from "../MediaEntry/MediaEntry";
import "./Watchlist.css";
import MediaListContext from "../../context/MediaListContext";

function Watchlist({ sortedBy }) {
	const {mediaList} = useContext(MediaListContext);
	const sortedMediaList = [...mediaList];

	console.log({sortedBy})

	if (sortedBy === "rating") {
		sortedMediaList.sort((a, b) => b.rating - a.rating);
	}
	else if (sortedBy === "date added") {
		sortedMediaList.sort((a, b) =>
			new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
		);
		console.log(sortedMediaList)
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