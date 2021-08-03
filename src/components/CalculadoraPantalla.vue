<template>
    <div class="calculadora__pantalla">
        <div class="operacion" 
            :class=" { operacion_finalizada : calculadoraResultado}">
            <span class="valor-operacion" 
                  v-if="!calculadoraResultado"> 
                  {{ this.calculadoraOperacion }}
            </span>
            <span class="valor-operacion"
                  v-else>
                  {{ this.calculadoraOperacion}} = 
            </span>
            <span class="valor-parcial"
                  v-if="!calculadoraResultado">
                  {{ this.calculadoraValorParcial}} 
                  <span v-if="!this.calculadoraOperacion && !this.calculadoraValorParcial">0</span>
            </span>
        </div>
        <div class="resultado"
            :class=" { error : calculadoraError }"
            v-if="calculadoraResultado">
            {{ this.calculadoraResultado }}
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { computed } from "vue"

    export default {
        name: "CalculadoraPantalla",
        setup() {
            const store = useStore()

            return {
                calculadoraOperacion    :   computed(() => store.getters.calculadoraOperacion),
                calculadoraValorParcial :   computed(() => store.state.calculadoraValorParcial),
                calculadoraResultado    :   computed(() => store.state.calculadoraResultado),
                calculadoraError        :   computed(() => store.state.calculadoraError)
            }
        }
    }
</script>

<style lang="scss">

    .calculadora__pantalla {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: end;
        min-height: 110px;
        max-height: 120px;
        overflow-y: auto;
        border-radius: 9px;
        font-size: 1.8em;
        overflow-y: auto;
        text-align: end;
        background-color: var(--fondo-pantalla);
        color: var(--texto-pantalla);
        scrollbar-color: var(--tecla-sombra) var(--tecla-fondo);
        scrollbar-width: thin;
        word-break: break-all;
        white-space: pre-wrap;
        padding: 0.8em 0.6em;

        .operacion.operacion_finalizada {
            font-size: 0.45em;
            opacity: 0.6;
            margin-bottom: 0.7em;
        }

        .resultado.error {
            color: red
        }

    }

    .calculadora__pantalla::-webkit-scrollbar,
    .calculadora__pantalla::-webkit-scrollbar-track-piece {
        background-color: var(--tecla-fondo)
    }

    .calculadora__pantalla::-webkit-scrollbar-thumb {
        background-color: var(--tecla-sombra);
        border-radius: 8px;
    }

</style>