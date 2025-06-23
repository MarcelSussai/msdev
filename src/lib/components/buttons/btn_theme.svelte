<script lang="ts">
    import { current_theme, set_theme } from '_stores/theme'

    const toggle_theme = () => set_theme( $current_theme === 'light' ? 'dark' : 'light' )
</script>

<!-- ---------------------------------------------------------------- -->

<button onclick={toggle_theme}> {$current_theme} </button>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    button {
        padding:       v('pad', 4px);
        background:    clr('surface', 'x12');
        color:         clr('surface', 'y06');
        font-weight:   300;
        border-radius: 3px;
    }

</style>