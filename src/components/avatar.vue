<template>
  <div class="avatar-content" :class="{'avatar-radius': typeof radius != 'undefined' }" :style="{width:width,  height: height }">
    <q-img class="avatar" v-if="src" :src="src"  />
    <q-img class="avatar" v-else :src="type ? img[type] : img.avatar"  />
  </div>
</template>
<script>
export default{
  props: ['src', 'width', 'height', 'radius', 'type'],
  data() {
    return {
      img: {
        avatar: require('src/assets/img/default/avatar.png'),
        photo: require('src/assets/img/default/photo.png'),
      }
    }
  }
}
</script>
<style scoped lang="scss">
.avatar-content{
  display: flex;
  overflow: hidden;
  margin: 0 auto;
}
.avatar-radius{
  border-radius: 50%;
}
.avatar{
  transition: all 0.4s;
}
.avatar:hover{
  transform: scale(1.2);
}
</style>
