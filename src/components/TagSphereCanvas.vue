<script>
export default {
  inject: ["provider"],

  data() {
    return {
      isDead: false
    }
  },

  beforeUnmount() {
    this.isDead = true;
  },

  render() {
    const start = Date.now();

    const awaitArgumentsSet = (resolve, reject) => {
      if (this.provider && this.provider.context)
        resolve(this.provider.context);
      else if (Date.now() - start >= 10000) reject(new Error("timeout"));
      else setTimeout(awaitArgumentsSet.bind(this, resolve, reject), 30);
    };

    new Promise(awaitArgumentsSet).then(() => {
      const canvas = this.provider.context.canvas;
      const texts = [
        "HTML5",
        "Javascript",
        "Java",
        "Redux",
        "Github",
        "Redux Saga",
        "Vue",
        "Jenkins",
        "Canvas",
        "Kotlin",
        "Spring",
        "CSS",
        "Python",
        "Java",
        "MySQL",
        "PostgreSQL",
        "Photoshop",
        "Android",
        "Illustrator",
        "Kafka",
        "React",
        "Typescript",
        "NodeJS",
        "SCSS",
        "LESS",
        "Redux",
        "Webpack"
      ];
      const counts = [1, 2, 4, 5, 4, 2, 1];
      const options = {
        tilt: Math.PI / 9,
        initialVelocityX: 0.78,
        initialVelocityY: 0.78,
        initialRotationX: Math.PI * 0.14,
        initialRotationZ: 0,
      };

      const wordSphere = (canvas, texts, counts, options) => {
        const {
          width = 720,
          height = 520,
          radius = 380,
          fontSize = 42,
          tilt = 0,
          initialVelocityX = 0,
          initialVelocityY = 0,
          initialRotationX = 0,
          initialRotationZ = 0,
        } = options;
        let vx = initialVelocityX,
          vy = initialVelocityY;
        let rx = initialRotationX,
          rz = initialRotationZ;
        let ctx = canvas.getContext("2d");
        let clicked = false,
          lastX,
          lastY, dx, dy;
        ctx.textAlign = "center";
        ctx.scale(2, 2);
        canvas.width = width * 2;
        canvas.height = height * 2;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.addEventListener("mousedown", (event) => {
          clicked = true;
          lastX = event.screenX;
          lastY = event.screenY;
        });
        canvas.addEventListener("mousemove", (event) => {
          if (!clicked) return;

          [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
          [lastX, lastY] = [event.screenX, event.screenY];
          rz += -dy * 0.01;
          rx += dx * 0.01;
          vx = dx * 0.1;
          vy = dy * 0.1;
          if (!looping) startLoop();
        });
        canvas.addEventListener("mouseup", () => (clicked = false));
        canvas.addEventListener("mouseleave", () => (clicked = false));
        function rot(x, y, t) {
          return [
            x * Math.cos(t) - y * Math.sin(t),
            x * Math.sin(t) + y * Math.cos(t),
          ];
        }
        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          let ix = 0,
            iz = 0;
          for (const text of texts) {
            const degZ = (Math.PI / (counts.length - 1)) * iz;
            const degX = ((2 * Math.PI) / counts[iz]) * ix;
            let x = radius * Math.sin(degZ) * Math.cos(degX);
            let y = radius * Math.sin(degZ) * Math.sin(degX);
            let z = radius * Math.cos(degZ) + 8 * (ix % 2);
            [y, z] = rot(y, z, tilt);
            [x, z] = rot(x, z, rz);
            [x, y] = rot(x, y, rx);

            const alpha = 0.15 + 0.6 * (x / radius);
            const size = fontSize + 2 + 5 * (x / radius);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.font = `${size}px Cinzel, sans-serif`;
            ctx.fillText(text, y + width / 1.33, -z + height / 1);
            ix--;
            if (ix < 0) {
              iz++;
              ix = counts[iz] - 1;
            }
          }
        }

        let looping = false;

        const rendererLoop = () => {
          if (looping && !this.isDead) window.requestAnimationFrame(rendererLoop);
          render();

          if (vx > 0) vx = vx - 0.02;
          if (vy > 0) vy = vy - 0.02;
          if (vx < 0) vx = vx + 0.02;
          if (vy > 0) vy = vy + 0.02;

          if ((vx <= 0.25 && vy <= 0.25) && (vx >= -0.25 && vy >= -0.25)) {
            vx = 0.78;
            vy = 0.78;
          }

          if (vx > 7.5) {
            vx = 7.5;
          }

          if (vy > 7.5) {
            vy = 7.5;
          }


          if (vx < -7.5) {
            vx = -7.5;
          }

          if (vy < -7.5) {
            vy = -7.5;
          }

          rz += vy * 0.02;
          rx += vx * 0.02;
        }
        function startLoop() {
          looping = true;
          window.requestAnimationFrame(rendererLoop);
        }
        startLoop();
      }

      wordSphere(canvas, texts, counts, options);
    });

    return undefined;
  },
};
</script>
