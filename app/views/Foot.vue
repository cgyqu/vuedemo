<template>
<div>
  <h2 class="red" style="color:gray">{{msg}}</h2>
</div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      msg: "Hello from footer Component!"
    };
  }
};
</script>