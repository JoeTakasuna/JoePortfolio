<template lang="pug">
  .container
    h1 {{ message }}
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      message: 'Hello, Joe!'
    }
  }
};
</script>

<style scoped>
.container {
}
</style>
