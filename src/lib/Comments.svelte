<script lang="ts">
	import type { Comment } from '$lib';

	export let comments: Comment[] = [];
</script>

{#each comments as comment}
	<div class="flex flex-col items-center justify-between gap-2">
		<p>{@html comment.node.bodyHTML}</p>
	</div>
	<div class="flex items-center justify-end gap-2">
		<img
			class="h-10 w-10 rounded-full"
			src={comment.node.author.avatarUrl}
			alt={comment.node.author.login}
		/>
		<pre>{comment.node.author.login}</pre>
	</div>
	<hr />
{/each}
