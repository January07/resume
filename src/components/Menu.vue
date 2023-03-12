<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scrollY = ref(window.top?.scrollY)

const changeScrollY = () => {
  scrollY.value = window.top?.scrollY
}

const backTop = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('scroll', changeScrollY)
})
</script>

<template>
  <div class="side-menu">
    <a class="menu-item" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ycWang0107@gmail.com"
      target="_blank" style="color: black">
      <i class="far fa-envelope shake"></i>
    </a>
    <a class="menu-item" href="https://github.com/January07" target="_blank" style="color: #24292f">
      <i class="fab fa-github shake"></i>
    </a>
    <a class="menu-item" href="https://line.me/ti/p/RI1t0XyxYG" target="_blank" style="color: #00b900">
      <i class="fab fa-line shake"></i>
    </a>
    <a class="menu-item" href="tel:+886-971676017" target="_blank" style="color: #4cd863">
      <i class="fas fa-phone-square-alt shake"></i>
    </a>
  </div>
  <div class="back-top" v-if="scrollY !== 0" v-on:click="backTop">
    <i class="fas fa-chevron-circle-up"></i>
  </div>
</template>

<style lang="scss" scoped>
.side-menu {
  width: 47.6px;
  top: 30%;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 100;

  .menu-item {
    font-size: 1.9rem;
    background-color: $light-gray;
    border: 1px solid white;

    .shake:hover {
      animation-name: shake;
      animation-duration: 0.1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}

.back-top {
  right: 2.5%;
  bottom: 7.5%;
  position: fixed;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 100;
}
</style>