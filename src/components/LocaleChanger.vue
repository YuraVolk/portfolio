<template>
  <div
    class="locale-changer"
    @blur="closeSelect()"
  >
    <div
      class="locale-changer__selected-option"
      @click="toggleSelect()"
    >
      {{ selected.toUpperCase() }}
    </div>
    <ul
      class="locale-changer__options"
      :class="{ 'locale-changer__options--hidden': !open }"
    >
      <li
        v-for="(option, i) of options"
        :key="i"
        class="locale-changer__option"
        @click="selectOption(option)"
      >
        {{ option.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        selectedValue: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selected: this.selectedValue,
            open: false
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
    methods: {
        selectOption(option) {
            this.selected = option;
            this.open = false;
            this.$emit('input', option);
            window.vueI18n.global.locale = option;
        },
        closeSelect() {
            this.open = false;
        },
        toggleSelect() {
            this.open = !this.open;
        }
    }
};
</script>

<style lang="scss" scoped>
.locale-changer {
  position: fixed;
  top: 3%;
  right: 3%;
  z-index: 9999;
  outline: none;
  color: #e2e2e2;
  font-size: 16px;
  font-family: monospace;

  $border-radius: 3px;
  $background: #333;

  &__selected-option {
    border-radius: $border-radius;
    border: 1px solid #222;
    background-color: $background;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;

    &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5px;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-color: #e2e2e2 transparent transparent transparent;
    }
  }

  &__options {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: 0 0 $border-radius $border-radius;
    overflow: hidden;
    background-color: $background;

    &--hidden {
        display: none;
    }
  }

  &__option {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    user-select: none;
  }
}
</style>
