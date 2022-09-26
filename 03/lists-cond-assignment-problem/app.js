const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredText: '',
            isVisible: true
        };
    },
    computed: {
        buttonText() {
            return this.isVisible ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredText);
        },
        toggleListVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');