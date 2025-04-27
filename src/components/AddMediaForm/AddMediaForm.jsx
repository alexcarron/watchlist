import { useCallback, useContext } from "react";
import "./AddMediaForm.css";
import MediaListContext from "../../context/MediaListContext";
import MediaListAction from "../../context/MediaListAction";

function AddMediaForm() {
	const {updateMediaList} = useContext(MediaListContext);

	const getTitleInputValue = useCallback(
		() => document.getElementById("titleInput").value,
		[]
	);

	const addCurrentInputToMediaList = useCallback(() => {
		try {
			updateMediaList({
				action: MediaListAction.ADD_MEDIA,
				title: getTitleInputValue()
			});
		}
		catch (error) {
			alert(error.message);
		}
	}, [updateMediaList, getTitleInputValue]);

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