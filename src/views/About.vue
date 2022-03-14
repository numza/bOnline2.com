<template>

  <div class="about" >
    <Subnav :title="'Billings'" :subTitle ="'Overview of your accounts'" />
    <v-toolbar dense  prominent flat style="border-bottom: 1px solid #efefef;">
      
        <v-item-group mandatory class="ml-5" >
          <v-container>
            <v-row justify="start" class="space d-flex">
              
              <v-col cols="12" md="4" sm="3" xs="2" lg="3"  v-for="item in items" :key="item.account_id" @click="getAll(item.account_id)">
                
                  <v-item v-slot="{active, toggle}" class="activeClass ">
                    <v-card   :color="active ? 'rgb(205,234,255)' : 'transparent'"
                    class="d-flex  rounded-md pa-2 "
                    
                    height="75"
                    width="450"
                    @click="toggle"
                    
                    
                    >
                      <v-row>
                        <v-col cols="12" sm="12">
                          <div class="d-flex align-center mb-lg-4">
                            <span  class="mr-2 UserAccount">Senele Cebekhulu</span>
                            
                            
                            <v-chip v-if="item.account_status == 'Live'" width="15"  height="15" elevation="0" :color="active ? 'white' : 'rgb(231,252,247)'" class="ml-2 rounded-xl" small style="color:#19d5b2;font-weight:700">Active</v-chip>
                            <v-chip  width="15" v-else-if="item.account_status == 'Cancelled'" height="15" elevation="0" :color="active ? 'white' : 'rgb(231,252,247)'" class=" ml-2 rounded-xl" small style="color:#EE405B;font-weight:700" >Cancelled</v-chip>
                            <v-chip width="15" v-else-if="item.account_status == 'Suspended'" height="15" elevation="0" :color="active ? 'white' : 'rgb(231,252,247)'" class="ml-2 rounded-xl" small style="color:#FFD013;font-weight:700">Suspended</v-chip>

                          </div>
                        
                        
                        <small>Account ID :{{ item.account_id }}</small>
                          
                        </v-col>
                      </v-row>
                    </v-card>
                    
                  </v-item>
                
              </v-col>
              
            </v-row>          
          </v-container>
        </v-item-group>
      
    </v-toolbar>

    <v-container>
      <v-lazy
        
        :options="{
          threshold: .10
        }"
        min-height="200"
        transition="scroll-x-transition"
      >
      <v-row>
        
        <v-col cols="12"  md="8">

          <v-card min-height="400" outlined>
            
            <v-toolbar  height="65" 
            elevation="0"
            dense
            outlined
            >
              <div>
                <h3 class="h4 mb-0 d-flex align-center"> 
                  <span>Payment details</span> 
                  &nbsp;&nbsp;
                  <v-tooltip bottom >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="hidden-sm-and-up"
                      >
                        <v-icon color="grey" size="15">mdi-help-circle-outline</v-icon>
                      </v-btn>
                    </template>
                    <span><small>view details of your next invoice and payment method</small></span>
                  </v-tooltip>
                  
                </h3>
                <small class="hidden-xs-only">View details of your next invoice and payment method</small>
                
              </div>
            </v-toolbar>
            <v-card-title class="caption font-weight-bold">
              Next Invoice: {{ formatDate(selected.data.next_invoice_date) }}
            </v-card-title>
            <v-card-text >
              <v-row class="">
                <v-col cols="12" sm="6" >
                <v-card
                color="bgCard"
                rounded
                class="pa-5"
              >
                <h3 class="caption font-weight-bold">Current balance</h3>
                <h2 class=" font-weight-black">R{{ selected.data.balance }}</h2>
                <v-row class="mt-3">
                  <v-col cols="2" class="d-flex align-start justify-end pr-0">
                    <v-icon color="black">mdi-lock</v-icon>
                  </v-col>
                  <v-col cols="10">
                    <p>This is a secured 256-bit SSL encrypted payment. You're safe.</p>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-btn  small color="active"   class="text-capitalize"><span class="caption font-weight-800">Pay now</span></v-btn>
                </v-card-actions>
                </v-card>
                </v-col>
                <v-col cols="12" sm="6" >
                <v-card
                
                color="bgCard"
                rounded
                class="pa-5 "
                
              >
               <h3 class="caption font-weight-bold"><span>Payment Method</span> &nbsp;&nbsp;<span class="caption ">Annual</span></h3>
                
                <v-row class="mt-3">
                  <v-col cols="2" class="d-flex align-start justify-end pr-0">
                    <v-icon color="#19D5B2">mdi-lightbulb-on</v-icon>
                  </v-col>
                  <v-col cols="10">
                    <p><span style="color:#19D5B2">Guide: </span>To manage your payments easy, we recommend switching to DIrect Debit.</p>
                  </v-col>
                </v-row>
                <v-card-actions>
                        <v-btn  small color="active"   class="text-capitalize"><span class="caption font-weight-800">Switch to Direct Debit</span></v-btn>
                  
                </v-card-actions>
              
              </v-card>
                </v-col>
              </v-row>
              
             
            </v-card-text>
            
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
           <v-card outlined min-height="400">
            <v-toolbar  height="65"
            elevation="0"
            dense
            outlined
            >
              <div>
                <h3 class="h4 mb-0">My Products</h3>
                <small></small>
              </div>
            </v-toolbar>
            <v-card-text >
              <v-list>
                <div v-for="product in selected.data.products" :key="product.product_id">
                  <v-list-item >
                    <v-list-item-icon>
                      <v-icon v-if="product.product_kind == 'VOIP'">mdi-phone</v-icon>
                      <v-icon v-if="product.product_kind == 'TELCO'">mdi-source-branch</v-icon>
                      <v-icon v-if="product.product_kind == 'WEBSITE'">mdi-laptop</v-icon>
                      
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-if="product.product_kind == 'VOIP'"><small>VoIP-{{ product.product_detail }}</small></v-list-item-title>
                      <v-list-item-title v-if="product.product_kind == 'TELCO'"><small>Fibre-{{ product.product_detail }}</small></v-list-item-title>
                      <v-list-item-title v-if="product.product_kind == 'WEBSITE'"><small>Website-{{ product.product_detail }}</small></v-list-item-title>                                            
                      
                    </v-list-item-content>
                  
                  </v-list-item>
                  <v-divider ></v-divider>
                </div>
                
                
                
              </v-list>
            </v-card-text>
           
          </v-card>
        </v-col>
      </v-row>
      </v-lazy>
      <!-- 

       -->
       <v-lazy
        
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
       <v-row>
        <v-col cols="12">
          <v-card outlined>
            <v-toolbar  height="65" 
            elevation="0"
            dense
            outlined
            >
           <div>
                <h3 class="h4 mb-0 d-flex align-center"> 
                  <span>Payment details</span> 
                  &nbsp;&nbsp;
                  <v-tooltip bottom >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="hidden-sm-and-up"
                      >
                        <v-icon color="grey" size="15">mdi-help-circle-outline</v-icon>
                      </v-btn>
                    </template>
                    <span><small>Choose a billing plan to see more details</small></span>
                  </v-tooltip>
                  
                </h3>
                <small class="hidden-xs-only">Choose a billing plan to see more details</small>
           </div>
                
            </v-toolbar>
            
              <div class="tableContainer">

                <table>
                  <tr class="">
                    <th class="pl-4 caption font-weight-bold" >Date </th>
                    <th class="caption font-weight-bold">Type</th>
                    <th class="caption font-weight-bold">Amount</th>
                    <th class="caption font-weight-bold">Balance</th>
                    <th class="caption font-weight-bold">Reference</th>
                    <th class="caption font-weight-bold">Download</th>
                  </tr>
                  <tr v-for="i in 6" :key="i">
                    <td class="pl-4">3 Dec 2020</td>
                    <td >Invoice</td>
                    <td >R8.00</td>
                    <td >R45.00</td>
                    <td >8993UDEJ</td>
                    <td ><v-icon color="#1e8ceb">mdi-tray-arrow-down</v-icon></td>
                  </tr>
                  
                </table>
              </div>
            <v-card-actions>
              <v-container>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-container class="max-width">
                      <v-pagination
                        v-model="page"
                        class="my-4"
                        :length="15"
                      ></v-pagination>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
       
      </v-row>
       </v-lazy>
    </v-container>
   

  </div>
