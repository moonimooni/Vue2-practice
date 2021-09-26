<template>
  <div>
    <div id="left">{{ left }}</div>
    <div id="right">{{ right }}</div>
  </div>
</template>

<script>
export default {
  name: "two",
  data() {
    return {
      left: "left",
      right: "right"
    };
  }
};
</script>
