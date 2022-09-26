<template>
    <div>
        <active-user :user="user"></active-user>
        <user-data :user="user" @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Test',
                age: 31
            }
        };
    },
    methods: {
        setUserData(name, age) {
            this.user.name = name;
            this.user.age = parseInt(age);
        }
    }
};
</script>

<style>
html {
    font-family: sans-serif;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>
