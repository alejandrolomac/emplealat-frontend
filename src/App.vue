<template>
  <Header />

  <router-view :key="$route.path" />

  <Footer />
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
//import Home from './views/home.vue'

export default {
  name: 'Emplealat-Web',
  components: {
    Header,
    Footer
  }
}
</script>
