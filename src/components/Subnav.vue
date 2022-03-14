<template >
    <v-toolbar flat id="subnav" style="border-bottom: 1px solid #efefef;">
        
          <div>
            <h2>{{ title }}</h2>
            <small>{{ subTitle }}</small>
          </div>
          
        
    </v-toolbar>
</template>
<script>
export default {
    props:{
      title : String,
      subTitle: String
    }
}
</script>
<style>
    #subnav{
      animation-delay: 2s;
      -webkit-animation: top 1s both;
      animation: top 1s both;
    }
</style>