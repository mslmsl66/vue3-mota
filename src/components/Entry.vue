<template>
  <div>
    <header>
      <h1>新新魔塔</h1>
    </header>
    <main>
      <!-- <el-button
        v-for="item in options"
        :key="item"
      >
        {{ item }}
      </el-button> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Entry',
  setup: () => {
    const options: Array<string> = reactive(['开始游戏', '载入游戏']);
    Promise.resolve(1).then(() => {
      options.push('查看录像');
    });
    return {
      options
    };
  },
});
</script>

<style lang="scss" scoped>

</style>