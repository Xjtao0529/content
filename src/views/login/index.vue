<template>
  <div class="login-container">
    <el-form
      class="login-Form"
      ref="LoginForm"
      :model="loginForm"
      :rules="rules"
    >
      <div class="title" style="color: #fff">
        <h3>用户登录</h3>
        <span class="icon"> ICON </span>
      </div>

      <el-form-item class="login-item" prop="username">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input type="password" v-model="loginForm.password" />
      </el-form-item>
      <el-button style="width: 100%" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Avatar } from '@element-plus/icons'
const loginForm = reactive({
  username: '',
  password: ''
})
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  width: 100%;
  height: 100%;
  background-color: $bg;
  position: relative;

  .login-Form {
    width: 500px;
    height: 300px;
    background-color: $bg;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px -250px;

    ::v-deep .el-form-item {
      padding: 0px 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .el-form-item__content {
        display: flex;
        flex-wrap: nowrap !important;
      }
      .el-input__wrapper {
        background-color: transparent !important;
        box-shadow: none;
      }
    }

    .title {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
      .icon {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
