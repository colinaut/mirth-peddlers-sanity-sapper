<script>
    export let length, index, title, image, body, link, active = false;

    const click = (e) => {
        e.preventDefault();
        active = !active;
        //if (link) window.location.href = link;
        return;
    }

    // TODO: [MP-1] sort out either only allowing top card to move or allow lower level cards to move and reshuffle
    // TODO: [MP-2] add additional description content and link to Itch.io

    const reverseIndex = length + 1 - index;

</script>

<div on:click={click} class:left={active} class:right={!active} style='--index: {index}; --reverse-index: {reverseIndex}'>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{body}</p>
</div>

<style>
    div {
        --card-bg: var(--off-white, #fdfaf3);
        width: 270px;
        height: 400px;
        padding: 1rem;
        border: 1px solid var(--light-gray, #ddd);
        border-radius: 5px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
        background: var(--card-bg);
        position: absolute;
        top: 120px;
        cursor: pointer;
        transition: all 1s;
    }
    img {
        object-fit: contain;
        width: 100%;
        height: auto;
        border: 1px solid var(--card-img-border, #333);
    }
    .left {
        transform: rotate(-10deg);
        left: calc( var(--index) * 1rem);
        z-index: var(--index);
        animation: cardpass-to-left 1s;
    }
    .right {
        transform: rotate(10deg);
        left: calc( var(--reverse-index) * 1rem + 25vw);
        z-index: var(--reverse-index);
        animation: cardpass-to-right 1s;
    }

    @keyframes cardpass-to-left {
        0% {
            z-index: 1000
        }
        100% {
            z-index: var(--index);
        }
    }

    @keyframes cardpass-to-right {
        0% {
            z-index: 1000
        }
        100% {
            z-index: var(--reverse-index);
        }
    }
</style>