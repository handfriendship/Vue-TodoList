<template>
  <div>
    <input type="text" @keyup.enter="addListWithEnter" v-model="message"/>
    <button v-on="handlers"> button </button>
  </div>
</template>

<script>

// var eventBus = new Vue();

export default {
  data: function(){
    return {
      counter: 0,
      handlers: {
        click: this.addList
      }
    }
  },
  methods: {
    addList: function(){
      this.$EventBus.$emit('click-icon', this.message);
      console.log("addList called!");
    },
    addListWithEnter: function(){
      console.log("addListWithEnter called!");
      if(window.event.keyCode == 13){
        this.addList()
      }
    }
  }
}
</script>

<style>

</style>
