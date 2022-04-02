<template>
<div class="content">
  <div class="wrapper">
    <Header />
  <div class="container mx-auto">
    <router-view/>
  </div>
  </div>
  <Footer />
</div>
  
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer }
}
</script>

<style>

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper {
  flex: 1 0 auto;
}
</style>

