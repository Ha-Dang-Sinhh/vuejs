<script>
export default {
  data() {

    return{
      datas:[],
      message:'',
      messageEdit:'',
      show:false,
    }
  },
  methods: {
    addTodo(){
      if(this.message!=''){
        this.datas.push(this.message)
      }else{
        alert('nhập vào rồi mới submit ok');
      }
      this.message='',
      console.log(this.datas)
    },
    removeItem(index){
      this.datas.splice(index,1);
    },
    editTodo(index){
      if(this.messageEdit!=''){
        this.datas.splice(index,1,this.messageEdit);
        console.log(this.messageEdit);
      }
      this.messageEdit=''
    }
  }
}

</script>

<template lang="">
    <div>
        <input type="text" v-model="message" placeholder="edit me">
        <button @click="addTodo()">Add</button>
        <div v-for="(item,index) in datas" :key="index">
          {{item}}
          <button @click="removeItem(index)">Xóa</button>
          <button v-on:click="show = !show" >Sửa</button>
          <div v-if="show">
            <input v-model="messageEdit" type="text"/>
            <button v-on:click="show = !show" @click="editTodo(index)">Sửa</button>
          </div>
        </div>
    </div>
</template>

<style lang="">
button{
  margin-left:50px;
}
</style>
