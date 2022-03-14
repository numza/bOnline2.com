<template >
    <v-navigation-drawer v-model="drawer" clipped id="sidebar" :permanent="this.$vuetify.breakpoint.md" :width="this.$vuetify.breakpoint.md ?'220':'270'" app>
        <v-list color="transparent">
                  
                    <v-list-item>
                      <v-list-item-content>
                        <v-btn to="/" active-class="active" small text  block    class="d-flex align-center justify-start"><v-icon dark size="20" class="mr-4">mdi-home-variant-outline</v-icon><span class="btn_text">Home</span></v-btn>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        
                          <v-btn to="/about" active-class="active" small text  block   class="d-flex align-center justify-start"><v-icon dark size="20" class="mr-4">mdi-credit-card-outline</v-icon><span class="btn_text">Billings</span></v-btn>
                        
                      </v-list-item-content>
                    </v-list-item>
                  
                </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
    
}
</script>
<style>
    #sidebar{
        -webkit-animation: left 1s both;
        animation: left 1s both;
    }
</style>