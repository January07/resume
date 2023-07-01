<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Divider from './Divider.vue'

const items = ref([
  // {
  //   year: '2013 - 2014',
  //   heading: 'National Chiayi University',
  //   subheading: 'Applied Mathematics',
  //   body: 'I learned HTML, CSS and JavaScript here, and became interested in programming. At this time, I don\'t know how to use frameworks, or even their existence. In order to learn programming better, I took the transfer exam during the summer vacation.'
  // },
  {
    year: '2014 - 2017',
    heading: 'National Chung Hsing University',
    subheading: 'Information Management',
    body: 'I have taken many important courses here, such as data structure and system analysis, and also wrote some small works. During this time, I took PHP and JavaScript as my main learning direction. This is a painful and happy time.'
  },
  // {
  //   year: '2019 - 2020',
  //   heading: 'Android Developer',
  //   subheading: 'eCATCH Automation Co., LTD.',
  //   body: 'This is my first job, mainly using Kotlin to develop Android App. Because I have taken a JAVA course in university before, it is not difficult for me to learn Kotlin. It was also during this time that I started to really understand git multi-person collaboration.'
  // },
  {
    year: '2020 - 2021',
    heading: 'Web Developer',
    subheading: 'Housetube LTD.',
    body: 'This is where my technology has really advanced by leaps and bounds. I used a lot of front-end and back-end technologies here, not only for website development, but also for the company\'s Android App. I feel that I have a deeper understanding of programming.'
  },
  {
    year: '2021 - 2023',
    heading: 'Front-End Developer',
    subheading: 'NTT DATA Taiwan Co., LTD.',
    body: 'I mainly use the Vue.js framework for front-end development here, but because it is a product of a consulting company, it is inconvenient to show it in later projects. The biggest takeaway here is that it\'s fun to work with different back-end developers.'
  },
  {
    year: '2023 - Present',
    heading: 'System Engineer',
    subheading: 'FENG CAI LTD.',
    body: 'I am using Angular framework as front end and Java language as back end in this company. Life here is very pleasant, my colleagues are all outgoing and lively people, and the level of programmers here is also very high, so I have to work harder.'
  }
])

onMounted(() => {
  const target = document.querySelectorAll('.timeline-panel')

  const target1 = document.getElementsByClassName('timeline-image')[4]

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target !== target1) {
          entry.target.setAttribute('class', 'timeline-panel bounce-in-top')
        } else {
          entry.target.setAttribute('class', 'timeline-image heartbeat')
        }
      }
    });
  };

  const options = {
    threshold: 0.25
  }

  Array.prototype.forEach.call(target, function (item) {
    new IntersectionObserver(callback, options).observe(item)
  })
  new IntersectionObserver(callback, options).observe(target1)
})
</script>

<template>
  <section id="about">
    <div class="container">
      <h2 class="mb-0">ABOUT</h2>
      <Divider v-bind:color="'#2C3E50'" />
      <ul class="timeline">
        <li v-for="(item, index) in items" v-bind:class="[index % 2 === 0 ? '' : 'timeline-panel-right']">
          <div class="timeline-image">
            <img class="rounded-circle img-fluid" v-if="index === 0" src="/src/assets/images/about/02.png" alt="02.png">
            <img class="rounded-circle img-fluid" v-if="index === 1" src="/src/assets/images/about/04.png" alt="04.png">
            <img class="rounded-circle img-fluid" v-if="index === 2" src="/src/assets/images/about/05.png" alt="05.png">
            <img class="rounded-circle img-fluid" v-if="index === 3" src="/src/assets/images/about/06.png" alt="06.png">
          </div>
          <div class="timeline-panel">
            <div>
              <h4>{{ item.year }}</h4>
              <h4>{{ item.heading }}</h4>
              <h5>{{ item.subheading }}</h5>
            </div>
            <div>
              <p class="text-muted">{{ item.body }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image" style="background-color: #1ABC9C">
            <h4>
              Let Me
              <br>
              Be Part Of
              <br>
              Our Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 7rem 0;

  h2,
  h4 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2rem;
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  .timeline {
    position: relative;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      min-height: 50px;
      margin-bottom: 50px;

      .timeline-image {
        position: absolute;
        z-index: 100;
        left: 0;
        width: 80px;
        height: 80px;
        margin-left: 0;
        text-align: center;
        color: white;
        border: 7px solid $light-gray;
        border-radius: 100%;
        background-color: white;
        overflow: hidden;

        h4 {
          font-size: 10px;
          line-height: 14px;
          margin-top: 12px;
        }

        img:hover {
          transform: scale(1.2, 1.2);
          transition: all 1s ease-out;
        }
      }

      .timeline-panel {
        position: relative;
        float: right;
        width: 100%;
        padding: 0 20px 0 100px;
        text-align: left;
        visibility: hidden;
      }

      .bounce-in-top {
        animation-name: bounce-in-top;
        animation-duration: 1.1s;
        animation-fill-mode: both;
        visibility: visible;
      }

      .heartbeat {
        animation-name: heartbeat;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 5;
        animation-fill-mode: both;
      }
    }

    li::before,
    li::after {
      display: table;
      content: "";
    }

    li::after {
      clear: both;
    }
  }

  .timeline::before {
    position: absolute;
    top: 0;
    bottom: 1%;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
    content: "";
    background-color: $light-gray;
  }
}

@media (min-width: 768px) {
  section {
    .timeline {
      li {
        min-height: 100px;
        margin-bottom: 100px;

        .timeline-image {
          left: 50%;
          width: 100px;
          height: 100px;
          margin-left: -50px;

          h4 {
            font-size: 13px;
            line-height: 18px;
            margin-top: 16px;
          }
        }

        .timeline-panel {
          float: left;
          width: 41%;
          padding: 0 20px 20px 30px;
          text-align: right;
        }
      }

      .timeline-panel-right .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
      }
    }

    .timeline::before {
      left: 50%;
    }
  }
}

@media (min-width: 992px) {
  section {
    h2 {
      font-size: 3rem;
      line-height: 2.5rem;
    }

    .timeline {
      li {
        min-height: 150px;

        .timeline-image {
          width: 150px;
          height: 150px;
          margin-left: -75px;

          h4 {
            font-size: 18px;
            line-height: 26px;
            margin-top: 30px;
          }
        }

        .timeline-panel {
          padding: 0 20px 20px;
        }
      }

      .timeline-panel-right .timeline-panel {
        padding: 0 20px 20px;
      }
    }
  }
}

@media (min-width: 1200px) {
  section {
    h4 {
      font-size: 1.5rem;
    }

    .timeline {
      li {
        min-height: 170px;

        .timeline-image {
          width: 170px;
          height: 170px;
          margin-left: -85px;

          h4 {
            margin-top: 40px;
          }
        }

        .timeline-panel {
          padding: 0 20px 20px 100px;
        }
      }

      .timeline-panel-right .timeline-panel {
        padding: 0 100px 20px 20px;
      }
    }
  }
}
</style>