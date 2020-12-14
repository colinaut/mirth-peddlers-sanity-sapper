<script>
    import Logo from '../components/Logo.svelte';

    export let siteSettings
</script>

<header>
<div class='logo'><Logo title={siteSettings.title} /></div>

    <img src='https://picsum.photos/id/10/2500/1667' alt='background'/>
</header>

<style>
    header {
        width: 100%;
        height: 300px;
    }
    .logo {
        position: absolute;
        z-index: 2;
        height: 200px;
        top: 50px;
    }
    img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>