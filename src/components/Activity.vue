<template>
  <v-container>
    <v-layout text-xs-center wrap>

      <v-flex mb-4>
        <h1 class="headline font-weight-bold mb-3">
          {{$store.state.activity}}
        </h1>
        <v-divider />
      </v-flex>

      <v-flex mb-4 xs12>
        <p class="subheading font-weight-regular">
          Type: {{$store.state.search.type}}
        </p>
        <div class="text-xs-center types">
          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Recreational'" dark :depressed="$store.state.search.type!='Recreational'" :normal="$store.state.search.type=='Recreational'" color="primary" @click="$store.dispatch('fetchActivity',{type:'Recreational'})">
              <v-icon dark>fas fa-umbrella-beach</v-icon>
            </v-btn>
            <span>Recreational</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Social'" dark :depressed="$store.state.search.type!='Social'" :normal="$store.state.search.type=='Social'" color="pink" @click="$store.dispatch('fetchActivity',{type:'Social'})">
              <v-icon dark>fas fa-users</v-icon>
            </v-btn>
            <span>Social</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='DIY'" dark :depressed="$store.state.search.type!='DIY'" :normal="$store.state.search.type=='DIY'" color="green" @click="$store.dispatch('fetchActivity',{type:'DIY'})">
              <v-icon dark>fas fa-paint-roller</v-icon>
            </v-btn>
            <span>DIY</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Music'" dark :depressed="$store.state.search.type!='Music'" :normal="$store.state.search.type=='Music'" color="teal" @click="$store.dispatch('fetchActivity',{type:'Music'})">
              <v-icon dark>fas fa-music</v-icon>
            </v-btn>
            <span>Music</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Busywork'" dark :depressed="$store.state.search.type!='Busywork'" :normal="$store.state.search.type=='Busywork'" color="cyan" @click="$store.dispatch('fetchActivity',{type:'Busywork'})">
              <v-icon dark>fas fa-clock</v-icon>
            </v-btn>
            <span>Busywork</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Charity'" dark :depressed="$store.state.search.type!='Charity'" :normal="$store.state.search.type=='Charity'" color="error" @click="$store.dispatch('fetchActivity',{type:'Charity'})">
              <v-icon dark>fas fa-hands-helping</v-icon>
            </v-btn>
            <span>Charity</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Education'" dark :depressed="$store.state.search.type!='Education'" :normal="$store.state.search.type=='Education'" color="orange" @click="$store.dispatch('fetchActivity',{type:'Education'})">
              <v-icon dark>fas fa-graduation-cap</v-icon>
            </v-btn>
            <span>Education</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Relaxation'" dark :depressed="$store.state.search.type!='Relaxation'" :normal="$store.state.search.type=='Relaxation'" color="indigo" @click="$store.dispatch('fetchActivity',{type:'Relaxation'})">
              <v-icon dark>fas fa-hand-peace</v-icon>
            </v-btn>
            <span>Relaxation</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" fab :small="$store.state.search.type!='Cooking'" dark :depressed="$store.state.search.type!='Cooking'" :normal="$store.state.search.type=='Cooking'" color="purple" @click="$store.dispatch('fetchActivity',{type:'Cooking'})">
              <v-icon dark>fas fa-utensils</v-icon>
            </v-btn>
            <span>Cooking</span>
          </v-tooltip>
        </div>
      </v-flex>

      <v-flex xs12>
        <p class="subheading font-weight-regular">
          Participants: {{$store.state.search.participants}}
        </p>
        <v-slider v-model="$store.state.search.participants" :max="10" :min="1" :ticks="true" @end="$store.dispatch('fetchActivity')">

          <v-icon slot="prepend" @click="decreaseParticipants">
            fas fa-user
          </v-icon>

          <v-icon slot="append" @click="increaseParticipants">
            fas fa-user-friends
          </v-icon>
        </v-slider>
      </v-flex>
      <v-flex xs12>
        <p class="subheading">
          Price: {{$store.state.search.price | humanFriendly}}
        </p>

        <v-slider v-model="$store.state.search.price" :max="1" :min="0" :step="0.1" :ticks="true" @end="$store.dispatch('fetchActivity')">
          <v-icon slot="prepend" @click="decreasePrice">
            fas fa-minus
          </v-icon>

          <v-icon slot="append" @click="increasePrice">
            fas fa-plus
          </v-icon>
        </v-slider>
        <!-- <v-range-slider v-model="$store.state.search.price" label="Price" :max="1" :min="0" :step=".1" thumb-label="always" :ticks="true" @end="$store.dispatch('fetchActivity')" /> -->
        <!-- <v-range-slider v-model="$store.state.search.accessibility" label="Accessibility" :max="1" :min="0" :step=".1" /> -->
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    decreasePrice() {
      if (this.$store.state.search.price > 0)
        this.$store.dispatch("fetchActivity", {
          price: this.$store.state.search.price - 0.1
        });
    },
    increasePrice() {
      if (this.$store.state.search.price < 1)
        this.$store.dispatch("fetchActivity", {
          price: this.$store.state.search.price + 0.1
        });
    },
    decreaseParticipants() {
      if (this.$store.state.search.participants > 0)
        this.$store.dispatch("fetchActivity", {
          participants: this.$store.state.search.participants - 1
        });
    },
    increaseParticipants() {
      if (this.$store.state.search.participants < 10)
        this.$store.dispatch("fetchActivity", {
          participants: this.$store.state.search.participants + 1
        });
    }
  },
  mounted() {
    this.$store.dispatch("fetchRandom");
  },
  filters: {
    humanFriendly(value) {
      return value < 0.3 ? "Cheap" : value < 0.7 ? "Moderate" : "Expensive";
    }
  }
};
</script>

<style>
.types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
}
</style>
