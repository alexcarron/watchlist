import "./MediaEntry.css";

function MediaEntry(props) {
	const { title, dateAdded } = props;

	return <article class="media-entry">
		<h2 class="media-title">{title}</h2>
		<p class="media-date-added">{dateAdded}</p>
	</article>;
}

export default MediaEntry;