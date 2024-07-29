type Quoridor = {
  players: Player[]
}

type Point = {
  x: number,
  y: number,
}

type Player = {
  position: [number, number]
}

type Barrier = {
  orientation: "horizontal" | "vertical",
  position: [number, number]
}