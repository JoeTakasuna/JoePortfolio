<template lang="pug">
  v-btn.btn(x-small depressed width="48px" height="48")
    v-img(:src="image" max-width="48px")
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    image: String
  }
};
</script>

<style scoped>
.btn {
  margin: 6px;
}
</style>
