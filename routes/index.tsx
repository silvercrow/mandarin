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
        <a href="https://github.com/silvercrow" target="_blank">© David Balan </a>
        <br/>
        <a href="https://bmc.link/tquickbrownfox" target="_blank">
          <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" />
        </a>
      </div>
    </>
  );
}
