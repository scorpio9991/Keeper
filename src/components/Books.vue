<template>
  <div>
    <h1>My Books</h1>
    <Grid :data="gridData" :columns="gridColumns"/>

    
  </div>
</template>

<script>
import Grid from './Grid'
export default {
  data() {
      return {
        gridData: [
          { name: 'The Dark Tower', Genre: 'Depressing', Page: '66' },
          { name: 'Overlord', Genre: 'Fantasy', Page: "Completed" },
        ],
        gridColumns: ['name', 'Genre', 'Page'],        
      }
  },
  components: {
    Grid
  }
}
</script>