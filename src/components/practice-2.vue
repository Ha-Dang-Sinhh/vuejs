<script>
export default {
  data() {
    return {
      cart: [],
      products: [
        {
          id: 1,
          name: "PS5",
          price: 5555,
          publicDate: "05-05-2021",
          image:
            "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
          hot: true,
        },
        {
          id: 2,
          name: "PS4",
          price: 4444,
          publicDate: "04-04-2021",
          image:
            "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
          hot: true,
        },
        {
          id: 3,
          name: "PS3",
          price: 3333,
          publicDate: "03-03-2021",
          image:
            "https://game.haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg",
          hot: false,
        },
      ],
      paymentMethods: [
        { text: "COD", value: 1 },
        { text: "Banking", value: 2 },
        { text: "Ứng dụng bên thứ 3", value: 3 },
      ],
      selectedPayment: 2,
    }
  },
  methods: {

  },
  computed:{
    hotProducts(){
      return this.products.filter(product => product.hot);
    },
    maxPrice(){
      return Math.max( ...this.products.map(product => product.price));
    },
    mimPrice(){
      return Math.min( ...this.products.map(product => product.price));
    }
  }
}

</script>

<template lang="">
  <div>

    <div v-for="(item,index) in products" :key="index">
        <h6>{{item.name}}</h6>
        <span>{{item.price}}</span>
        <span>{{item.publicDate}}</span>
        <img :src="item.image" alt="">
    </div>
    <h2>Bài 2</h2>
    <div v-for="(product,index) in hotProducts" :key="index">
        h6>{{product.name}}</h6>
        <span>{{product.price}}</span>
        <span>{{product.publicDate}}</span>
        <img :src="product.image" alt="">
    </div>
        <h2>giá đắt nhất {{maxPrice}}</h2>
        <h2>giá đắt rẻ {{minPrice}}</h2>

    </div>
  </div>
</template>

<style lang="">
img{
  width:300px;
}
</style>
