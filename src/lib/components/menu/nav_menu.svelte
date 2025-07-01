<script lang="ts">
    import { is_open } from '_stores/nav_store'


</script>

<!-- ---------------------------------------------------------------- -->

{#if $is_open}
    <div class="all-nav-backdrop">
        <nav>

        </nav>
    </div>
{/if}

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .all-nav-backdrop {
        position: fixed;
        width: 100dvw;
        height: 100dvh;
        top: 0;
        background: clr('surface', 'x08', .4);
        backdrop-filter: blur(8px);
        z-index: 899;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: $transition_00;
    }

    nav {
        position: absolute;
        width: 80%;
        min-height: 400px;
        background: red;
        bottom: 40px;
        transition: $transition_00;
    }

</style>