<template>
  <section class="quick-start">
    <div class="wrapper-container">
      <div class="container">
        <div class="image">
          <img src="assets/img/quick-start.png" alt="">
        </div>
        <div class="text">
          <img src="assets/img/quick-start-icon.svg" alt="">
          <h2>Quick Start with
            Pre-Built Automation Strategies</h2>
          <p>Use list of prebuilt strategies based on real data from ad experts’
            experience to benefit from tested tactics and improve your Facebook ad results</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .quick-start {
    .wrapper-container {
      background: #FAFAFA;
      max-width: 1600px;
      margin: auto;
      border-radius: 12px;
      padding: 50px;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .image {
          width: 50%;
        }
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 50%;
          height: 100%;
          padding: 30px;
          h2 {
            padding: 30px 0;
          }
        }
      }
    }
  }
</style>
