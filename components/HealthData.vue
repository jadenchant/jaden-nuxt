<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HealthData',

  data() {
      return {
        flights: {},
        steps: {},
        distance: {}
        }
    },
    async fetch() {
      this.flights = await fetch(
        'https://api.jadenchant.com/api/getFlightsPrev'
      ).then(res => res.json()).then(res => res[0])
      this.steps = await fetch(
        'https://api.jadenchant.com/api/getStepsPrev'
      ).then(res => res.json()).then(res => res[0])
      this.distance = await fetch(
        'https://api.jadenchant.com/api/getDistancePrev'
      ).then(res => res.json()).then(res => res[0])
    }

})
</script>

<template>
  <p v-if="$fetchState.pending">Fetching </p>
  <p v-else-if="$fetchState.error">Error occurred</p>
  <div v-else>
    <h1>Health Data</h1>

    <h2>Flights</h2>
    <ul>
      <li>{{flights.flights.toLocaleString("en-US")}}  flights</li>
    </ul>

    <h2>Steps</h2>
    <ul>
      <li>{{steps.steps.toLocaleString("en-US")}} steps</li>
    </ul>

    <h2>Distance</h2>
    <ul>
      <li>{{distance.distance.toLocaleString("en-US")}} {{distance.units}}</li>
    </ul>
  </div>
</template>