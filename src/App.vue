<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="items">
            <h3 >Sản Phẩm</h3>
          </div>
          <div v-for="(item,index) in datas" :key="index">
            <div class="card mb-3 mt-3 card-item" style="max-width: 100%;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="item.thumb" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.description }}</p>
                    <span>{{item.releaseData | formatDate}}</span>
                    <ul >
                      <li v-for="(color,id) in item.colors" :key="id" :class="color.key" ></li>
                    </ul>
                    <div>
                      <span v-if="item.badge == true">Sản phẩm bán chạy</span>
                      <span v-if="item.badge == false">Sản phẩm cùi pắp</span>
                    </div>
                  </div>

                </div>
                <div class="col-md-2">
                  <div class="product-btn">
                    <button type="button" @click="addToCart(index)" :disabled="item.amountProducts == 0">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Cart</h3>
          <div v-for="(itemCart,id) in carts" :key="id">
            <div class="card mb-3 mt-3 card-item" style="max-width: 100%;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="itemCart.thumb" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">{{itemCart.name}}</h5>
                    <p class="card-text">{{itemCart.description}}</p>

                    <div class="amountCart-btn">
                      <button type="button" @click="itemCart.amountCart--" :disabled="itemCart.amountCart == 1">-</button>
                      <span>{{itemCart.amountCart}}</span>
                      <button type="button" @click="itemCart.amountCart++">+</button>
                    </div>
                    <div>
                      <span v-if="itemCart.badge == true">Sản phẩm bán chạy</span>
                      <span v-if="itemCart.badge == false">Sản phẩm cùi pắp</span>
                    </div>
                  </div>

                </div>
                <div class="col-md-2">
                  <div class="product-btn">
                    <button type="button" @click="removeToCart(id)">Remove to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      datas:[
        {
          id:0,
          name:"Sinh Pro Vip",
          releaseData:"4-2-2020",
          sellingProducts:true,
          branch:'LV',
          description:"lorem ipsum dolor sit amet, consectetur",
          thumb:"https://i.vietgiaitri.com/2020/10/22/7-tieu-chuan-ngoai-hinh-cua-mot-idol-k-pop-muon-dat-du-chang-khac-gi-thi-hoa-hau-3d3-5317083.jpg",
          colors:[
            // 'blue','red','yellow','gray'
            {
              key:'blue',
              img:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
            },
            {
              key:'red',
              img:'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
            },
            {
              key:'yellow',
              img:'https://vieclamthemonline.com/wp-content/uploads/2021/10/hinh-anh-co-gai-cute-1-819x1024.jpg',
            },
            {
              key:'gray',
              img:'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg',
            },
          ],
          badge : true,
          amountProducts:300,
          amountCart :1,
        },
        {
          id:2,
          name:"Sinh Pro Vip",
          releaseData:"4-2-2020",
          sellingProducts:true,
          branch:'LV',
          description:"lorem ipsum dolor sit amet, consectetur",
          thumb:"https://i.vietgiaitri.com/2020/10/22/7-tieu-chuan-ngoai-hinh-cua-mot-idol-k-pop-muon-dat-du-chang-khac-gi-thi-hoa-hau-3d3-5317083.jpg",
          colors:[
            // 'blue','red','yellow','gray'
            {
              key:'blue',
              img:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
            },
            {
              key:'red',
              img:'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
            },
            {
              key:'yellow',
              img:'https://vieclamthemonline.com/wp-content/uploads/2021/10/hinh-anh-co-gai-cute-1-819x1024.jpg',
            },
            {
              key:'gray',
              img:'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg',
            },
          ],
          badge : true,
          amountProducts:20,
          amountCart :1,
        },
        {
          id:3,
          name:"Sinh Pro Vip",
          releaseData:"4-2-2020",
          sellingProducts:false,
          branch:'LV',
          description:"lorem ipsum dolor sit amet, consectetur",
          thumb:"https://i.vietgiaitri.com/2020/10/22/7-tieu-chuan-ngoai-hinh-cua-mot-idol-k-pop-muon-dat-du-chang-khac-gi-thi-hoa-hau-3d3-5317083.jpg",
          colors:[
            // 'blue','red','yellow','gray'
            {
              key:'blue',
              img:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
            },
            {
              key:'red',
              img:'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
            },
            {
              key:'yellow',
              img:'https://vieclamthemonline.com/wp-content/uploads/2021/10/hinh-anh-co-gai-cute-1-819x1024.jpg',
            },
            {
              key:'gray',
              img:'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg',
            },
          ],
          badge : false,
          amountProducts:0,
          amountCart :1,
        },

      ],
      carts:[],
    }
  },
  methods: {
    addToCart(index){
      this.carts.push(this.datas[index]);
      console.log(this.carts);
    },
    removeToCart(id){
      this.carts.splice(this.carts[id],1);
      console.log(this.carts);
    },
    // hoverColor(color){
    //   console.log(color);
    // }
  },
  components: {

  },
mounted() {

}
}
</script>

<style>
img{
  width:300px;
  height:300px;
  object-fit: cover;
}
ul{
  display:flex;
}
ul li{
  width:30px;
  height:30px;
  border:none;
  border-radius:50px;
  box-sizing: border-box;
  list-style: none;
  margin-left:10px;
}
.blue{
  background:blue;
}
.red{
  background:red;
}
.yellow{
  background:yellow;
}
.gray{
  background:gray;
}
.product-btn{
  height:100%;
  display:flex;
  justify-content: flex-end;
  align-items: center;
}
.product-btn button{
  width:120px;
  border:none;
  border-radius:20px;
  background:blue;
  color:white;
  margin-right:20px

}
.amountCart-btn button{
  width:30px;
  height:30px;
  border:none;
  border-radius:50px;
  background: #b2aeae;
}
</style>
