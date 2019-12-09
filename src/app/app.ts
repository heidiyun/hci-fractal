// file created at 2019-12-5
// Auto-generated files app.ts

import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  private mounted() {
    if (this.$route.path === '/') { this.$router.push(`survey/color`); }
  }
}