</template>
<script>
import Subnav from '@/components/Subnav'

import { mapActions } from 'vuex'
export default {
  components: {
    Subnav,
  },
  data() {
    return {
      page: 1,
      items: [],
      selected:{
        
        data : {
          account_id: null,
          account_status: null,
          address_city: null,
          address_country: null,
          address_county: null,
          address_line_one: null,
          address_line_two: null,
          address_post_code: null,
          authorised_contact: null,
          balance: null,
          business_name: null,
          email_address: null,
          first_name: null,
          last_name: null,
          mobile_number: null,
          next_invoice_date: null,
          payment_method: null,
          phone_number: null,
          products: []
        }
      },
    }
  },
  methods: {
    
    getAll(id){
      
      this.selected.data = this.items.find(element => element.account_id == id);
      
    },
    formatDate(e){
      
      const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

      const d = new Date(e)
      let monthName = month[d.getMonth()];
      
      let year = d.getFullYear();
      
      let day = d.getDate();
      
      return day +' ' +monthName+' '+year
    },
    ...mapActions([
      'getAllBillings'
    ]),
  },
  computed: {
    
  },
 async created() {
    await this.getAllBillings()
    this.items = this.$store.state.billings  
    this.selected.data = this.items[0];
  },
}
</script>
<style>

.activeClass{
  background: rgb(205,234,255);
  border: 1px solid #1F8CEB !important;
}


.bgCard{
  background: #f8f7fd !important;
}
table{
  border-collapse: collapse !important;
  width: 100%;
  
}


td, th {
  
  padding: 8px;
}


td{
  font-size: .7rem
}

tr td{
  border-top: 1px solid #ddd;
  
}
tr{
  padding-left: 20px !important;
}
th {
  padding-top: 12px;
  
  
  padding-bottom: 12px;
  text-align: left;
}
.tableContainer{
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
}
.UserAccount{
  font-size:.8rem;
  color:#1f8ceb;
  font-weight:800
}
.cardOutline{
  border : 1px solid grey
}

</style>

