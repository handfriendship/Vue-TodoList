<template>
  <div>
    <button v-on:click="clearAll">Clear All</button>
  </div>
</template>

<script>
export default {
  data() {
    return {footerlist: []};
  },
  created() {
    this.$EventBus.$on('sendList', (list) => {
      console.log("TodoFooter : received list : ", list);
      this.footerlist = list;
     });
  },
  methods: {
    clearAll: function(){
      this.footerlist = [];
      console.log("TodoFooter list : ", this.footerlist);
      this.$EventBus.$emit('clearedList', this.footerlist);
    }
  }
}
</script>

<style>

</style>
