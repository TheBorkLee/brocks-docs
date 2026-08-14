const BOARD_SIZE = 16
const STARTING_SNAKE = [{ x: 7, y: 8 }, { x: 6, y: 8 }, { x: 5, y: 8 }]
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
}

const newFood = (snake) => {
  const free = []
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((part) => part.x === x && part.y === y)) free.push({ x, y })
    }
  }
  return free[Math.floor(Math.random() * free.length)] || { x: 2, y: 2 }
}

export const SnakeGame = () => {
  const [snake, setSnake] = useState(STARTING_SNAKE)
  const [food, setFood] = useState({ x: 11, y: 8 })
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight)
  const [running, setRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const directionRef = useRef(DIRECTIONS.ArrowRight)

  const chooseDirection = useCallback((next) => {
    const current = directionRef.current
    if (current.x + next.x === 0 && current.y + next.y === 0) return
    directionRef.current = next
    setDirection(next)
    setRunning(true)
  }, [])

  const reset = useCallback(() => {
    setSnake(STARTING_SNAKE)
    setFood({ x: 11, y: 8 })
    directionRef.current = DIRECTIONS.ArrowRight
    setDirection(DIRECTIONS.ArrowRight)
    setScore(0)
    setGameOver(false)
    setRunning(false)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!DIRECTIONS[event.key]) return
      event.preventDefault()
      chooseDirection(DIRECTIONS[event.key])
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [chooseDirection])

  useEffect(() => {
    if (!running || gameOver) return
    const timer = window.setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0]
        const next = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y,
        }
        const hitWall = next.x < 0 || next.y < 0 || next.x >= BOARD_SIZE || next.y >= BOARD_SIZE
        const ate = next.x === food.x && next.y === food.y
        const body = ate ? currentSnake : currentSnake.slice(0, -1)
        const hitSelf = body.some((part) => part.x === next.x && part.y === next.y)
        if (hitWall || hitSelf) {
          setGameOver(true)
          setRunning(false)
          return currentSnake
        }
        const nextSnake = [next, ...currentSnake]
        if (!ate) nextSnake.pop()
        if (ate) {
          setScore((value) => value + 1)
          setFood(newFood(nextSnake))
        }
        return nextSnake
      })
    }, Math.max(75, 145 - score * 4))
    return () => window.clearInterval(timer)
  }, [running, gameOver, food, score, direction])

  const controls = [
    ['↑', DIRECTIONS.ArrowUp, 'Up'],
    ['←', DIRECTIONS.ArrowLeft, 'Left'],
    ['↓', DIRECTIONS.ArrowDown, 'Down'],
    ['→', DIRECTIONS.ArrowRight, 'Right'],
  ]

  return (
    <section className="my-10 overflow-hidden rounded-2xl border border-violet-500/20 bg-zinc-950 shadow-2xl shadow-violet-950/30">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Docs break</p>
          <h2 className="m-0 mt-1 text-xl font-semibold text-white">Snake</h2>
        </div>
        <div className="rounded-full bg-violet-500/10 px-3 py-1 font-mono text-sm text-violet-300" aria-live="polite">Score: {score}</div>
      </div>
      <div className="p-4 sm:p-6">
        <div
          className="relative mx-auto grid aspect-square w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#08080c]"
          style={{ gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))` }}
          role="img"
          aria-label={`Snake game board. Score ${score}. ${gameOver ? 'Game over.' : running ? 'Game running.' : 'Game ready.'}`}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE
            const y = Math.floor(index / BOARD_SIZE)
            const snakeIndex = snake.findIndex((part) => part.x === x && part.y === y)
            const isFood = food.x === x && food.y === y
            return <span key={index} className={`aspect-square border-[0.5px] border-white/[0.025] ${snakeIndex === 0 ? 'bg-violet-300' : snakeIndex > 0 ? 'bg-violet-500' : isFood ? 'rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]' : ''}`} />
          })}
          {!running && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
              <button type="button" onClick={gameOver ? reset : () => setRunning(true)} className="rounded-lg bg-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-violet-950 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300">
                {gameOver ? 'Play again' : 'Start game'}
              </button>
            </div>
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {controls.map(([label, next, name]) => (
            <button key={name} type="button" aria-label={`Move ${name}`} onClick={() => chooseDirection(next)} className="h-11 w-11 rounded-lg border border-white/10 bg-white/5 text-lg font-bold text-white transition hover:border-violet-400 hover:bg-violet-500/20">{label}</button>
          ))}
          <button type="button" onClick={reset} className="ml-2 h-11 rounded-lg border border-white/10 px-4 text-sm font-medium text-zinc-300 transition hover:border-violet-400 hover:text-white">Reset</button>
        </div>
        <p className="mb-0 mt-3 text-center text-sm text-zinc-400">Use arrow keys or the controls above. The game speeds up as you score.</p>
      </div>
    </section>
  )
}
