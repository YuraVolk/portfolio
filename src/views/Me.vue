<template>
  <div class="about-me-wrap">
    <ul
      ref="scroll-sections"
      class="about-me-sections"
    >
      <li class="about-me-sections__wrap">
        <section
          class="about-me-section parallax"
          :class="{
            'about-me-sections__wrap--active': activeSection == 0,
          }"
        >
          <canvas-template>
            <particle-image
              base64src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAADAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQT///9w6yyTAAAAYXRSTlMAAAEDq/z1HwIFcv5VBMf94QuR+znixawg9qrI4DuPDFdwIXE8Om8HDwYIkj0JwPEWF3+AgX6M+dd7gn3f8oYuLA1ISdjnTkdLsmxCSt7Gp/QcI/fJVpAiHaZtsYfzqME+GbIe1QAAAAFiS0dEYiu5HTwAAAAJcEhZcwAA3XUAAN11AayHw4MAAAAHdElNRQfmBBkKHB1cvli4AAACqUlEQVRIx5WV+0MSQRDHmT2xo+04lSyh7EWEEFYgCr5SMB+l0hN6P+b//yea3dm725WjYH7R3Rv2O/e9z8xmMnEI4cEcZhHnr4Ev1Abk4DptSLwBgRAZNwTl5zGUuLAI+qEQASxhATG8CZ4AN5tSYHEZZYi3PGHSPbhty7mn+7BSRHpcorOEkbuj5O4qubHTPViVSOL3uFKVct+Rc0sP4AGGdPpDekXBco8cOSedksq2D0rusS2nayBNE5EPFXUYb7DcEyVHAWAXM43tAkQuiqq2fXnNr/G6Dk/V78MGVNWSUvX7g/nh+oLy4RmAiJwtYVbi8xfgc9VASc3Who725lYHSbq7vbNhdnb3aI37L1ttWrWadIwPB/R600ThgER8OCyGBY6s3paFJKTeyap/w+Ihp3emO70Tp+tDpNmWqckyTp+2dpUuoNfnOOq/Qinx+OT0iDfOGq/po6J8c36h1z3bdwH1S2X7QCS2v1Vf6d17ZXvsu/B0BPDhI+OX80zUPmnaeyLQS/NVOYj2MMZPh0272bFpH9Lrz0z7MKF99SrtTi+NFO2ywl0/3lxuekT7SkJ7eXzIJM3kDeIhY3pp5DaXbWQgepr2fC2yMcdyxc/APnp2e/jwZV758DWaQPRQy13WufLoMzEEF+ffyIcQvzfODBOnJ8cKim7fMKEhmBGxBOAUZq2/0uJ9pvbg5vtn51nNN1Nrm8HRbv34qQrc222bqbGz3VVVd7Y2zY4eHMZ3H5r7KLP4K7Edfmva1w0wcXvoeQd/NH5LUOeBV/PXNO2DajwTozYztCv8ygntfJXMubTzwDb4hUw7N1dFy43i5koGdirt3FzlCbSX0mkfTrhSE9rBkgsrE65UTfvAulKd5vr/lZq35dKv1JGpVA0ZR+7qGHB9mGT7Xx5xFCe09zrMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTI1VDEwOjI4OjE3KzAwOjAwunjJEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0yNVQxMDoyODoxNyswMDowMMslca4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
              is-delayed-start
            />
          </canvas-template>
          <div class="about-me-content-wrap">
            <reciphering-text
              text="Section 1"
              class="about-me-heading"
            />
            <p class="about-me-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum neque urna, ac tristique nulla lobortis
              non. In egestas nec eros quis imperdiet. Cras laoreet, ipsum vitae tempus convallis, nibh mauris porta mauris, congue
              placerat tellus arcu quis nibh. Ut ut nunc scelerisque ante sodales scelerisque. Sed lacinia sapien ac turpis
              malesuada, in elementum dui efficitur.
            </p>
            <button class="about-me-button">
              Dummy text
            </button>
          </div>
        </section>
      </li>
      <li
        class="about-me-sections__wrap"
        :class="{
          'about-me-sections__wrap--active': activeSection == 1,
        }"
      >
        <section class="about-me-section parallax">
          <canvas-template>
            <particle-image
              base64src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAADAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQT///9w6yyTAAAAYXRSTlMAAAEDq/z1HwIFcv5VBMf94QuR+znixawg9qrI4DuPDFdwIXE8Om8HDwYIkj0JwPEWF3+AgX6M+dd7gn3f8oYuLA1ISdjnTkdLsmxCSt7Gp/QcI/fJVpAiHaZtsYfzqME+GbIe1QAAAAFiS0dEYiu5HTwAAAAJcEhZcwAA3XUAAN11AayHw4MAAAAHdElNRQfmBBkKHB1cvli4AAACqUlEQVRIx5WV+0MSQRDHmT2xo+04lSyh7EWEEFYgCr5SMB+l0hN6P+b//yea3dm725WjYH7R3Rv2O/e9z8xmMnEI4cEcZhHnr4Ev1Abk4DptSLwBgRAZNwTl5zGUuLAI+qEQASxhATG8CZ4AN5tSYHEZZYi3PGHSPbhty7mn+7BSRHpcorOEkbuj5O4qubHTPViVSOL3uFKVct+Rc0sP4AGGdPpDekXBco8cOSedksq2D0rusS2nayBNE5EPFXUYb7DcEyVHAWAXM43tAkQuiqq2fXnNr/G6Dk/V78MGVNWSUvX7g/nh+oLy4RmAiJwtYVbi8xfgc9VASc3Who725lYHSbq7vbNhdnb3aI37L1ttWrWadIwPB/R600ThgER8OCyGBY6s3paFJKTeyap/w+Ihp3emO70Tp+tDpNmWqckyTp+2dpUuoNfnOOq/Qinx+OT0iDfOGq/po6J8c36h1z3bdwH1S2X7QCS2v1Vf6d17ZXvsu/B0BPDhI+OX80zUPmnaeyLQS/NVOYj2MMZPh0272bFpH9Lrz0z7MKF99SrtTi+NFO2ywl0/3lxuekT7SkJ7eXzIJM3kDeIhY3pp5DaXbWQgepr2fC2yMcdyxc/APnp2e/jwZV758DWaQPRQy13WufLoMzEEF+ffyIcQvzfODBOnJ8cKim7fMKEhmBGxBOAUZq2/0uJ9pvbg5vtn51nNN1Nrm8HRbv34qQrc222bqbGz3VVVd7Y2zY4eHMZ3H5r7KLP4K7Edfmva1w0wcXvoeQd/NH5LUOeBV/PXNO2DajwTozYztCv8ygntfJXMubTzwDb4hUw7N1dFy43i5koGdirt3FzlCbSX0mkfTrhSE9rBkgsrE65UTfvAulKd5vr/lZq35dKv1JGpVA0ZR+7qGHB9mGT7Xx5xFCe09zrMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTI1VDEwOjI4OjE3KzAwOjAwunjJEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0yNVQxMDoyODoxNyswMDowMMslca4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
            />
          </canvas-template>
          <div class="about-me-content-wrap">
            <reciphering-text
              text="Section 2"
              class="about-me-heading"
            />
            <p class="about-me-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum neque urna, ac tristique nulla lobortis
              non. In egestas nec eros quis imperdiet. Cras laoreet, ipsum vitae tempus convallis, nibh mauris porta mauris, congue
              placerat tellus arcu quis nibh. Ut ut nunc scelerisque ante sodales scelerisque. Sed lacinia sapien ac turpis
              malesuada, in elementum dui efficitur.
            </p>
            <button class="about-me-button">
              Dummy text
            </button>
          </div>
        </section>
      </li>
      <li
        class="about-me-sections__wrap"
        :class="{
          'about-me-sections__wrap--active': activeSection == 2,
        }"
      >
        <section class="about-me-section parallax">
          <canvas-template>
            <particle-image
              base64src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAADAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQT///9w6yyTAAAAYXRSTlMAAAEDq/z1HwIFcv5VBMf94QuR+znixawg9qrI4DuPDFdwIXE8Om8HDwYIkj0JwPEWF3+AgX6M+dd7gn3f8oYuLA1ISdjnTkdLsmxCSt7Gp/QcI/fJVpAiHaZtsYfzqME+GbIe1QAAAAFiS0dEYiu5HTwAAAAJcEhZcwAA3XUAAN11AayHw4MAAAAHdElNRQfmBBkKHB1cvli4AAACqUlEQVRIx5WV+0MSQRDHmT2xo+04lSyh7EWEEFYgCr5SMB+l0hN6P+b//yea3dm725WjYH7R3Rv2O/e9z8xmMnEI4cEcZhHnr4Ev1Abk4DptSLwBgRAZNwTl5zGUuLAI+qEQASxhATG8CZ4AN5tSYHEZZYi3PGHSPbhty7mn+7BSRHpcorOEkbuj5O4qubHTPViVSOL3uFKVct+Rc0sP4AGGdPpDekXBco8cOSedksq2D0rusS2nayBNE5EPFXUYb7DcEyVHAWAXM43tAkQuiqq2fXnNr/G6Dk/V78MGVNWSUvX7g/nh+oLy4RmAiJwtYVbi8xfgc9VASc3Who725lYHSbq7vbNhdnb3aI37L1ttWrWadIwPB/R600ThgER8OCyGBY6s3paFJKTeyap/w+Ihp3emO70Tp+tDpNmWqckyTp+2dpUuoNfnOOq/Qinx+OT0iDfOGq/po6J8c36h1z3bdwH1S2X7QCS2v1Vf6d17ZXvsu/B0BPDhI+OX80zUPmnaeyLQS/NVOYj2MMZPh0272bFpH9Lrz0z7MKF99SrtTi+NFO2ywl0/3lxuekT7SkJ7eXzIJM3kDeIhY3pp5DaXbWQgepr2fC2yMcdyxc/APnp2e/jwZV758DWaQPRQy13WufLoMzEEF+ffyIcQvzfODBOnJ8cKim7fMKEhmBGxBOAUZq2/0uJ9pvbg5vtn51nNN1Nrm8HRbv34qQrc222bqbGz3VVVd7Y2zY4eHMZ3H5r7KLP4K7Edfmva1w0wcXvoeQd/NH5LUOeBV/PXNO2DajwTozYztCv8ygntfJXMubTzwDb4hUw7N1dFy43i5koGdirt3FzlCbSX0mkfTrhSE9rBkgsrE65UTfvAulKd5vr/lZq35dKv1JGpVA0ZR+7qGHB9mGT7Xx5xFCe09zrMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTI1VDEwOjI4OjE3KzAwOjAwunjJEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0yNVQxMDoyODoxNyswMDowMMslca4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
            />
          </canvas-template>
          <div class="about-me-content-wrap">
            <reciphering-text
              text="Section 3"
              class="about-me-heading"
            />
            <p class="about-me-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum neque urna, ac tristique nulla lobortis
              non. In egestas nec eros quis imperdiet. Cras laoreet, ipsum vitae tempus convallis, nibh mauris porta mauris, congue
              placerat tellus arcu quis nibh. Ut ut nunc scelerisque ante sodales scelerisque. Sed lacinia sapien ac turpis
              malesuada, in elementum dui efficitur.
            </p>
            <button class="about-me-button">
              Dummy text
            </button>
          </div>
        </section>
      </li>
      <li
        class="about-me-sections__wrap"
        :class="{
          'about-me-sections__wrap--active': activeSection == 3,
        }"
      >
        <section class="about-me-section parallax">
          <canvas-template>
            <particle-image
              base64src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAADAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQQDAQT///9w6yyTAAAAYXRSTlMAAAEDq/z1HwIFcv5VBMf94QuR+znixawg9qrI4DuPDFdwIXE8Om8HDwYIkj0JwPEWF3+AgX6M+dd7gn3f8oYuLA1ISdjnTkdLsmxCSt7Gp/QcI/fJVpAiHaZtsYfzqME+GbIe1QAAAAFiS0dEYiu5HTwAAAAJcEhZcwAA3XUAAN11AayHw4MAAAAHdElNRQfmBBkKHB1cvli4AAACqUlEQVRIx5WV+0MSQRDHmT2xo+04lSyh7EWEEFYgCr5SMB+l0hN6P+b//yea3dm725WjYH7R3Rv2O/e9z8xmMnEI4cEcZhHnr4Ev1Abk4DptSLwBgRAZNwTl5zGUuLAI+qEQASxhATG8CZ4AN5tSYHEZZYi3PGHSPbhty7mn+7BSRHpcorOEkbuj5O4qubHTPViVSOL3uFKVct+Rc0sP4AGGdPpDekXBco8cOSedksq2D0rusS2nayBNE5EPFXUYb7DcEyVHAWAXM43tAkQuiqq2fXnNr/G6Dk/V78MGVNWSUvX7g/nh+oLy4RmAiJwtYVbi8xfgc9VASc3Who725lYHSbq7vbNhdnb3aI37L1ttWrWadIwPB/R600ThgER8OCyGBY6s3paFJKTeyap/w+Ihp3emO70Tp+tDpNmWqckyTp+2dpUuoNfnOOq/Qinx+OT0iDfOGq/po6J8c36h1z3bdwH1S2X7QCS2v1Vf6d17ZXvsu/B0BPDhI+OX80zUPmnaeyLQS/NVOYj2MMZPh0272bFpH9Lrz0z7MKF99SrtTi+NFO2ywl0/3lxuekT7SkJ7eXzIJM3kDeIhY3pp5DaXbWQgepr2fC2yMcdyxc/APnp2e/jwZV758DWaQPRQy13WufLoMzEEF+ffyIcQvzfODBOnJ8cKim7fMKEhmBGxBOAUZq2/0uJ9pvbg5vtn51nNN1Nrm8HRbv34qQrc222bqbGz3VVVd7Y2zY4eHMZ3H5r7KLP4K7Edfmva1w0wcXvoeQd/NH5LUOeBV/PXNO2DajwTozYztCv8ygntfJXMubTzwDb4hUw7N1dFy43i5koGdirt3FzlCbSX0mkfTrhSE9rBkgsrE65UTfvAulKd5vr/lZq35dKv1JGpVA0ZR+7qGHB9mGT7Xx5xFCe09zrMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA0LTI1VDEwOjI4OjE3KzAwOjAwunjJEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNC0yNVQxMDoyODoxNyswMDowMMslca4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
            />
          </canvas-template>
          <div class="about-me-content-wrap">
            <reciphering-text
              text="Section 4"
              class="about-me-heading"
            />
            <p class="about-me-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum neque urna, ac tristique nulla lobortis
              non. In egestas nec eros quis imperdiet. Cras laoreet, ipsum vitae tempus convallis, nibh mauris porta mauris, congue
              placerat tellus arcu quis nibh. Ut ut nunc scelerisque ante sodales scelerisque. Sed lacinia sapien ac turpis
              malesuada, in elementum dui efficitur.
            </p>
            <button class="about-me-button">
              Dummy text
            </button>
          </div>
        </section>
      </li>
    </ul>
    <aside class="sections-menu">
      <span
        v-for="(offset, index) in offsets"
        :key="'onepagescroll' + index"
        class="sections-menu__point"
        :class="{
          'sections-menu__point--active': activeSection == index,
        }"
        @click="scrollToSection(index)"
      />
    </aside>
    <div>
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
import RecipheringText from "@/components/RecipheringText.vue";
import ParticleImage from "@/components/ParticleImage.vue";
import CanvasTemplate from "@/components/CanvasTemplate.vue";

