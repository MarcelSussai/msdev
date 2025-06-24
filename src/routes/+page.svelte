<script lang="ts">
    import ClrsView from '_components/_dev_utils/clrs_view.svelte'
    import { LogoSymbol } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<h1>PÁGINA 01</h1>
<ClrsView />
<div class="test-icon">
    <LogoSymbol />
</div>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .test-icon {
        // width: 400px;
        width:  96px;
        // border: solid 2px red;
    }
</style>