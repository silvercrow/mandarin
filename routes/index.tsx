import Flip from "/islands/Flip.tsx";
import { Header } from "/components/Header.tsx";
import vocabulary from "../data/vocabulary.ts";

type mandarin = {
  hanzi:string;
  pinyin:string;
  english:string;
}

export default function Home() {

  const getWords =()=>{
    const words:mandarin[]=[];
    vocabulary.forEach((word)=>{
      words.push({ hanzi:word.Hanzi, pinyin:word.pinyin, english:word.english } as unknown as mandarin);
    });
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
      <div class="footer">
        <a href="https://github.com/silvercrow" target="_blank">© David Balan 
      </a>
        [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bmc.link/tquickbrownfox)
      </div>
    </>
  );
}
