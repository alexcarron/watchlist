import { useReducer } from "react";
import MediaListContext from "./MediaListContext";
import MediaListAction from "./MediaListAction";


const addMedia = (mediaList, { title, rating }) => {
	title = title.trim();

	// Check if title exists
	if (mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
	  return mediaList;
	}

	// Check if title is empty
	if (title === "") {
		return mediaList;
	}

	// Check if rating exists and is a number
	if (!rating || isNaN(rating)) {
		return mediaList;
	}

	// Check if rating is between 0 and 10
	if (rating < 0 || rating > 10) {
		return mediaList;
	}


	const dateAdded = new Date();
	return [...mediaList, { title, dateAdded, rating }];
};

const removeMedia = (mediaList, { title }) => {
	title = title.trim();

	if (title === "") {
		return mediaList;
	}

	// Check if title exists
	if (!mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
		return mediaList;
	}

	return mediaList.filter(mediaEntry => mediaEntry.title.toLowerCase() !== title.toLowerCase());
}

const updateMediaRating = (mediaList, { title, rating }) => {
	title = title.trim();

	if (title === "") {
		return mediaList;
	}

	// Check if title exists
	if (!mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
		return mediaList;
	}

	// Check if rating exists and is a number
	if (!rating || isNaN(rating)) {
		return mediaList;
	}

	// Check if rating is between 0 and 10
	if (rating < 0 || rating > 10) {
		return mediaList;
	}

	return mediaList.map(mediaEntry => {
		if (mediaEntry.title.toLowerCase() === title.toLowerCase()) {
			return { ...mediaEntry, rating };
		}
		return mediaEntry;
	})
};

const updateMediaTitle = (mediaList, { title, newTitle }) => {
	title = title.trim();

	if (title === "") {
		return mediaList;
	}

	// Check if title exists
	if (!mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
		return mediaList;
	}

	newTitle = newTitle.trim();

	if (newTitle === "") {
		return mediaList;
	}

	return mediaList.map(mediaEntry => {
		if (mediaEntry.title.toLowerCase() === title.toLowerCase()) {
			return { ...mediaEntry, title: newTitle };
		}
		return mediaEntry;
	})
};


const MediaListProvider = ({ children }) => {
	const [mediaList, updateMediaList] = useReducer(
		(mediaList, updateInput) => {
			const action = updateInput.action;

			switch (action) {
				case MediaListAction.ADD_MEDIA:
					return addMedia(mediaList, updateInput);
				case MediaListAction.REMOVE_MEDIA:
					return removeMedia(mediaList, updateInput);
				case MediaListAction.UPDATE_MEDIA: {
					if (updateInput.rating) {
						return updateMediaRating(mediaList, updateInput);
					}
					if (updateInput.newTitle) {
						return updateMediaTitle(mediaList, updateInput);
					}
					break;
				}
				default:
					return mediaList;
			}
		},
		[]
	);
	return (
		<MediaListContext.Provider value={{
			mediaList,
			updateMediaList
		}}>
			{children}
		</MediaListContext.Provider>
	);
};

export default MediaListProvider;