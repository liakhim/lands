<template>
  <div class="info-block">
    <div class="image">
      <img :src="`assets/img/infographics/images/${imagesName}.svg`" alt="">
    </div>

    <div class="info">
      <div class="icon">
        <img :src="`assets/img/infographics/icons/${imagesName}.svg`" alt="">
      </div>
      <div class="text">
        <h4>{{title}}</h4>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoBlock',
  props: ['imgSrc', 'icnSrc', 'imagesName', 'title', 'text']
}
</script>
<style lang="scss" scoped>
  .info-block {
    background: #FAFAFA;
    border-radius: 12px;
    max-width: 780px;
    padding: 50px;
    display: flex;
    align-items: center;
    margin: 20px 10px;
    &:nth-child(2n) {
      margin: 20px 0 20px 5px;
    }
    &:nth-child(2n - 1) {
      margin: 20px 5px 20px 0;
    }
    .image {
      width: 50%;
      padding: 20px;
    }
    .info {
      width: 50%;
      padding: 20px;
      .text {
        h4 {
          padding: 1em 0;
        }
        p {
          font-size: 1em;
        }
      }
    }
  }
</style>
