<template>
  <v-container
    fill-height
    fluid
    class="pa-0"
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

      <div
        class="d-flex"
        style="width: 100vw; justify-content : center; margin-top:12px;"
      >
        <v-icon dark class="check-button" @click="onSelect"
          >mdi-check-bold</v-icon
        >
      </div>
    </div>
    <div class="page" :show="state === 1" :end="state > 1">
      <h1 class="survey-question">Select fractal shape what you want</h1>
      <v-layout wrap class="image-selector">
        <v-flex
          lg4
          md4
          sm6
          v-for="(card, i) in 6"
          :key="`card${i}`"
          class="image-selector-item"
        >
          <v-card class="card" style="margin:0px 44px;">
            <v-img contain :src="`/${i + 1}.png`" style="height:100%;"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script src="./color.ts"></script>
<style lang="scss" scoped>
@import './color.scss';
</style>
