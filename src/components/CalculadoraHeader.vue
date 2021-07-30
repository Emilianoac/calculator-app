<template>
    <div class="calculadora__header">
        <h1 class="titulo">calc</h1>
        <div class="switch-temas">
            <span>THEME</span>
            <div class="switch-temas__opciones">
                <div class="labels">
                    <label for="tema-claro">1</label>
                    <label for="tema-oscuro">2</label>
                    <label for="tema-neon">3</label>
                </div>
                <div class="inputs">
                    <input @click="cambiarTema" type="radio" name="tema-color" id="tema-claro" checked>
                    <input @click="cambiarTema" type="radio" name="tema-color" id="tema-oscuro">
                    <input @click="cambiarTema" type="radio" name="tema-color" id="tema-neon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CalculadoraHeader",
        methods: {
            cambiarTema(e) {
                const temas = ["tema-claro", "tema-oscuro", "tema-neon"]
                const $body = document.querySelector("body")
                for (const tema of temas) {
                   e.target.id == tema ? $body.classList.add(tema) : $body.classList.remove(tema) 
                }
            }
        }
    }
</script>

<style lang="scss">

    .calculadora__header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 1em;
        color: var(--texto-pantalla);

        .titulo {
            font-size: 1.2em;
            margin: 0;
        }

        .switch-temas {
            display: flex;
            align-items: flex-end;

            span {
                margin-right: 10px;
                font-size: 0.6em;
            }
            
            .switch-temas__opciones {

                .labels,
                .inputs {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 50px;
                    padding:0.3em 0.5em;
                }

                .labels {
                    padding: 0.5em;
                    font-size: 0.6em;

                    label {
                        cursor: pointer;
                    }
                }

                .inputs {
                    background-color: var(--fondo-switch);

                    input {
                        appearance: none;
                        height: 10px;
                        width: 10px;
                        margin: 0;
                        cursor: pointer;

                        &:checked {
                            background-color: var(--tecla-igual-fondo );
                            border-radius: 50px;
                        }

                        &:focus {
                            outline: 0;
                        }
                    }
                }
            }
        }
    }

</style>