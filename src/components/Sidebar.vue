<template>
    <div>
        <v-navigation-drawer v-model="drawer" dark mini-variant app mini-variant-width="122" color="#23262D">
                <v-list>
                    <v-list-item-group>
                        <v-list-item color="cyan">
                            <v-list-item-content align="center">
                                <v-icon align="center" x-large>fas fa-tv</v-icon>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <v-divider></v-divider>
                    <v-list-item-group v-model="selectedItem" color="cyan">
                        <v-list-item v-for="(item,i) in items" :key="i">
                            <v-list-item-content align="center"  >
                                <v-icon align="center" x-large v-text="item.icon"></v-icon>
                                <v-list-item-subtitle align="center" class="caption" v-text="item.text"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name:'SideBar',
        data() {
            return {
                selectedItem:0,
                drawer:true,
                items:[
                        {text:'DASHBOARD',icon:'fas fa-tachometer-alt'},
                        {text:'REPORTS',icon:'fas fa-file-alt'},
                        {text:'STOCK AGEING',icon:'fas fa-chart-line'},
                        {text:'DEVICE SALES',icon:'fas fa-tablet-alt'},
                        {text:'USER REPORT',icon:'fas fa-user-tag'}
                    ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>