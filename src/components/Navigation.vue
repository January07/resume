<script setup lang="ts">
const scroll = () => {
  if (window.innerWidth < 992) {
    document.querySelector('button')?.click()
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="nav">
    <div class="container">
      <a class="navbar-brand" href="">
        YiChun
        <br>
        Developer
      </a>
      <!-- Mobile -->
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" v-on:click="scroll">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" @click="scrollToSection('home')">HOME</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" @click="scrollToSection('about')">ABOUT</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" @click="scrollToSection('project')">PROJECT</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" @click="scrollToSection('skill')">SKILL</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#nav {
  background-color: $light-blue;
  font-weight: 700;

  a {
    color: white;
  }

  button {
    background-color: $light-green;
  }

  .navbar-brand {
    font-size: 1.75em;
  }

  button[aria-expanded="false"] {
    box-shadow: none;
  }

  #navbarNav {
    a {
      cursor: pointer;
    }

    a:hover {
      color: $light-green;
    }
  }
}

@media (max-width: 992px) {
  #nav {
    br {
      display: none;
    }

    #navbarNav {
      a {
        text-align: left;
      }
    }
  }
}
</style>