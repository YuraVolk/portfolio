<template>
  <div class="wrap about-wrap">
    <div class="menu">
      <ul class="menu-options-wrap">
        <li class="menu-option parallax">
          <router-link
            class="menu-option__content"
            to="/about-me"
          >
            <img
              src="@/assets/about-me-icon.png"
              alt="User Icon"
              class="menu-option__image"
            >
            <h2 class="menu-option__heading">
              About Me
            </h2>
          </router-link>
        </li>
        <li class="menu-option parallax">
          <router-link
            class="menu-option__content"
            to="/projects"
          >
            <img
              src="@/assets/projects-icon.png"
              alt="Suitcase Icon"
              class="menu-option__image"
            >
            <h2 class="menu-option__heading">
              Projects
            </h2>
          </router-link>
        </li>
        <li class="menu-option parallax">
          <router-link
            class="menu-option__content"
            to="/education"
          >
            <img
              src="@/assets/educations-icon.png"
              alt="Books Icon"
              class="menu-option__image"
            >
            <h2 class="menu-option__heading">
              Education
            </h2>
          </router-link>
        </li>
        <li class="menu-option parallax">
          <router-link
            class="menu-option__content"
            to="/contacts"
          >
            <img
              src="@/assets/contacts-icon.png"
              alt="Phone Icon"
              class="menu-option__image"
            >
            <h2 class="menu-option__heading">
              Contacts
            </h2>
          </router-link>
        </li>
      </ul>
      <canvas-template class="about-tag-sphere parallax">
        <tag-sphere-canvas />
      </canvas-template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CanvasTemplate from "@/components/CanvasTemplate.vue";
import TagSphereCanvas from "@/components/TagSphereCanvas.vue";

export default {
  name: "AboutView",
  components: {
    CanvasTemplate,
    TagSphereCanvas,
  },
};
</script>

<style lang="scss">
.about-wrap {
  overflow: hidden;
  z-index: unset;
}

.about-wrap + .background-canvas {
  z-index: 10;
}

.menu {
  position: relative;
  background-color: #090909;
  width: 100%;
  height: 100%;
  z-index: unset;
}

.about-tag-sphere {
  position: absolute;
  top: 20%;
  z-index: 3;
  right: 0%;
  z-index: 11;

  @media screen and (max-width: 1170px) {
    display: none;
  }
}

.menu-options-wrap {
  position: relative;
  width: 36%;
  z-index: 11;
  height: 69%;
  margin-left: 14.5%;
  top: 60%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 32% 32%;
  grid-template-rows: 36% 36%;
  grid-row: auto auto;
  column-gap: 1.5rem;
  row-gap: 0.5rem;

  @media screen and (max-width: 1170px) {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }

  * {
    z-index: inherit;
  }

  .menu-option {
    position: relative;
    padding: 1.1rem;
    border-radius: 10px;
    color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    font-family: Lato, sans-serif;
  }

  .menu-option__image {
    top: 0;
    width: 80%;
    z-index: 11;
    height: 80%;
  }

  .menu-option__heading {
    position: relative;
    font-family: Lato;
    font-size: 2rem;
    z-index: 11;

    @media screen and (max-width: 1170px) {
      font-size: 1.75rem;
    }
  }

  .menu-option__content {
    text-decoration: none;
    color: #e2e2e2;
    z-index: 11;
  }

  .menu-option__heading::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #e2e2e2;
    transition: width 0.3s;
  }

  .menu-option__heading:hover::after {
    width: 100%;
  }
}
</style>
