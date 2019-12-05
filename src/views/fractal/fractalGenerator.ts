
// import { p5InstanceExtensions } from 'p5';


export interface FractalOption {
  depthCount: number;
  startColor: string;
  endColor: string;
  childCount: number;
  childAngle: number;
  childLengthRatio: number;
  branchCount: number;
  branchLength: number;
  width: number;
  height: number;
}
export default class FractalGenerator {

  private option: FractalOption = {
    depthCount: 3,
    startColor: '#ff0000',
    endColor: '#00ff00',
    branchCount: 3,
    childCount: 4,
    childAngle: 30,
    childLengthRatio: 0.7,
    width: 100,
    height: 100,
    branchLength: 100,
  };

  private context: CanvasRenderingContext2D;
  public constructor(element: HTMLCanvasElement, options?: Partial<FractalOption>) {

    try {
      const ctx = element.getContext('2d');
      if (ctx === null) {

        throw new Error('Context is null');
      }
      this.context = ctx;
      this.option.width = element.width;
      this.option.height = element.height;
    } catch (e) {
      throw new Error('Canvas element is not defined');
    }
  }

  public generate() {
    // @ts-ignore
    console.log(this.context);

    this.context.background(0);
    const createCount = this.option.branchCount * 1;
    const diffAngle = 360 / createCount;

    this.context.globalCompositeOperation = 'lighter';
    for (let i = 0; i < createCount; i++) {
      this.drawLine(
        this.option.width / 2,
        this.option.height / 2, i * diffAngle,
        this.option.branchLength, 1);
    }
  }

  private lerpColor(c1: string, c2: string, lerpValue: number) {
    const r1 = Number('0x' + c1[1] + c1[2]);
    const g1 = Number('0x' + c1[3] + c1[4]);
    const b1 = Number('0x' + c1[5] + c1[6]);

    const r2 = Number('0x' + c2[1] + c2[2]);
    const g2 = Number('0x' + c2[3] + c2[4]);
    const b2 = Number('0x' + c2[5] + c2[6]);

    return {
      r: r1 * (1 - lerpValue) + r2 * lerpValue,
      g: g1 * (1 - lerpValue) + g2 * lerpValue,
      b: b1 * (1 - lerpValue) + b2 * lerpValue,
    };
  }

  private drawLine(x1: number, y1: number, degree: number, dist: number, depth: number) {
    if (depth > this.option.depthCount) { return; }

    const radian = degree / 180 * Math.PI;
    const x2 = x1 + Math.cos(radian) * dist;
    const y2 = y1 + Math.sin(radian) * dist;
    const c = this.lerpColor(this.option.startColor, this.option.endColor,
      depth / this.option.depthCount);

    const a = (1 - depth / this.option.depthCount) * 255;

    // @ts-ignore
    this.context.stroke(c.r, c.g, c.b, a);
    // @ts-ignore
    this.context.strokeWeight(1);
    // @ts-ignore
    this.context.line(x1, y1, x2, y2);

    // var childCount = 2; // temp
    const initAngle = degree - ((this.option.childCount - 1)
      * this.option.childAngle) / 2;
    for (let i = 0; i < this.option.childCount; i++) {
      this.drawLine(x2, y2,
        initAngle + i * this.option.childAngle,
        dist * this.option.childLengthRatio, depth + 1);
    }
  }




}