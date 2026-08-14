<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type Point = { x: number; y: number }

const boardSize = 16
const startingSnake: Point[] = [{ x: 7, y: 8 }, { x: 6, y: 8 }, { x: 5, y: 8 }]
const directions: Record<string, Point> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}

const snake = ref<Point[]>(startingSnake.map((part) => ({ ...part })))
const food = ref<Point>({ x: 11, y: 8 })
const direction = ref<Point>({ ...directions.ArrowRight })
const running = ref(false)
const gameOver = ref(false)
const score = ref(0)
let timer: ReturnType<typeof setTimeout> | undefined

const cells = computed(() => Array.from({ length: boardSize * boardSize }, (_, index) => ({
  x: index % boardSize,
  y: Math.floor(index / boardSize)
})))

const status = computed(() => {
  if (gameOver.value) return `Snake game board. Score ${score.value}. Game over.`
  if (running.value) return `Snake game board. Score ${score.value}. Game running.`
  return `Snake game board. Score ${score.value}. Game ready.`
})

const cellClass = (cell: Point) => {
  const snakeIndex = snake.value.findIndex((part) => part.x === cell.x && part.y === cell.y)
  return {
    'snake-cell-head': snakeIndex === 0,
    'snake-cell-body': snakeIndex > 0,
    'snake-cell-food': food.value.x === cell.x && food.value.y === cell.y
  }
}

const placeFood = () => {
  const free = cells.value.filter((cell) => !snake.value.some((part) => part.x === cell.x && part.y === cell.y))
  food.value = free[Math.floor(Math.random() * free.length)] ?? { x: 2, y: 2 }
}

const chooseDirection = (next: Point) => {
  if (direction.value.x + next.x === 0 && direction.value.y + next.y === 0) return
  direction.value = { ...next }
  running.value = true
}

const tick = () => {
  if (!running.value || gameOver.value) return
  const head = snake.value[0]
  const next = { x: head.x + direction.value.x, y: head.y + direction.value.y }
  const ate = next.x === food.value.x && next.y === food.value.y
  const body = ate ? snake.value : snake.value.slice(0, -1)
  const hitWall = next.x < 0 || next.y < 0 || next.x >= boardSize || next.y >= boardSize
  const hitSelf = body.some((part) => part.x === next.x && part.y === next.y)

  if (hitWall || hitSelf) {
    gameOver.value = true
    running.value = false
    return
  }

  snake.value = [next, ...snake.value]
  if (!ate) snake.value.pop()
  if (ate) {
    score.value += 1
    placeFood()
  }

  timer = setTimeout(tick, Math.max(75, 145 - score.value * 4))
}

const start = () => {
  running.value = true
}

const reset = () => {
  if (timer) clearTimeout(timer)
  snake.value = startingSnake.map((part) => ({ ...part }))
  food.value = { x: 11, y: 8 }
  direction.value = { ...directions.ArrowRight }
  score.value = 0
  gameOver.value = false
  running.value = false
}

const playAgain = () => {
  reset()
  running.value = true
}

const onKeyDown = (event: KeyboardEvent) => {
  const next = directions[event.key]
  if (!next) return
  event.preventDefault()
  chooseDirection(next)
}

watch(running, (isRunning) => {
  if (timer) clearTimeout(timer)
  if (isRunning && !gameOver.value) timer = setTimeout(tick, Math.max(75, 145 - score.value * 4))
})

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section class="snake-game">
    <header class="snake-header">
      <div>
        <p>Docs break</p>
        <h2>Snake</h2>
      </div>
      <output aria-live="polite">Score: {{ score }}</output>
    </header>

    <div class="snake-content">
      <div
        class="snake-board"
        :style="{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }"
        role="img"
        :aria-label="status"
      >
        <span v-for="cell in cells" :key="`${cell.x}-${cell.y}`" class="snake-cell" :class="cellClass(cell)" />
        <div v-if="!running" class="snake-overlay">
          <button type="button" @click="gameOver ? playAgain() : start()">
            {{ gameOver ? 'Play again' : 'Start game' }}
          </button>
        </div>
      </div>

      <div class="snake-controls">
        <button type="button" aria-label="Move up" @click="chooseDirection(directions.ArrowUp)">↑</button>
        <button type="button" aria-label="Move left" @click="chooseDirection(directions.ArrowLeft)">←</button>
        <button type="button" aria-label="Move down" @click="chooseDirection(directions.ArrowDown)">↓</button>
        <button type="button" aria-label="Move right" @click="chooseDirection(directions.ArrowRight)">→</button>
        <button type="button" class="snake-reset" @click="reset">Reset</button>
      </div>
      <p class="snake-help">Use arrow keys or the controls above. The game speeds up as you score.</p>
    </div>
  </section>
</template>
