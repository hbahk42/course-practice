<template>
    <li>
        <h2>{{ name }}{{ favoriteState }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ buttonText }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    props: {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        // isFavorite: {
        //     type: String,
        //     required: false,
        //     default: '0',
        //     validator(value) {
        //         return ['1', '0'].includes(value);
        //     }
        // }
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            detailsAreVisible: false,
            isFavoriteLocal: this.isFavorite
        };
    },
    computed: {
        buttonText() {
            return this.detailsAreVisible ? 'Hide' : 'Show';
        },
        favoriteState() {
            // return this.isFavoriteLocal === '1' ? ' (Favorite)' : '';
            return this.isFavoriteLocal ? ' (Favorite)' : '';
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            // this.isFavoriteLocal = this.isFavoriteLocal === '1' ? '0' : '1';
            this.isFavoriteLocal = !this.isFavoriteLocal;
        }
    }
};
</script>