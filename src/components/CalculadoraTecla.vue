<template>
    <button class="tecla"
            :class="{error : error }"
            @click="accionesCalculadora">
            {{valor}}
    </button>
</template>

<script>
    import { useStore } from 'vuex'
    import {watchEffect, ref} from 'vue'

    export default {
        props: ["valor"],
        setup(props) {
            const store = useStore()
            let error = ref(false) 

            const watchError = () => {
                if (props.valor === "RESET") {
                    store.state.calculadoraError ? error.value = true : error.value = false
                }
            }
            watchEffect(watchError) 

            return {
                accionesCalculadora: () => store.commit('accionesCalculadora', props.valor),
                error
            }
        }
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

        &:active {
            border-bottom: none;
            outline: 0;
        }

        &:focus-visible {
            box-shadow: 0px 0px 8px 1px var(--tecla-sombra);
            outline: 0;
        }
    }

    .tecla.error {

        &:nth-of-type(17) {
            animation : glow 2.4s cubic-bezier(0.77, 0, 0.175, 1) 2; 
        }
    }

    @keyframes glow {
        
        0% { box-shadow: unset;}

        50% { box-shadow: 0px 0px 12px 1px var(--tecla-auxiliar-sombra);}

        100% {box-shadow: unset;}
    }
</style>