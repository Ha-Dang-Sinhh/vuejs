<script>
export default {
    data() {
    return {
      image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      imageAlt: 'ps5 alt',
      product: 'ps5',
      productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
      quantity: 10,
      price: 10000,
      discount: 0.2,
      inStock: true,
      classObject: {
        'bg-green': true,
        'bg-blue': false
      },
      activeClass: 'img',
      // message: ' ',
    }
  },
  methods: {
    discoloration(){
      if(this.inStock == true) {
        this.inStock = "background:green";
      }else {
        this.inStock = "background:blue";
      }
    },
  },
}

</script>

<template lang="">
    <div>
        <div :style="inStock">tên sản phẩm là : {{product}}</div>
        <img :class="activeClass" :src="image" :alt="imageAlt" />
        <button @click="discoloration()">discoloration</button>
<!--        <input v-model="message" placeholder="edit me">-->
<!--        <p>Message is: {{ message }}</p>-->
    </div>
</template>

<style lang="">
  .img{
    width:300px;
    height:300px;
  }
</style>