export default {
  name: "MeView",
  components: {
    CanvasTemplate,
    ParticleImage,
    RecipheringText,
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [null, null, null, null],
      touchStartY: 0,
    };
  },
  computed: {
    sections() {
      return Array.from(this.$refs["scroll-sections"].children);
    },
  },
  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheel); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
    window.addEventListener("touchstart", this.touchStart, {
      passive: false,
    });
    window.addEventListener("touchmove", this.touchMove, {
      passive: false,
    });
  },

  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheel);
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.touchMove);
  },

  methods: {
    calculateSectionOffsets() {
      this.offsets = [];
      for (let i = 0; i < this.sections.length; i++) {
        let sectionOffset = this.sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
      console.log(this.offsets);
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.activeSection = id;
      this.inMove = true;

      this.sections[id].scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },

    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },

    moveDown() {
      this.inMove = true;
      this.activeSection--;
      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
      this.scrollToSection(this.activeSection, true);
    },

    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      this.touchStartY = 0;
      return false;
    },
  },
};
</script>

<style lang="scss">
@use "../styles/layout.scss";

.about-me-wrap {
  @include layout.slide-wrap;
  background-color: #070707;

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
    background-color: #f8f8f8;
  }
}

.about-me-wrap > div {
  position: fixed;
  z-index: 6;
  bottom: 10%;
  display: flex;
  justify-content: center;
  width: 100%;
}

