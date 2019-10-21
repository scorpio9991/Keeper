<template>
  <div>
    <h1>My Anime</h1>
    <Grid :data="gridData" :columns="gridColumns"/>

    
  </div>
</template>

<script>
import Grid from './Grid'
export default {
  data() {
      return {
        gridData: [
          { name: 'Konosuba', Genre: 'Comedy' , Episode: "Completed"},
          { name: 'Jojo Bizzare Adventure', Genre: 'Action/Comedy'  , Episode: "S2"},
        ],
        gridColumns: ['name', 'Genre','Episode'],        
      }
  },
  components: {
    Grid
  }
}
</script>