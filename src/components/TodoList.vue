<template>
  <div>

    <ul>

      <li v-for="(data, index) in list" v-bind:id="String(index)" v-on:click="del">
        {{index + 1}} - {{data}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return { drawer: true, uid: "", total: "",list:[] };
  },
  created() {
    this.$EventBus.$on('clearedList', (list) => {
      console.log("TodoList : received list : ", list);
      this.list = [];
    });
    this.$EventBus.$on('click-icon', (value) => {
        // this.drawer = !this.drawer;
        // var obj = {}
        // obj[this.list.length] = value;
        // console.log("obj : ", obj);

        this.uid = this.list.length;

        this.list.push(value);
        this.$EventBus.$emit('sendList', this.list);

        console.log("created in TodoList called!");
        console.log("this.list : ", this.list);
        console.log("this.list[0] : ", this.list[0]);
     });
   },
   methods: {
     del: function(event){
       console.log("event : ", event.target.id);
       var slicedPivot = parseInt(event.target.id);
       // this.list = this.list.filter((element) => {
       //   console.log("this.list.indexOf(element) : ", this.list.indexOf(element));
       //
       //   console.log("slicedPivot : ", slicedPivot);
       //   // return this.list.indexOf(element) !== parseInt(event.target.id)
       //
       // });
       if(slicedPivot == 0){
         this.list.shift();
       } else {
         console.log("this.list.slice(0, slicedPivot)", this.list.slice(0, slicedPivot));
         console.log("this.list.slice(slicedPivot+1)", this.list.slice(slicedPivot+1));
         this.list = this.list.slice(0, slicedPivot).concat(this.list.slice(slicedPivot+1));
       }
       console.log("after delete : ", this.list);


     }
   },
   watch: {

   }
};
</script>

<style>

</style>
