<template lang="pug">
  v-card.card(:content="content" :width="width" :height="height")
    v-img(v-if="content.img" :src="content.img" aspect-ratio="1.6" contain)
    v-card(v-else :width="width" :height="imgHeight" flat)
      .icon-wrapper
        v-icon.icon lock
    v-card-title {{ content.title }}
    v-card-text {{ content.text }}
    .techs-area
      v-img.tech-icon(v-if="content.techs.python" :src="techs.python.img")
      v-img.tech-icon(v-if="content.techs.js" :src="techs.js.img")
      v-img.tech-icon(v-if="content.techs.ruby" :src="techs.ruby.img")
      v-img.tech-icon(v-if="content.techs.vue" :src="techs.vue.img")
      v-img.tech-icon(v-if="content.techs.rails" :src="techs.rails.img")
      v-img.tech-icon(v-if="content.techs.gas" :src="techs.gas.img")
      v-img.tech-icon(v-if="content.techs.other" :src="techs.other.img")
</template>

<script>
export default {
  name: 'CardOnGrid',
  props: {
    content: Object,
    techs: Object,
    width: String,
    height: String
  },
  computed: {
    imgHeight: function() {
      return this.height / 2
    }
  }
};
</script>

<style scoped>
.card {
  margin: 12px;
}
.icon-wrapper {
  display: flex;
  justify-content: center;
  padding: 72px;
}
.techs-area {
  display: flex;
  flex-direction: row;
  /* v-cardのソースに合わせて16px */
  margin: 0 16px;
}
.tech-icon {
  max-width: 24px;
}
</style>
