const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        lastName: ''
      };
    },
    watch: {
      counter(value){
        if (value > 50) {
          setTimeout(() => {
            this.counter = 0
          },1000)
        }
      }
    },
    computed: {
      fullname() {
        return (this.name || this.lastName) != '' ? `${this.name} ${this.lastName}` : ''
      }
    },
    methods: {
      add(num) {
        this.counter += num
      },
      reduce(num) {
        this.counter -= num
      },
      submitForm(e) {
        
      },
      resetInput() {
        this.name = ''
      }
    },
  });
  
  app.mount('#events');