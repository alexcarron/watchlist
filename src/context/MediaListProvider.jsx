import { useReducer } from "react";
import MediaListContext from "./MediaListContext";
import MediaListAction from "./MediaListAction";


const addMedia = (mediaList, { title }) => {
	title = title.trim();

	// Check if title exists
	if (mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
	  return mediaList;
	}

	// Check if title is empty
	if (title === "") {
		return mediaList;
	}

	const dateAdded = new Date();
	return [...mediaList, { title, dateAdded }];
};


const MediaListProvider = ({ children }) => {
	const [mediaList, updateMediaList] = useReducer(
		(mediaList, updateInput) => {
			const action = updateInput.action;

			switch (action) {
				case MediaListAction.ADD_MEDIA:
					return addMedia(mediaList, updateInput);
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