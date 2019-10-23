<template>
  <div class="employer">
    <div class="logo">
      <img alt="logo" src="../assets/logo.png">
    </div>
    <Employee_login msg="Welcome to Supermarket Management System!"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Employee_login from '@/components/Employee_login.vue'

  export default {
    name: 'employee',
    components: {
      Employee_login
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
