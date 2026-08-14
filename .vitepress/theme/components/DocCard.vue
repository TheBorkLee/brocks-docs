<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(defineProps<{ title: string; href?: string; icon?: string }>(), {
  href: '',
  icon: ''
})

const target = computed(() => {
  if (!props.href || /^(?:https?:)?\/\//.test(props.href)) return props.href
  return withBase(props.href)
})
</script>

<template>
  <a v-if="href" class="doc-card" :href="target">
    <span class="doc-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
    </span>
    <span class="doc-card-copy">
      <strong>{{ title }}</strong>
      <span><slot /></span>
    </span>
  </a>
  <div v-else class="doc-card">
    <span class="doc-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
    </span>
    <span class="doc-card-copy">
      <strong>{{ title }}</strong>
      <span><slot /></span>
    </span>
  </div>
</template>
