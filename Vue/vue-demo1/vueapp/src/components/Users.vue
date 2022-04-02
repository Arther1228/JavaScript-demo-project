<template>
    <div class="users">
        <h1>Users</h1>
        <!-- 通过输入框添加用户 -->
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter Name">
            <br>
            <input type="text" v-model="newUser.email" placeholder="Enter Email">
            <br>
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for='user in users'>
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}:{{user.email}} <button v-on:click="deleteUser(user)">x</button>
                </span>
                
            </li>
        </ul>
        <div>
            <input type="button" @click="get()" value="点我异步获取数据(Get)">
        </div>
    </div>
</template>
 
<script>
 
export default {
    name: 'users',
    data(){
        return {
            newUser:{},
            users: []
        }
    },
    methods:{
        addUser: function(e){
            console.log('add User');//控制台打印输出log
            //将输入的内容添加到用户users中
            this.users.push({
                name: this.newUser.name,
                email: this.newUser.email,
                contacted: false
            });
            e.preventDefault();//添加这句才看到console有输出
        },
        deleteUser: function(user){
            this.users.splice(this.users.indexOf(user),1);//删除用户，indexOf为删除哪个用户，1为删除1条数据
        },
         get:function(){
            //发送get请求
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(res){
                this.users=res.data; 
                console.log(res.data);   
            },function(){
                console.log('请求失败处理');
            });
         }
 
    }
 
}
</script>
 
<style scoped>
    .contacted{
        text-decoration: line-through;
    }
</style>
 
 