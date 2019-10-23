<template>
  <div class="employer">
    <div class="logo">
      <img alt="logo" src="../assets/logo.png">
    </div>
    <Employer_login msg="Welcome to Supermarket Management System!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Employer_login from '@/components/Employer_login.vue'

export default {
  name: 'employer',
  components: {
    Employer_login
  }
}
</script>
<style>
  .logo{
    width: 200px;
    height: 200px;
    margin:auto;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
