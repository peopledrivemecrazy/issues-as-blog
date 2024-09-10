<script lang="ts">
	import Comments from '$lib/Comments.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ issue } = data);
</script>

<svelte:head>
	<title>{issue.title}</title>
</svelte:head>

<article class="flex flex-col gap-4">
	<a href="/">go back</a>
	<h1>{issue.title}</h1>
	<section>
		{@html issue.bodyHTML}
	</section>
</article>
<div>
	<Comments comments={issue.comments.edges} />
</div>

<p>
	<a href="https://github.com/peopledrivemecrazy/issues-as-blog/issues/{data.id}">
		to add comments go here
	</a>
</p>
