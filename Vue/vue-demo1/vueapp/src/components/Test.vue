<template>
    <div class="test">
        <input type="text" v-model="title"><br />
        <h1>{{title}}</h1>
        <span v-html="title1"></span>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>
        <p v-text="user.firstName"></p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('Hello World11')">Say Greeting</button>
        <br>
        <input type="text" v-on:keyup="preesKey" v-on:keyup.enter="enterHit">
        <hr>
        <label>firstName</label><input type="text" v-model="user.firstName">
        <br>
        <label>lastName</label><input type="text" v-model="user.lastName">
        <br>
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>
 
<script>
 
export default {
    name: 'test',
    props: {
        msg:{
            type: String,
            default: 'Foolbar'
        }
    },
    data(){
        return {
            title: 'Hello world',
            title1:'<h1>Html title</h1>',
            user:{
                firstName:'John',
                lastName:'Doe'
            },
            showName: true,
            items: [
                {title: 'Item One'},
                {title: 'Item Two'},
                {title: 'Item three'}
 
            ]
        }
    },
    methods:{
        greet: function(greeting){
            alert(greeting);
        },
        preesKey: function(e){
            console.log(e.target.value);
        },
        enterHit: function(){
            console.log('You hit enter');
        }
    },
    computed: {
        fullName: function(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    }
}
</script>
 
<style scoped>
 
</style>