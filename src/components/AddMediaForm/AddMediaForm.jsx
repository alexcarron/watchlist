import { useCallback, useContext } from "react";
import { MediaListContext } from "../../context/MediaListContext";
import "./AddMediaForm.css";

function AddMediaForm() {
	const {addMedia} = useContext(MediaListContext);

	const getTitleInputValue = useCallback(
		() => document.getElementById("titleInput").value,
		[]
	);

	const addCurrentInputToMediaList = useCallback(() => {
		try {
			addMedia({title: getTitleInputValue()});
		}
		catch (error) {
			alert(error.message);
		}
	}, [addMedia, getTitleInputValue]);

	return <section className="add-media-form">
		<input
			type="text"
			name="title"
			id="titleInput"
			placeholder="Title of Media"
		/>
		<button type="submit" onClick={addCurrentInputToMediaList}>
			Add
		</button>
	</section>;
}

export default AddMediaForm;