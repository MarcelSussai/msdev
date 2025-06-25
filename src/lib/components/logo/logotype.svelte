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

    $bp_00: $md_02;

    .all-logotype {
        display: flex;
        flex-flow: wrap nowrap;
        align-items: center;
        gap: 4px;
        background: clr('surface', 'r-x08');
        padding: 2px 8px 2px 4px;
        border-radius: 14px;
        height: 100%;
        
        @include md($bp_00) { padding: 2px 10px 2px 4px; }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        
        @include md($bp_00) { height: 64px; }
    }

    .all-types {
        padding: 4px 0;
        display: flex;
        flex-flow: column;
        align-content: center;
        height: 100%;
        @include user-select(none);
    }

    .types {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1.68rem;
        font-family: v('font-logo');
        font-weight: 900;
        gap: 2px;

        @include md($bp_00) { font-size: 2.16rem; }
    }
    .m { color: clr('main'); }
    .s { color: clr('second'); }
    
    .desc {
        font-size: 1.19rem;
        line-height: .88;
        font-weight: 300;
        color: clr('detail', 'r-y16');

        @include md($bp_00)  { font-size: 1.52rem; }
    }

</style>