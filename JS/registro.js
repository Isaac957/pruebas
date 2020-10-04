Vue.component('registro',{
    props: ['etiquetas','alerta'],
    template:'#registro_us',
    methods:{
        alertaRegistro(){
            this.alerta_ = true;
        }
    },
    data(){
        return{
            alerta_: this.alerta
        }
    }
})

new Vue({
    el: 'main',
    data: {
        etiquetas: {
            registro: 'Registro de usuario',
            nombre: 'Ingresa tu nombre',
            apellidos: 'Ingresa tus apellidos',
            correo:'Ingresa el correo que mas uses',
            pais:'Pais en el que vives',
            estado:'Estado en el que te encuentras actualmente',
            nombreUsuario:'Ingresa tu nombre de usuario con el que te haces conoser en los juegos',
            contrasenia1:'Ingresa una contrasenia segura',
            contrasenia2:'Confirma contrasenia'
        },
        alerta_Registro: false
    }
});