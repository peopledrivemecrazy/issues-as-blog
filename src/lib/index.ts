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
