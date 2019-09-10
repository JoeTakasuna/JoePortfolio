<template lang="pug">
  v-card.card(:content="content" :width="width" :height="height")
    v-img(:src="content.img")
    v-card-title {{ content.title }}
    v-card-text {{ content.text }}
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    content: Object,
    width: String,
    height: String
  }
};
</script>

<style scoped>
.card {
  margin: 12px;
}
/* .flip-list-move {
  transition: transform 1s;
} */
</style>
