<template>
  <v-container fluid pa-0 ma-0 ref="container" class="fractal-container">
    <div class="fractal-controller">
      <div class="fractal-controller-item">
        <div class="fractal-controller-item-label">Shape</div>
        <div class="fractal-controller-item-input">
          <v-slider thumb-label hide-details :min="1" :max="20" v-model="option.branchCount"></v-slider>
        </div>
      </div>
      <div class="fractal-controller-item">
        <div class="fractal-controller-item-label">Start Color</div>
        <div class="fractal-controller-item-input pa-1">
          <div
            class="color"
            :style="{ background: option.startColor }"
            @click.self="
              ui.onEndColor = false;
              ui.onStartColor = !ui.onStartColor;
            "
          >
            <v-color-picker
              show-swatches
              swatches-max-height="200px"
              v-if="ui.onStartColor"
              class="picker"
              v-model="option.startColor"
            ></v-color-picker>
          </div>
        </div>
      </div>
      <div class="fractal-controller-item">
        <div class="fractal-controller-item-label">End Color</div>
        <div class="fractal-controller-item-input pa-1">
          <div
            class="color"
            :style="{ background: option.endColor }"
            @click.self="
              ui.onStartColor = false;
              ui.onEndColor = !ui.onEndColor;
            "
          >
            <v-color-picker
              show-swatches
              swatches-max-height="200px"
              v-if="ui.onEndColor"
              class="picker"
              v-model="option.endColor"
            ></v-color-picker>
          </div>
        </div>
      </div>
      <v-btn text block @click="drawFractal">GENERATE</v-btn>
    </div>
    <vue-p5 v-on="this"></vue-p5>
  </v-container>
</template>
<script src="./fractal.ts"></script>
<style lang="scss" scoped>
@import './fractal.scss';
</style>
