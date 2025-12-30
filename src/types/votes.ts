export type { Votes, VoteType };

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

type VoteType = "good" | "neutral" | "bad";
