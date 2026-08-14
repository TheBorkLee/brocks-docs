<script setup lang="ts">
withDefaults(defineProps<{ type?: 'note' | 'warning' | 'tip'; title?: string }>(), {
  type: 'note',
  title: 'Note'
})
</script>

<template>
  <aside class="brocks-callout" :class="`brocks-callout-${type}`">
    <strong>{{ title }}</strong>
    <div><slot /></div>
  </aside>
</template>
