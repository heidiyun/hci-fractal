<template>
  <v-container fill-height fluid class="pa-0":style="selectedColor === '' ? {backgroundColor: 'black'} :{backgroundColor: selectedColor}" >
  <h1 class='survey-question' style="color:rgba(255,255,255,1);">Select {{selectedColors.length === 0 ? 'start' : 'end'}} color what you want</h1>  
   

    
    <v-layout justify-center align-center style="position:absolute; bottom:0; height: 40px; width:100%; background:rgba(0,0,0,1); margin-bottom: 20px;" >
      <div v-for="(color ,i ) in colors"
      class="color-div"
      :key="`color${i}`"
      :selected="color === selectedColor"
      :disabled="selectedColors.length === 2"
      :style="{backgroundColor:color}"
      @click="onClickColor(color)"
      ></div>
    </v-layout>
    <!-- <div class="d-flex" style="width: 100vw; justify-content : flex-end;">
    <v-btn @click="onSelect">{{selectedColors.length === 0 ? '선택' : '확인'}}</v-btn>
    </div> -->
    
  </v-container>
</template>
<script src='./color.ts'>

</script>
<style lang='scss' scoped>
@import "./color.scss";
</style>
