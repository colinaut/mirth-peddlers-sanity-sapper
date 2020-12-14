<script>
    import CardGrid from '../components/CardGrid.svelte'

    export let games

    let cards = games.map( (game,i) => { return {
        index: i,
        title: game.title,
        image: game.cover_url,
        body: game.short_text,
        link: game.url,
    }})

</script>

<section>
    <h1>Finished Projects</h1>

    <CardGrid cards={cards} />

</section>

<style>

</style>