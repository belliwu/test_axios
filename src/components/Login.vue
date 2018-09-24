<template>
  <div>
    <h2>Login</h2>
    <form class="login-form" @submit.prevent="onSubmit">
      <div class="input">
        <label>Email: </label>
        <input required v-model="email" type="email" placeholder="Name" required autocomplete="email" />
      </div>

      <div class="input">
        <label>Password: </label>
        <input required v-model="password" type="password" placeholder="Password" required autocomplete="current-password" />
      </div>

      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import AccountMngrApi from '@/apis/accmngr_api.js';

  export default {
    name: "login",
    data() {
      return {
        email: "belliwu56@gmail.com",
        password: "56565656",
        token: null,
        feedback: null
      }
    },

    methods: {
      onSubmit() {
        let accMngr = new AccountMngrApi();

        accMngr.login({
            email: 'belliwu56@gmail.com',
            password: '56565656'
          })
          .then((response) => {
            console.log(response);
            localStorage.setItem("jwtToken", response.token);
            this.$router.push("/logout")
          })
          .catch((error) => {
            console.log("error : ", error.response);
            if (!error.response) {
              // network error
              this.feedback = "網路問題，請聯絡客服人員 (02) 66072992";
            } else {
              this.feedback = error.response.data.message;
            }
          })
      }
    }
  }

</script>


<style scoped>
  h2,
  h5 {
    text-align: center;
  }

  .login-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

</style>
