<template lang="pug">
  v-timeline-item(small :color="content.color")
    template(v-slot:opposite)
      span(:class="`${content.color}--text`") {{ content.date }}
    v-card
      v-card-title(:class="`${content.color}--text`") {{ content.title }}
      v-card-text {{ content.text }}
</template>

<script>
export default {
  name: 'TimelineCard',
  props: {
    content: Object
  }
};
</script>

<style scoped>
.container {
}
</style>
