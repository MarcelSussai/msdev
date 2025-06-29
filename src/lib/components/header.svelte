<script lang="ts">
    import { Logotype, BtnOpenMenu } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<header>
    <Logotype />
    <BtnOpenMenu />
</header>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        position: sticky;
        align-self: start;
        top: 6px;
        z-index: 900;
        gap: 8px;

        width: calc(100% - 12px);
        height: v('header-height', 64px);
        margin: auto;
        margin-bottom: 16px;
        padding: 0px 8px 0px 5px;

        background:
            linear-gradient(
                45deg,
                clr('surface', 'r-x06', .72),
                clr('surface', 'r-x04', .88) 32%,
                clr('surface', 'r-x04', .80) 68%,
                clr('surface', 'r-x06', .72),
            )
        ;
        backdrop-filter: blur(8px);
        border: solid 1px clr('surface', 'r-x12');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .40),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;

        @include md($md_02) {
            height: v('header-height', 80px);
            width: calc(100% - 16px);
            top: 8px;
            padding: 0px 10px 0px 5px;
        }
    }
</style>