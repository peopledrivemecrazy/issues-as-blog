import { TOKEN } from '$env/static/private';
import { PUBLIC_REPO, PUBLIC_USERNAME } from '$env/static/public';
import type { Issues } from '$lib';
import type { PageServerLoad } from './$types';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: TOKEN });

export const load = (async () => {
	const issues = (await octokit.graphql(`
	{
		repository(owner:"${PUBLIC_USERNAME}", name:"${PUBLIC_REPO}") {
			issues(last:10, states:CLOSED) {
				nodes {
				  title,
				  number
				}
			  }
		}
	  }
	`)) as Issues;
	return {
		issues: issues.repository.issues
	};
}) satisfies PageServerLoad;

export const prerender = true;
