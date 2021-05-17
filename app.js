new Vue({
    el: '#ToDo',
    data: {
        status: false,
        message: '',
        ToDos: [],
        indexI: Number

    },
    computed: {
        className() {
            if(this.status !== false) {

                return 'green'
            }
        }
    },

})
