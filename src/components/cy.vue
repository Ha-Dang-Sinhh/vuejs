<script>
export default {
    data() {
    return {
      count: 0
    }
  }
}

</script>

<template lang="">
    <div>
        <img src="./../assets/logo.png" alt="">
        <button @click="count++">Count is: {{ count }}</button>
    </div>
</template>

<style lang="">
    button {
        font-weight: bold;
    }
</style>
