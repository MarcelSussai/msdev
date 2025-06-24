<script lang="ts">

</script>

<!-- ---------------------------------------------------------------- -->

<header>

</header>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    header {
        width: 100%;
        height: v('header-height', 64px);
        // background: clr('surface', 'r-x06');
        background:
            linear-gradient(
                45deg,
                clr('surface', 'r-x08'),
                clr('surface', 'r-x06') 24%,
                clr('surface', 'r-x06') 76%,
                clr('surface', 'r-x08'),
            )
        ;
        border-block: solid 2px clr('surface', 'r-x08');
        position: sticky;
        align-self: start;
        top: 0;
        z-index: 99;
        box-shadow:
            inset 0 0 32px clr('surface', 'r-000', .32)
        ;
    }
</style>