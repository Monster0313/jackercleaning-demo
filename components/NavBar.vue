<template>
  <div id="navbar">
    <nuxt-link to="/">
      <img class="logo" :src="logo" alt="潔客幫Logo">
    </nuxt-link>
    <div class="link-group">
      <nuxt-link class="link" to="/">
        <img :src="home">
        <span>找打掃</span>
      </nuxt-link>
      <nuxt-link class="link" to="/">
        <img :src="business">
        <span>企業清潔</span>
      </nuxt-link>
      <nuxt-link class="link" to="/">
        <span>全部服務</span>
        <img class="arrow" :src="arrowDown">
      </nuxt-link>
      <nuxt-link class="link highlight" to="/">
        <span>成為潔客</span>
      </nuxt-link>
      <nuxt-link class="link" to="/">
        <span>生活知識站</span>
      </nuxt-link>
      <button class="login">
        註冊登入
      </button>
    </div>
    <button class="menu">
      <img :src="menu" alt="Menu">
    </button>
  </div>
</template>

<script>
import Logo from '~/assets/image/logo.png'
import Home from '~/assets/image/home.png'
import Business from '~/assets/image/business.png'
import ArrowDown from '~/assets/image/arrow-down.png'
import Menu from '~/assets/image/menu.png'

export default {
  computed: {
    logo: () => Logo,
    home: () => Home,
    business: () => Business,
    arrowDown: () => ArrowDown,
    menu: () => Menu
  }
}
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.8);
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.2);
  box-sizing: border-box;
  z-index: 1000;
}
.logo {
  height: 50px;
}
.link-group {
  width: 45%;
  min-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.link {
  font-size: 16px;
  font-weight: 500;
  color: #808080;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link > img {
  width: 16px;
}
.link > .arrow {
  width: 10px;
  margin-left: 5px;
}
.highlight {
  color: #36bbd9;
}
.login {
  margin-top: 4px;
  padding: 4px 12px 6px 12px;
  background: none;
  border: solid 2px #36bbd9;
  border-radius: 24px;
  color: #36bbd9;
  font-weight: 500;
  cursor: pointer;
}
.menu {
  display: none;
}

@media screen and (max-width: 400px) {
  #navbar {
    width: 100vw;
    height: 45px;
    background-color: #fff;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .logo {
    width: 190px;
    object-fit: contain;
  }
  .link-group {
    display: none;
  }
  .login {
    display: none;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    padding: 4px;
    border-radius: 6px;
    border: 2px solid #3e4456;
    cursor: pointer;
  }
  .menu > img {
    width: 18px;
  }
}
</style>
