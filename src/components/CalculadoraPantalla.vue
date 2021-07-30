<template>
    <div class="calculadora__pantalla">
        <span>23,344</span>
    </div>
</template>

<script>

    export default {
        name: "CalculadoraPantalla",
        setup() {
     
        }
    }
</script>

<style lang="scss">

    .calculadora__pantalla {
        font-size: 1.8em;
        text-align: end;
        padding: 0.8em 0.6em;
        border-radius: 9px;
        background-color: var(--fondo-pantalla);
        color: var(--texto-pantalla);
    }
</style>