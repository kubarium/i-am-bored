<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <!-- <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex> -->

      <v-flex mb-4>
        <h1 class="display-1 font-weight-bold mb-3">
          {{$store.state.activity}}
        </h1>
        <v-divider />
      </v-flex>

      <v-flex mb-5 xs12>
        <p class="subheading font-weight-regular">
          Type: {{$store.state.search.type}}
        </p>
        <div class="text-xs-center types">
          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Recreational'" :large="$store.state.search.type=='Recreational'" color="primary" @click="$store.dispatch('fetchActivity',{type:'Recreational'})">
              <v-icon dark>fas fa-umbrella-beach</v-icon>
            </v-btn>
            <span>Recreational</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Social'" :large="$store.state.search.type=='Social'" color="pink" @click="$store.dispatch('fetchActivity',{type:'Social'})">
              <v-icon dark>fas fa-users</v-icon>
            </v-btn>
            <span>Social</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='DIY'" :large="$store.state.search.type=='DIY'" color="green" @click="$store.dispatch('fetchActivity',{type:'DIY'})">
              <v-icon dark>fas fa-paint-roller</v-icon>
            </v-btn>
            <span>DIY</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Music'" :large="$store.state.search.type=='Music'" color="teal" @click="$store.dispatch('fetchActivity',{type:'Music'})">
              <v-icon dark>fas fa-music</v-icon>
            </v-btn>
            <span>Music</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Busywork'" :large="$store.state.search.type=='Busywork'" color="cyan" @click="$store.dispatch('fetchActivity',{type:'Busywork'})">
              <v-icon dark>fas fa-clock</v-icon>
            </v-btn>
            <span>Busywork</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Charity'" :large="$store.state.search.type=='Charity'" color="error" @click="$store.dispatch('fetchActivity',{type:'Charity'})">
              <v-icon dark>fas fa-hands-helping</v-icon>
            </v-btn>
            <span>Charity</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Education'" :large="$store.state.search.type=='Education'" color="orange" @click="$store.dispatch('fetchActivity',{type:'Education'})">
              <v-icon dark>fas fa-graduation-cap</v-icon>
            </v-btn>
            <span>Education</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Relaxation'" :large="$store.state.search.type=='Relaxation'" color="indigo" @click="$store.dispatch('fetchActivity',{type:'Relaxation'})">
              <v-icon dark>fas fa-hand-peace</v-icon>
            </v-btn>
            <span>Relaxation</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab dark :depressed="$store.state.search.type!='Cooking'" :large="$store.state.search.type=='Cooking'" color="purple" @click="$store.dispatch('fetchActivity',{type:'Cooking'})">
              <v-icon dark>fas fa-utensils</v-icon>
            </v-btn>
            <span>Cooking</span>
          </v-tooltip>
        </div>
      </v-flex>

      <v-flex xs12 mr-2 ml-2>
        <v-slider v-model="$store.state.search.participants" label="Participants" :max="10" :min="1" thumb-label="always" :ticks="true" @end="$store.dispatch('fetchActivity')" />
        <v-slider v-model="$store.state.search.price" label="Price" :max="1" :min="0" :step="0.1" thumb-label="always" :ticks="true" @end="$store.dispatch('fetchActivity')" />
        <!-- <v-range-slider v-model="$store.state.search.price" label="Price" :max="1" :min="0" :step=".1" thumb-label="always" :ticks="true" @end="$store.dispatch('fetchActivity')" /> -->
        <!-- <v-range-slider v-model="$store.state.search.accessibility" label="Accessibility" :max="1" :min="0" :step=".1" /> -->
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    mounted(){
      this.$store.dispatch('fetchRandom')
    }
  }
</script>

<style>
.types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
}
</style>
