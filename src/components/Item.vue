<template>
  <div>
    <div v-for="(listItem,listIndex) in data">
      <h6>{{listItem.name}}</h6>

      <button @click="_sendId(listItem.id)" :disabled="listItem.isChecked" >Click</button>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'data',
  ],
  components: {

  },
  methods:{
    _sendId(id){
      this.$emit('id',id);
    }
  }
}
</script>

<style>
</style>
