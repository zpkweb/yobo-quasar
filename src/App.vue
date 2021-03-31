<template>
  <div id="q-app">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="!loading">
        <router-view />
      </div>
    </transition>
    <q-inner-loading :showing="loading">
      <q-spinner
        color="brand"
        size="50px"
        :thickness="5"
      />
    </q-inner-loading>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   name: 'App',
//   meta: {
//     title: 'yobo'
//   }
// })

export default {
  data() {
    return {
      loading: true,
    };
  },
  created() {
    console.log("app created", this.loading);
    this.loading = false;
    setTimeout(()=>{
      this.loading = false;
    }, 2000)
  },
};
</script>
