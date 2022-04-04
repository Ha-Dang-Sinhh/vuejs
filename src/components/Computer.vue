<script>
export default {
  data() {
    return {
      datsNumbers: [],
      number:'00',
      count:'0',
      result:'',
      calculation:'',
    }
  },
  methods: {
    getNumber(event){
      this.number=this.number+event.target.value;
      this.count=this.count+event.target.value;
    },
    multiplication(event){
      this.count=this.count+event.target.value;
      this.datsNumbers.push(Number(this.number));
      this.calculation = event.target.value;
      this.number = '';
    },
    division(event){
      this.count=this.count+event.target.value;
      this.datsNumbers.push(Number(this.number));
      this.calculation = event.target.value;
      this.number = '';
    },
    summation(event) {
      this.count=this.count+event.target.value;
      this.datsNumbers.push(Number(this.number));
      this.calculation = event.target.value;
      this.number = '';
    },
    subtraction(event) {
      this.count=this.count+event.target.value;
      this.datsNumbers.push(Number(this.number));
      this.calculation = event.target.value;
      this.number = '';
    },
    getResult(){
      this.datsNumbers.push(Number(this.number));
      this.number = '';
      if(this.calculation=='x'){
        let counter = 1;
        this.datsNumbers.map((num,id)=>{
          counter *= num;
        });
        this.result = counter;
        this.datsNumbers=[];
        console.log(counter);
      }else if(this.calculation=='/'){
        let counter = 1;
        this.datsNumbers.map((num,id)=>{
          counter /= num;
        });
        this.result = counter;
        this.datsNumbers=[];
        console.log(counter);
      }else if(this.calculation=='+'){
        let counter = 0;
        this.datsNumbers.map((num,id)=>{
          counter += num;
        });
        this.result = counter;
        this.datsNumbers=[];
        console.log(counter);
      }else if(this.calculation=='-'){
        let counter = 0;
        for (let i=1;i<this.datsNumbers.length;i++){
          counter = this.datsNumbers[0] - this.datsNumbers[i];
        };
        this.result = counter;
        this.datsNumbers=[];
        console.log(counter);
      };

      this.datsNumbers=[];
      this.count='0';
    },
    remove(){
      this.count='0';
      this.number = '';
      this.datsNumbers=[];
    }
  },
  computed:{

  }
}

</script>

<template lang="">
  <div class="wrapper">
        <div id="output">
          <p>{{count}}</p>
          <p>Kết quả :{{result}}</p>
        </div>

    <div class="first-row">
       <button @click="remove()">C</button>
       <button>%</button>
       <button @click="division($event)" value="/">/</button>
    </div>
    <div class="second-row">
       <button @click="getNumber($event)" value="7">7</button>
       <button @click="getNumber($event)" value="8" >8</button>
       <button @click="getNumber($event)" value="9" >9</button>
       <button @click="multiplication($event)" value="x">X</button>
    </div>
    <div class="third-row">
       <button @click="getNumber($event)" value="4" >4</button>
       <button @click="getNumber($event)" value="5" >5</button>
       <button @click="getNumber($event)" value="6" >6</button>
       <button @click="subtraction($event)" value="-">-</button>
    </div>
    <div class="fourth-row">
       <button @click="getNumber($event)" value="1" >1</button>
       <button @click="getNumber($event)" value="2" >2</button>
       <button @click="getNumber($event)" value="3" >3</button>
       <button @click="summation($event)" value="+" >+</button>
    </div>
    <div class="fifth-row">
      <button @click="getNumber($event)" value="0" >0</button>
      <button >.</button>
      <button @click="getResult()">=</button>
    </div>
  </div>
</template>

<style lang="">
.wrapper{
  width:500px;
  height:700px;
  boder:1px solid black;
  margin:auto;
}
#output{
  width:300px;
  height:100px;
  background-color: rgb(194, 194, 194);

  padding-right:10px;
  font-size:28px;
}
.display {
  background-color: rgb(201, 201, 201);
  padding: 15px;
  width: 250px;
  text-align: right;
  font-size: 20px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
}
button {
  padding: 10px;
  width: 67px;
  height: 45px;
  margin-top: 10px;
  background-color: rgb(194, 194, 194);
  color: black;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  cursor: pointer;
  background-color: rgb(182, 178, 178);
}
button:active {
  background-color: rgb(136, 136, 136);
}
</style>
