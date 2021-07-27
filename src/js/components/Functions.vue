<template>
  <section class="functions">
      <div class="container">
        <div class="title">
          <h2>The Most Flexible & Configurable ad automation tool for Facebook</h2>
        </div>
        <div class="row">
          <div class="function-block">
            <img :src="'assets/img/functions/simple-interface.svg'" alt="">
            <h4>Simple interface</h4>
            <p>Set up rules quickly with an intuitive interface</p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/combining-actions.svg'" alt="">
            <h4>Combining actions</h4>
            <p>Combine multiple actions inside one automation tactic</p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/metric-comparison.svg'" alt="">
            <h4>Metric comparison</h4>
            <p>Compare one metric to another for the selected timeframe</p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/custom-metrics.svg'" alt="">
            <h4>Custom metrics</h4>
            <p>Create custom metrics to tailor conditions to your needs</p>
          </div>
        </div>
        <div class="row">
          <div class="function-block">
            <img :src="'assets/img/functions/automation-logs.svg'" alt="">
            <h4>Automation logs</h4>
            <p>Learn why a particular rule didn’t work on some items</p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/custom-schedule.svg'" alt="">
            <h4>Custom schedule</h4>
            <p>Set the most profitable time for your ads to run</p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/notifications.svg'" alt="">
            <h4>Notifications</h4>
            <p>Get notifications about triggered rules sent to your email </p>
          </div>
          <div class="function-block">
            <img :src="'assets/img/functions/immediate-actions.svg'" alt="">
            <h4>Immediate actions</h4>
            <p>Get real-time reactions for most of the metrics</p>
          </div>
        </div>
      </div>
  </section>
</template>
<style scoped lang="scss">
  .functions {
    padding: 70px 0;
    .container {
      .title {
        padding: 30px 0 60px 0;
        h2 {
          text-align: center;
        }
      }
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        .function-block {
          width: 25%;
          padding: 10px;
          min-height: 140px;
          img {
            width: auto;
          }
          h4 {
            padding: 20px 0;
          }
        }
      }
    }
  }
</style>
