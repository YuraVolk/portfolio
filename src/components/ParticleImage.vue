<script>
import gsap from "gsap";
import { Elastic } from "gsap/all";

export default {
  inject: ["provider"],

  props: {
    base64src: {
      type: String,
      required: true
    },
    isDelayedStart: Boolean
  },
  data() {
    return {
      isDead: false,
    };
  },

  unmounted() {
    this.isDead = true;
  },

  render() {
    setTimeout(() => {
      const canvas = this.provider.canvas,
        ctx = this.provider.context;

      let count = 0;

      const drawScene = () => {

        count++;
        if ((!this.isDelayedStart && count >= 2) || (this.isDelayedStart && count > 1)) {
          return;
        }

        console.log(!this.isDelayedStart)

        particles = [];
        canvas.width = png.width * 9;
        canvas.height = png.height * 9;

        ctx.drawImage(png, 0, 0, png.width * 1.3, png.height * 1.3);

        const data = ctx.getImageData(0, 0, png.width * 1.3, png.height * 1.3);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#e2e2e2";

        for (let y = 0, y2 = data.height; y < y2; y++) {
          for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
              const particle = {
                x0: x,
                y0: y,
                x1: png.width / 2,
                y1: png.height / 2,
                speed: !this.isDelayedStart ? (Math.random() * 0.5 + 1.6) : (Math.random() * 1 + 2),
              };
              gsap.to(particle, {
                duration: particle.speed,
                x1: particle.x0,
                y1: particle.y0,
                delay: y / 24,
                ease: Elastic.easeOut,
              });
              particles.push(particle);
            }
          }
        }

        requestAnimationFrame(render);
      }

      const render = () => {
        if (!this.isDead) {
          requestAnimationFrame(render);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0, j = particles.length; i < j; i++) {
          const particle = particles[i];
          ctx.fillRect(particle.x1 * 6, particle.y1 * 6, 3, 3);
        }
      };

      let particles = [];
      const png = new Image();
      png.onload = () => {
        setTimeout(() => {
          drawScene();
        }, 100);

      };
      png.src = this.base64src;
    }, 50);

    return undefined;
  },
};
</script>
