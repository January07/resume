<script setup lang="ts">
import Divider from './Divider.vue'
</script>

<template>
  <header class="masthead text-white" id="home">
    <div class="container">
      <img class="masthead-avatar mb-3" src="/src/assets/images/masthead/avatar.png" alt="avatar">
      <h1 class="mb-0 focus-in">
        <span>&lt;b&gt;</span>
        Hello
        <span>&lt;/b&gt;</span>
        <br>
        <span>I'm YiChun,</span>
        Web Developer
      </h1>
      <Divider v-bind:color="'white'" />
      <p class="mb-0 focus-in delay">Front-End Developer - Back-End Developer - Android Developer</p>
      <div class="mt-4 focus-in delay">
        <a class="btn btn-outline-light border-2" href="/resume/王逸竣_Resume.pdf" download="王逸竣_Resume">
          <i class="fas fa-download me-2"></i>
          Download CV
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.masthead {
  background-color: $light-green;
  padding-top: 10rem;
  padding-bottom: 6rem;

  h1,
  p,
  a {
    font-weight: 700;
    font-size: 1.65rem;

    span {
      color: $light-blue;
    }
  }

  p,
  a {
    font-size: 1.05rem;
  }

  .masthead-avatar {
    width: 13rem;
  }

  .focus-in {
    animation-name: focus-in;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530);
    animation-fill-mode: both;
  }

  .delay {
    animation-delay: 0.5s;
  }

  .btn-outline-light:hover {
    color: $light-blue;
  }
}

@media (min-width: 992px) {
  .masthead {
    h1 {
      font-size: 3.75rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}
</style>