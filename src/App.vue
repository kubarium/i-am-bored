<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>I am bored</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="$store.dispatch('fetchRandom')">
        <span class="mr-2">Random</span>
        <v-icon>fas fa-random</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Activity />
    </v-content>
  </v-app>
</template>

<script>
import Activity from './components/Activity'

export default {
  name: 'App',
  components: {
    Activity
  }
}
</script>
