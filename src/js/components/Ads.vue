<template>
  <section class="ads">
    <div class="wrapper-container">
      <div class="container">
        <div class="text">
          <div class="title">
            <img src="assets/img/ads-icon.svg" alt="">
            <h2>Create ads in bulk and keep the best-performing ones</h2>
            <p>Use Bulk creation to upload headlines, copies and images in bulk and generate dozens of ad
              variations </p>
          </div>
          <div class="content">
            <div class="row">
              <div class="block">
                <h5>A/B test everything</h5>
                <p>Test and compare the performance of ads on different audiences</p>
              </div>
              <div class="block">
                <h5>Save time creating ads</h5>
                <p>Create up to 50 ad variations in a few minutes</p>
              </div>
            </div>
            <div class="row">
              <div class="block">
                <h5>Tag everything</h5>
                <p>Add UTM tags to your ads and control naming conditions</p>
              </div>
              <div class="block">
                <h5>Control your progress</h5>
                <p>Monitor your ad performance with a custom dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="assets/img/ads.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .ads {
    .wrapper-container {
      background: #FAFAFA;
      margin: auto;
      border-radius: 12px;
      padding: 50px;
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .image {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
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
            font-size: 1.5em
          }
          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .block {
              padding: 30px 10px 30px 0;
              h5 {
                font-size: 1.2em;
                padding: 10px 0;
              }
              p {
                padding: 10px 0;
                font-size: 0.9em;
              }
            }
          }
        }
      }
    }
  }
</style>
