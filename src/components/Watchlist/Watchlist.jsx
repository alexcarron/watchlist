import { useContext } from "react";
import MediaEntry from "../MediaEntry/MediaEntry";
import "./Watchlist.css";
import MediaListContext from "../../context/MediaListContext";

function Watchlist() {
	const {mediaList} = useContext(MediaListContext);

	return <section className="watchlist">
		<article className="watchlist-header">
			<p>Title</p>
			<p>Rating</p>
			<p>Date Added</p>
		</article>
		{mediaList.map(mediaEntry =>
			<MediaEntry
				key={mediaEntry.title}
				mediaEntry={mediaEntry}
			/>
		)}
	</section>;
}

export default Watchlist;