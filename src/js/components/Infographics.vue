<template>
  <section class="infographics container-fl">
    <div class="content">
      <InfoBlock :images-name="'combining-actions'"
                 :title="'Combining actions'"
                 :text="'Combine multiple actions inside one automation strategy'"/>
      <InfoBlock :images-name="'nested-conditions'"
                 :title="'Nested conditions'"
                 :text="'Create groups of conditions with AND/OR operators'"/>
      <InfoBlock :images-name="'custom-metrics'"
                 :title="'Custom metrics'"
                 :text="'Create custom metrics to tailor conditions to your needs'"/>
      <InfoBlock :images-name="'custom-schedule'"
                 :title="'Custom schedule'"
                 :text="'Set the exact days and hours your ad should run'"/>
      <InfoBlock :images-name="'metric-comparison'"
                 :title="'Metric comparison'"
                 :text="'Compare one metric to another for the selected timeframe'"/>
      <InfoBlock :images-name="'automation-logs'"
                 :title="'Automation logs'"
                 :text="'Learn why a particular rule didn’t work on some items'"/>
      <InfoBlock :images-name="'notifications'"
                 :title="'Notifications '"
                 :text="'Get notifications about triggered rules sent to your email '"/>
      <InfoBlock :images-name="'schedule-frequency'"
                 :title="'Schedule frequency'"
                 :text="'Make automations run and check your conditions every 15 minutes'"/>
    </div>
  </section>
</template>
<style lang="scss">
  .infographics {
    padding-top: 20px;
    .content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
<script>
import InfoBlock from './MicroComponents/InfoBlock.vue'
export default {
  name: 'Infographiics',
  components: { InfoBlock }
}
</script>
