import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";

import styles from "./App.module.css";

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

const App = () => {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  
  return (
    <div className={styles.app}>
      <CafeInfo />
    </div>
  );
};

export default App;
