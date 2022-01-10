<template>
  <div>
    <section>
      <div class="container" v-bind:class="{ active: formToggle }">
        <div class="user signinBx">
          <div class="imgBx">
            <img
              src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            />
          </div>
          <div class="formBx">
            <form>
              <h2>Sign In</h2>
              <input
                type="email"
                v-model="formValues.email"
                placeholder="Email"
              />
              <p class="formError" v-show="formErrors.email">
                {{ formErrors.email }}
              </p>
              <input
                type="password"
                v-model="formValues.password"
                placeholder="Password"
              />
              <p class="formError" v-show="formErrors.password">
                {{ formErrors.password }}
              </p>
              <input type="submit" value="Login" @click.prevent="submitForm" />

              <p class="signup">
                Don't have an account ?
                <button @click.prevent="formToggle = !formToggle">
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form autocomplete="off">
              <h2>Create an Account</h2>
              <input
                type="text"
                v-model="formValues.username"
                name="username"
                placeholder="Username"
              />
              <p class="formError" v-show="formErrors.username">
                {{ formErrors.username }}
              </p>
              <input
                type="email"
                v-model="formValues.email"
                placeholder="Email Id"
                name="email"
              />
              <p class="formError" v-show="formErrors.email">
                {{ formErrors.email }}
              </p>
              <input
                type="password"
                v-model="formValues.password"
                placeholder="Create Password"
                name="password"
              />
              <p class="formError" v-show="formErrors.password">
                {{ formErrors.password }}
              </p>

              <input
                type="password"
                v-model="formValues.confirmPassword"
                placeholder="Confirm Password"
                name="password"
              />
              <input
                type="submit"
                value="Sign Up"
                @click.prevent="submitForm"
              />
              <p class="signup">
                Already have an account ?
                <button @click.prevent="formToggle = !formToggle">
                  Sign In
                </button>
              </p>
            </form>
          </div>
          <div class="imgBx">
            <img
              src="https://images.unsplash.com/photo-1628972799193-1a6be77e183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formToggle: true,
      formValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      formErrors: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validateForm: function () {
      let errorMessages = {};
      const { username, email, password, confirmPassword } = this.formValues;
      if (!email)
        errorMessages = {
          ...errorMessages,
          email: "email field is required",
        };
      if (!password)
        errorMessages = {
          ...errorMessages,
          password: "email field is required",
        };
      if (this.formToggle) {
        if (!username)
          errorMessages = {
            ...errorMessages,
            username: "Username field is required",
          };
        if (password !== confirmPassword) {
          errorMessages = {
            ...errorMessages,
            password: "Password does not match",
          };
        }
      }
      if (Object.keys(errorMessages)) {
        this.formErrors = errorMessages;
      } else {
        this.formErrors = null;
      }
      return Object.keys(errorMessages).length;
    },
    submitForm: async function () {
      let route = "register";
      if (!this.formToggle) route = "login";
      if (this.validateForm() > 0) return;
      try {
        const res = await axios.post(
          `http://localhost:5000/api/v1/auth/${route}`,
          {
            username: this.formValues.username,
            password: this.formValues.password,
            email: this.formValues.email,
          }
        );
        localStorage.setItem("auth_token", res.data.token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.formError {
  font-size: 10px;
  color: red;
}
section {
  position: relative;
  min-height: 100vh;
  background: #fee648;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.container {
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #ff0;
  transition: 0.5s;
}
.container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}
.container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
.container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}
.container .user .formBx form input[type="submit"] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}
.container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #000;
  text-transform: uppercase;
  font-weight: 300;
}
.container .user .formBx form .signup button {
  font-weight: 600;
  text-decoration: none;
  color: #000;
  background: transparent;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
}
.container .signupBx {
  pointer-events: none;
}
.active .signupBx {
  pointer-events: initial;
}

.container .signupBx .formBx {
  left: 100%;
}
.active .signupBx .formBx {
  left: 0;
}
.container .signupBx .imgBx {
  left: -100%;
}
.active .signupBx .imgBx {
  left: 0;
}

.container .signinBx .formBx {
  left: 0;
}
.active .signinBx .formBx {
  left: 100%;
}
.container .signinBx .imgBx {
  left: 0;
}
.active .signinBx .imgBx {
  left: -100%;
}

@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }
  section .container .imgBx {
    display: none;
  }
  section .container .user .formBx {
    width: 100%;
  }
}
</style>
