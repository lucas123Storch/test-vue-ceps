<template>
  <li class="addressitem">
    <div class="addressitem__wrapper w-90 h-100 d-flex align-items-center">

      <figure class="addressitem__placeicon">
        <img src="../assets/icons/icone-lugar.svg" alt="icone lugar" class="w-90" />
      </figure>

      <div class="addressitem__content d-flex justify-content-center justify-content-md-space-between">
        <div class="addressitem__content__addressinfo d-flex flex-column">
          <address class="addressitem-name">
            {{ endereco }}
          </address>

          <address class="address-city">
            {{ address.localidade }} - {{ address.uf }}
          </address>
        </div>

        <div class="addressitem__content__cepvalue">
          {{ address.cep }}
        </div>
      </div>

      <div class="addressitem__removeaddress">
        <a @click.prevent="handleRemoveAddress" href="javascript:void(0);" title="Remover este endereço" role="button">
          <figure>
            <img src="../assets/icons/icone-lixo.svg" alt="icone lixo" />
          </figure>
        </a>
      </div>

    </div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';

  import replacers from '../utils/replacers';

  export default {
    name: "AddressItem",

    props: {
      address: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      }
    },

    methods: {
      ...mapActions([
        'removeAddress'
      ]),

      handleRemoveAddress () {
        const { cep } = this.address;

        this.removeAddress(cep);
      }
    },

    computed: {
      endereco () {
        let { logradouro, bairro } = this.address;

        return [logradouro, bairro]
          .reduce((acc, cur) => {
            if (cur) {
              const replaced = cur
                .split(/\s+/g)
                .map(item => replacers[item.toLowerCase()] || item)
                .join(' ');

              return [...acc, replaced];
            }

            return acc;
          }, [])
          .join(', ');
      }
    },

    filters: {
      onlyNumbers (value) {
        return value.replace(/\D+/g, '');
      }
    }
  }
</script>

<style lang="scss">
  .addressitem {
    height: 120px;
    margin: 0 0 19px;
    border-radius: 8px;
    box-shadow: 0px 4px 20px #20272c1a;

    &__wrapper {
      padding: 12px 20px;
    }

    &__placeicon {
      width: 30px;
    }

    &__content {
      flex: 1;
      height: 100%;
      padding: 0 20px;

      &__cepvalue,
      &__addressinfo .address-city {
        font: normal 400 1rem / 1.375rem "Open Sans", sans-serif;
      }

      &__addressinfo {
        .addressitem-name {
          color: var(--gray5);
          font: normal 700 1rem / 1.6875rem "Open Sans", sans-serif;
        }

        .address-city {
          color: var(--black1);
        }
      }

      &__cepvalue {
        color: var(--purple2);
      }
    }

    @media (max-width: 767px) {
      &__content {
        flex-direction: column;
      }
    }

    @media (min-width: 768px) {
      &__content {
        align-items: center;
      }
    }
  }
</style>