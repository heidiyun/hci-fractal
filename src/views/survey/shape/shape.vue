<template>
  <v-container fill-height  >
  <h1 class='survey-question' >원하는 도형을 골라주세요.</h1>  
     <v-layout wrap style="height: 480px; margin-top:40px;">
       <v-flex 
       v-for="(card, i) in 6 " :key="`card${i}`" 
            lg3
            md4
            sm6
            style="height: 180px;"
            >
       <v-card class="card" >
         <v-img  src="https://picsum.photos/id/11/500/300" style="height:100%;"></v-img>
       </v-card>
       </v-flex>
     </v-layout>
   
    <div class="d-flex" style="width: 100vw; justify-content : flex-end;">
    <v-btn @click="onSelect">다음</v-btn>
    </div>
    
  </v-container>
</template>
<script src='./shape.ts'>

</script>
<style lang='scss' scoped>
@import "./shape.scss";
</style>
