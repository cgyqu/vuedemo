<template>
<div>
  <h2 class="red" style="color:red">{{msg}}</h2>
</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Hello from Index Component!"
    };
  }
};
</script>