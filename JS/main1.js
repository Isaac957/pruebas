Vue.component('mi-titulo', {
    props: {
        etiquetas: Object,
        inputs: Object
    },
    template: `#inicio_sesion`,
    methods: {
        iniciarSesion() {
            axios.get('http://localhost/juego_equipo/inicioSesion.php?usuario=' + this.userinput + '&contrasenia=' + this.contraseniainput)
                .then((respuesta) => {
                    this.datos = respuesta.data.respuesta;
                    console.log(this.datos[0].valida);

                    if (this.datos[0].valida == "Correcto") {
                        alert("Inicio de sesion correcto");
                    } else if (this.datos[0].valida == "Incorrecto") {
                        alert("Inicio de sesion incorrecto");
                    }
                });
        }
    },
    data() {
        return {
            etiquetas_: this.etiquetas,
            inputs_: this.inputs
        }
    }
})


new Vue({
    el: 'main',
    data: {
        etiquetas: {
            titulo: 'Inicio de sesion',
            lblusuario: 'Usuario',
            lblcontrasenia: 'Contrasenia',
            txtusuario: '',
            txtcontrasenia: ''
        },
        inputs:{
            usuario: '',
            contrasenia: ''
        }

    }
});