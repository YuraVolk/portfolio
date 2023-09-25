<template>
  <component
    :is="tag"
    ref="self-typing-paragraph"
  >
    <span
      v-for="(letter, index) in letters"
      :key="'typing-paragraph' + uniqueIdentifier() + '-' + index"
      :style="activeLetters > index ? 'visibility: visible; opacity: 1;' : 'visibility: hidden; opacity: 0;'"
      :data-key="'typing-paragraph' + uniqueIdentifier() + '-' + index"
    >{{ letter }}</span>
  </component>
</template>

<script>
let timesCreated = -1;

export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    finalText: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      timeouts: [],

      letters: [],
      activeLetters: 0
    };
  },

  watch: { 
    finalText(newValue) {
      this.$refs["self-typing-paragraph"].textContent = newValue;
    }
  },

  created() {
    timesCreated++;
    this.letters = [...this.finalText];
  },

  mounted() {
    let index = 0;
    setTimeout(() => {
      while (index <= this.finalText.length) {
        ((index) => {
          this.timeouts.push(
            setTimeout(() => {
              console.log(this.activeLetters);
              this.activeLetters++;
            }, 75 * index)
          );
        })(index++);
      }
    }, 1000);
  },

  unmounted() {
    this.timeouts.forEach((t) => {
      clearTimeout(t);
    });
  },

  methods: {
    uniqueIdentifier() {
      return timesCreated;
    }
  },
};
</script>

<script setup>

</script>

<style lang="scss" scoped>
span {
  transition: opacity .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
