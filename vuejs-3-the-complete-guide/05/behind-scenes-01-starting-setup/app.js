const app = Vue.createApp({
  data() {
    return {
      // currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    // setText() {
    //   this.message = this.$refs.userInput;
    // },
    setText() {
      this.message = this.$refs.userInput.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2');

// The below is not controlled by Vue.
const data = {
  message: 'Hello',
  longMessage: 'Hello, World!'
};

const handler = {
  // set(target, key, value) {
  //   console.log(target);
  //   console.log(key);
  //   console.log(value);
  // }
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ', World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Goodbye'; // Goodbye, World!

console.log(proxy.longMessage);