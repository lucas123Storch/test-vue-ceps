<template functional>
  <header class="header">
    <div class="header__wrapper d-flex align-items-center justify-content-xs-space-between">

      <a href="#" class="header__logo d-flex align-items-center justify-content-center" title="Surreal São Paulo">
        <figure>
          <img src="../assets/icons/logo.svg" alt="Surreal São Paulo">
        </figure>
      </a>

      <div class="header__storeinfo ms-6 d-xs-none">
        <div class="header__storeinfo__wrapper h-100 px-4 d-flex flex-column justify-content-center">
          <h1 class="name">
            Surreal São Paulo
          </h1>

          <div class="platform">
            VTEX
          </div>
        </div>
      </div>

      <a href="#" class="header__notifications d-none d-sm-flex" title="Aqui você tem acesso as notificações" role="button">
        <figure class="w-90">
          <img src="../assets/icons/icone-bell.svg" alt="icone sino" class="w-90" />
        </figure>
      </a>

      <div class="separator h-100 d-none d-md-block"></div>

      <div class="header__user d-flex d-md-flex">
        <div class="header__user__wrapper d-flex align-items-center">
          <strong class="user-greeting d-none d-md-flex">
            Olá, Lucas
          </strong>

          <figure class="ms-4">
            <img src="../assets/icons/usuario.svg" alt="imagem do perfil do Lucas" class="w-90" />
          </figure>
        </div>
      </div>

    </div>    
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  .header {
    background-color: var(--purple1);

    .separator {
      border: solid 2px transparentize($color: #fff, $amount: .8);
    }

    &__wrapper {
      margin: 0 auto;
      padding: 0 24px;
      height: var(--header-height);
      max-width: var(--limit-content);
    }

    &__logo {
      flex: 0 0 50px;
      @include sizedBox(50px);

      border-radius: 5px;
      background: transparentize($color: #fff, $amount: .8);

      img,
      figure {
        @include sizedBox(27px);
      }
    }

    &__storeinfo {
      flex: 0 1 287px;
      @include sizedBox(287px, 58px);

      &__wrapper {
        color: var(--white);
        border-radius: 10px;
        border: solid 2px var(--white);

        .name {
          font: normal 700 1rem / 1.375rem "Open Sans", sans-serif;
        }

        .platform {
          font: normal 400 .75rem / 1rem "Open Sans", sans-serif;
        }
      }
    }

    &__notifications {
      width: 27px;
      margin: 0 37px 0 auto;
    }

    &__user {
      cursor: pointer;
      margin: 0 0 0 31px;
      color: var(--white);

      &__wrapper {
        .user-greeting {
          font: normal 700 1rem / 1.375rem "Open Sans", sans-serif;
        }

        figure {
          @include sizedBox(54px);
        }
      }
    }

    @media (max-width: 575px) {
      &__user__wrapper figure {
        margin: 0;
      }
    }

    @media (min-width: 768px) {
      &__wrapper {
        padding-right: 56px;
      }
    }
  }
</style>