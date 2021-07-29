<template>
  <section class="drag-drop container-fl">
    <div class="container">
      <div class="title">
        <div class="icon">
          <img src="assets/img/drag-drop-icon.svg" alt="">
        </div>
        <div class="text">
          <h2>Drag and Drop editor</h2>
          <p>Set up rules in seconds with an intuitive visual builder</p>
        </div>
      </div>
      <div class="content">
        <img src="assets/img/drag-drop.png" alt="">
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .drag-drop {
    padding-bottom: 0;
    background: #FAFAFA;
    .container {
      .title {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 30px 0 50px;
        .text {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 0 0 0 2em;
          h2 {
            padding: 0 0 0.1em 0;
            font-size: 1.3em
          }
          p {
            padding: 0.5em 0;
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
