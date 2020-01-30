<template>
  <v-container id="aaa" fill-height>
    <h1 class="survey-question">원하는 도형을 골라주세요.</h1>

    <v-layout wrap style="height: 480px; margin-top:40px;">
      <vue-p5 v-on="this"></vue-p5>
    </v-layout>

    <div class="d-flex" style="width: 100vw; justify-content : flex-end;">
      <v-btn @click="onSelect">다음</v-btn>
    </div>
  </v-container>
</template>
<script src='./shape.ts'>
</script>
<style lang='scss' scoped>
@import './shape.scss';
</style>

