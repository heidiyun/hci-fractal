<template>
  <v-container fill-height fluid class="pa-0":style="selectedColor === '' && selectedColors.length===0 ? {backgroundColor: 'black'} :{backgroundColor: selectedColors.length === 1 ?selectedColors[0] : selectedColor}" >
  <h1 class='survey-question' style="color:rgba(255,255,255,1);">Select {{selectedColors.length === 0 ? 'start' : 'end'}} color what you want</h1>  
   
   <div v-if="selectedColors.length === 1" class="second-color-container" :style="{backgroundImage: `linear-gradient( ${selectedColors[0]} , ${selectedColor}  35% 55%, ${selectedColors[0]})`}"></div>
    
    <v-layout justify-center align-center style="position:absolute; bottom:50px; height: 40px; width:100%; background:rgba(0,0,0,1); " >
      <div v-for="(color ,i ) in colors"
      class="color-div"
      :key="`color${i}`"
      :selected="color === selectedColor || selectedColors[0] === color"
      :disabled="selectedColors.length === 2"
      :style="{backgroundColor:color}"
      @click="onClickColor(color)"
      ></div>
      
    </v-layout>
    
    <div class="d-flex" style="width: 100vw; justify-content : center; position:absolute; bottom:10px;">
    <v-btn icon dark  @click="onSelect"><v-icon> mdi-check-bold</v-icon></v-btn>
    </div>
    
  </v-container>
</template>
<script src='./color.ts'>

</script>
<style lang='scss' scoped>
@import "./color.scss";
</style>
