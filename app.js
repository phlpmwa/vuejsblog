new Vue({
    el:"#vue-app",
    data:{
     age: "",
     name:""
    },
    methods:{
        LogName:function()
        {
            
            console.log('you entered your name');
        },
        logAge:function()
        {
            console.log('you entered your age');
        }
        }
        });