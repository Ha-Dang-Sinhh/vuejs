<script>
export default {
    data(){
        return {
            count: 0,
            number: 100,
            user:{
                name: "Sinhprovip",
                age: 20,
            }
        }
    },
    methods: {
        increase(){
            this.number++;
            return number;
        },
        decrease(){
            this.number--;
            return number;
        }
    },
    computed: {
        nameOfUser(){
            const {name} = this.name;
            return name;
        }
    },
    watch:{
        numberCounter(newValue,oldValue){
            console.log(newValue);
            console.log(oldValue);
        }
    }
}
</script>

<template lang="">
    <div>
        <button @click="count++">Count is: {{ count }}</button>
        <span >{{number}}</span>
        <button @click="increase()" type="">increase</button>
        <button @click="decrease()" type="">decrease</button>
<!--        <h2>{{nameOfUser}}</h2>-->
<!--        <h2>{{user.name}}</h2>-->
    </div>
</template>

<style lang="">
    button {
        font-weight: bold;
    }
</style>
