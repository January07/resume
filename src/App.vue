<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navigation from './components/Navigation.vue'
import Menu from './components/Menu.vue'
import Masthead from './components/Masthead.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Skill from './components/Skill.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <Menu />
  <Masthead />
  <About />
  <Project />
  <Skill />
  <Footer />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  scroll-padding-top: 3rem;
}
</style>