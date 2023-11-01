<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import request from './utils/request'

const store = useUserStore()

const getUser = () => {
  // axios.request({
  //   url: 'patient/myUser',
  //   method: 'get'
  // })
  const options = {
    method: 'get',
    data: {
      test: 1
    }
  }
  request('patient/myUser', options)
}

// 测试登录
const login = () => {
  // axios
  //   .request({
  //     url: 'login/password',
  //     method: 'post',
  //     data: {
  //       mobile: '13211112222',
  //       password: 'abc12345'
  //     }
  //   })
  //
  const options1 = {
    method: 'POST',
    data: {
      mobile: '13211112222',
      password: 'abc12345'
    }
  }

  request('login/password', options1)
    .then((res) => {
      console.log('成功', res)
    })
    .catch((err) => {
      console.log('失败', err)
    })
}
</script>

<template>
  <div>
    App{{ store.user }}
    <van-button
      type="primary"
      @click="
        store.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '1'
        })
      "
      >登录</van-button
    >
    <van-button type="primary" @click="store.delUser()">退出</van-button>
    <van-button @click="getUser">获取用户信息</van-button>
    <van-button @click="login">接口登录</van-button>
  </div>
</template>

<style scoped lang="scss"></style>
