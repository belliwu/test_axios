<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Test Sum Class for 3 + 2 = {{sum}}</h3>
    <hr>
    <p> Test fire "login" Api</p>
    <div class="submit">
        <button @click="onLogin">login</button>
    </div>
    <p>Token : {{jwtToken}}</p>
  </div>
</template>

<script>
import GlobalAxios from '@/axios/global_axios.js';
import Sum from '@/test/sum.js';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      jwtToken: null
    };
  },

  computed: {
    sum() {
      let cump = new Sum(2, 3);
      return cump.toString();
    }
  },

  methods: {
    onLogin() {
      const status = null;
      const data = null;
      const url = '/api/arms/user/login';
      let login = new GlobalAxios();
      login.post(
        url,
        { email: 'belliwu56@gmail.com', password: '56565656' },
        (status, data) => {
          console.log('login.status : ', status);
          console.log('login.name : ', data.name);
          console.log('login.userId : ', data.userId);
          console.log('login.token : ', data.token);
          console.log('login.email : ', data.email);
          if (data.token) {
            localStorage.setItem('jwtToken', data.token);
            this.jwtToken = data.token;
          }
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}
</style>
