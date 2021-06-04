new Vue({
    el: '#app',

    data () {
        return{
            title: '',
            time: null,
            courses: [],

            showCourses: false
        }
    },

    computed: {
        totalTime () {
            var calculate = 0;
            for(let i=0; i<this.courses.length; i++){
                calculate = parseInt(parseInt(this.courses[i].time) + calculate);
            }
            return calculate
        }
    },

    watch: {
        showCourses (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },

    methods: {
        addCourses() {
            let newCourse = { title: this.title, time: this.time }
            this.courses.push(newCourse)
            this.title = ''
            this.time = null
            this.showCourses = true
        }
    }
})