import DateFormatter from "../../services/DateFormatter";
import "./MediaEntry.css";

function MediaEntry(props) {
	const { mediaEntry } = props;
	const {title, rating, dateAdded} = mediaEntry;

	return <article className="media-entry">
		<h2 className="media-title">{title}</h2>
		<p className="media-rating">{rating}</p>
		<p className="media-date-added">{DateFormatter.toShortDate(dateAdded)}</p>
	</article>;
}

export default MediaEntry;