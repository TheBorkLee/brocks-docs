<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ cols?: string | number }>(), { cols: 2 })
const columns = computed(() => Math.max(1, Math.min(3, Number(props.cols) || 2)))
</script>

<template>
  <div class="doc-card-grid" :style="{ '--card-columns': columns }">
    <slot />
  </div>
</template>
