<script lang="ts">
	import type { Comment } from '$lib';

	export let comments: Comment[] = [];
</script>

<div class="my-4">
	{#each comments as comment}
		<div class="my-4">
			<div class="flex flex-col justify-between gap-2">
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
		</div>
		<hr />
	{/each}
</div>
