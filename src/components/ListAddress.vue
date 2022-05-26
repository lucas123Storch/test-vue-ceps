<template>
  <ul class="listaddress">
    <AddressItem
      :key="address.cep"
      :address="address"
      v-for="address in list_adress" />
  </ul>
</template>

<script>
  import { mapState } from 'vuex';

  import AddressItem from './AddressItem.vue';

  export default {
    name: "ListAddress",

    components: {
      AddressItem
    },

    computed: {
      ...mapState([
        'list_adress'
      ])
    }
  }
</script>

<style lang="scss">
  .listaddress {
    width: 609px;
    max-width: 100%;

    padding: 46px 0 0;
    border-top: solid 1px var(--gray4);

    @media (max-width: 767px) {
      margin: 0 auto;
    }
  }
</style>