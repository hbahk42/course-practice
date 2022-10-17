<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </section>
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';
// import { ref, reactive, isRef, isReactive } from 'vue';
import { reactive, toRefs } from 'vue';

export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    /**
     * Using 'ref' for individual values.
     */
    // const uName = ref('Maximilian');
    // const uAge = ref(31);

    // setTimeout(function () {
    //   uName.value = 'Max';
    //   uAge.value = 32;
    // }, 2000);

    // return { userName: uName, age: uAge };


    /**
     * Using 'ref' for a object.
     */
    // const user = ref({
    //   name: 'Maximilian',
    //   age: 31
    // });

    // setTimeout(function () {
    //   user.value.name = 'Max';
    //   user.value.age = 32;
    // }, 2000);

    // return { user };

    
    /**
     * Using 'reactive' for a object.
     */
    const user = reactive({
      name: 'Maximilian',
      age: 31
    });

    setTimeout(function () {
      user.name = 'Max';
      user.age = 32;
    }, 2000);

    
    // console.log(isRef(uName.value));
    // console.log(isReactive(user.name));
    // console.log(isRef(uName));
    // console.log(isReactive(user));

    /**
     * 'toRefs' will wrap the nested properties into 'ref's.
     */
    const userRefs = toRefs(user);

    return { user, userName: userRefs.name, userAge: userRefs.age };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>