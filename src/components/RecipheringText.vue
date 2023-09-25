<template>
  <p
    ref="reciphering-paragraph"
    class="paragraph-cipher"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isDelayedStart: Boolean,
  },
  data() {
    return {
      nbspText: null,
      isRebuilding: false,
      baseString: null,
      disabled: false,
      symbols: [
        "!",
        '"',
        "#",
        "$",
        "%",
        "*",
        "0",
        "1",
        ":",
        ";",
        "?",
        "@",
        "[",
        "]",
        "\\",
        "~",
        "'",
        "/",
        "{",
        "}",
        "|",
        "&",
        "(",
        ")",
        "-",
        "<",
        ">",
      ],
    };
  },
  watch: {
    text: function(newValue) {
      this.baseString = newValue;
      this.disabled = true;
      this.$refs["reciphering-paragraph"].textContent = newValue;
    },
  },

  created() {
    this.nbspText = this.text.replace(/ /g, "\u00a0");
    const symbolsSpaced = this.symbols.concat(Array(0).fill(" "));

    let baseString = "";
    for (let i = 0; i < this.nbspText.length; i++) {
      baseString +=
        symbolsSpaced[Math.floor(Math.random() * symbolsSpaced.length)];
    }

    this.baseString = baseString;
  },

  mounted() {
    this.cipherText();
  },

  methods: {
    cipherText(noDelayStart = false) {
      if (!this.isDelayedStart) {
        this.$refs["reciphering-paragraph"].textContent = this.baseString;
      }

      const cipherLetter = (el, newLetter, isTimed) => {
        let changeNumber;

        if (!isTimed) {
          changeNumber = Math.round(Math.random() * (44 - 6) + 6);
        } else {
          changeNumber = Math.round(Math.random() * (14 - 6) + 6);
        }
        let isDone = false;
        let index = 0;
        let symbols = this.symbols;
        setTimeout(function () {
          while (index <= changeNumber) {
            (function (index) {
              setTimeout(function () {
                if (!isDone) {
                  let symbol =
                    symbols[Math.floor(Math.random() * symbols.length)];
                  el.textContent = symbol;
                }
                if (!(index < changeNumber)) {
                  isDone = true;
                  el.textContent = newLetter;
                  el.classList.remove("changing-letter");
                }
              }, 65 * index);
            })(index++);
          }
        }, Math.random() * 1000);
      };

      function splitText(el, nextPhraseLength) {
        const oldText = el.textContent;
        el.textContent = "";
        for (let i = 0; i < oldText.length; i++) {
          el.insertAdjacentHTML(
            "beforeend",
            "<span>" + oldText.charAt(i) + "</span>"
          );
        }
        if (nextPhraseLength > oldText.length) {
          for (let i = 0; i < nextPhraseLength - oldText.length; i++) {
            el.insertAdjacentHTML("beforeend", "<span></span>");
          }
        }
      }

      function recipherText(children, nextText) {
        children.forEach((el, i) => {
          if (!(el.textContent == nextText.charAt(i))) {
            el.classList.add("changing-letter");
            if (el.textContent.length === 0) {
              setTimeout(function () {
                cipherLetter(el, nextText.charAt(i), true);
              }, 45 * i);
            } else {
              cipherLetter(el, nextText.charAt(i), false);
            }
          }
        });
      }

      if (this.isDelayedStart && !noDelayStart) {
        setTimeout(() => {
          if (this.disabled) return;
          this.$refs["reciphering-paragraph"].textContent = this.baseString;
          splitText(this.$refs["reciphering-paragraph"], this.nbspText.length);
          recipherText(
            Array.from(this.$refs["reciphering-paragraph"].childNodes),
            this.nbspText
          );
        }, 4000);
      } else {
        splitText(this.$refs["reciphering-paragraph"], this.nbspText.length);
        setTimeout(() => {
          if (this.disabled) return;
          recipherText(
            Array.from(this.$refs["reciphering-paragraph"].childNodes),
            this.nbspText
          );
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
    top: 140px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
}

.paragraph-cipher {
  font-family: "Space Mono", sans-serif;
  position: relative;
}

.paragraph-cipher > span {
  position: relative;
  display: inline-block;
  animation: fadeIn 2s;
  min-width: 8px;
}

.changing-letter {
  color: #444;
}
</style>
