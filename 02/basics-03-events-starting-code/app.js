const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      unit: 5,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    add() {
      this.counter += this.unit;
    },
    reduce() {
      this.counter -= this.unit;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
