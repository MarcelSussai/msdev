<script lang="ts">
    import { Logotype } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<header>
    <Logotype />
</header>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        position: sticky;
        align-self: start;
        top: 6px;
        z-index: 800;


        width: calc(100% - 12px);
        height: v('header-height', 64px);
        margin: auto;
        margin-bottom: 16px;
        padding: 0 4px 0 4px;

        background:
            linear-gradient(
                45deg,
                clr('surface', 'r-x06', .72),
                clr('surface', 'r-x02', .96) 32%,
                clr('surface', 'r-x02', .96) 68%,
                clr('surface', 'r-x06', .72),
            )
        ;
        backdrop-filter: blur(4px);
        border: solid 1px clr('surface', 'r-x12');
        border-radius: 8px;

        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .40),
            0px 8px 12px -2px clr('surface', 'r-x06', .64)
        ;
    }
</style>