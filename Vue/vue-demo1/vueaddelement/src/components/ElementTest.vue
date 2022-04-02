<template>
  <div id="useElement">
    <h1>Element test</h1>

    <el-button @click="visible = true">Click Me</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element:{{ msg }}</p>
    </el-dialog>
  </div>
</template>
 
<script>
export default {
  name: "ElementTest",
  data() {
    return {
      visible: false,
      msg: "Vue add Element",
    };
  },
};
</script>
 
<style scoped>
</style>