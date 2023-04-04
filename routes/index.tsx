
import db from "/data/sqlite.ts";
import Flip from "/islands/Flip.tsx";
import { Header } from "/components/Header.tsx";

type Word = {
  hanzi:string;
  pinyin:string;
  english:string;
  word_index:number
}

export default function Home() {
  const getWords =()=>{
    const words:Word[]=[];
    for (const [Hanzi, pinyin, english, word_index] of db.query("SELECT Hanzi,pinyin,english,word_index FROM week_1")) {
      words.push({ hanzi:Hanzi,pinyin,english,word_index } as unknown as Word);
    }
    return words;
  }

  const words = getWords();

  const getRandomBetween=(min:number, max:number)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


  return (
    <>
    <Header/>
      <div class="container">
        {words.map((word,index) => {
          const randNumber = getRandomBetween(0,5);
          const color = "ac-"+String(randNumber);
        return (
          <Flip 
            index={index} 
            hanzi={word.hanzi} 
            english={word.english} 
            pinyin={word.pinyin} 
            color={color} 
          />
        );
        })}
      </div>
    </>
  );
}