.slide-down-leave-active,
.slide-right-enter-active {
  .about-me-sections__wrap--active {
    visibility: visible;
  }

  .about-me-sections__wrap {
    visibility: hidden;
  }

  .about-me-wrap > div {
    cursor: auto;
    opacity: 0;
  }

  .sections-menu {
    cursor: auto;
    opacity: 0;
  }

  .about-me-button {
    cursor: auto;
    display: none;
  }
}

.about-me-wrap,
.about-me-button,
.sections-menu {
  transition: all 450ms ease-in-out;
}

.about-me-wrap > div > .about-me-button {
  left: 0;
  font-family: Cinzel;
  font-size: 32px;
}

.about-me-sections__wrap {
  height: 100vh;
  width: 100%;
}

.about-me-sections {
  list-style-type: none;
}

.sections-menu {
  position: fixed;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 6;
}

.sections-menu__point {
  position: relative;
  display: block;
  background: transparent;
  border: 1.5px dashed #e2e2e2;
  padding: 3px 3px;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.5rem 0rem;
  z-index: 6;
  animation-play-state: running;
  transition: all 500ms;
  animation: spin 8s linear infinite;
  cursor: pointer;
}

.sections-menu__point--active {
  margin: 1rem 0;
  background: rgba($color: #e2e2e2, $alpha: 0.4);
  animation-play-state: paused;
}

@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes appear {
  100% {
    top: 0;
    opacity: 1;
  }
}

.about-me-section {
  position: relative;
  display: flex;
  justify-content: flex-start;
  z-index: 6;
  align-items: center;
  height: 100%;
  max-width: 85vw;
  padding-left: 15%;
}

.about-me-section .main-header__background-canvas {
  @media screen and (max-width: 1000px) {
    display: none;
  }
}

.about-me-heading {
  font-size: 4rem;
  text-align: left;

  @media screen and (max-width: 1170px) {
    font-size: 3rem;
  }
}

.about-me-paragraph {
  position: relative;
  max-width: 80%;
  text-align: left;
  animation: appear 2s forwards;
  animation-delay: 1s;
  opacity: 0;
  top: 100px;

  @media screen and (max-width: 1170px) {
    font-size: 1.2rem;
  }
}

.about-me-content-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 2%;
  margin-top: -8%;
}

.about-me-button {
  display: inline-block;
  color: #e2e2e2;
  position: relative;
  text-decoration: none;
  z-index: 7;
  top: 100px;
  opacity: 0;
  animation: appear 2s forwards;
  animation-delay: 1.3s;
  background-color: transparent;
  border: none;
  cursor: pointer;
  left: 0;
  margin-top: 4%;
  text-align: left;

  &::after {
    content: "";
    background: white;
    mix-blend-mode: exclusion;
    width: calc(100% + 20px);
    height: 0;
    position: absolute;
    bottom: -4px;
    left: -10px;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  @media screen and (max-width: 1170px) {
    font-size: 1.2rem;
  }
}

.about-me-button:hover::after {
  height: calc(100% + 8px);
}
</style>
