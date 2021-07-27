<template>
  <section class="kpi">
    <div class="wrapper-container">
      <div class="container">
        <div class="image">
          <img src="assets/img/kpi.png" alt="">
        </div>
        <div class="col">
          <div class="title">
            <img src="assets/img/kpi-icon.svg" alt="">
            <h4>Explore ways to improve your ad performance with automated reports on KPIs </h4>
            <p>Quickly create and share performance dashboards and reports with all interested parties </p>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-6">
                <h5>Stay up-to-date with changes </h5>
                <p>Get ad reports sent to email of your team members or clients</p>in
              </div>
              <div class="col-6">
                <h5>Share reports of ad performance </h5>
                <p>Customize performance dashboards to show off your ad results </p>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <h5>Discover the best audiences</h5>
                <p>Analyze the performance of different groups of audiences</p>
              </div>
              <div class="col-6">
                <h5>Creative performance</h5>
                <p>Compare how a headline, a copy or an image is perceived by an audience </p>
              </div>
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
