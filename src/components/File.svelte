<script>
	import { prettyName } from '../utils/prettyName';
	export let name;
	export let path;
	name = prettyName(name);
</script>

<span><a href={path}><i class="fa-solid fa-file text-gray-500"></i> {name}</a></span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
