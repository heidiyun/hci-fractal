// file created at 2019-12-5
// Auto-generated files survey.ts

import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({})
export default class SurveyColor extends Vue {
  public $refs!: {
    container: HTMLCanvasElement;
  };

  private colors: string[] = [];
  private selectedColor: string = '';
  private selectedColors: string[] = [];
  private state: number = 0;
  private p!: p5;
  private branchAngle = 30;
  private branchCount = 8;
  private shapeValue = 4;
  private value = 9;

  public setup(p5: p5) {
    this.p = p5;
    this.initialize();
  }

  @Watch('shapeValue')
  @Watch('state')
  private initialize() {
    this.p.createCanvas(
      this.$refs.container.clientWidth,
      this.$refs.container.clientHeight
    );

    if (this.state === 1) {
      this.polygon(
        this.$refs.container.clientWidth / 2,
        this.$refs.container.clientHeight / 4 + 50,
        200,
        this.shapeValue
      );
    } else if (this.state === 2) {
      this.drawLine();
    } else if (this.state === 3) {
      this.setAngle();
    }
  }
  private mounted() {
    for (let i = 0; i < 360; i++) {
      // hsb to rgb\
      this.colors.push(this.HSVtoRGB(i / 360, 0.7, 0.7));
    }
  }

  @Watch('branchAngle')
  private setAngle() {
    this.$store.commit('setChildAngle', this.branchAngle);
    this.p.createCanvas(
      this.$refs.container.clientWidth,
      this.$refs.container.clientHeight
    );
    this.p.translate(
      this.$refs.container.clientWidth / 2,
      this.$refs.container.clientHeight / 4 + 100
    );
    this.p.fill(255, 255, 255, 127);
    this.p.stroke(255, 255, 255);

    this.p.rotate(this.p.PI + this.p.PI / 7.9);
    for (let i = 0; i < 3; i++) {
      // this.p.ellipse(0, 30, 2, 80);

      this.p.line(
        this.$refs.container.clientWidth / 20,
        this.$refs.container.clientHeight / 4,
        Math.cos(this.p.TWO_PI),
        Math.sin(this.p.TWO_PI)
      );

      const angle = (this.branchAngle * this.p.PI) / 180;
      this.p.strokeWeight(15);
      this.p.point(
        this.$refs.container.clientWidth / 20,
        this.$refs.container.clientHeight / 4
      );
      this.p.point(Math.cos(this.p.TWO_PI), Math.sin(this.p.TWO_PI));
      this.p.strokeWeight(1);

      if (i === 0) {
        this.p.rotate(angle);
      } else if (i === 1) {
        this.p.rotate(-angle * 2);
      }
    }
  }

  @Watch('branchCount')
  private drawLine() {
    this.$store.commit('setChildCount', this.branchCount);
    this.p.createCanvas(
      this.$refs.container.clientWidth,
      this.$refs.container.clientHeight
    );
    this.p.translate(
      this.$refs.container.clientWidth / 2,
      this.$refs.container.clientHeight / 4 + 100
    );
    this.p.fill(255, 255, 255, 127);
    this.p.stroke(255, 255, 255);

    for (let i = 0; i < this.branchCount; i++) {
      // this.p.ellipse(0, 30, 2, 80);

      this.p.line(
        this.$refs.container.clientWidth / 20,
        this.$refs.container.clientHeight / 4,
        Math.cos(this.p.TWO_PI / this.branchCount),
        Math.sin(this.p.TWO_PI / this.branchCount)
      );
      this.p.strokeWeight(15);
      this.p.point(
        this.$refs.container.clientWidth / 20,
        this.$refs.container.clientHeight / 4
      );

      this.p.strokeWeight(1);
      this.p.rotate(this.p.PI / (this.branchCount / 2));
    }
  }

  private polygon(x, y, radius, npoints) {
    this.$store.commit('setBranchCount', this.shapeValue);
    this.p.fill(255, 255, 255, 0);
    this.p.stroke(255, 255, 255);
    const angle = this.p.TWO_PI / npoints;
    this.p.beginShape();
    for (let a = 0; a < this.p.TWO_PI; a += angle) {
      let sx = x + Math.cos(a) * radius;
      let sy = y + Math.sin(a) * radius;

      this.p.vertex(sx, sy);
      this.p.strokeWeight(15);
      this.p.point(sx, sy);
      this.p.strokeWeight(1);
    }

    this.p.endShape(this.p.CLOSE);
  }

  private nextStep() {
    if (this.state === 3) {
      this.$router.push('/fractal');
    }
    this.state++;
  }
  private onClickColor(c) {
    this.selectedColor = c;
  }
  private nextState() {
    setTimeout(() => {
      this.state++;
    }, 0);
  }

  private onSelect(e) {
    if (this.selectedColor === '') {
      return;
    }
    this.selectedColors.push(this.selectedColor);

    if (this.selectedColors.length === 2) {
      this.$store.commit('setSelectedColors', this.selectedColors);
      console.log(this.$store.getters.selectedColors);
      this.nextState();
      // console.log(document.getElementById('shpaePage'));
      // document
      //   .getElementById('shpaePage')
      //   .scrollIntoView({ block: 'end', behavior: 'smooth' });
      // this.$router.push('/survey/shape');
    } else {
      this.selectedColor = '';
    }
  }

  private componentToHex(c) {
    const hex = c.toString(16);
    return (hex.length === 1 ? '0' + hex : hex).slice(0, 2);
  }
  private HSVtoRGB(h, s, v) {
    // @ts-ignore
    let r = 0;
    let g = 0;
    let b = 0;
    let i = 0;
    let f = 0;
    let p = 0;
    let q = 0;
    let t = 0;
    if (arguments.length === 1) {
      (s = h.s), (v = h.v), (h = h.h);
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        (r = v), (g = t), (b = p);
        break;
      case 1:
        (r = q), (g = v), (b = p);
        break;
      case 2:
        (r = p), (g = v), (b = t);
        break;
      case 3:
        (r = p), (g = q), (b = v);
        break;
      case 4:
        (r = t), (g = p), (b = v);
        break;
      case 5:
        (r = v), (g = p), (b = q);
        break;
    }
    return `#${this.componentToHex(r * 255)}${this.componentToHex(
      g * 255
    )}${this.componentToHex(b * 255)}`;
  }
}
