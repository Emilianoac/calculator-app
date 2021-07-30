<template>
    <div class="calculadora__teclado">
        <CalculadoraTecla :valor="7"/>
        <CalculadoraTecla :valor="8"/>
        <CalculadoraTecla :valor="9"/>
        <CalculadoraTecla valor="DEL"/>
        <CalculadoraTecla :valor="4"/>
        <CalculadoraTecla :valor="5"/>
        <CalculadoraTecla :valor="6"/>
        <CalculadoraTecla valor="+"/>
        <CalculadoraTecla :valor="1"/>
        <CalculadoraTecla :valor="2"/>
        <CalculadoraTecla :valor="3"/>
        <CalculadoraTecla valor="-"/>
        <CalculadoraTecla valor="."/>
        <CalculadoraTecla :valor="0"/>
        <CalculadoraTecla valor="/"/>
        <CalculadoraTecla valor="x"/>
        <CalculadoraTecla valor="RESET"/>
        <CalculadoraTecla valor="="/>
    </div>
</template>

<script>
    import CalculadoraTecla from "./CalculadoraTecla.vue"

    export default {
        name: "CalculadoraTeclado",
        components: {
            CalculadoraTecla
        }
    }
</script>

<style lang="scss">

    .calculadora__teclado {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        padding: 1em;
        margin-top: 0.5em;
        border-radius: 8px;
        background-color: var(--fondo-switch);
    }
</style>