<template>
  <section class="kpi">
    <div class="wrapper-container">
      <div class="container">
        <div class="image">
          <img src="assets/img/kpi.png" alt="">
        </div>
        <div class="text">
          <div class="title">
            <img src="assets/img/kpi-icon.svg" alt="">
            <h2>Explore ways to improve your ad performance with automated reports on KPIs </h2>
            <p>Quickly create and share performance dashboards and reports with all interested parties </p>
          </div>
          <div class="content">
            <div class="block">
              <h5>Stay up-to-date with changes </h5>
              <p>Get ad reports sent to email of your team members or clients</p>
            </div>
            <div class="block">
              <h5>Share reports of ad performance </h5>
              <p>Customize performance dashboards to show off your ad results </p>
            </div>
            <div class="block">
              <h5>Discover the best audiences</h5>
              <p>Analyze the performance of different groups of audiences</p>
            </div>
            <div class="block">
              <h5>Creative performance</h5>
              <p>Compare how a headline, a copy or an image is perceived by an audience </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .kpi {
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
          align-items: flex-start;
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
            font-size: 1.4em
          }
          p {
            padding: 0 0 3em 0;
          }
          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            .block {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              height: 180px;
              padding: 20px 0;
              width: 50%;
              padding: 5px;
              h5 {
                font-size: 1.2em;
                padding: 10px 0;
                line-height: 1.2em;
              }
              p {
                padding: 10px 0;
                font-size: 1em;
              }
            }
          }
        }
      }
    }
  }
</style>
