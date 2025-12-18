import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";

import styles from "./App.module.css";

const App = () => {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType) => {
    setVotes((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} />
    </div>
  );
};

export default App;
