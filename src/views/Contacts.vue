<template>
  <div class="contacts">
    <div class="contacts-inner">
      <self-typing-text
        class="contacts-header"
        tag="h1"
        :final-text="$t('contacts.heading')"
      />
      <div class="contacts-form-wrap">
        <div class="contacts-description-wrap">
          <p class="contacts-description">
            {{ $t('contacts.paragraph') }}
          </p>
          <hr>
          <ul class="contacts-social-media">
            <li class="contacts-social-media__item">
              Email: yura.volkovskiy.2006@gmail.com
            </li>
            <li class="contacts-social-media__item">
              Discord: yuravolk
            </li>
          </ul>
          <hr>
          <ul class="contacts-social-icons">
            <li
              v-for="socialMedia in socialLinks"
              :key="socialMedia.key"
              class="contacts-social-icon"
            >
              <a 
                class="contacts-social-link"
                rel="noopener noreferrer"
                target="_blank"
                :href="socialMedia.href"
              >
                <picture class="contacts-social-image">
                  <source
                    :srcset="socialMedia.webpSrc"
                    type="image/webp"
                  >
                  <source
                    :srcset="socialMedia.src"
                    type="image/png"
                  >
                  <img
                    :src="socialMedia.src"
                    :alt="socialMedia.alt"
                    class="contacts-social-image"
                  >
                </picture>
                <picture
                  class="contacts-social-image contacts-social-image--filter"
                  :style="socialMedia.style"
                >
                  <source
                    :srcset="socialMedia.webpSrc"
                    type="image/webp"
                  >
                  <source
                    :srcset="socialMedia.src"
                    type="image/png"
                  >
                  <img
                    :src="socialMedia.src"
                    :alt="socialMedia.alt"
                    :style="socialMedia.style"
                    class="contacts-social-image contacts-social-image--filter"
                  >
                </picture>
              </a>
            </li>
          </ul>
        </div>
        <form 
          ref="form"
          class="contacts-form gform"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyeb7TdNdHUlR1r4qHz5KS8-dRuSNTXIKAcQFtCkikJ05bXxZ73HWtL6L60tbo3XtK_Ig/exec"
          @submit.prevent="onSubmit"
        >
          <fieldset class="contacts-form__initials">
            <div
              class="contacts-form__input-wrap contacts-form__input-wrap--initials"
            >
              <input
                class="contacts-form__input"
                type="text"
                name="Name"
                :placeholder="$t('contacts.form.name')"
                required
              >
              <span class="contacts-form__input-decoration" />
            </div>
            <div
              class="contacts-form__input-wrap contacts-form__input-wrap--initials"
            >
              <input
                class="contacts-form__input"
                type="email"
                :placeholder="$t('contacts.form.email')"
                name="Email"
                required
              >
              <span class="contacts-form__input-decoration" />
            </div>
          </fieldset>
          <div
            class="contacts-form__input-wrap contacts-form__input-wrap--subject"
          >
            <input
              class="contacts-form__input"
              type="text"
              :placeholder="$t('contacts.form.subject')"
              name="Subject"
              required
            >
            <span class="contacts-form__input-decoration" />
          </div>
          <div
            class="contacts-form__input-wrap contacts-form__input-wrap--message"
          >
            <textarea
              class="contacts-form__input"
              name="Message"
              :placeholder="$t('contacts.form.message')"
              required
            />
            <span class="contacts-form__input-decoration" />
          </div>
          <button
            type="submit"
            class="contacts-form__button"
          >
            {{ $t('contacts.form.submit') }}
          </button>
        </form>
      </div>
    </div>
    <div class="contacts__link-wrap">
      <router-link
        ref="goBackButton"
        to="/about"
        class="about-me-button"
      >
        {{ $t('goBack') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import SelfTypingText from "@/components/SelfTypingText.vue";

export default {
  name: "ContactsView",
  components: {
    SelfTypingText,
  },
  data() {
    return {
      socialLinks: [],
    };
  },
  created() {
    const social = ["Codepen", "Github", "LinkedIn", "Trello", "Viber", "Telegram"];
    const links = [
      "https://codepen.io/yuravolk", 
      "https://github.com/YuraVolk", 
      "#",
      "https://trello.com/u/yuravolkovskiy", 
      "viber://chat/?number=%2B380951955616",
      "https://t.me/yuravolk20"
    ];
    const colors = ["#FCD000", "#80471C", "#0a66c2", "#70b500", "#7360F2", "#229ED9"];
    this.socialLinks = social.map((e, i) => {
      return {
        src: new URL(`/src/assets/${e.toLowerCase()}-icon.png`, import.meta.url)
          .href,
        webpSrc: new URL(`/src/assets/${e.toLowerCase()}-icon.webp`, import.meta.url)
          .href,
        alt: `${e} Logo`,
        key: `contacts-${e}`,
        href: links[i],
        style: `-webkit-filter: opacity(0.85) drop-shadow(0 0 0 ${colors[i]});
                filter: opacity(0.85) drop-shadow(0 0 0 ${colors[i]});`,
      };
    });
  },
  methods: {
    onSubmit() {
      const formData = new FormData(this.$refs.form);
      fetch("https://script.google.com/macros/s/AKfycbyeb7TdNdHUlR1r4qHz5KS8-dRuSNTXIKAcQFtCkikJ05bXxZ73HWtL6L60tbo3XtK_Ig/exec", {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      this.$refs.goBackButton.$el.click();
    }
  }
};
</script>

<style lang="scss">
@use "../styles/layout.scss";

.contacts {
  @include layout.slide-wrap;
  z-index: 2;
  overflow: hidden;

  &__link-wrap {
    position: absolute;
    bottom: 5vh;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &-inner {
    z-index: 2;

    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    row-gap: 5%;
    margin: 0 auto;
  }

  &-header {
    margin-top: 9.5%;
    margin-left: 4%;

    font-family: "Space Mono", "Lucida Console", sans-serif;
    font-size: 3rem;

    text-align: left;
  }

  &-header,
  &-social-icons {
    flex-shrink: 0;
  }

  &-description-wrap {
    flex: 0 0 35%;
    text-align: left;
  }

  &-description,
  &-social-media {
    margin-bottom: 0.7rem;
  }

  &-social-media {
    margin-top: 0.7rem;
    list-style-type: none;
  }

  &-form {
    &-wrap {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      max-height: 55%;

      @media (max-width: 1200px) {
        flex-direction: column;
        gap: 1rem;
      }
    }

    flex: 0 1 60%;

    transition: background-color 0.24s ease-in;
    transition-delay: 0.2s;

    background-clip: text;
    -webkit-background-clip: text;
    overflow-y: auto;

    @media (max-width: 550px) {
      flex: 1 0 85%;
    }

    &::-webkit-scrollbar {
      width: 12px;
      color: #333;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: inherit;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: inherit;
      filter: invert(100%);
    }

    background-color: rgba(255, 255, 255, 0.72);

    &__initials {
      display: flex;
      justify-content: space-between;

      border: none;
    }

    &__input {
      width: 100%;
      height: 3rem;
      padding-left: 15px;
      border: none;

      color: #fff;
      background-color: #1e1e1e;

      &-wrap {
        position: relative;
        margin: 0.3rem 0;

        &--initials {
          width: 47.5%;
        }

        &--subject,
        &--message {
          width: 100%;
        }

        &--message {
          margin-top: 0.6rem;
        }
      }

      &-wrap--message > & {
        padding-top: 15px;
        min-height: 6rem;

        resize: vertical;
      }

      &-decoration {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 3px;
        background-color: #78a2cc;
        transition: 0.4s ease-out;
      }

      &:focus + &-decoration {
        left: 0;
        width: 100%;
      }

      &:focus-visible {
        outline: none;
      }
    }

    &__button {
      position: relative;

      width: 100%;
      height: 3rem;
      margin-top: 0.5rem;

      font-family: "Space Mono", "Lucida Console", sans-serif;
      font-size: 1rem;

      background: {
        image: linear-gradient(45deg, #78a2cc 50%, transparent 50%);
        position: 100%;
        size: 400%;
        color: transparent;
      }
      border: #78a2cc 2px solid;
      box-shadow: inset 0 0 0.75rem
        transparentize($color: #78a2cc, $amount: 0.25);
      color: #e2e2e2;
      cursor: pointer;

      transition: {
        property: background, color;
        duration: 0.6s;
        timing-function: ease-out;
      }

      &:hover {
        background-position: 0;
        color: #1d1d1d;
      }
    }
  }

  &-social-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 4.5rem;

    list-style-type: none;
  }

  &-social-link {
    position: relative;
    width: 3rem;
    height: 3rem;

    display: block;
    cursor: pointer;
  }

  &-social-image {
    width: inherit;
    height: inherit;

    &--filter {
      position: absolute;
      top: 0;
      left: 0;

      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      transition: all 0.35s ease-out;
    }
  }

  &-social-link:hover &-social-image--filter {
    clip-path: polygon(0 0, 150% 0, 100% 100%, 0 100%);
  }

  .about-me-button {
    left: 0;
    font-family: Cinzel;
    font-size: 32px;
    z-index: 2;
  }
}
</style>
