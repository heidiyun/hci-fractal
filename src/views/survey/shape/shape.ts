// file created at 2019-12-5
// Auto-generated files survey.ts

import { Vue, Component } from 'vue-property-decorator';
import AOS from 'aos';

@Component({})
export default class SurveyColor extends Vue {
  private colors: string[] = [];
  private selectedColor: string = '';
  private selectedColors: string[] = [];
  private mounted() {
    console.log(document.getElementById('aaa'));
    for (let i = 0; i < 360; i++) {
      // hsb to rgb\
      this.colors.push(this.HSVtoRGB(i / 360, 0.7, 0.7));
    }
  }

  private onClickColor(c) {
    this.selectedColor = c;
  }

  private onSelect(e) {
    if (this.selectedColor === '') {
      return;
    }
    this.selectedColors.push(this.selectedColor);
    this.selectedColor = '';

    if (this.selectedColors.length === 2) {
      this.$store.commit('setSelectedColors', this.selectedColors);

      
      this.$router.push('/survey/shape');
    }
  }

  private componentToHex(c) {
    const hex = c.toString(16);
    return (hex.length === 1 ? '0' + hex : hex).slice(0, 2);
  }
  private HSVtoRGB(h, s, v) {
    // @ts-ignore
    let r, g, b, i, f, p, q, t;
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
