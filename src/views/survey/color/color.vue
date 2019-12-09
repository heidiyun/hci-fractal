<template>
  <v-container
    fill-height
    fluid
    class="pa-0"
    :style="selectedColor === '' && selectedColors.length===0 ? {backgroundColor: 'black'} : selectedColors.length >= 1 ? {backgroundImage: `linear-gradient(to Right, ${selectedColors[0]} , ${selectedColor === '' ?selectedColors[0] : selectedColor})`} : {backgroundColor : selectedColor}"
  >
    <h1
      class="survey-question"
      style="color:rgba(255,255,255,1);"
    >Select {{selectedColors.length === 0 ? 'start' : 'end'}} color what you want</h1>

    <!-- <div
      class="second-color-container"
      style="margin-top:250px;"
      :style="{backgroundImage: `linear-gradient(to Right, ${selectedColors[0]} , ${selectedColor})`}"
    ></div>-->

    <v-layout
      justify-center
      align-center
      style="margin-top: 680px;height: 40px; width:100%; background:rgba(0,0,0,1); "
    >
      <div
        v-for="(color ,i ) in colors"
        class="color-div"
        :key="`color${i}`"
        :selected="color === selectedColor || selectedColors[0] === color"
        :disabled="selectedColors.length === 2"
        :style="{backgroundColor:color}"
        @click="onClickColor(color)"
      ></div>
    </v-layout>

    <div class="d-flex" style="width: 100vw; justify-content : center; margin-top:12px;">
      <v-btn icon dark @click="onSelect">
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
    </div>

    <v-layout
      id="shpaePage"
      wrap
      style="height: 1000px; 
     margin-top:40px; padding: 0px 56px; color:white;"
    >
      <h1 class="survey-question">Select fractal shape what you want</h1>

      <v-flex
        lg4
        md4
        sm6
        v-for="(card, i) in 6"
        :key="`card${i}`"
        data-aos="flip-left"
        style="height: 250px; "
      >
        <v-card class="card" style="margin:0px 44px;">
          <v-img contain :src="`/${i +1}.png`" style="height:100%;"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src='./color.ts'>
</script>
<style lang='scss' scoped>
@import './color.scss';
</style>
