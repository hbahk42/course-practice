<template>
    <section>
        <h2>{{ user.name }}</h2>
        <h3>{{ user.age }} Years</h3>
    </section>
</template>

<script>
export default {
    props: {
        user: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        }
    }
};
</script>
