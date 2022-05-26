<template>
  <div id="footer">
      <footer class="site-footer">
        <div class="row">
         <div class="col-xs-6 col-md-3">
            <h5 class="title">{{ $t('footer.contacts') }}</h5>
            <a href="tel:+77756022563">+7 775 602 25 63</a>
            <br><a href="mailto:info@beprofi.org">
             info@beprofi.org
            </a>
          </div>

          <div class="col-xs-6 col-md-3">
              <h5 class="title">{{ $t('footer.information.name') }}</h5>
            <router-link :to="`/${$i18n.locale}/public-offer`"><a>{{ $t('footer.information.terms') }}</a></router-link>
            <br><router-link :to="`/${$i18n.locale}/privacy-policy`"><a>
             {{ $t('footer.information.privacy') }}
            </a></router-link>
          </div>

          <div class="col-xs-6 col-md-3">
              <h5 class="title">{{ $t('portfolio.works') }}</h5>
            <router-link :to="`/${$i18n.locale}/portfolio`"><a>{{ $t('portfolio.name') }}</a></router-link>
          </div>
        </div>
        <div class="line"/>
        <div class="row1">
                <router-link :to="`/${$i18n.locale}/`">
                <img id="logo-mini" src="../assets/static/icons/header-footer/logo/logo-mini.svg"/>
                </router-link>
                <div style="text-align:right; width:100%">
            <p class="title" style="margin-top:4px">{{ $t('footer.information.authority') }}</p>
                </div>
        </div>
      </footer>
    </div>
</template>

<style scoped src='../assets/styles/footer.css'>

</style>