import { useState } from "react";
import './App.css'
import QuoteBox from './componentes/QuoteBox';
import quotes from "./db/quotes.json";
import { getRandomElement } from './utils/random';

const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8", "bg9", "bg10",]

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setcurrentBg] = useState(getRandomElement(bgs))

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setcurrentBg(getRandomElement(bgs));
  };

  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
    </main>
  );
}

export default App;
