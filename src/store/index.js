import { createStore } from 'vuex'

export default createStore({
  state: {
    calculadoraOperacion: [],
    calculadoraValorParcial: "",
    calculadoraResultado: "",
    calculadoraError : false,
    operadores : ["x", "-", "+", "/"]
  },
  mutations: {
    accionesCalculadora(state, tecla) {

      // Accion tecla 0
      if(tecla === 0) {
        if (!state.calculadoraValorParcial.startsWith("0") ) {
          state.calculadoraValorParcial += tecla
        } else if (state.calculadoraValorParcial.length >= 2) {
          state.calculadoraValorParcial += tecla
        }
      }

      // Accion teclas numericas
      if( !isNaN(tecla) && tecla != 0 ) {
        if (!state.calculadoraValorParcial.startsWith("0")) {
          state.calculadoraValorParcial += tecla
        } else if (state.calculadoraValorParcial.includes("0.")) {
          state.calculadoraValorParcial += tecla
        }
        
        if ( state.calculadoraResultado ) {
          limpiarDatos()
          state.calculadoraValorParcial += tecla
        }
      }

      // Accion tecla punto
      if(tecla === "." &&  !state.calculadoraValorParcial.includes('.')) {
        state.calculadoraValorParcial += tecla
      }

      // Accion tecla RESET
      if (tecla === "RESET") {
        limpiarDatos()
      }

      //Accion tecla DEL
      if(tecla === "DEL") {
        const ultimaPosicionOperacion = state.calculadoraOperacion.length - 1
        const ultimoValorOperacion = state.calculadoraOperacion[ultimaPosicionOperacion]

        if (state.calculadoraOperacion.length && !state.calculadoraValorParcial) {
          let ultimoValorArray = ultimoValorOperacion.split("")
          ultimoValorArray.pop()
          state.calculadoraOperacion[ultimaPosicionOperacion] = ultimoValorArray.join("")
          if (ultimoValorOperacion === "") state.calculadoraOperacion.pop()
        } else {
          let valorParcialArray = state.calculadoraValorParcial.split("")
          valorParcialArray.pop()
          state.calculadoraValorParcial = valorParcialArray.join("") 
        }

        if(state.calculadoraResultado) {
          limpiarDatos()
        }
      }

      // Acciones teclas operadores
      if(state.operadores.includes(tecla) ) {
        const ultimaPosicion = state.calculadoraOperacion[state.calculadoraOperacion.length - 1]
        
        if (state.operadores.includes(ultimaPosicion) && state.calculadoraValorParcial) {
          state.calculadoraOperacion.push(state.calculadoraValorParcial, tecla)
          state.calculadoraValorParcial = ""
        } else if( state.calculadoraValorParcial.length && isNaN(ultimaPosicion) )  {
          state.calculadoraOperacion.push(state.calculadoraValorParcial, tecla)
          state.calculadoraValorParcial = ""
        }
      }

      // Accion tecla igual
      if(tecla === '=' && state.calculadoraValorParcial !== "." && state.calculadoraValorParcial.length ){
        state.calculadoraOperacion.push(state.calculadoraValorParcial)
        try {
          const letras = /[a-zA-Z&&[^xX]]+/

          if (letras.test(state.calculadoraOperacion)) throw new Error
          else  {
            state.calculadoraResultado = eval(
              state.calculadoraOperacion.map(x => {
                if (x === "x")  x = "*"
                return  x
              }).join(" ")
            )
          }

          if ( isNaN(state.calculadoraResultado) ) throw new Error
          else if (state.calculadoraResultado === 0) state.calculadoraResultado = '0'
        } catch (error) {
          state.calculadoraResultado = "Error"
          state.calculadoraError = true
        }

      }

      function limpiarDatos() {
        state.calculadoraValorParcial = ""
        state.calculadoraOperacion = []
        state.calculadoraResultado = ""
        state.calculadoraError = false
      }
    }
  },
  getters: {
    calculadoraOperacion(state) {
      return state.calculadoraOperacion.join("")
    }
  },
  actions: {
  },
  modules: {
  }
})
