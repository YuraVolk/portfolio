<template>
  <div class="gallery-wrap">
    <router-link
      to="/about"
      class="gallery-content__link"
    >
      Go back
    </router-link>

    <div
      ref="gallery"
      class="gallery"
    >
      <div class="gallery-inner">
        <ul
          ref="gallery-list"
          class="gallery-list"
        >
          <li
            v-for="item in slides"
            ref="gallery-item"
            :key="item.name"
            class="gallery-list__item"
          >
            <div class="gallery-list__item-content parallax">
              <reciphering-text
                class="gallery-content__heading"
                :text="item.name"
              />
              <p class="gallery-content__description">
                {{ item.description }}
              </p>
              <a
                class="gallery-content__link"
                :href="item.link"
              >See more</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="gallery-controls">
      <ul class="gallery__toggles">
        <li
          v-for="(item, index) in slides"
          ref="gallery-toggle"
          :key="item.name + ' toggle'"
          class="gallery-toggle"
          :class="{ 'gallery-toggle--toggled': current === index + 1 }"
          @click="toggleClick(index + 1)"
        />
      </ul>
      <div class="gallery-button-wrap">
        <button
          ref="button-previous"
          class="gallery-button gallery-button--prev"
          @click="arrowClick(-1)"
        >
          <div class="gallery-button__content">
            <svg>
              <polygon
                class="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </div>
        </button>
        <button
          ref="button-next"
          class="gallery-button gallery-button--next"
          @click="arrowClick(1)"
        >
          <div class="gallery-button__content">
            <svg>
              <polygon
                class="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RecipheringText from "@/components/RecipheringText.vue";

export default {
  name: "GalleryComponent",
  components: {
    RecipheringText,
  },

  data() {
    return {
      slides: [
        {
          name: "Chess Variants Wiki",
          description: `A chess variants website supporting customization, over 40 variant rules to create countless variants,
          engine-generated moves, as well as up to 4 players that play as teams or everyone against everyone. The website parses
          the pages written in Markdown and when finding component syntax creates and shows chess variant boards ranging up to 14x14 board size.`,
          link: "https://chess-variants-wiki.up.railway.app/",
        },
        {
          name: "Practice Landings Catalog",
          description:
            "A a catalog of practice landings showcasing HTML & (S)CSS techniques, currently featuring 10 practice landings with varying difficulty of implementation. All of the landings are responsible on dimensions from 320px to 1800px, and are as maximally accessible as possible in accordance with the original design. The catalog is meant to showcase clean SCSS code practices even for over-complicated designs as well as complex designs that is still done in a clean and a readable, understandable way.",
          link: "https://practice-landings-catalog.surge.sh/",
        },
        {
          name: "JS Components Library",
          description: "A library of Javascript components for various scenarios, ranging from simple to pagination to complex different types of carousels and zooming features, as well as inputs, sliders and image comparisons.",
          link: "https://yuravolk.github.io/Js-Library/index.html"
        },
        {
          name: "Flappy Bird",
          description:
            "A simple pet project that features a flappy bird game with updated textures written in Javascript and working through and fully built with HTML5 Canvas, featuring simple and intuitive controls.",
          link: "https://yuravolk.github.io/Flappy-Bird-Pages/",
        },  
      ],
      current: 1,
      direction: undefined,
      animating: false
    };
  },

  mounted() {
    this.$nextTick(() => {});
  },

  methods: {
    toggleClick(id) {
      if (this.current != id && !this.animating) {
        this.current = id;

        const targetSlide = this.$refs["gallery-item"][id - 1];
        const pos = parseInt(this.$refs["gallery-list"].style.left || 0);
        const newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

        this.slideTo(this.$refs["gallery-list"], pos, newPos);
      }
    },

    arrowClick(direction) {
      this.current += direction;
      if (this.current === 0) this.current = this.slides.length;
      if (this.current > this.slides.length) this.current = 1;
      if (!this.animating) {
        this.slideTo(this.$refs["gallery-list"], parseInt(this.$refs["gallery-list"].style.left || 0), (this.current - 1) * -100);
      }
    },

    slideTo(slideList, pos, newPos) {
      console.log(pos, newPos);
      this.animating = true;
      const start = new Date();
      function step(delta, pos, newPos, element) {
        const direction = pos > newPos ? 1 : -1;
        element.style.left = pos + Math.abs(newPos - pos) * delta * direction * -1 + "%";
      }

      const self = this;
      const idle = setInterval(function () {
        let timePassed = new Date() - start;
        let progress = timePassed / 500;
        if (progress > 1) {
          progress = 1;
        }
        const delta = progress * progress;
        step(delta, pos, newPos, slideList);
        if (progress === 1) {
          clearInterval(idle);
          self.animating = false;
        }
      }, 20);
    },
  },
};
</script>

