<template lang="pug">
  .container
    v-dialog
      template(v-slot:activator="{ on }")
        v-btn(v-on="on")
      v-card わーい
</template>

<script>
export default {
  name: 'Top'
};
</script>

<style scoped>

</style>
