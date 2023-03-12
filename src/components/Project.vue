<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Divider from './Divider.vue'

const items = ref([
  {
    id: 'card01',
    title: 'CHAT ROOM',
    content: 'This is my first large-scale code refactoring project. The main reason for the refactoring is the change of Api logic and the need to optimize the chat room speed.',
    technology: 'Vue 2 + JavaScript + Vue CLI + Vue Router',
    url: 'https://chat.housetube.tw'
  },
  {
    id: 'card02',
    title: 'MEMBER CENTRE',
    content: 'I rely on the Twig template engine and FastRoute package to complete a simple MVC architecture project. Another feature of the project is the cash flow connection with ECPay.',
    technology: 'Vue 2 + PHP + Twig + FastRoute + ECPay',
    url: 'https://member.housetube.tw'
  },
  {
    id: 'card03',
    title: 'HOUSETUBE APP',
    content: 'Because this project is relatively mature, my job is mainly to maintain and debug the code.',
    technology: 'Android + Kotlin + Retrofit 2 + Groupie',
    url: 'https://play.google.com/store/apps/details?id=com.tainan.housetube&hl=zh_TW'
  },
  {
    id: 'card04',
    title: 'CASE WORK',
    content: 'This is the first commissioned project I accepted. Although the commissioned work is just to maintain and debug the code, it still excites me.',
    technology: 'Slim 3 + PHP + Twig + MySQL',
    url: 'https://jia.homestay.fun'
  },
  {
    id: 'card05',
    title: 'RESUME WEBSITE',
    content: 'I put this website here mainly because it is the project that I spend the most energy on. This is also the crystallization of my years of programming.',
    technology: 'Vue 3 + TypeScript + Vite + SCSS',
    url: ''
  },
  {
    id: 'card06',
    title: 'SELF MADE APP',
    content: 'This is my first application. It contains a complete login and registration system. After logging in, there is a news list inside, which uses the NewsAPI to get the headlines from the API.',
    technology: 'Android + Kotlin + Firebase + Retrofit 2',
    url: 'https://u.pcloud.link/publink/show?code=XZAf4zVZLo50BDzzDUkzRqI2Plf4mb51Np3k'
  }
])

const jumpLink = (url: string): void => {
  window.open(url)
}

onMounted(() => {
  const target = document.querySelectorAll('.item')

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('class', 'item col-md-6 col-lg-4 mb-5 fade-in-bottom')
      }
    })
  }

  const options = {
    threshold: 0.5
  }

  const observer = new IntersectionObserver(callback, options)
  Array.prototype.forEach.call(target, function (item: HTMLElement) {
    observer.observe(item)
  })
})
</script>

<template>
  <section class="text-white" id="project">
    <div class="container">
      <h2 class="mb-0">PROJECT</h2>
      <Divider v-bind:color="'white'" />
      <div class="row justify-content-center">
        <div class="item col-md-6 col-lg-4 mb-5" v-for="(item, index) in items">
          <div class="card mx-auto" data-bs-toggle="modal" v-bind:data-bs-target="'#' + item.id">
            <img class="img-fluid" v-if="index === 0" src="/src/assets/images/project/01.png" v-bind:alt="item.id">
            <img class="img-fluid" v-if="index === 1" src="/src/assets/images/project/02.png" v-bind:alt="item.id">
            <img class="img-fluid" v-if="index === 2" src="/src/assets/images/project/03.png" v-bind:alt="item.id">
            <img class="img-fluid" v-if="index === 3" src="/src/assets/images/project/04.png" v-bind:alt="item.id">
            <img class="img-fluid" v-if="index === 4" src="/src/assets/images/project/05.png" v-bind:alt="item.id">
            <img class="img-fluid" v-if="index === 5" src="/src/assets/images/project/06.png" v-bind:alt="item.id">
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" v-for="(item, index) in items" v-bind:id="item.id" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2 class="mb-0">{{ item.title }}</h2>
                  <Divider v-bind:color="'#2C3E50'" />
                  <img class="img-fluid rounded mb-5" v-if="index === 0" src="/src/assets/images/project/01.png"
                    v-bind:alt="item.id">
                  <img class="img-fluid rounded mb-5" v-if="index === 1" src="/src/assets/images/project/02.png"
                    v-bind:alt="item.id">
                  <img class="img-fluid rounded mb-5" v-if="index === 2" src="/src/assets/images/project/03.png"
                    v-bind:alt="item.id">
                  <img class="img-fluid rounded mb-5" v-if="index === 3" src="/src/assets/images/project/04.png"
                    v-bind:alt="item.id">
                  <img class="img-fluid rounded mb-5" v-if="index === 4" src="/src/assets/images/project/05.png"
                    v-bind:alt="item.id">
                  <img class="img-fluid rounded mb-5" v-if="index === 5" src="/src/assets/images/project/06.png"
                    v-bind:alt="item.id">
                  <p class="mb-4">{{ item.content }}</p>
                  <h3 class="mb-4">Use Technology:</h3>
                  <h6 class="mb-4">{{ item.technology }}</h6>
                  <button class="btn" v-if="item.url" v-on:click="jumpLink(item.url)">
                    Jump Link
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $light-green;
  padding: 7rem 0;

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2rem;
  }

  img {
    vertical-align: baseline;
  }

  .item {
    opacity: 0;
  }

  .card {
    cursor: pointer;
    position: relative;
    display: block;
    max-width: 25rem;
    border: 10px solid $light-gray;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .card:hover {
    transform: scale(1.05, 1.05);
  }

  .fade-in-bottom {
    animation-name: fade-in-bottom;
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.390, 0.575, 0.565, 1.000);
    animation-fill-mode: both;
  }

  .modal {
    color: $light-blue;

    h2 {
      font-size: 2.15rem;
    }

    .btn {
      color: white;
      background-color: $light-green;
      font-weight: 700;
      box-shadow: none;
    }

    .btn:hover {
      background-color: $dark-green;
      transform: scale(1.03);
    }
  }
}

@media (min-width: 992px) {
  section h2 {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}
</style>