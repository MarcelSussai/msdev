<script lang="ts">
    import { onMount } from 'svelte'
    import { root_css_clear_names } from '$lib/utils/vars_css_in_js'
    import { BtnTheme } from '_components'

    let name_clrs: string[] = ['']
    let tones_clr: string[] = ['']

    onMount(() => {
        name_clrs = root_css_clear_names('hs')
        tones_clr = root_css_clear_names('l-r')

        console.log(`-------- DEBUG - { name_clrs } = ${name_clrs}`);
        console.log(`-------- DEBUG - { tones_clr } = ${tones_clr}`);
    })

    const make_var_clr = (name: string = 'default', tone: string = '000') => `
        --c: hsl( var(--hs-${name}), var(--l-${tone}) );
    `

    const check_tone = (tone: string) => tone === '000' ?
        'grid-column: 1 / -1; --w: 100%;' : ''

    const group_style = (name: string, tone: string) => `
        ${make_var_clr(name, tone)} ${check_tone(tone)}
    `
</script>

<!-- ---------------------------------------------------------------- -->

<section class="all-clrs-view">
    <h2>cores configuradas neste site</h2>

    <div class="all-clrs-names">
        {#each name_clrs as name}
            <div class="clr-name" style="--clr: var(--hs-{name})"></div>
        {/each}
    </div>

    <div class="btns">
        <BtnTheme />
    </div>
</section>

<!-- ---------------------------------------------------------------- -->

<style lang="scss">
    @use '_s' as *;

    .all-clrs-view {
        --pad: 6px;

        border: solid 2px clr('surface', 'x12');
        border-radius: 8px;

        display: flex;
        flex-flow: column;
    }

    h2 {
        font-size: 1.12rem;
        font-weight: 300;
        color: clr('surface', 'x06');
        padding: v('pad');
        border-bottom: solid 1px clr('surface', 'x12');
    }

    .all-clrs-names {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        padding: 4px;
        gap: 4px;
    }

    .clr-name {
        width: 100%;
        aspect-ratio: 1;
        background: hsl(v('clr'), v('l-000'));
    }

    .btns {
        padding: 4px;
        border-top: solid 1px clr('surface', 'x12');
    }

</style>