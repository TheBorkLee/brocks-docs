<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <li class="doc-step">
    <div class="doc-step-marker" aria-hidden="true" />
    <div class="doc-step-content">
      <h3>{{ title }}</h3>
      <div><slot /></div>
    </div>
  </li>
</template>
