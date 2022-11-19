<template>
  <v-container fluid>
    <v-row >     
      <v-col cols="12" sm="4" v-for="(item,i) in items" :key="i">
        <v-card color="#23262D" elevation="4">
          <v-row>
            <v-col col="12" sm="4">
              <v-list-item  three-line>
                <v-list-item-content>
                  <div>
                    <v-list-item-subtitle class="subtitle-1 mb-14"> {{ item.text }}
                    </v-list-item-subtitle>
                    <v-icon color="grey" x-large>{{ item.icon }}</v-icon>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col col="12" sm="8">
              <v-list-item three-line>
                <v-list-item-content class="text-right" v-for="(subitem,i) in item.content" :key="i">
                  <div>
                    <v-list-item-subtitle class="subtitle-1 grey--text">{{ subitem.income}}</v-list-item-subtitle>
                    <v-list-item-subtitle class="grey--text" style="font-size: 11px;">Change to</v-list-item-subtitle>
                    <v-list-item-subtitle class="grey--text mb-5" style="font-size: 11px;">Previous Month</v-list-item-subtitle>
                    <v-icon color="green" class="mt-2 mr-2">{{ subitem.icon }}</v-icon>
                    <span class="green--text">{{ subitem.income }}</span>
                    <span class="green--text">{{ subitem.profit_percent}}</span>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <v-card color="#23262D">
          <v-app-bar color="rgba(0,0,0,0)" flat>
            <v-toolbar-title class="grey--text title">Monthly Trend</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-chip class="ma-2" color="grey darken-1" pill>April 18
              <v-icon right small color="cyan">
                  fas fa-chevron-circle-down
              </v-icon>
            </v-chip>
          </v-app-bar>
          <v-data-table
          :headers = "headers"
          :items="deserts"
          itemsPerPage="7"
          :footer-props="{'items-per-page-options': [7, 20, 30, 40, 50] }"
          >
          <template >
            <v-simple-checkbox  color="cyan"></v-simple-checkbox>
          </template>
          <template >
              <v-icon small>fas fa-edit</v-icon>
          </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card color="#23262D">
            <v-app-bar color="rgba(0,0,0,0)" flat>
              <v-toolbar-title class="grey--text" title>
                Support Tickets
              </v-toolbar-title>
            </v-app-bar>
            <v-list three-line class="mt-n5" color="#23262D">
              <v-list-item-group>
                <v-list-item v-for="(ticket,i) in tickets" :key="i">
                  <v-list-item-avatar>
                    <img :src="ticket.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="ticket.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="ticket.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn v-text="ticket.action" rounded color="cyan"></v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'HomeView',
    data(){
      return{
          headers:[
            {text:'Name',value:'name',sortable:false,align:'start'},
            {text:'glutenfree',value:'glutenfree'},
            {text:'Email',value:'email'},
            {text:'Contact',value:'contact'},
            {text:'Status',value:'status'},
            {text:'Action',value:'action'},
          ],
          deserts:[
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
            {glutenfree: false,name:'Charles Manson',email:'charlmanson@gmail.com',contact:995577234556,status:'closed'},
          ],
          items:[
            {text:'Family',icon:'fas fa-user',content:[{income:742.856,icons:'fas fa-sort-up',profit:'+20.587',profit_percent:'(2,16%)'}]},
            {text:'Family',icon:'fas fa-user',content:[{income:742.856,icons:'fas fa-sort-up',profit:'+20.587',profit_percent:'(2,16%)'}]},
            {text:'Family',icon:'fas fa-user',content:[{income:742.856,icons:'fas fa-sort-up',profit:'+20.587',profit_percent:'(2,16%)'}]},
          ],
          tickets:[
            {avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',action:'Open',headline:'Birthday Gift',subtitle:'Have any ides about what we need',title:'<strong>Trevor Hansent</strong>'},
            {avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',action:'Open',headline:'Birthday Gift',subtitle:'Have any ides about what we need',title:'<strong>Trevor Hansent</strong>'},
            {avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',action:'Open',headline:'Birthday Gift',subtitle:'Have any ides about what we need',title:'<strong>Trevor Hansent</strong>'},
            {avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',action:'Open',headline:'Birthday Gift',subtitle:'Have any ides about what we need',title:'<strong>Trevor Hansent</strong>'},
            {avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',action:'Open',headline:'Birthday Gift',subtitle:'Have any ides about what we need',title:'<strong>Trevor Hansent</strong>'},

          ]
      }
    }
  }
</script>
<style>

</style>