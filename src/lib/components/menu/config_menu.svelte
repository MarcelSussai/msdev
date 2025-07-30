<script lang="ts">
    import { BtnTheme, BtnRgbMode } from '_components'


</script>

<!-- ---------------------------------------------------------------- -->

<section class="config">
    <BtnTheme />
    <BtnRgbMode />
</section>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .config {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;
        padding: 0px;
        color: clr('surface', 'x08');
        border-radius: 0px 0px 10px 10px;
        transition: $transition_00;
    }
</style>