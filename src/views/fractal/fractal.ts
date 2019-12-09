// file created at 2019-12-5
// Auto-generated files fractal.ts

import { Vue, Component } from 'vue-property-decorator';
import FractalGenerator from './fractalGenerator';

import * as VueP5 from 'vue-p5';

// import { p5InstanceExtensions } from 'p5';


Vue.component('vue-p5', VueP5);
@Component({})
export default class Fractal extends Vue {
  public $refs!: {
    container: HTMLCanvasElement;
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

      this.fractal = new FractalGenerator(this.p5,
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight);
      this.drawFractal();
    }
  }
  private drawFractal() {
    this.fractal.generate({
      branchCount: 20,
      branchLength: Math.min(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight) * 0.13,
      childAngle: 160,
      depthCount: 5,
      childLengthRatio: 1,
    });
  }


}
