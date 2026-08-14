import { defineComponent, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CardGroup from './components/CardGroup.vue'
import DocCard from './components/DocCard.vue'
import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import Callout from './components/Callout.vue'
import SnakeGame from './components/SnakeGame.vue'
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
  enhanceApp({ app }) {
    app.component('CardGroup', CardGroup)
    app.component('Card', DocCard)
    app.component('Steps', Steps)
    app.component('Step', Step)
    app.component('Note', callout('note', 'Note'))
    app.component('Warning', callout('warning', 'Warning'))
    app.component('Tip', callout('tip', 'Tip'))
    app.component('SnakeGame', SnakeGame)
  }
} satisfies Theme
