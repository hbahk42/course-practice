const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            userClass: '',
            displayClass: 'visible',
            isVisible: true,
            inlineStyle: {backgroundColor: ''}
        };
    },
    watch: {
        enteredValue(value) {
            const classes = ['user1', 'user2', ''];
            if (classes.includes(value)) {
                this.userClass = value;
            }
        },
        isVisible(value) {
            this.displayClass = value ? 'visible' : 'hidden';
        }
    },
    methods: {
        enterValue(event) {
            this.enteredValue = event.target.value;
            event.target.value = '';
        },
        toggleDisplay() {
            this.isVisible = !this.isVisible;
        },
        setBackgroundColor(event) {
            this.inlineStyle.backgroundColor = event.target.value;
            event.target.value = '';
        }
    }
});

app.mount('#assignment');