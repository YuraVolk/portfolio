<template>
  <div class="education">
    <div class="education-header-wrap">
      <h2 class="education-header">
        My Education
      </h2>
    </div>
    <ul class="education-filters">
      <li
        v-for="item in filters"
        :key="item + '-education-filter'"
        class="education-filter"
        :class="{ 'education-filter--active': currentFilter === item }"
        @click="setFilter(item)"
      >
        <span class="education-filter__content">{{ item }}</span>
      </li>
    </ul>
    <transition-group
      ref="certificates"
      class="education-certificates"
      tag="ul"
      name="contacts-certificates"
    >
      <li
        v-for="certificate in filteredCertificates"
        :key="certificate.title"
        class="education-certificate-wrap"
        :class="{ 'education-certificate-wrap--hidden': !certificate.visible }"
      >
        <div 
          class="education-certificate"
        >
          <zoomable-image
            :id="certificate.title"
            :selected-id="activeCertificate"
            :on-click-callback="() => selectCertificate(certificate.title)"
            :classes="{
              wrapClass: 'education-certificate__image-wrap',
              imageClass: 'education-certificate__image',
              imageZoomedClass: 'education-certificate__image--zoomed'
            }"
            :image-source="certificate.image"
          />

          <div class="education-certificate__label">
            <a
              class="education-certificate__link"
              :href="certificate.link"
              target="_blank"
              rel="noopener noreferrer"
            >{{ certificate.title }}</a>
          </div>
        </div>
      </li>
    </transition-group>
    <div class="education__link-wrap">
      <router-link
        to="/about"
        class="about-me-button"
      >
        Go back
      </router-link>
    </div>
  </div>
</template>

<script>
import ZoomableImage from "/src/components/ZoomableImage.vue";

export default {
  name: "EducationView",
  components: {
    ZoomableImage
  },
  data() {
    return {
      activeCertificate: "",
      currentFilter: "All",
      filters: ["All", "Category 1", "Category 2", "Miscellaneous"],
      certificates: [
        {
          title: "Jenkins, from Zero to Hero",
          category: "Miscellaneous",
          link: "https://www.udemy.com/certificate/UC-a513aba0-4e2a-43e1-b201-458131d9a993/#",
          image: "/src/assets/education/jenkis-zero-to-hero.jpg",
        },
        {
          title: "Udemy Cert 2",
          category: "Category 1",
          link: "#",
          image: "/src/assets/education/jenkis-zero-to-hero.jpg",
        },
        {
          title: "Udemy Cert 3",
          category: "Category 1",
          link: "#",
          image: "/src/assets/education/jenkis-zero-to-hero.jpg",
        },
        {
          title: "Stepik Cert 1",
          category: "Category 2",
          link: "#",
          image: "/src/assets/education/jenkis-zero-to-hero.jpg",
        },
        {
          title: "Stepik Cert 22",
          category: "Category 2",
          link: "#",
          image: "/src/assets/education/jenkis-zero-to-hero.jpg",
        },
        {
          title: "Other Cert 1",
          category: "Category 3",
          link: "#",
          image: "6",
        },
        {
          title: "Other Cert 2",
          category: "Miscellaneous",
          link: "#",
          image: "#",
        },
        {
          title: "Other Cert 3",
          category: "Miscellaneous",
          link: "#",
          image: "6",
        },
        {
          title: "Other Cert 5",
          category: "Category 2",
          link: "#",
          image: "#",
        },
        {
          title: "Stepik Cert 21",
          category: "Category 1",
          link: "#",
          image: "4",
        },
        {
          title: "Stepik Cert 2",
          category: "Category 1",
          link: "#",
          image: "5",
        },
        {
          title: "Other Cert 11",
          category: "Miscellaneous",
          link: "#",
          image: "6",
        },
        {
          title: "Other Cert 12",
          category: "Category 2",
          link: "#",
          image: "#",
        },
        {
          title: "Other Cert 13",
          category: "Miscellaneous",
          link: "#",
          image: "6",
        },
        {
          title: "Other Cert 15",
          category: "Category 2",
          link: "#",
          image: "#",
        },
        {
          title: "Other Cert 167",
          category: "Miscellaneous",
          link: "#",
          image: "#",
        },
      ],
    };
  },

  computed: {
    filteredCertificates: function () {
      return this.currentFilter === "All"
        ? this.certificates.map((item) => ({
          ...item,
          visible: true
        }))
        : this.certificates.map(
            (item) => item.category === this.currentFilter ? {
              ...item,
              visible: true
            } : {
              ...item,
              visible: false
            }
          );
    },
  },

  methods: {
    setFilter(filter) {
      this.activeCertificate = "";
      this.currentFilter = filter;
    },

    selectCertificate(certificateTitle) {
     if (this.activeCertificate === certificateTitle) {
        this.activeCertificate = "";
      } else {
        this.activeCertificate = certificateTitle;
      }
    }
  }
};
</script>

