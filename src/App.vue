<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>

    <canvas-template class="background-canvas">
      <background-canvas />
    </canvas-template>
  </div>
</template>

<script>
import CanvasTemplate from "@/components/CanvasTemplate.vue";
import BackgroundCanvas from "@/components/BackgroundCanvas.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    CanvasTemplate,
    BackgroundCanvas,
    Home,
  },
  beforeCreate() {
    function throttle(callback, limit) {
      let wait = false;
      return function () {
        if (!wait) {
          callback.apply(null, arguments);
          wait = true;
          setTimeout(function () {
            wait = false;
          }, limit);
        }
      };
    }

    function parallax(resistance, mouse, el) {
      el.style.transform = `translate(${
        (mouse.clientX - window.innerWidth / 2) / resistance
      }px, ${(mouse.clientY - window.innerHeight / 2) / resistance}px)`;
    }

    const handleMouseMove = function (e) {
      Array.from(document.querySelectorAll(".parallax")).forEach((el) => {
        parallax(-30, e, el);
      });

      const background = document.querySelector(".header");
      if (background) {
        background.style.backgroundPosition = `${
          40 - (e.clientX - window.innerWidth / 2) * 0.03
        }% ${40 - (e.clientY - window.innerHeight / 2) * 0.01}%`;
      }
    };

    document.addEventListener("mousemove", (e) =>
      throttle(handleMouseMove(e), 40)
    );
  },
};
</script>

<style lang="scss">
@use "./styles/layout.scss";

body,
html {
  height: 100%;
  background-color: #090909;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  color: #e2e2e2;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.wrap {
  @include layout.slide-wrap;
}

.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.58s ease-out;
}

.slide-down-enter-to {
  position: absolute;
  bottom: 0;
}

.slide-down-enter-from {
  position: absolute;
  bottom: -100%;
}

.slide-down-leave-to {
  position: absolute;
  top: -100%;
}

.slide-down-leave-from {
  position: absolute;
  top: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.75s ease-out;
}

.slide-up-enter-to {
  position: absolute;
  top: 0;
}

.slide-up-enter-from {
  position: absolute;
  top: -100%;
}

.slide-up-leave-to {
  position: absolute;
  bottom: -100%;
}

.slide-up-leave-from {
  position: absolute;
  bottom: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.75s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: -100%;
}

.slide-right-leave-to {
  position: absolute;
  left: -100%;
}

.slide-right-leave-from {
  position: absolute;
  left: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s ease-out;
}

.slide-left-enter-to {
  position: absolute;
  left: 0;
}

.slide-left-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-from {
  position: absolute;
  right: 0;
}
</style>
