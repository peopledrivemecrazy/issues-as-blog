// place files you want to import through the `$lib` alias in this folder.

export interface Issues {
	repository: {
		issues: {
			nodes: {
				title: string;
				number: number;
			}[];
		};
	};
}

export interface Issue {
	repository: {
		issue: {
			bodyHTML: string;
			title: string;
			comments: {
				edges: Comment[];
			};
		};
	};
}

export interface Comment {
	node: {
		id: string;
		bodyHTML: string;
		author: {
			avatarUrl: string;
			login: string;
		};
	};
}

export const bodyHasYoutube = (bodyHTML: string) => {
	const match = bodyHTML.match(/youtube\.com\/watch\?v=([^"]+)/);
	return match ? match[1] : null;
};

export const youtubeEmbed = (bodyHTML: string) => {
	const videoId = bodyHasYoutube(bodyHTML);
	if (!videoId) return bodyHTML;

	const embedHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

	return bodyHTML.replace(
		/<p dir="auto"><a href="https:\/\/www\.youtube\.com\/watch\?v=[^"]+" rel="nofollow">https:\/\/www\.youtube\.com\/watch\?v=[^<]+<\/a><\/p>/,
		`<p dir="auto">${embedHTML}</p>`
	);
};
