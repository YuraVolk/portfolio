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
      filters: ["All", "Udemy", "Stepik", "General Education"],
      certificates: [
        {
          title: "The Complete JavaScript Course",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-RFOA3BR7/",
          image: "/education/complete-javascript",
        },
        {
          title: "The Complete Node.js Developer Course",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-2b363dd1-1994-4596-96c1-c279c8e55f71/",
          image: "/education/nodejs",
        },
        {
          title: "JavaScript - The Complete Guide",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-751e9cb7-dc00-4bed-b989-6312b64b6fb9/",
          image: "/education/javascript",
        },
        {
          title: "Advanced CSS and SASS",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-63251ad1-1c83-4204-a5da-2b75819f7054/",
          image: "/education/advanced-css",
        },
        {
          title: "React - The Complete Guide",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-63995dc1-04e3-4a5f-963c-73d33cced18a/",
          image: "/education/react",
        },
        {
          title: "Build Responsive Real-World Websites with HTML and CSS",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-IU0PRX1U/",
          image: "/education/css",
        },
        {
          title: "HTML5 Canvas Ultimate Guide",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-PFLMD0CN/",
          image: "/education/html-canvas",
        },
        {
          title: "HTML For the Modern Developer",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-6fb357c5-dce2-4aae-9ac2-50d074e77984/",
          image: "/education/html-advanced",
        },
        {
          title: "Java Programming Masterclass",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-2da6200e-3d6d-4a46-ae25-74c7450b6894/",
          image: "/education/java",
        },
        {
          title: "Java Tutorial for Complete Beginners",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-YGDQOHK4/",
          image: "/education/java-beginners",
        },
        {
          title: "Java Multithreading",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-EDVMZ3LW/",
          image: "/education/java-multithreading",
        },
        {
          title: "Spring & Hibernate for Beginners",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-ad1f99b9-4bea-4c38-8d41-fbbbee43f727/",
          image: "/education/spring",
        },
        {
          title: "Design Patterns in Java",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-77GSO9RF/",
          image: "/education/dp",
        },
        {
          title: "Data Structures and Algorithms in Java",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-DQ9CNIZK/",
          image: "/education/data-structures",
        },
        {
          title: "PHP for Beginners - Become a PHP Master",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-3299d6c8-22e1-4bf0-a885-3fbbfd8b1cb2/",
          image: "/education/php",
        },
        {
          title: "The Complete Cyber Security Course Volume I",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-PI303J7Y/",
          image: "/education/security",
        },
        {
          title: "Apache Kafka Series",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-1f469634-216c-4b9d-8e07-39152842d658/",
          image: "/education/apache-kafka",
        },
        {
          title: "Jenkins, from Zero to Hero",
          category: "Udemy",
          link: "https://www.udemy.com/certificate/UC-a513aba0-4e2a-43e1-b201-458131d9a993/#",
          image: "/education/jenkins-zero-to-hero",
        },
        {
          title: "Algorithms: theory and practice. Data Structures",
          category: "Stepik",
          link: "https://stepik.org/cert/142983",
          image: "/education/stepik/data-structures/data-structures",
        },
        {
          title: "JavaScript Basics",
          category: "Stepik",
          link: "https://stepik.org/cert/142732",
          image: "/education/stepik/javascript-basics/javascript-basics",
        },
        {
          title: "Introduction to C++",
          category: "Stepik",
          link: "https://stepik.org/cert/142207/",
          image: "/education/stepik/introduction-to-c-plus/introduction-to-c-plus",
        },
        {
          title: "Computer Graphics: Basics",
          category: "Stepik",
          link: "https://stepik.org/cert/130953",
          image: "/education/stepik/computer-graphics/computer-graphics",
        },
        {
          title: "Web technologies",
          category: "Stepik",
          link: "https://stepik.org/cert/128881",
          image: "/education/stepik/web-technologies/web-technologies",
        },
        {
          title: "HTML & CSS Basics",
          category: "Stepik",
          link: "https://stepik.org/cert/125105",
          image: "/education/stepik/html-css-basics/html-css-basics",
        },
         {
          title: "Algorithms: theory and practice. Methods",
          category: "Stepik",
          link: "https://stepik.org/cert/124137",
          image: "/education/stepik/algorithms-theory/algorithms-theory",
        },
        {
          title: "Introduction to Databases",
          category: "Stepik",
          link: "https://stepik.org/cert/122560",
          image: "/education/stepik/databases/databases",
        },
        {
          title: "Java. Basic course",
          category: "Stepik",
          link: "https://stepik.org/cert/121376",
          image: "/education/stepik/java-basics/java-basics",
        },
        {
          title: "Python: Basics and application",
          category: "Stepik",
          link: "https://stepik.org/cert/120871",
          image: "/education/stepik/python-basics/python-basics",
        },
        {
          title: "Python Programming",
          category: "Stepik",
          link: "https://stepik.org/cert/119528",
          image: "/education/stepik/python-programming/python-programming",
        },
        {
          title: "School Certificate Front",
          category: "General Education",
          link: "#",
          image: "/education/attestat-front",
        },
        {
          title: "School Certificate Back",
          category: "General Education",
          link: "#",
          image: "/education/attestat-back",
        },
        {
          title: "School Certificate Appendix",
          category: "General Education",
          link: "#",
          image: "/education/attestation-addition",
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
    height: 70%;
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
        position: absolute;
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
