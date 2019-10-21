<template>
  <div>
    <h1>My Movies</h1>
    <Grid :data="gridData" :columns="gridColumns"/>
 </div>
</template>

<script>
import Grid from './Grid'
export default {
  data() {
      return {
        gridData: [
          { name: 'John Wick 3', genre: 'Action' },
          { name: 'Good Will Hunting', genre: 'Idk' },
        ],
        gridColumns: ['name', 'genre'],        
      }
  },
  components: {
    Grid
  }
}
</script>