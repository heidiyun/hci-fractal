
import * as p5 from 'p5';

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
    endColor: '#ffff00',
    branchCount: 3,
    childCount: 4,
    childAngle: 30,
    childLengthRatio: 0.7,
    width: 100,
    height: 100,
    branchLength: 100,
  };

  private p: p5;
  public constructor(p: p5, width: number, height: number) {
    this.p = p;
    this.option.width = width;
    this.option.height = height;
    this.p.createCanvas(this.option.width, this.option.height);
  }

  public generate(option?: Partial<FractalOption>) {
    this.option = Object.assign(this.option, option);
    this.p.background(0);
    const createCount = this.option.branchCount * 1;
    const diffAngle = 360 / createCount;
    for (let i = 0; i < createCount; i++) {
      const x = this.option.width / 2;
      const y = this.option.height / 2;
      const degree = i * diffAngle;
      const length = this.option.branchLength;
      this.drawLine(x, y, degree, length, 1);
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
    const c = this.lerpColor(
      this.option.startColor,
      this.option.endColor,
      (depth - 1) / this.option.depthCount);

    const a = (1 - depth / this.option.depthCount) * 235 + 20;


    this.p.stroke(c.r, c.g, c.b, a);
    this.p.strokeWeight(1);
    this.p.line(x1, y1, x2, y2);

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
