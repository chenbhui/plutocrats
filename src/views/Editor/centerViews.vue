
<template>
  <div class="wrapper" @dragover="dragover" @drop="drop">

  </div>
</template>

<script>
export default {
  components: {},
  props: {

  },
  data() {
    return {

    };
  },
  computed: {
  },
  created() {},
  mounted() {},
  methods: {
    dragover(e){
      e.preventDefault();
    },
    drop(e){
      e.preventDefault();
      let info = JSON.parse(e.dataTransfer.getData("info"));
      debugger;
    }
  },
  watch: {
  },
};
</script>

<style scoped>
.wrapper {
  flex: 1;
  background: #e7e8f1;
}
</style>
