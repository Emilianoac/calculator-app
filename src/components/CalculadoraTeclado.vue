<template>
    <div class="calculadora__teclado">
        <CalculadoraTecla 
            v-for="(tecla) in teclas" 
            :key="tecla"
            :valor="tecla"
        />
    </div>
</template>

<script>
    import CalculadoraTecla from "./CalculadoraTecla.vue"

    export default {
        name: "CalculadoraTeclado",
        components: {
            CalculadoraTecla
        },
        setup() {
            const teclas = [7,8,9,"DEL",4,5,6,"+",1,2,3,"-",".",0,"/","x","RESET","="]
            
            return {teclas}
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