<script>
	import File from './File.svelte';
	import { prettyName } from '../utils/prettyName';

	export let expanded = false;
	export let name;
	export let path;
	name = prettyName(name);
	export let files;
	function toggle() {
		expanded = !expanded;
	}
</script>

<button class:open={expanded} on:click={toggle}>
	<i class="fa-regular text-gray-500" class:fa-folder={!expanded} class:fa-folder-open={expanded}></i>
	{name}
	<!-- <a href={path}><i class="fa-solid fa-circle-arrow-right"></i></a> -->
</button>
	<ul class:hidden={!expanded}>
		{#each files as file}
			<li>
				{#if file.files}
					<svelte:self {...file} />
				{:else}
					<File {...file} />
				{/if}
			</li>
		{/each}
	</ul>

<style>
	button {
		padding: 0 0 0 1.5em;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
		border: none;
		margin: 0;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>
