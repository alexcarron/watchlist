import "./AddMediaForm.css";

function AddMediaForm() {
	return <section class="add-media-form">
		<input
			type="text"
			name="title"
			id="titleInput"
			placeholder="Title of Media"
		/>
		<button type="submit">Add</button>
	</section>;
}

export default AddMediaForm;