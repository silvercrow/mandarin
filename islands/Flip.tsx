interface FlipProps {
  index:number;
  color:string;
  hanzi:string;
  pinyin:string;
  english:string;
}

export default function Flip({index,color,hanzi,pinyin,english}: FlipProps) {

  const flipme =(event:any)=>{
    event.currentTarget.parentElement?.parentElement?.parentElement?.classList.toggle('flipme');
  }
  
  return (
    <div key={index} class="flip-container">
    <div class={`flippable ${color}`}>
      <div class="front">
        <div class="text">
          <span>{hanzi}</span>
        </div>
        <div class="buttons">
          <button class="button play" >
          <span class="material-symbols-outlined">play_circle</span> play
          </button>
          <button class="button flip" onClick={flipme}>
            <span class="material-symbols-outlined">360</span> flip
          </button>
        </div>
      </div>
      <div class="back">
        <div class="info">
        <div class="pinyin">{pinyin}</div>
        <div class="english">{english}</div>
        <button class="button flipback" onClick={flipme}>
          <span class="material-symbols-outlined">360</span> flip
        </button>
        </div>
      </div>
    </div>
</div>
  );
}
