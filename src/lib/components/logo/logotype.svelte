<script lang="ts">
    import { LogoSymbol } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<div class="all-logotype">

    <div class="logo"> <LogoSymbol /> </div>

    <div class="all-types">

        <div class="types">
            <div class="m">Marcel</div>
            <div class="s">Sussai</div>
        </div>

        <div class="desc">full-stack developer</div>

    </div>

</div>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .all-logotype {
        display: flex;
        flex-flow: wrap nowrap;
        align-items: center;
        gap: 4px;
        background: clr('surface', 'r-x06');
        // background: red;
        padding: 2px 6px 2px 4px;
        border-radius: 14px 6px 6px 14px;
        // border: solid 1px clr('surface', 'r-x00');
        // border-image: linear-gradient(ro right, clr('main'), clr('second'));
        // border-left: none;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        // height: auto;
    }

    .all-types {
        // border-block: solid 1px clr('detail', 'r-y16', .4);
        padding: 4px 0;
        display: flex;
        flex-flow: column;
        align-content: center;
        height: 100%;
        // background: red;
        @include user-select(none);
    }

    .types {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1.68rem;
        font-family: v('font-logo');
        font-weight: 900;
        gap: 2px;
    }
    .m { color: clr('main'); }
    .s { color: clr('second'); }
    
    .desc {
        font-size: 1.19rem;
        line-height: .88;
        font-weight: 300;
        color: clr('detail', 'r-y16');
    }

</style>