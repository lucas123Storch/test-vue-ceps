<template functional>
  <aside class="asidetools pos-fixed pos-md-relative">
    <div class="asidetools__wrapper d-flex align-items-center justify-content-space-between h-100 flex-md-column">

      <ul class="asidetools__items d-flex align-items-center flex-md-column">
        <li class="search h-100">
          <a href="javascript:void(0);" class="d-flex w-90 h-90">
            <figure class="w-90">
              <img src="../assets/icons/icone-busca.svg" alt="icone lupa" class="w-90" />
            </figure>
          </a>
        </li>

        <li class="files h-100">
          <a href="javascript:void(0);" class="w-90 h-100">
            <figure class="w-90 h-100 d-flex align-items-center">
              <img src="../assets/icons/icone-folder.svg" alt="icone pasta de arquivos" class="w-90" />
            </figure>
          </a>
        </li>
      </ul>

      <a href="javascript:void(0);" role="button" class="asidetools__settings d-block">
        <figure class="w-90 h-100 d-flex align-items-center justify-content-center">
          <img src="../assets/icons/icone-ajuste.svg" alt="icone ajuste" />
        </figure>
      </a>

    </div>
  </aside>
</template>

<script>
  export default {
    name: "AsideTools"
  }
</script>

<style lang="scss">
  .asidetools {
    left: 0;
    bottom: 0;
    background-color: var(--gray1);

    &__wrapper {
      padding-inline: 24px;
    }

    &__settings {
      border-radius: 10px;
      @include sizedBox(50px);
      background-color: var(--black1);
    }

    @media (max-width: 767px) {
      left: 0;
      bottom: 0;
      @include sizedBox(100%, var(--mobile-aside-height));

      &__items {
        width: auto;
        height: 33px;

        > li {
          width: 33px;

          + li {
            margin-left: 24px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      @include sizedBox(var(--desktop-aside-width), 100%);

      &__wrapper {
        padding: 60px 11px 21px;
      }

      &__items {
        width: 33px;

        > li {
          width: 100%;

          + li {
            margin-top: 24px;
          }
        }
      }

      &__settings {
        @include sizedBox(74px, 75px);
      }
    }
  }
</style>