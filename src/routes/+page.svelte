<script lang="ts">
    import ClrsView from '_components/_dev_utils/clrs_view.svelte'


</script>

<!-- ---------------------------------------------------------------- -->

<div class="teste">
    <div class="teste2">Teste</div>
</div>
<ClrsView />
<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    :global([theme="dark"]) .teste { --varia: calc(0% * 100) ; }
    :global([theme="dark"]) .teste2 { --varia: calc(100% * 1); }
    .teste {
        --varia: 0%;
        --clr-teste: hsla(#{v_hs('surface')}, #{calc(v('varia') + 32%)}, 1);
        padding: 32px;
        width: 300px;
        height: 300px;
        background: v('clr-teste');
    }
    .teste2 {
        --varia: 100%;
        --clr-teste: hsla(#{v_hs('surface')}, #{calc(v('varia') - 32%)}, 1);
        width: 100%;
        height: 100%;
        background: v('clr-teste');
    }


</style>