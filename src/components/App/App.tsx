import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import { Votes, VoteType } from "../types/votes";
import VoteOption from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState <Votes>({
	good: 0,
	neutral: 0,
	bad: 0
}
)

  function handleVote(type: VoteType) {
  setFeedback((prev) => ({
    ...prev,
    [type]: prev[type] + 1
  }))
  }
  
  function onReset() {
    setFeedback({
	good: 0,
	neutral: 0,
	bad: 0
})
  }

  const totalVotes = feedback.bad + feedback.good + feedback.neutral
  const positiveRate = totalVotes
    ? Math.round((feedback.good / totalVotes) * 100)
    : 0

  const canReset = totalVotes > 0
  

  console.log(feedback);
  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOption onVote={handleVote} onReset={onReset} canReset={canReset} />
      {totalVotes > 0 ? <VoteStats votes={feedback} totalVotes={totalVotes} positiveRate={positiveRate} />
      : <Notification />}
    </div>
  );
}

export default App;
