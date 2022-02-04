const app = new Vue({

    el: '#app',
    data:{
        titulo: 'GYM',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = ''
            localStorage.setItem('gymVue', JSON.stringify(this.tareas))
        },
        editarTarea(index) {
            this.tareas[index].estado = true
            localStorage.setItem('gymVue', JSON.stringify(this.tareas))
        },
        eliminar(index){
            this.tareas.splice(index,1)
            localStorage.setItem('gymVue', JSON.stringify(this.tareas))
        }
        
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gymVue'))
        if(datosDB == null){
            this.tareas=[]
        } else {
            this.tareas = datosDB
        }
    }
})