<script lang="ts">
    import { IconMoon, IconSun } from '_components';
    import { current_theme, set_theme } from '_stores/theme'



    const toggle_theme = () => set_theme( $current_theme === 'light' ? 'dark' : 'light' )
</script>

<!-- ---------------------------------------------------------------- -->

<button
    onclick={toggle_theme}
    class="btn-00"
>
    <span class="ico">
        {#if $current_theme === 'light'}
            <IconSun />
        {:else}
            <IconMoon />
        {/if}
    </span>
</button>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    button {
        width:           40px;
        aspect-ratio:    1;
        position:        relative;
        overflow:        hidden;
    }
    
    .ico {
        width:    calc(100% - 12px);
        display:  block;
        position: absolute;
    }

</style>