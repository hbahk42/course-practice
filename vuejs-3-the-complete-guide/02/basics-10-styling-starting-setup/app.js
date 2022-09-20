const app = Vue.createApp({
    data() {
        return {
            boxSelected: [false, false, false]
        }
    },
    watch: {
        boxSelected: {
            handler(value) {
                console.log(value);
                // styleA = value ? 'red' : '#ccc';
            },
            deep: true
        }
    },
    methods: {
        clickBox(event) {
            switch (event.target.id) {
                case 'box-a':
                    this.setOpposite(0);
                    break;
                case 'box-b':
                    this.setOpposite(1);
                    break;
                case 'box-c':
                    this.setOpposite(2);
                    break;
                default:
                    break;
            }
        },
        setOpposite(index) {
            this.boxSelected[index] = !this.boxSelected[index];
        },
        getStyle(index) {
            console.log(this.boxSelected[index]);
            return this.boxSelected[index] ? 'red' : '#ccc';
        }
    }
});

app.mount('#styling');