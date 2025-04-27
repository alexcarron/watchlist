import { createContext, useCallback, useState } from "react";

export const MediaListContext = createContext();

export const MediaListProvider = ({ children }) => {
	const [mediaList, setMediaList] = useState([]);

	const addMedia = useCallback(
		({ title }) => {
			title = title.trim();

			// Check if title exists
			if (mediaList.some(mediaEntry => mediaEntry.title.toLowerCase() === title.toLowerCase())) {
				throw new Error("Title already exists");
			}

			// Check if title is empty
			if (title === "") {
				throw new Error("Title cannot be empty");
			}

			const dateAdded = new Date();
			setMediaList([...mediaList, { title, dateAdded }]);
		},
		[mediaList, setMediaList]
	);

	return (
		<MediaListContext.Provider value={{
			mediaList,
			addMedia
		}}>
			{children}
		</MediaListContext.Provider>
	);
};