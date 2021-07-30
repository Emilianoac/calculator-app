<template>
    <div class="calculadora">
        <Calculadora-header/>
        <CalculadoraPantalla/>
        <CalculadoraTeclado/>
    </div>
</template>

<script>
    import {ref, provide} from 'vue'

    import CalculadoraHeader   from "./CalculadoraHeader.vue"
    import CalculadoraPantalla from "./CalculadoraPantalla.vue"
    import CalculadoraTeclado  from "./CalculadoraTeclado.vue"

    export default {
        name: "Calculadora",
        components: {
            CalculadoraHeader,
            CalculadoraPantalla,
            CalculadoraTeclado
        },
        setup() {
            const valorTecla = ref(null)
            provide('valorTecla', valorTecla)

            return {valorTecla}
        }
    }
</script>

<style lang="scss">

    .calculadora {
        max-width: 370px;
        width: 100%;
    }

</style>