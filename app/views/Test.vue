<template>
<div id='test'> 
  <h2>{{message}}</h2>
  <index></index>
  <foot></foot>
</div>
</template>

<script>
import Index from "./Index.vue";
import Foot from "./Foot.vue";

export default {
  name:'test',
  components: {
    Foot,
    Index
  },
  data() {
    return {
      message: "This is from Test Component!"
    };
  }
};
</script>
