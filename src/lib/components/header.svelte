<script lang="ts">
    import { Logotype, BtnOpenMenu, Menu } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<header>
    <Logotype />
    <nav> <Menu /> </nav>
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

        width: calc(100dvw - 12px);
        max-width: 1080px;
        height: v('header-height');
        margin: auto;
        margin-bottom: 16px;
        padding: 0px 8px 0px 6px;

        background: linear-gradient(
            45deg,
            clr('surface', 'r-x08', .86),
            clr('surface', 'r-x04', .86) 32%,
            clr('surface', 'r-x04', .86) 68%,
            clr('surface', 'r-x08', .86),
        );
        backdrop-filter: blur(8px);
        border: solid 1px clr('surface', 'r-x14');
        border-radius: 16px;
        box-shadow:
            inset 0 0 24px clr('surface', 'r-000', .48),
            0px 8px 12px -2px clr('surface', 'r-x06', .48)
        ;
        transform: translate3d(0, calc( -100% - 16px ), 0);
        animation: ani_appear_003 v('time-ani-header') v('time-ani-delay-00')  $ease_in_out_sine forwards;

        @include md($md_02) {
            width: calc(100% - 16px);
            top: 8px;
            padding: 0px 10px 0px 6px;
        }
    }
    nav {
        display: none;

        @include md($md_17) {
            width: fit-content;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            align-items: center;

        }
    }
</style>