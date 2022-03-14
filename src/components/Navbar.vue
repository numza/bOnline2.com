<template >
     <v-app-bar app elevation="0"  color="white" width="100%" class="aninatop" style=" border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;" >
      <v-app-bar-nav-icon class="hidden-xs-only" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img src="@/assets/bonline.png" 
      max-width="110"
      ></v-img>

      <v-spacer></v-spacer>
      
        
          <v-badge
            color="pink"
            dot
            overlap
          >
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
          
        <div class="mx-4"></div>
        <v-divider vertical class="hidden-xs-only"></v-divider>
        <v-list color="transparent" class="hidden-xs-only">
          
          <v-list-item >
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h7">
                John Leider
              </v-list-item-title>
              <v-list-item-subtitle >john@bonline.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      
      
    </v-app-bar>
</template>
<script>
export default {
    
}
</script>
<style >
.aninatop{

-webkit-animation: top 1s both;
animation: top 1s both;

}
@-webkit-keyframes left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@-webkit-keyframes top {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes top {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>