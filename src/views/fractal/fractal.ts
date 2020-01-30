// file created at 2019-12-5
// Auto-generated files fractal.ts

import { Vue, Component } from 'vue-property-decorator';
import FractalGenerator, { FractalOption } from './fractalGenerator';

import * as VueP5 from 'vue-p5';

// import { p5InstanceExtensions } from 'p5';

Vue.component('vue-p5', VueP5);
@Component({})
export default class Fractal extends Vue {
  public $refs!: {
    container: HTMLCanvasElement;
  };
  private ui = {
    onStartColor: false,
    onEndColor: false
  };
  private option: FractalOption = {
    depthCount: 3,
    startColor: '#ff0000',
    endColor: '#ffff00',
    branchCount: 6,
    childCount: 2,
    childAngle: 40,
    childLengthRatio: 0.7,
    width: 100,
    height: 100,
    branchLength: 100
  };
  private fractal!: FractalGenerator;
  private p5!: p5;
  public setup(p5: p5) {
    this.p5 = p5;
    this.initialize();
  }
  private mounted() {
    this.initialize();
  }
  private initialize() {
    if (this.p5 && this.$refs.container) {
      this.fractal = new FractalGenerator(
        this.p5,
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      );
      this.drawFractal();
    }
  }
  private drawFractal() {
    console.log(this.option.branchCount);
    this.fractal.generate({
      startColor: this.$store.getters.selectedColors[0],
      endColor: this.$store.getters.selectedColors[1],
      branchCount: this.$store.getters.branchCount,
      branchLength:
        Math.min(
          this.$refs.container.clientWidth,
          this.$refs.container.clientHeight
        ) * 0.13,
      childAngle: this.$store.getters.childAngle,
      depthCount: 7,
      childLengthRatio: 0.84,
      childCount: this.$store.getters.childCount
    });
  }
}
