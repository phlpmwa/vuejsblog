new Vue({
    el:"#vue-app",
    data:{
     name:'Philip',
     job:'Ninja',
        website:'https://laravel.com/',
        websiteTag:'<a href="https://laravel.com/">Laravel website</a>'
    },
    methods:{
 greet:function(time){
     
     return 'Good '+time+' '+ this.name;
 }
    }
   
    
})