<template>
  <div id="main">
    <Header />

    <div class="container pos-relative d-flex">
      <NavBar />

      <MainContent />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import NavBar from './components/NavBar';
  import MainContent from './components/MainContent';

  export default {
    name: 'App',

    components: {
      Header,
      NavBar,
      MainContent
    }
  }
</script>

<style lang="scss">
  #main {
    height: 100%;

    .container {
      height: 100%;
      max-width: 1920px;
      max-height: calc(100% - var(--header-height));
      margin-inline: auto;
    }
  }
</style>
