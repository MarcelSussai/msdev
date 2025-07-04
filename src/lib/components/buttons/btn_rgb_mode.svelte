<script lang="ts">
    import { onMount } from 'svelte'

    let mudar = $state(false)
    $effect(() => {
        if(mudar) {
            document.documentElement.style.animation = 'ani-hue-surface 10s linear infinite, ani-hue-aux 6s linear infinite'
        } else {
            document.documentElement.style.animation = 'unset'
        }
    })

</script>

<!-- ---------------------------------------------------------------- -->

<button
    class="btn-on {mudar ? 'on' : ''}"
    style:--pad-inline="16px"
    onclick={() => mudar = !mudar}
>
    <span>modo rgb: </span>
</button>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

</style>