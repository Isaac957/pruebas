Vue.component('mi-titulo',{
props: {
    titulo: String,
    usuario: String,
    contrasenia: String,
    inputusuario: String,
    inputucontrasenia: String
},
template: `#inicio_sesion`,
methods:{
    iniciarSesion(){
         axios.get('http://localhost/juego_equipo/inicioSesion.php?usuario='+this.userinput+'&contrasenia='+this.contraseniainput)
                 .then((respuesta) => {
                     this.datos = respuesta.data.respuesta;
                     console.log(this.datos[0].valida);

                     if (this.datos[0].valida=="Correcto") {
                         alert("Inicio de sesion correcto");
                     }else if(this.datos[0].valida=="Incorrecto"){
                         alert("Inicio de sesion incorrecto");
                     }
                 });
    }
},
data(){
    return{
        titulo_: this.titulo,
        usuario_: this.usuario,
        contrasenia_: this.contrasenia,
        userinput: this.inputusuario,
        contraseniainput: this.inputucontrasenia,
        datos: [],
        
    }
}
})


new Vue({
    el: 'main',
    data: {
        titulo: 'Inicio de sesion',
        lblusuario: 'Usuario',
        lblcontrasenia: 'Contrasenia',
        txtusuario: '',
        txtcontrasenia: ''
    }
});