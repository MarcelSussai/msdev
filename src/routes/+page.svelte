<script lang="ts">
    import ClrsView from '_components/_dev_utils/clrs_view.svelte'
    import { IconMoon } from '_components'

</script>

<!-- ---------------------------------------------------------------- -->

<h1>PÁGINA 01</h1>
<ClrsView />
<div class="test-icon">
    <!-- <IconMoon /> -->
</div>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .test-icon {
        // width: 400px;
        width:  100%;
        // border: solid 2px red;
    }
</style>