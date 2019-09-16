<template lang="pug">
  .container
    h1 {{ message }}
    h3 このサイトは「建築のジョー」のポートフォリオです
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      message: 'Hello, World!'
    }
  }
};
</script>

<style scoped>
.container {
}
</style>