<style lang="scss">
@use "../styles/layout.scss";

.education {
  @include layout.slide-wrap;
  z-index: 6;
  overflow: hidden;

  &__link-wrap {
    position: absolute;
    bottom: 5vh;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &-header {
    &-wrap {
      margin-top: 6vh;
    }

    font-size: 2.5rem;
    margin-bottom: 0.7rem;
  }

  &-filters {
    display: flex;
    justify-content: center;

    list-style-type: none;

    animation: appear 2s forwards;
    animation-delay: 0.3s;
  }

  &-filter {
    padding: 0.5rem 0.5rem;

    font-family: Lato, sans-serif;

    border-radius: 0.5rem;
    cursor: pointer;

    transition: all 0.35s;

    &__content {
      text-align: center;
      color: #e2e2e2;
    }

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1.5px;
      background: #e2e2e2;
      margin-top: 3px;
      transition: width 0.3s;
    }

    &--active::after,
    &:hover::after {
      width: 100%;
    }
  }

  &-certificates {
    position: relative;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 75vw;
    height: 65%;
    margin: 0 auto;

    overflow-x: hidden;
    overflow-y: auto;
    list-style-type: none;

    transition: all 0.24s ease-in;

    scrollbar-gutter: stable both-edges;
    background-clip: text;
    -webkit-background-clip: text;

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

    &:hover {
      background-color: rgba(255, 255, 255, 0.72);
    }

    &-enter-active {
      transform: scale(0.5) translateY(-80px);
      opacity: 0;
    }

    &-enter {
      transform: scale(0.5) translateY(-80px);
      opacity: 1;
    }

    &-leave-to {
      transform: translateY(30px);
      opacity: 0;
    }

    &-leave-active {
      position: absolute;
      z-index: -1;
    }
  }

  &-certificate {
    &-wrap {
      margin: 0.8rem;

      box-shadow: 0px 2px 6px #555555;
      border-radius: 2px;
      background-color: #222;

      transition: all 0.35s ease-in-out;

      &--hidden {
        margin: 0;
      }
    }

    &-wrap--hidden & {
      position: absolute;
      opacity: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 11.5rem;
    height: 100%;
    opacity: 1;

    transition: all 0.25s ease-out;

    &:hover {
      box-shadow: 0px 3px 7px #d6d6d6;
    }

    &__image {
      top: 0;
      left: 0;

      width: 11.5rem;
      height: auto;
      cursor: zoom-in;

      transition: width, height, top, left;
      transition-duration: .3s;
      transition-timing-function: ease-in-out;

      &:first-child {
        z-index: 1;
      }
    }

    &__label {
      z-index: 0;

      margin-top: 8px;
      margin-bottom: 10px;
    }

    &__link {
      font-family: Lato, sans-serif;
      font-size: 0.9rem;

      color: #e2e2e2;
      text-decoration: none;
    }
  }

  .about-me-button {
    left: 0;
    font-family: Cinzel;
    font-size: 32px;
  }
}
</style>
