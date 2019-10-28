<template>
  <div class='container'>
    <Header></Header>
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Nav,
    Header,
    Footer
  }
}
</script>
