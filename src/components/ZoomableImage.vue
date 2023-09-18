<template>
  <div
    ref="main-container"
    :class="classes.wrapClass"
  >
    <img
      ref="main-image"
      :class="classes.imageClass"
      :src="imageSource"
      @click="imageZoomed"
    >
    <img
      v-show="isZoomed"
      ref="secondary-image"
      :class="imageClassObject"
      :src="imageSource"
      @click="imageUnzoomed"
    >
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: Object,
      wrapClass: String,
      imageClass: String,
      imageZoomedClass: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isZoomed: false,
      isZooming: false,
      absolutePositionTop: 0,
      absolutePositionLeft: 0,
      width: 0,
      height: 0,
      intersectionObserver: null
    };
  },

  computed: {
    imageClassObject() {
      return {
        [this.classes.imageClass]: true,
        [this.classes.imageZoomedClass]: this.isZoomed,
      };
    },

    isVisible() {
      return this.isZoomed || this.isZooming ? "hidden" : "visible";
    }
  },

  mounted() {
    this.$refs["secondary-image"].onload = () => {
      this.width = this.$refs["main-image"].clientWidth + "px";
      this.height = this.$refs["main-image"].clientHeight + "px";
    };

    this.intersectionObserver = new IntersectionObserver(this.onScroll, {
      root: this.$refs["main-image"].offsetParent,
      rootMargin: "5%",
      threshold: Array.from(Array(100).keys()).map(i => ++i / 100)
    });
    this.intersectionObserver.observe(this.$refs["secondary-image"]);
  },

  beforeUnmount() {
    this.$refs["secondary-image"].removeEventListener("transitionend", this.$refs["secondary-image"], false);
    this.intersectionObserver.unobserve(this.$refs["secondary-image"]);
  },

  methods: {
    imageZoomed() {
      if (!this.isZooming) {
        this.isZooming = true;

        const onZoomingEnd = () => {
          this.isZooming = false;
          this.$refs["secondary-image"].removeEventListener("transitionend", onZoomingEnd, false);
        };

        this.$refs["secondary-image"].addEventListener("transitionend", onZoomingEnd);

        this.absolutePositionTop =
          this.$refs["main-image"].getBoundingClientRect().top -
          this.$refs["main-image"].offsetParent.getBoundingClientRect().top +
          this.$refs["main-image"].offsetParent.scrollTop +
          "px";
        this.absolutePositionLeft =
          this.$refs["main-container"].parentNode.getBoundingClientRect().left - 5 -
          this.$refs["main-image"].offsetParent.getBoundingClientRect().left +
          "px";

        this.isZoomed = true;

        setTimeout(() => {
          this.width = "65%";
          this.height = "90%";

          this.absolutePositionTop = `calc(5% + ${this.$refs["main-image"].offsetParent.scrollTop}px)`;
          this.absolutePositionLeft = "17.5%";
        }, 50);
      }
    },

    imageUnzoomed() {
      if (!this.isZooming) {
        this.isZooming = true;

        const onZoomingEnd = () => {
          this.isZooming = false;
          this.isZoomed = false;

          this.absolutePositionTop = 0;
          this.absolutePositionLeft = 0;

          this.$refs["secondary-image"].removeEventListener("transitionend", onZoomingEnd, false);
          this.onScroll(true);
        };

        this.$refs["secondary-image"].addEventListener("transitionend", onZoomingEnd);

        this.width = this.$refs["main-image"].clientWidth + "px";
        this.height = this.$refs["main-image"].clientHeight + "px";

        this.absolutePositionTop =
          this.$refs["main-image"].getBoundingClientRect().top -
          this.$refs["main-image"].offsetParent.getBoundingClientRect().top +
          this.$refs["main-image"].offsetParent.scrollTop +
          "px";
        this.absolutePositionLeft =
          this.$refs["main-container"].parentNode.getBoundingClientRect().left - 5 -
          this.$refs["main-image"].offsetParent.getBoundingClientRect().left +
          "px";
      }
    },

    onScroll(ignoreZooming=false) {
      if (this.isZoomed && (ignoreZooming || !this.isZooming)) {
        this.absolutePositionTop = `calc(5% + ${this.$refs["main-image"].offsetParent.scrollTop}px)`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img:first-child {
  visibility: v-bind("isVisible");
  transition: none;
}

img:last-child {
  position: absolute;
  top: v-bind("absolutePositionTop");
  left: v-bind("absolutePositionLeft");

  width: v-bind("width");
  height: v-bind("height");

  z-index: 2;
}
</style>
