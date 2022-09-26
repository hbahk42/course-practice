const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ]
        };
    },
    methods: {
        asdf() {}
    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleVisibility">Show Details</button>
            <ul v-show="isVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            isVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#app');