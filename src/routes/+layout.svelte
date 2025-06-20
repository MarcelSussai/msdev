<script lang="ts">
    import type { LayoutProps } from './$types'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { hand_is_active_link } from '_stores/nav_store';
    import { config_theme } from '_stores/theme'

    let { data, children }: LayoutProps = $props()

    onMount(() => {
        config_theme()
        hand_is_active_link(data.url)
    })
</script>

<!-- ---------------------------------------------------------------- -->

{#key data.url}
    <main
        in:fade={{ duration: 200, delay: 200 }}
        out:fade={{ duration: 200 }}
    > {@render children()} </main>
{/key}

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        padding-bottom: 2000px;
    }
</style>