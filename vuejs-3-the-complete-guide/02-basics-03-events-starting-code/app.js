const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      unit: 5,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmüller';
    }
  },
  methods: {
    add() {
      this.counter += this.unit;
    },
    reduce() {
      this.counter -= this.unit;
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.confirmInput();
    }
  }
});

app.mount('#events');
