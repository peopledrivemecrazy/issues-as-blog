<script lang="ts">
	import { PUBLIC_REPO, PUBLIC_USERNAME } from '$env/static/public';

	export let data;
</script>

<svelte:head>
	<title>Issues as blog</title>
</svelte:head>
<ul>
	{#each data.issues.nodes as issue}
		<li>
			<h1>
				<a href="/{issue.number}">{issue.title}</a>
			</h1>
		</li>
	{:else}
		<p>
			Write your article <a href="https://github.com/{PUBLIC_USERNAME}/{PUBLIC_REPO}/issues">here</a
			>
		</p>
	{/each}
</ul>
