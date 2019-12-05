// file created at 2019-12-5
// Auto-generated files fractal.ts

import { Vue, Component } from 'vue-property-decorator';
import FractalGenerator from './fractalGenerator';

@Component({})
export default class Fractal extends Vue {
  public $refs!: {
    canvas: HTMLCanvasElement;
  };
  private fractal!: FractalGenerator;
  private mounted() {

    console.warn(this.$refs);
    console.log('element ', this.$refs.canvas);
    this.fractal = new FractalGenerator(this.$refs.canvas);
    this.fractal.generate();
    // TODO
  }

  private init() {

  }

}
