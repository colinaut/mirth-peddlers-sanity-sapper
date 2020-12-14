<script context="module">
	import fetch from 'node-fetch';
	export async function preload(page, session) {

		const { ITCH_IO_KEY, DOMAIN } = session
		const res = await fetch(`${DOMAIN}/api/1/${ITCH_IO_KEY}/my-games`);
		const json = await res.json();

		const games = json.games

		return { games };
	}
</script>

<script>
	import FinishedProjects from '../components/FinishedProjects.svelte';

	export let games = []
</script>

<style>

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<FinishedProjects games={games} />
