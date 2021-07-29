<template>
  <section class="features">
    <div class="container">
      <div class="title">
        <h2><span style="color: #FF4D4D">Automations</span> take a load of work
          off your shoulders</h2>
        <p>LeadEnforce will keep an eye on your ads performance so that you don't miss on important performance changes 24/7</p>
      </div>
      <div class="content">
        <div class="block">
          <div class="icon">
            <img src="assets/img/features/reduce-routine-tasks.svg" alt="">
          </div>
          <div class="text">
            <h4 class="h4 pt-4 pb-5">Reduce routine tasks</h4>
            <p>Automate any action that can be taken on your ads to optimize them with a more intuitive version of Facebook automated rules </p>
          </div>
        </div>
        <div class="block">
          <div class="icon">
            <img src="assets/img/features/save-time.svg" alt="">
          </div>
          <div class="text">
            <h4 class="h4 pt-3 pb-4">Save time spent in Ads manager</h4>
            <p>Spare yourself the need to constantly monitor your ads 24/7 while keeping them at the top of their performance</p>
          </div>
        </div>
        <div class="block">
          <div class="icon">
            <img src="assets/img/features/make-management.svg" alt="">
          </div>
          <div class="text">
            <h4>Make management easier</h4>
            <p>Connect multiple Ad accounts to create automated rules for different projects and manage all your ad campaigns in one place</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.features {
  padding: 0;
  .container {
    padding: 80px 0;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      h2 {
        text-align: center;
        font-size: 2.1em;
        max-width: 700px;
      }
      p {
        text-align: center;
        max-width: 700px;
        padding: 30px 0 90px 0;
      }
    }
    .content {
      display: flex;
      align-items: start;
      justify-content: space-between;
      .block {
        max-width: 300px;
        .text {
          h4 {
            padding: 1.5em 0 2em;
            font-size: 1.5em;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
</style>
