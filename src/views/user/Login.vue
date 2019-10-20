<template>
  <div class="main">
    <a-form id="formLogin" :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
        >Remember me</a-checkbox>
        <a class="login-form-forgot" href>Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
        <a href>register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import md5 from "md5";
import { mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    ...mapActions(["Login", "Logout"]),
    handleSubmit(e) {
      e.preventDefault();
      const { Login } = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          let { username, password } = values;
          password = md5(password);
          Login({ username, password }).then(res => this.loginSuccess(res));
        }
      });
    },
    loginSuccess(res) {
      console.log(res);
      // check res.homePage define, set $router.push name res.homePage
      // Why not enter onComplete
      /*
      this.$router.push({ name: 'analysis' }, () => {
        console.log('onComplete')
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      })
      */
      this.$router.push({ path: "/" });
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: "欢迎",
          description: `欢迎回来`
        });
      }, 1000);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
