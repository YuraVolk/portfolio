<script>
export default {
  inject: ["provider"],
  render() {
    const context = this.provider.context;
    console.log(context)
    let loopTimeout = null;
    let cWidth, cHeight;

    class NoiseGeneration {
      constructor() {
        this.noiseData = [];
        this.frame = 0;
        this.resizeThrottle = undefined;
        this.setup();

        window.addEventListener(
          "resize",
          () => {
            if (this.resizeThrottle) {
              window.clearTimeout(this.resizeThrottle);
            }

            this.resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              this.setup();
            }, 200);
          },
          false
        );
      }

      createNoise() {
        const imageData = context.createImageData(
          context.canvas.width,
          context.canvas.height
        );
        const buffer = new Uint32Array(imageData.data.buffer);
        const length = buffer.length;

        for (let i = 0; i < length; i++) {
          if (Math.random() < 0.33) {
            buffer[i] = 0x43ffffff;
          }
        }

        this.noiseData.push(imageData);
      }

      paint() {
        if (this.frame === 12) {
          this.frame = 0;
        } else {
          this.frame++;
        }

        context.putImageData(this.noiseData[this.frame], 0, 0);
      }

      setup() {
        this.noiseData = [];
        cWidth = window.innerWidth;
        cHeight = window.innerHeight;

        try {
          context.canvas.width = cWidth;
          context.canvas.height = cHeight;
        } catch (e) {
          return;
        }

        for (let i = 0; i < 13; i++) {
          this.createNoise();
        }
      }
    }


    setTimeout(() => {
      const generateNoiseSupplier = new NoiseGeneration();
       generateNoiseSupplier.paint();


      const mainLoop = () => {
        generateNoiseSupplier.paint();

        window.requestAnimationFrame(mainLoop);
      };

      mainLoop();
    }, 1);

    return undefined;
  },
};
</script>
