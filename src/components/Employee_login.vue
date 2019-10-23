<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div class="login">
			<el-card class="login">
				<el-input v-model="id" placeholder="请输入员工账号"></el-input>
				<el-input v-model="pwd" placeholder="请输入员工密码" show-password></el-input>
				<el-button type="success" size="medium" >登陆</el-button>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Employee_login',
		props: {
			msg: String
		},
		data(){
			return{
				id:'',
				pwd:''
			}
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login{
		border-radius: 4px;
		box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		width: 520px;
		height: auto;
		margin: auto;
	}
	.el-input {
		margin-bottom: 20px;
		margin-top: 15px;
	}
	.el-button{
		width: 120px;
	}
</style>

