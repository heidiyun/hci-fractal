<template>
  <v-container fill-height>
    <v-layout justify-center align-center="">
      <div v-for="(color ,i ) in colors"
      :key="`color${i}`"
      style="width:5px; height:20px;"
      :style="{backgroundColor:color}"
      @click="onClickColor(color)"
      ></div>
    </v-layout>
  </v-container>
</template>
<script src='./survey.ts'>

</script>
<style lang='scss' scoped>
@import "./survey.scss";
</style>
