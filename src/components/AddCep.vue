<template>
  <div class="addcep">
    <div class="addcep__wrapper">
      <form @submit.prevent="handleFormSubmit" class="addcep__form d-flex flex-column align-items-center flex-md-row justify-content-center justify-content-md-flex-start">

        <input
          name="cep"
          type="text"
          maxlength="9"
          autocomplete="nope"
          inputmode="numeric"
          v-mask="'#####-###'"
          v-model="currentCEP"
          placeholder="Insira o CEP" />

        <button type="submit" class="d-flex align-items-center" :disabled="!isCEPValid || CEPAlreadyExists">
          <figure class="d-flex align-items-center">
            <img src="../assets/icons/icone-plus.svg" alt="icone mais" />
          </figure>

          Adicionar Endereço
        </button>

      </form>

      <span v-if="CEPAlreadyExists" class="alreadyAdded d-block d-md-inline-block py-3">
        CEP já adicionado!
      </span>

      <CepList />

      <div class="addcep__generateaddress d-flex">
        <button  @click="handleAddAddress" class="addcep__generate d-flex align-items-center justify-content-center ms-auto" :disabled="!cepList.length">
          Gerar Endereços
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import CepList from './CepsList';

  export default {
    name: "AddCep",

    components: {
      CepList
    },

    data () {
      return {
        currentCEP: null,
        hasCep: false,
      }
    },

    computed: {
      ...mapState([
        'cepList'
      ]),

      isCEPValid () {
        return /\d{5}-\d{3}/g.test(this.currentCEP);
      },

      CEPAlreadyExists () {
        const { cepList, currentCEP } = this;

        return cepList.includes(currentCEP);
      }
    },

    methods: {
      ...mapActions([
        'includeCEP',
        'fetchCEPList'
      ]),

      handleFormSubmit () {
        this.includeCEP(this.currentCEP);
      },

      handleAddAddress () {
        const { cepList } = this;

        this.fetchCEPList(cepList);
      }
    },

    watch: {
      cepList () {
        this.currentCEP = null;
      }
    }
  }
</script>

<style lang="scss">
  .addcep {
    &__form {
      input[name="cep"],
      button[type="submit"] {
        max-width: 100%;
        border-radius: 10px;
        @include sizedBox(292px, 52px);
      }

      input[name="cep"] {
        color: var(--gray3);
        font: normal 400 1rem / 1.375rem "Open Sans", sans-serif;

        padding: 15px 16px;
        border: solid 2px var(--gray2);
      }

      button[type="submit"] {
        cursor: pointer;
        padding: 15px 30px;

        color: var(--white);
        font: normal 700 1rem / 1.375rem "Open Sans", sans-serif;

        border: 0 none;
        background-color: var(--purple2);

        figure {
          margin: 0 16px 0 0;
        }
      }
    }

    &__generateaddress {
      margin: 54px 0 56px;

      button {
        border: 0 none;
        max-width: 100%;
        border-radius: 10px;
        @include sizedBox(292px, 52px);
        background-color: var(--purple2);

        cursor: pointer;
        color: var(--white);
        font: normal 700 1rem / 1.375rem "Open Sans", sans-serif;
      }
    }

    .alreadyAdded {
      flex: 1;
      padding: 16px 0;
      text-align: center;
      color: var(--red1);
      font: 600 1rem / 1rem "Open Sans", sans-serif;
    }

    @media (max-width: 767px) {
      &__form button[type="submit"] {
        margin: 24px 0 0;
      }

      &__generateaddress {
        button {
          margin: 0 auto;
        }
      }
    }

    @media (min-width: 768px) {
      &__form {
        input[name="cep"],
        button[type="submit"] {
          flex: 0 1 292px;
        }

        button[type="submit"] {
          margin: 0 0 0 24px;
        }
      }

      &__generateaddress {
        max-width: calc(293px * 2 + 24px);
      }
    }
  }
</style>