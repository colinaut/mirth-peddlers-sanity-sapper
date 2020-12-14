<script>
    import Card from '../components/Card.svelte';

    export let cards;
    const length = cards.length;

    cards = cards.map( (card, i) => {
        return {...card, active: (i === 0), length: length} // Add position based on length so that it's slightly from the left or the right with over lap
    })

</script>

<div>
    {#each cards as card}
        <Card {...card} />
    {/each}
</div>

<style>
    div {
        padding: 1rem;
    }
</style>