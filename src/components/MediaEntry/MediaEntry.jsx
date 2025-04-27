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
			<h2
				className="media-title"
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={e =>
					updateMediaList({
						action: MediaListAction.UPDATE_MEDIA,
						title: title,
						newTitle: e.target.innerText
					})
				}
			>{title}</h2>
			<p
				className="media-rating"
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={e => {
					const ratingText = e.target.innerText;

					if (
						isNaN(ratingText) ||
						ratingText < 0 ||
						ratingText > 10
					) {
						e.target.innerText = rating;
						return;
					}

					const ratingNum = parseFloat(ratingText);

					updateMediaList({
						action: MediaListAction.UPDATE_MEDIA,
						title: title,
						rating: ratingNum,
					})
				}}
			>{rating}</p>
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