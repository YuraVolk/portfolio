<script>
export default {
  inject: ["provider"],

  data() {
    return {
      isDead: false,
    };
  },

  unmounted() {
    this.isDead = true;
  },
  // eslint-disable-next-line vue/require-render-return
  render() {
    setTimeout(() => {
      const canvas = this.provider.canvas,
        ctx = this.provider.context;

      const cw = canvas.width;
      const ch = canvas.height;

      const keyword = "YV";
      const radius = 16400;
      const drag = 0.92;
      const density = 1;
      const offset = 5;
      const timeout = 30;
      let pixels;
      const particles = [];

      let mx = 0,
        my = 0;

      //ctx.fillStyle = "#1c1d25";
      //ctx.fillRect(0,0,canvas.width,canvas.height);

      ctx.font = "240px 'Cinzel'";
      //ctx.fillStyle = "#cccccc";
      //Fill the keyword text onto the canvas.
      ctx.fillText(
        keyword,
        cw / 2 - Math.round(ctx.measureText(keyword).width / 2),
        ~~(ch / 2 - ch / 12)
      );

      canvas.addEventListener("mousemove", function (e) {
        mx = e.clientX - canvas.offsetLeft;
        my = e.clientY - canvas.offsetTop;
      });

      const Particle = function (x, y) {
        this.hx = ~~(x - offset * Math.random());
        this.hy = ~~(y - offset * Math.random());
        this.cx = ~~(cw * Math.random());
        this.cy = ~~(ch * Math.random());
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
      };

      Particle.prototype.update = function () {
        const dx = this.cx - mx;
        const dy = this.cy - my;
        const ds = dx * dx + dy * dy;
        const aradius = Math.min(radius / ds, radius);
        const theta = Math.atan2(dy, dx);

        const hdx = this.hx - this.cx;
        const hdy = this.hy - this.cy;
        const hds = Math.sqrt(hdx * hdx + hdy * hdy);
        const hf = hds * 0.01;
        const htheta = Math.atan2(hdy, hdx);

        this.vx += aradius * Math.cos(theta) + hf * Math.cos(htheta);
        this.vy += aradius * Math.sin(theta) + hf * Math.sin(htheta);

        if (aradius === radius) {
          this.vx *= drag / 10;
          this.vy *= drag / 10;
        } else {
          this.vx *= drag;
          this.vy *= drag;
        }

        this.cx += this.vx;
        this.cy += this.vy;
      };

      const self = this;
      const draw = function () {
        let a, b, p, n;
        ctx.canvas.width = ctx.canvas.parentElement.clientWidth;
        ctx.canvas.height = ctx.canvas.parentElement.clientHeight;

        b = (a = ctx.createImageData(cw, ch)).data;
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
        }

        for (let i = 0; i < particles.length; i++) {
          p = particles[i];
          (b[(n = (~~p.cx + ~~p.cy * cw) * 4)] = b[n + 1] = b[n + 2] = 220),
            (b[n + 3] = 255);
        }

        ctx.putImageData(a, 0, 0);
        if (!self.isDead) {
          setTimeout(function () {
            requestAnimationFrame(draw);
          }, timeout);
        } else {
          console.log("yay");
        }
      };

      const init = function () {
        pixels = ctx.getImageData(0, 0, cw, ch).data;

        for (let i = 0; i < ch; i = i + density) {
          for (let j = 0; j < cw; j = j + density) {
            const index = (j + i * cw) * 4;
            if (pixels[index + 3] > 128) {
              if (index >= particles.length) {
                particles.push(new Particle(j, i));
              } else {
                particles[index].hx = j;
                particles[index].hy = i;
              }
            }
          }
        }
      };


    init();
    console.log(particles.length);
    draw();
    }, 50);

  },
};
</script>
