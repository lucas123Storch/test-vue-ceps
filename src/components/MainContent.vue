<template>
  <main class="main">

    <AddCep />

    <ListAddress />

  </main>
</template>

<script>
  import AddCep from "./AddCep";
  import ListAddress from './ListAddress';

  export default {
    name: "MainContent",

    components: {
      AddCep,
      ListAddress
    }
  }
</script>

<style lang="scss">
  .main {
    height: 100%;
    flex: 1 0 100%;

    overflow-x: initial;
    overflow-y: auto;

    @media (max-width: 767px) {
      max-width: 100%;
      padding: 41px 24px var(--mobile-aside-height);
    }

    @media (min-width: 768px) {
      padding: 41px 47px 0;
      max-width: calc(100% - var(--desktop-aside-width));
      flex: 1 1 calc(100% - var(--desktop-aside-width));
    }
  }
</style>