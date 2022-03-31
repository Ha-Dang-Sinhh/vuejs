<script>
export default {
  data() {
    return {
      dataImages:[
        'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-nen-vu-tru-khong-gian-lap-lanh-1.jpg',
        'https://i.pinimg.com/236x/99/7f/76/997f763e9cb0eb89a3d5b8383d1cbf4c.jpg',
        'https://i.pinimg.com/236x/f5/3c/75/f53c7589b1d2aca84bc8563299e1998f.jpg',
        'https://i.pinimg.com/236x/e7/ef/6b/e7ef6b4045edd873930f331611ed9da6.jpg',
        'https://i.pinimg.com/236x/54/e8/74/54e874236745818d6a4bbb8c32d308a8.jpg',
        'https://i.pinimg.com/236x/df/0c/fe/df0cfefd921415ec43023b10026b9604.jpg',
      ],
      img:'',
      show:false,
    }
  },
  methods: {
    seenImg(index){
      this.img=this.dataImages[index];
      console.log(this.img);
      this.show = !this.show;
    },
    mounted:function() {
      document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          this.show = !this.show;
        }
      });
    }
  },
}

</script>

<template lang="">
    <div class="wrapper">
        <div class="image" @click="seenImg(index)" v-for="(img,index) in dataImages" :key="index" >
          <img :src="img" />
        </div>
        <div v-if="show" class="showImg" @keydown.esc="closeModalLogin(event)">
            <span @click="show = !show">close</span>
            <img :src="img" />
        </div>
    </div>
</template>

<style lang="">
.wrapper{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image{
  width:400px;
  height:400px;
  margin:10px;
}
  img{
    width:300px;
    height:300px;
    object-fit: cover;
  }

  .showImg{
    position:fixed;
    width:100vw;
    height:100vh;
    background: rgba(128, 128, 128, 0.7);
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
  }
.showImg img{
  width:100vh;
  height:80vh;
  object-fit: cover;
  opacity:1;
}

.showImg span{
  width:80px;
  height:40px;
  text-align: center;
  font-size:18px;
  background:#fff;
  position:absolute;
  right:10px;
  top:10px;
}
</style>
