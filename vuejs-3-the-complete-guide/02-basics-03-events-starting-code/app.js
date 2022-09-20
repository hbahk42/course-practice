const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      unit: 5,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter += this.unit;
    },
    reduce() {
      this.counter -= this.unit;
    },
    setName(event, suffix) {
      this.name = event.target.value + ' ' + suffix;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
