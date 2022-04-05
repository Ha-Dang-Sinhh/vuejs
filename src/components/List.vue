<template>
  <div>
    <Item @id="getId" :data = "products" />
    <Check :dataCheck = "products" />
    {{id}}
  </div>
</template>

<script>
import Item from './Item';
import Check from './Check ';

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'PS5',
          isChecked: false
        },
        {
          id: 2,
          name: 'PS4',
          isChecked: false
        },
        {
          id: 3,
          name: 'PS3',
          isChecked: false
        }
      ],
      checkId: null,
      id:0,
    }
  },
  props:{

  },
  components: {
    Item,
    Check,
  },
  methods:{
    getId(id) {
      alert('Xác nhận mã sản phẩm mới là: ' + id)
      let checkedProduct = this.products.find(item => item.id === id)
      checkedProduct.isChecked = true;
    }
  },
  mounted() {
    console.log('đã mount Item');
  }
}
</script>

<style>
</style>
