<template>
    <button class="tecla"
            @click="addValue">
            {{valor}}
    </button>
</template>

<script>

    export default {
        props: ["valor"],
    }
</script>

<style lang="scss">

    .tecla {
        font-family: 'Spartan', sans-serif;
        font-size: 1.4em;
        font-weight: 700;
        background-color: var(--tecla-fondo);
        color: var(--texto-primario);
        border: 0;
        border-bottom: 4px solid var(--tecla-sombra);
        border-radius: 8px;
        padding: 0.4em 0.5em;
        cursor: pointer;

        &:active {
            border-bottom: none;
            outline: 0;
        }

        &:nth-of-type(17),
        &:nth-of-type(18),
        &:nth-of-type(4) {
            font-size: 0.9em;
            padding: 0.9em 0.5em;
        }

        &:nth-of-type(4),
        &:nth-of-type(17) {
            background-color: var(--tecla-auxiliar-fondo);
            border-bottom-color: var(--tecla-auxiliar-sombra);
            color: var(--texto-secundario );
        }

        &:nth-of-type(17) {
            grid-column: 1/3;
        }

        &:nth-of-type(18) {
            grid-column: 3/5;
            background-color: var(--tecla-igual-fondo);
            border-bottom-color: var(--tecla-igual-sombra);
            color: var(--texto-secundario);
        }
    }
</style>