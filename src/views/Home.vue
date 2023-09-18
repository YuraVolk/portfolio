<template>
  <header class="header">
    <div class="headers">
      <reciphering-text
        text="Yuriy Volkovskiy"
        is-delayed-start
        class="header-text parallax"
      />
      <reciphering-text
        text="A full-stack developer"
        is-delayed-start
        class="header-text parallax"
      />
    </div>

    <router-link
      to="/about"
      class="header-arrow"
    >
      <svg
        class="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g
          fill="none"
          stroke="#e2e2e2"
          stroke-width="1.5"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        >
          <circle
            class="arrow-icon--circle"
            cx="16"
            cy="16"
            r="15.12"
          />
          <path
            class="arrow-icon--arrow"
            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
          />
        </g>
      </svg>
    </router-link>
    <canvas-template
      style="width: 100%; height: 100vh"
      class="header__canvas"
    >
      <header-canvas />
    </canvas-template>
  </header>
</template>

<script>
// @ is an alias to /src
import CanvasTemplate from "@/components/CanvasTemplate.vue";
import HeaderCanvas from "@/components/HeaderCanvas.vue";
import RecipheringText from "@/components/RecipheringText.vue";

export default {
  name: "HomeView",
  components: {
    CanvasTemplate,
    HeaderCanvas,
    RecipheringText,
  },
  mounted() {},
};
</script>

<style lang="scss">
@use "../styles/layout.scss";

.header {
  @include layout.slide-wrap;
  background-image: url("../assets/header-background.png");
  background-repeat: repeat-x;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.header__canvas {
  position: relative;
  z-index: 2;
  height: 100%;
}

.header-text:first-of-type {
  font-size: 40px;
}

.headers {
  position: absolute;
  top: 60vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

.background-canvas {
  z-index: 1;
  opacity: 0.33;
}

.header-arrow {
  position: absolute;
  bottom: 9vh;
  left: 48.5%;
  z-index: 3;

  &:hover {
    .arrow-icon {
      transform: translate3d(5px, 0, 0) scale(1.6) rotate(90deg);
    }

    .arrow-icon--circle {
      stroke-dashoffset: 0;
    }
  }
}

.arrow-icon:hover {
  transform: translate3d(5px, 0, 0) scale(1.6) rotate(90deg);

  .arrow-icon--circle {
    stroke-dashoffset: 0;
  }
}

.arrow-icon {
  position: relative;
  opacity: 0;
  z-index: 2;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  vertical-align: middle;
  margin: 0 auto;
  transform: scale(2.2) rotate(90deg);
  animation-name: arrowSlide;
  animation-duration: 1s;
  animation-delay: 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes arrowSlide {
  from {
    top: 150px;
    opacity: 0;
  }

  to {
    top: -1px;
    opacity: 1;
  }
}

.arrow-icon--circle {
  transition: stroke-dashoffset 0.3s ease;
  stroke-dasharray: 95;
  stroke-dashoffset: 95;
}
</style>
