const app = new Vue(
{
    el: "#root",

    data:{
        newItem:"",
        todos:[
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            {
                text: 'comprare il pane',
                done: true
            },
            {
                text: 'comprare il latte',
                done: true
            }
        ]
    },
    
    methods:{
        add: function(item){
            this.todos.push({
                text:item,
                done: false
            });
            this.newItem=""
        }
    }
});