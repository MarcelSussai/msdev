<script lang="ts">

    let test_btn_modo = $state(false)
    const handle_test_btn_modo = () => test_btn_modo = !test_btn_modo
</script>

<!-- ---------------------------------------------------------------- -->

<section>
    TESTE DE TRANSIÇÃO DE PÁGINA
</section>
<button style:--pad-default="12px" class="btn-00">o</button>
<button
    class="btn-00"
    style:--pad-default="12px"
    style:--pad-inline="calc(var(--pad-default) * 2)"
>
    botão longo
</button>

<button class="btn-on {test_btn_modo ? 'on' : ''}" onclick={handle_test_btn_modo}>
    <span>modo:</span>
</button>


<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

</style>