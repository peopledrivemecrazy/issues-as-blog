import type { Issue } from '$lib';
import { Octokit } from '@octokit/core';
import type { PageServerLoad } from './$types';
import { TOKEN } from '$env/static/private';
import { PUBLIC_REPO, PUBLIC_USERNAME } from '$env/static/public';

const octokit = new Octokit({ auth: TOKEN });

export const load = (async ({ params }) => {
	const { id } = params;
	if (!id) throw new Error('No id');

	const _issue = (await octokit.graphql(`
	{
		repository(owner:"${PUBLIC_USERNAME}", name:"${PUBLIC_REPO}") {
		  issue(number:${id}){
			  title,
			  bodyHTML,
			  comments(last: 10) {
				edges {
				  node {
					id
					bodyHTML
					author {
						avatarUrl
						login
					  }
				  }
				}
			  }
		  }
		}
	  }
	`)) as Issue;
	const issue = _issue.repository.issue;
	return { id, issue };
}) satisfies PageServerLoad;
