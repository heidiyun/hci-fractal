<template>
  <v-container fluid pa-0 ma-0 ref="container" class="fractal-container">
    <v-btn @click="save" icon size="large" color="white" style="position:absolute; right:10px;">
      <v-icon style=" font-size:40px;">mdi-arrow-down-bold-box</v-icon>
    </v-btn>
    <vue-p5 v-on="this"></vue-p5>
  </v-container>
</template>
<script src="./fractal.ts"></script>
<style lang="scss" scoped>
@import './fractal.scss';
</style>
