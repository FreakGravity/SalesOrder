<template>
        <nav>
            <v-app-bar dark color="#23262D" app class="line" height="90">
                <v-chip class="ma-2" color="grey darken-1" pill v-for="item in appBarNav" :key="item">{{item}}
                    <v-icon right small color="cyan">fas fa-chevron-circle-down</v-icon>
                </v-chip>
            <v-spacer></v-spacer>
            <v-text-field
            filled 
            dense 
            rounded 
            label="Search" 
            prepend-inner-icon="fas fa-search" class="mt-6 mr-2" >Search</v-text-field>
            <v-btn fab color="cyan" elevation="2" class="mr-2">
                <v-icon color="white">fas fa-user-check</v-icon>
            </v-btn>
            <v-btn fab color="cyan" elevation="2" class="mr-2">
                <v-icon color="white">fas fa-bars</v-icon>
            </v-btn>
            </v-app-bar>
        </nav>
</template>

<script>
    export default {
        name:'navBar',
        data(){
            return {
                   appBarNav:['Dashboard','Reports','Orders']
             }
        }
}
</script>

<style lang="scss" scoped>

</style>