import DateFormatter from "../../services/DateFormatter";
import "./MediaEntry.css";
import removeSVG from "../../assets/remove.svg";
import MediaListContext from "../../context/MediaListContext";
import { useContext } from "react";
import MediaListAction from "../../context/MediaListAction";

function MediaEntry(props) {
	const { updateMediaList } = useContext(MediaListContext);
	const { mediaEntry } = props;
	const {title, rating, dateAdded} = mediaEntry;

	return (<>
		<article className="media-entry">
			<h2 className="media-title">{title}</h2>
			<p className="media-rating">{rating}</p>
			<p className="media-date-added">{DateFormatter.toShortDate(dateAdded)}</p>
			<button
				className="remove-media icon-button"
				onClick={() =>
					updateMediaList({
						action: MediaListAction.REMOVE_MEDIA,
						title: title,
					})
				}
			>
				<img src={removeSVG} alt="Remove" />
			</button>
		</article>
	</>);
}

export default MediaEntry;