<style lang="scss">
.gallery-wrap,
.gallery,
.gallery-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-wrap {
  background-color: #090909;
}

.gallery {
  background-color: revert;
}

.gallery {
  position: relative;
  z-index: 2;
}

.gallery-list {
  position: relative;
  height: 100%;
  list-style-type: none;
  white-space: nowrap;
  line-height: 1;
}

.gallery-list__item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
}

.gallery__toggles {
  margin: 1.2rem auto;

  .gallery-toggle {
    display: inline-block;
    cursor: pointer;
  }
}

.gallery-list__item-content {
  position: absolute;
  width: 100vw;

  .gallery-content__heading {
    font-size: 4rem;
    white-space: normal;

    @media (max-width: 530px) {
      font-size: 2.5rem;
    }
  }

  > * {
    display: block;
    margin: 1.5rem 0;
    color: #e2e2e2;
  }

  .gallery-content__description {
    position: relative;
    width: 55vw;
    white-space: pre-wrap;
    animation: appear 0.5s forwards;
    animation-delay: 1s;
    top: 100px;
    opacity: 0;
    margin: 0 auto;

    @media (max-width: 630px) {
      width: 65vw;
    }

    @media (max-width: 530px) {
      width: 70vw;
    }
  }
}

.gallery-content__link {
  display: inline-block;
  color: #e2e2e2;
  position: relative;
  text-decoration: none;
  z-index: 7;
  top: 100px;
  opacity: 0;
  animation: appear 0.5s forwards;
  animation-delay: 1.3s;

  &::after {
    content: "";
    background: white;
    mix-blend-mode: exclusion;
    width: calc(100% + 20px);
    height: 0;
    position: absolute;
    bottom: -4px;
    left: -10px;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
}

.gallery-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}

.gallery-wrap > .gallery-content__link {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%) translateY(calc(85vh));
  font-size: 32px;
  font-family: 'Cinzel';
}

.gallery-content__link:hover::after {
  height: calc(100% + 8px);
}

.gallery-controls {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: unset;
}

.gallery__toggles {
  list-style-type: none;
}

.gallery-button {
  position: relative;
  z-index: 6;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.gallery-button--prev {
  transform: rotate(90deg);
}

.gallery-button--next {
  transform: rotate(270deg);
}

.gallery-toggle {
  position: relative;
  background: transparent;
  border: 1.5px dashed #e2e2e2;
  padding: 3px 3px;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.5rem;
  z-index: 6;
  animation-play-state: running;
  transition: all 500ms;
  animation: spin 8s linear infinite;
}

.gallery-toggle--toggled {
  margin: 0 0.5rem;
  background: rgba($color: #e2e2e2, $alpha: 0.4);
  animation-play-state: paused;
}

.gallery-button-wrap {
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 6;
  transform: translate(-50%, -50%);
}

.gallery-toggle:hover {
  animation: spin 2s linear infinite;
}

.gallery-toggle--toggled:hover {
  animation-play-state: running;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes appear {
  100% {
    top: 0;
    opacity: 1;
  }
}

.gallery-button__content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > svg {
    width: 75px;
    height: 65px;

    &:hover {
      polygon {
        fill: #fff;
        transition: all 0.2s ease-out;

        &.arrow-bottom {
          transform: translateY(-18px);
        }

        &.arrow-top {
          transform: translateY(18px);
        }
      }
    }

    polygon {
      fill: #fff;
      transition: all 0.2s ease-out;

      &.arrow-middle {
        opacity: 0.75;
      }

      &.arrow-top {
        opacity: 0.5;
      }
    }
  }
}
</style>
