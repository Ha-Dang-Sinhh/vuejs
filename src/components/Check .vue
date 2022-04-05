<template>
  <div>
    <h6>Check</h6>
    <div v-for="(item,index) in dataCheck">
      <h6>{{item.name}}</h6>
      <span>Trạng thái: {{ item.isChecked ? 'Đã xác nhận' : 'Chưa xác nhận' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'dataCheck',
  ],
  components: {

  }
}
</script>

<style>
</style>
