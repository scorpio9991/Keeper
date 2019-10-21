<template>
  <div>
    <h1>My TV</h1>
    <Grid :data="gridData" :columns="gridColumns"/>
  </div>
</template>

<script>
import Grid from './Grid'
export default {
  data() {
      return {
        gridData: [
          { name: 'Futurama', type: 'Comedy',episode: '3'  },
          { name: 'Supernatural', type: 'Action', episode: "S8E3" },
          { name: 'Disenchantet', type: 'Comedy Animated' , episode: "S2E6"},
          { name: 'South Park', type: 'Comedy', episode: "The new Ones" },
        ],
        gridColumns: ['name', 'type','episode'],        
      }
  },
  components: {
    Grid
  }
}
</script>