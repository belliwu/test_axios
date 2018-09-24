<template>
  <div>
    <h2>Logout</h2>
    <div class="submit">
      <button type="submit" @click="onSubmit">Submit</button>
    </div>
    <hr>

    <h5>token : {{token}}</h5>
    <h5>feedback : {{feedback}}</h5>
  </div>
</template>

<script>
  import AccountMngrApi from '@/apis/accmngr_api.js';

  export default {
    name: "login",
    data() {
      return {
        email: "belliwu56@gmail.com",
        token: localStorage.getItem("jwtToken"),
        feedback: null
      }
    },

    methods: {
      onSubmit() {
        let accMngr = new AccountMngrApi();

        accMngr.logout({
            email: 'belliwu56@gmail.com'
          })
          .then((response) => {
            localStorage.removeItem("jwtToken");
            this.$router.push("/");
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
