<script context="module">
	import client from '../sanityClient'
	  export function preload({ params, query }) {
	  return client.fetch('*[_type == "siteSettings"]').then(siteSettings => {
			  return { siteSettings };
		  }).catch(err => this.error(500, err));
	  }
</script>

<script>
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';

	export let siteSettings;
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Header siteSettings={siteSettings[0]} />
<Nav {segment}/>

<main>
	<slot></slot>
</main>