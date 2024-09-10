<script lang="ts">
	import type { Comment } from '$lib';

	export let comments: Comment[] = [];
</script>

{#each comments as comment}
	<div class="flex">
		<p>{@html comment.node.bodyHTML}</p>
	</div>
	<div class="flex-end">
		<img src={comment.node.author.avatarUrl} alt={comment.node.author.login} />
		<pre>{comment.node.author.login}</pre>
	</div>
    <hr/>
{/each}

<style>
	img {
		border-radius: 100%;
		width: 25px;
	}
	.flex-end {
        justify-content: end;
		display: flex;
		align-items: center;
		gap: 1em;
	}
	.flex {
		display: flex;
		gap: 1em;
		justify-content: space-between;
		align-items: center;
	}
</style>
