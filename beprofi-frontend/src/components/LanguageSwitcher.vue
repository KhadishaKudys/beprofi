<template>
  <div class="relative">
    <button
    type="button"
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17" width="30" height="16"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" >
        <li>
          <a
            href="#"
            @click.prevent="setLocale('ru')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img src="../assets/static/icons/header-footer/locales/flag_ru.png" alt="english flag" width="30px">
            <span class="ml-2">{{ $t('main.languages[1].title') }}</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('kz')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img src="../assets/static/icons/header-footer/locales/flag_kz.png" alt="english flag" width="30px">
            <span class="ml-2">{{ $t('main.languages[0].title') }}</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('en')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img src="../assets/static/icons/header-footer/locales/flag_en.png" alt="english flag" width="30px">
            <span class="ml-2">{{ $t('main.languages[2].title') }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      console.log(locale)
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .3s ease-in-out;
    position: absolute;
  }

  ul{
      position: absolute;
      z-index: 1;
      right: 112px;
      width: fit-content;
      margin-top: 5px;
      padding: 10px 5px;
      border-radius: 5px;
      box-shadow: 0px 20px 50px 2px rgba(0, 0, 0, 0.05);
      background: white;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }

  a{
      color: black;
  }

  a:hover{
      text-decoration: none;
      color: #FF3D33;
  }

  ul{
      list-style: none;
  }

  button{
      border: none;
      overflow: hidden;
      outline: none;
      border-radius: 5px;
      background: white;
      width: fit-content;
  }

  @media screen and (max-width:800px) {
    ul{
      left: 0px;
    }
    
  }
</style>
