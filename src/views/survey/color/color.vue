<template>
  <v-container
    ref="container"
    fill-height
    fluid
    :style="
      selectedColor === '' && selectedColors.length === 0
        ? { backgroundColor: 'black' }
        : selectedColors.length >= 1
        ? {
            backgroundImage: `linear-gradient(to Right, ${
              selectedColors[0]
            } , ${selectedColor === '' ? selectedColors[0] : selectedColor})`
          }
        : { backgroundColor: selectedColor }
    "
  >
    <div class="page" :show="state === 0" :end="state > 0">
      <h1 class="survey-question">
        Select {{ selectedColors.length === 0 ? 'start' : 'end' }} color what
        you want
      </h1>
      <v-layout justify-center align-center class="color-group">
        <div
          v-for="(color, i) in colors"
          class="color-div"
          :key="`color${i}`"
          :selected="color === selectedColor || selectedColors[0] === color"
          :disabled="selectedColors.length === 2"
          :style="{ backgroundColor: color }"
          @click="onClickColor(color)"
        ></div>
      </v-layout>

      <div class="d-flex" style="width: 100vw; justify-content : center; margin-top:12px;">
        <v-icon dark class="check-button" @click="onSelect">mdi-check-bold</v-icon>
      </div>
    </div>
    <div class="page" :show="state === 1" :end="state > 1">
      <h1 class="survey-question">Select fractal shape what you want</h1>
      <v-slider
        class="slider"
        v-model=" shapeValue "
        min="4"
        max="15"
        step="1"
        thumb-label="always"
        ticks
      ></v-slider>
      <v-btn @click="nextStep" large icon color="white" style="position:absolute; right:10px;">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>

      <vue-p5 class="canvas" v-if="state===1" v-on="this"></vue-p5>
    </div>
    <div class="page" :show="state === 2" :end="state > 2">
      <h1 class="survey-question">Select fractal shape what you want</h1>
      <v-slider
        class="slider"
        v-model="branchCount "
        min="4"
        max="15"
        step="1"
        thumb-label="always"
        ticks
      ></v-slider>
      <v-btn @click="nextStep" large icon color="white" style="position:absolute; right:10px;">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>

      <vue-p5 class="canvas" v-if="state===2" v-on="this"></vue-p5>
    </div>
    <div class="page" :show="state === 3" :end="state > 3">
      <h1 class="survey-question">Select fractal shape what you want</h1>
      <v-slider class="slider" v-model="branchAngle " min="30" max="120" step="1" ticks></v-slider>
      <v-btn @click="nextStep" large icon color="white" style="position:absolute; right:10px;">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>

      <vue-p5 class="canvas" v-if="state===3" v-on="this"></vue-p5>
    </div>
  </v-container>
</template>
<script src="./color.ts"></script>
<style lang="scss" scoped>
@import './color.scss';
</style>
