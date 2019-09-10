<template lang="pug">
  .container
    h1 今後の展望
    v-tabs(v-model="tab")
      v-tab(
        v-for="label in labels"
        :key="label"
        grow
        ) {{ label }}
      v-tabs-items(v-model="tab")
        v-tab-item(
          v-for="(content, index) in contents"
          :key="index"
          )
          v-card
            v-card-title {{ content.title }}
            v-card-text {{ content.text }}
</template>

<script>
export default {
  name: 'Future',
  data () {
    return {
      labels: ['1年後', '3年後'],
      contents: [
        {
          title: 'プロダクトオーナー',
          text: '１つのサービスを作り上げたい'
        },
        {
          title: '架け橋',
          text: 'エンジニアサイドとビジネスサイドを繋げたい'
        }
      ],
      tab: ''
    }
  }
};
</script>

<style scoped>

</style>
