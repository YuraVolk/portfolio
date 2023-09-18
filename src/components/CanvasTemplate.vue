<template>
  <div>
    <canvas
      ref="header-canvas"
      class="main-header__background-canvas"
    />
    <slot />
  </div>
</template>

<script>
export default {

  provide() {
    return {
      provider: this.provider,
    };
  },
  data() {
    return {
      provider: {
        canvas: null,
        context: null
      },
    };
  },

  beforeUnmount() {
    this.isDying = true;
  },

  mounted() {
    this.provider.context = this.$refs['header-canvas'].getContext('2d');
    this.provider.canvas = this.$refs['header-canvas'];
    this.$refs['header-canvas'].width = this.$refs['header-canvas'].parentElement.clientWidth;
    this.$refs['header-canvas'].height = this.$refs['header-canvas'].parentElement.clientHeight;
  },
};
</script>

<style>
  .main-header__background-canvas {
    position: relative;
    opacity: 0.99;
    z-index: 1;
  }
</style>
