import { defineComponent, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CardGroup from './components/CardGroup.vue'
import DocCard from './components/DocCard.vue'
import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import Callout from './components/Callout.vue'
import AmbientBackdrop from './components/AmbientBackdrop.vue'
import './custom.css'

const callout = (type: 'note' | 'warning' | 'tip', title: string) =>
  defineComponent({
    name: `${title}Callout`,
    setup(_, { slots }) {
      return () => h(Callout, { type, title }, slots)
    }
  })

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'layout-top': () => h(AmbientBackdrop)
  }),
  enhanceApp({ app }) {
    app.component('CardGroup', CardGroup)
    app.component('Card', DocCard)
    app.component('Steps', Steps)
    app.component('Step', Step)
    app.component('Note', callout('note', 'Note'))
    app.component('Warning', callout('warning', 'Warning'))
    app.component('Tip', callout('tip', 'Tip'))
  }
} satisfies Theme
