<template>
  <div>
    <Entry/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Entry from '/@/components/Entry.vue';

export default defineComponent({
  name: 'App',
  components: {
    Entry
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>