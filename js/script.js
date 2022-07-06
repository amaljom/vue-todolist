const app = new Vue(
{
    el: "#root",

    data:{
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
});