export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export interface Card {
  suit: Suit;
  rank: Rank;
}

export const createDeck = (): Card[] => {
  const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }

  return deck;
};

export const shuffleDeck = (deck: Card[]): Card[] => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};


type IdlePhase = {
  status: "idle",
}
type MemorizationPhase = {
  status: "memorize",
  memorizeStartsAt: Date,
  answerDeck: Card[],
}
type RecallPhase = {
  status: "recall",
  memorizeStartsAt: Date,
  answerDeck: Card[],
  recallStartsAt: Date,
  userDeck: Card[],
}
type ResultPhase = {
  status: "result",
  memorizeStartsAt: Date,
  answerDeck: Card[],
  recallStartsAt: Date,
  userDeck: Card[],
  recallEndsAt: Date,
}

export type GameStatus = IdlePhase | MemorizationPhase | RecallPhase | ResultPhase