new Vue({
    el:"#vue-app",
    data:{
     name:'Philip',
     job:'Ninja'
    },
    methods:{
 greet:function(time){
     
     return 'Good '+time+' '+ this.name;
 }
    }
   
    
})