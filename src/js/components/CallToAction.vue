<template>
  <section class="call-to-action">
    <div class="container">
      <div class="content">
        <div class="image">
          <img src="assets/img/call-to-action.png" alt="">
        </div>
        <div class="text">
          <div class="icon">
            <img src="assets/img/call-to-action-icon.svg" alt="">
          </div>
          <h2>Uncover <span style="color: #FF4D4D">LeadEnforce</span> automations ...</h2>
          <p>Access pre-built ad strategies created for boosting ad results</p>
        </div>
      </div>
      <div class="title">
        <h2>... and create your own</h2>
        <p>Implement your favorite ad management strategies with the help of Facebook ads automation software on LeadEnforce</p>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.call-to-action {
  .container {
    .content {
      display: flex;
      align-items: center;
      .image {
        width: 50%;
      }
      .text {
        width: 50%;
        height: 100%;
        h2 {
          padding: 0.5em 0;
          font-size: 2em;
        }
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 0 30px 0;
      h2 {
        text-align: center;
        font-size: 2.1em
      }
      p {
        text-align: center;
        padding: 1em 0;
        max-width: 700px;
      }
    }
  }
}
</style>
