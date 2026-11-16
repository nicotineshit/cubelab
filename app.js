const $ = (s) => document.querySelector(s);
const faces = ["R","L","U","D","F","B"];
const suffixes = ["","'","2"];
function generateScramble(size){
  const length = size===2?11:size===3?20:size===4?40:size===5?60:size===6?80:100;
  const moves = [];
  let previousFace = "";
  for(let i=0;i<length;i++){
    let face;
    do { face = faces[Math.floor(Math.random()*faces.length)]; } while(face===previousFace);
    previousFace=face;
    let prefix="";
    if(size>=4 && (face==="R"||face==="L"||face==="U"||face==="D"||face==="F"||face==="B")){
      const wide = Math.random()<0.45;
      if(wide) prefix = Math.random()<0.5 ? "w" : "";
      if(wide && prefix==="") face=face.toLowerCase();
    }
    moves.push(prefix+face+suffixes[Math.floor(Math.random()*suffixes.length)]);
  }
  return moves.join(" ");
}
$("#newScramble").addEventListener("click",()=>{
  const n=Number($("#size").value);
  $("#scrambleText").textContent=generateScramble(n);
  $("#scrambleHint").textContent=`Тренировочная последовательность для ${n}×${n}.`;
});
$("#copyScramble").addEventListener("click",async()=>{
  const value=$("#scrambleText").textContent;
  if(!value || value.startsWith("Нажми")) return;
  try{await navigator.clipboard.writeText(value);$("#copyScramble").textContent="Скопировано ✓";setTimeout(()=>$("#copyScramble").textContent="Копировать",1400);}
  catch{ $("#copyScramble").textContent="Не удалось"; }
});
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn));
  $("#scramble").classList.toggle("hidden",btn.dataset.tab!=="scramble");
  $("#trainer").classList.toggle("hidden",btn.dataset.tab!=="trainer");
}));
$("#showPlan").addEventListener("click",()=>$("#plan").classList.toggle("hidden"));
function network(){ $("#network").textContent=navigator.onLine?"● Онлайн":"● Офлайн"; }
window.addEventListener("online",network);window.addEventListener("offline",network);network();
