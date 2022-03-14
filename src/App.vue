<template>
  <v-app id="inspire">
    
    <!-- Top Navbar -->
    <Navbar/>
    
    <!-- Sidabar  -->
    <Sidebar/>
    <!-- Main Content -->
    <v-main style="position:relative;">
    
      <!-- Subnav -->
      
      <!-- Main content of the page  -->  
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

  export default {
    components:{
      Sidebar,
      Navbar,
      
    },
    data: () => ({ drawer: null }),
    
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');


*{
  font-family: 'Comfortaa', cursive;
  
}
body{
  background:#fff8fa
}

.btn_text{
  font-size: .78rem
}
.active{
  background: #1F8CEB !important;
color: white !important
}
header{
  left: 0px !important;
}

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
