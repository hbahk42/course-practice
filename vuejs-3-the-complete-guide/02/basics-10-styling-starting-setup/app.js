const app = Vue.createApp({
    methods: {
        selectBox(event) {
            event.target.classList.toggle('selected')
        }
    }
});

app.mount('#styling');