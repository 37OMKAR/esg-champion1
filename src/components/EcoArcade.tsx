'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gamepad2, RotateCcw, Play, Trophy, Star, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export type GameId =
  | 'snake'
  | 'sorter'
  | 'builder'
  | 'tetris'
  | 'lights'
  | 'ocean'
  | 'pipes'
  | 'runner'
  | 'match3'
  | 'commute'
  | 'market'
  | 'solar'
  | 'bee';

interface GameMetadata {
  id: GameId;
  title: string;
  category: 'Arcade & Reflex' | 'Puzzle & Brain' | 'Action & Runner' | 'Eco Strategy';
  emoji: string;
  tagline: string;
}

const ARCADE_GAMES: GameMetadata[] = [
  { id: 'snake',   title: 'Eco Snake',             category: 'Arcade & Reflex', emoji: '🐍', tagline: 'Canvas snake — eat clean energy, grow the forest' },
  { id: 'sorter',  title: 'Waste Sorter Rush',      category: 'Arcade & Reflex', emoji: '🗑️', tagline: 'Falling trash — tap the right bin fast!' },
  { id: 'builder', title: 'Net Zero City',          category: 'Eco Strategy',   emoji: '🏙️', tagline: 'Replace every smokestack before budget runs out' },
  { id: 'tetris',  title: 'Eco Tetris',             category: 'Puzzle & Brain', emoji: '🧱', tagline: 'Classic block stacker — clear rows, plant trees' },
  { id: 'lights',  title: 'Energy Saver Rush',      category: 'Arcade & Reflex', emoji: '💡', tagline: 'Whack-a-Mole style: turn off lights before overload' },
  { id: 'ocean',   title: 'Ocean Sweeper',          category: 'Action & Runner', emoji: '🌊', tagline: 'Side-scroll boat — dodge fish, collect plastic' },
  { id: 'pipes',   title: 'Pipe Flow Puzzle',       category: 'Puzzle & Brain', emoji: '💧', tagline: 'Rotate pipe tiles to route clean water' },
  { id: 'runner',  title: 'Green Sprint',           category: 'Action & Runner', emoji: '🏃', tagline: 'Endless runner — jump over pollution obstacles' },
  { id: 'match3',  title: 'Solar Match-3',          category: 'Puzzle & Brain', emoji: '⚡', tagline: 'Jewel-swap match-3 with renewable energy tiles' },
  { id: 'commute', title: 'Carbon Commute',         category: 'Eco Strategy',   emoji: '🚲', tagline: 'Route passengers to minimize CO₂ emissions' },
  { id: 'market',  title: 'Plastic-Free Dash',      category: 'Arcade & Reflex', emoji: '🛍️', tagline: 'Catch sustainable items, dodge plastic ones' },
  { id: 'solar',   title: 'Solar Panel Master',     category: 'Eco Strategy',   emoji: '☀️', tagline: 'Track the sun angle for maximum power output' },
  { id: 'bee',     title: 'Pollinator Blitz',       category: 'Action & Runner', emoji: '🐝', tagline: 'Fly your bee, pollinate flowers, avoid pesticides' },
];

/* ─── shared pixel-font style ─── */
const PIXEL = { fontFamily: '"Courier New", monospace' } as const;

/* ─── palette ─── */
const P = {
  bg:     '#0f172a',
  bgCard: '#1e293b',
  border: '#334155',
  green:  '#22c55e',
  lime:   '#84cc16',
  orange: '#f97316',
  amber:  '#f59e0b',
  sky:    '#38bdf8',
  red:    '#ef4444',
  purple: '#a855f7',
  white:  '#f8fafc',
  slate:  '#94a3b8',
};

import { useLanguage } from '../context/LanguageContext';

/* ════════════════════════════════════════════════════
   ARCADE SHELL
════════════════════════════════════════════════════ */
export const EcoArcade: React.FC = () => {
  const { t } = useLanguage();
  const [activeGame, setActiveGame] = useState<GameId>('snake');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Arcade & Reflex', 'Puzzle & Brain', 'Action & Runner', 'Eco Strategy'];

  const filteredGames = ARCADE_GAMES.filter((g) =>
    selectedCategory === 'all' ? true : g.category === selectedCategory
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold border border-orange-200">
          <Gamepad2 className="w-4 h-4 text-orange-600" />
          <span>BOB ESG Junior Arcade • 13 Sustainability Games</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.arcade.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          {t.arcade.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All 13 Games' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {filteredGames.map((game) => {
          const isActive = activeGame === game.id;
          return (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-150 ${
                isActive
                  ? 'border-orange-500 bg-orange-50/80 shadow-md shadow-orange-500/15 ring-2 ring-orange-500/30 -translate-y-0.5'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <span className="text-2xl sm:text-3xl block mb-1.5">{game.emoji}</span>
                <h4 className="font-extrabold text-xs text-slate-900 line-clamp-1">{game.title}</h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">{game.tagline}</p>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 self-start mt-2">
                {game.category.split('&')[0]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto pt-2">
        {activeGame === 'snake'   && <EcoSnakeGame />}
        {activeGame === 'sorter'  && <WasteSorterGame />}
        {activeGame === 'builder' && <EcoCityBuilderGame />}
        {activeGame === 'tetris'  && <EcoTetrisGame />}
        {activeGame === 'lights'  && <EnergySaverGame />}
        {activeGame === 'ocean'   && <OceanSweeperGame />}
        {activeGame === 'pipes'   && <PipeFlowGame />}
        {activeGame === 'runner'  && <GreenSprintGame />}
        {activeGame === 'match3'  && <SolarMatch3Game />}
        {activeGame === 'commute' && <CarbonCommuteGame />}
        {activeGame === 'market'  && <PlasticFreeDashGame />}
        {activeGame === 'solar'   && <SolarPanelGame />}
        {activeGame === 'bee'     && <BeePollinatorGame />}
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════
   SHARED COMPONENTS
════════════════════════════════════════════════════ */
function GameShell({
  title, score, highScore, extra, children, onReset, tip, dark = true,
}: {
  title: string; score: number; highScore?: number; extra?: React.ReactNode;
  children: React.ReactNode; onReset: () => void; tip: string; dark?: boolean;
}) {
  return (
    <div className="rounded-3xl overflow-hidden border shadow-2xl"
      style={{ background: dark ? P.bg : '#f8fafc', borderColor: dark ? P.border : '#e2e8f0' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: dark ? P.border : '#e2e8f0', background: dark ? P.bgCard : '#f1f5f9' }}>
        <span style={{ ...PIXEL, fontSize: 10, color: dark ? P.orange : '#f97316', fontWeight: 'bold' }}>{title}</span>
        <div className="flex items-center gap-4">
          <span style={{ ...PIXEL, fontSize: 10, color: dark ? P.green : '#16a34a', fontWeight: 'bold' }}>{score.toString().padStart(6, '0')}</span>
          {highScore !== undefined && <span style={{ ...PIXEL, fontSize: 10, color: dark ? P.slate : '#64748b' }}>HI {highScore.toString().padStart(6,'0')}</span>}
          {extra}
        </div>
        <button onClick={onReset} className="p-1.5 rounded-lg transition-colors hover:bg-orange-500/20" title="Restart">
          <RotateCcw className="w-4 h-4" style={{ color: P.orange }} />
        </button>
      </div>
      <div className="flex flex-col items-center p-4 gap-3">
        {children}
        <p style={{ ...PIXEL, fontSize: 9, color: dark ? P.slate : '#64748b', textAlign: 'center', lineHeight: '1.8', fontWeight: 'normal' }}>{tip}</p>
      </div>
    </div>
  );
}

function StartOverlay({ title, subtitle, onStart }: { title: string; subtitle: string; onStart: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10 gap-4 p-6">
      <div className="text-5xl animate-bounce">🌿</div>
      <div style={{ ...PIXEL, fontSize: 12, color: P.green, textAlign: 'center', lineHeight: 2, fontWeight: 'bold' }}>{title}</div>
      <div style={{ ...PIXEL, fontSize: 9, color: P.slate, textAlign: 'center', lineHeight: 2, whiteSpace: 'pre-line' }}>{subtitle}</div>
      <button onClick={onStart} className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 active:scale-95"
        style={{ background: P.green }}>
        <Play className="w-4 h-4" /> START GAME
      </button>
    </div>
  );
}

function GameOverOverlay({ score, message, onRestart }: { score: number; message: string; onRestart: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm z-10 gap-4 p-6">
      <div className="text-5xl">💥</div>
      <div style={{ ...PIXEL, fontSize: 13, color: P.red, textAlign: 'center', fontWeight: 'bold' }}>GAME OVER</div>
      <div style={{ ...PIXEL, fontSize: 10, color: P.white, textAlign: 'center' }}>SCORE: {score}</div>
      <div style={{ ...PIXEL, fontSize: 8, color: P.amber, textAlign: 'center', lineHeight: 2, maxWidth: 260 }}>{message}</div>
      <button onClick={onRestart} className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
        style={{ background: P.orange }}>
        <RotateCcw className="w-4 h-4" /> TRY AGAIN
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   GAME 1 — ECO SNAKE (canvas, full snake mechanics)
════════════════════════════════════════════════════ */
const TILE = 16, COLS = 22, ROWS = 18;
const FOOD_TYPES = [
  { type: 'tree',  color: '#22c55e', pts: 30 },
  { type: 'solar', color: '#f59e0b', pts: 20 },
  { type: 'drop',  color: '#38bdf8', pts: 10 },
];

const EcoSnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sRef = useRef({
    snake: [{ x: 11, y: 9 }, { x: 11, y: 10 }, { x: 11, y: 11 }],
    dir: { x: 0, y: -1 }, nextDir: { x: 0, y: -1 },
    food: { x: 5, y: 5, typeIdx: 0 },
    score: 0, trees: 0, running: false, over: false,
  });
  const [disp, setDisp] = useState({ score: 0, trees: 0, hi: 0 });
  const [phase, setPhase] = useState<'idle'|'playing'|'over'>('idle');
  const hiRef = useRef(0);

  const spawnFood = useCallback(() => {
    const s = sRef.current;
    let x: number, y: number;
    do { x = Math.floor(Math.random()*COLS); y = Math.floor(Math.random()*ROWS); }
    while (s.snake.some(seg => seg.x===x && seg.y===y));
    s.food = { x, y, typeIdx: Math.floor(Math.random()*FOOD_TYPES.length) };
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const s = sRef.current;
    for (let x=0; x<COLS; x++) for (let y=0; y<ROWS; y++) {
      ctx.fillStyle = (x+y)%2===0 ? '#0d1f38' : '#0a1628';
      ctx.fillRect(x*TILE, y*TILE, TILE, TILE);
    }
    const ft = FOOD_TYPES[s.food.typeIdx];
    ctx.fillStyle = ft.color;
    ctx.beginPath();
    ctx.arc(s.food.x*TILE+TILE/2, s.food.y*TILE+TILE/2, TILE/2-1, 0, Math.PI*2);
    ctx.fill();
    s.snake.forEach((seg,i) => {
      const ratio = 1-i/s.snake.length;
      ctx.fillStyle = i===0 ? '#4ade80' : `rgb(20,${Math.round(100+ratio*130)},50)`;
      ctx.fillRect(seg.x*TILE+1, seg.y*TILE+1, TILE-2, TILE-2);
    });
  }, []);

  const resetGame = useCallback(() => {
    const s = sRef.current;
    s.snake=[{x:11,y:9},{x:11,y:10},{x:11,y:11}]; s.dir={x:0,y:-1}; s.nextDir={x:0,y:-1};
    s.score=0; s.trees=0; s.running=true; s.over=false;
    spawnFood(); setDisp({score:0,trees:0,hi:hiRef.current}); setPhase('playing');
  },[spawnFood]);

  useEffect(()=>{
    const km: Record<string,{x:number;y:number}> = {
      ArrowUp:{x:0,y:-1},w:{x:0,y:-1},ArrowDown:{x:0,y:1},s:{x:0,y:1},
      ArrowLeft:{x:-1,y:0},a:{x:-1,y:0},ArrowRight:{x:1,y:0},d:{x:1,y:0}
    };
    const h=(e:KeyboardEvent)=>{
      const nd=km[e.key]; if(!nd) return;
      const s=sRef.current; if(!s.running) return;
      if(nd.x!==-s.dir.x || nd.y!==-s.dir.y) s.nextDir=nd;
      if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
    };
    window.addEventListener('keydown',h,{passive:false});
    return ()=>window.removeEventListener('keydown',h);
  },[]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running) return;
      s.dir=s.nextDir;
      const head={x:s.snake[0].x+s.dir.x, y:s.snake[0].y+s.dir.y};
      if(head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS||s.snake.some(seg=>seg.x===head.x&&seg.y===head.y)){
        s.running=false; s.over=true;
        if(s.score>hiRef.current) hiRef.current=s.score;
        setPhase('over'); return;
      }
      s.snake.unshift(head);
      if(head.x===s.food.x&&head.y===s.food.y){
        const ft=FOOD_TYPES[s.food.typeIdx]; s.score+=ft.pts;
        if(ft.type==='tree') s.trees++; spawnFood();
      } else s.snake.pop();
      setDisp({score:s.score,trees:s.trees,hi:hiRef.current}); draw();
    },110);
    return ()=>clearInterval(iv);
  },[phase,draw,spawnFood]);

  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="🐍 ECO SNAKE" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.lime,fontWeight:'bold'}}>🌲 {disp.trees}</span>}
      onReset={resetGame} tip="Arrow keys / WASD • 🌱Tree=+30  ☀️Solar=+20  💧Water=+10 • Avoid walls!">
      <div className="relative" style={{width:COLS*TILE,height:ROWS*TILE,maxWidth:'100%'}}>
        <canvas ref={canvasRef} width={COLS*TILE} height={ROWS*TILE} style={{display:'block',imageRendering:'pixelated',maxWidth:'100%'}}/>
        {phase==='idle' && <StartOverlay title="ECO SNAKE" subtitle={"Eat 🌱 trees, ☀️ solar & 💧 water\nto grow the eco-snake! Avoid walls."} onStart={resetGame}/>}
        {phase==='over' && <GameOverOverlay score={disp.score} message={`You planted ${disp.trees} trees! 🌲 Reforestation absorbs CO₂ and restores biodiversity.`} onRestart={resetGame}/>}
      </div>
      <div className="flex flex-col items-center gap-1 sm:hidden">
        <button onTouchStart={()=>{const s=sRef.current;if(s.dir.y!==1)s.nextDir={x:0,y:-1};}} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>▲</button>
        <div className="flex gap-1">
          <button onTouchStart={()=>{const s=sRef.current;if(s.dir.x!==1)s.nextDir={x:-1,y:0};}} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>◀</button>
          <button onTouchStart={()=>{const s=sRef.current;if(s.dir.y!==-1)s.nextDir={x:0,y:1};}} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>▼</button>
          <button onTouchStart={()=>{const s=sRef.current;if(s.dir.x!==-1)s.nextDir={x:1,y:0};}} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>▶</button>
        </div>
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 2 — WASTE SORTER RUSH (falling items)
════════════════════════════════════════════════════ */
interface FallingItem { id:number; name:string; emoji:string; bin:'green'|'blue'|'red'; tip:string; col:number; y:number; speed:number; }
const WASTE_DB = [
  {name:'Banana Peel',emoji:'🍌',bin:'green' as const,tip:'Organic → rich compost soil!'},
  {name:'Plastic Bottle',emoji:'🍾',bin:'blue' as const,tip:'Recyclable → new fabric or benches!'},
  {name:'Used Battery',emoji:'🔋',bin:'red' as const,tip:'Hazardous → e-waste centre!'},
  {name:'Newspaper',emoji:'📰',bin:'blue' as const,tip:'Paper → recycled 5-7 times!'},
  {name:'Apple Core',emoji:'🍎',bin:'green' as const,tip:'Food waste → composts naturally.'},
  {name:'Broken Glass',emoji:'🧪',bin:'red' as const,tip:'Sharp hazard → red bin only!'},
  {name:'Cardboard',emoji:'📦',bin:'blue' as const,tip:'Dry recyclable → saves trees!'},
  {name:'Tea Leaves',emoji:'🍃',bin:'green' as const,tip:'Organic → excellent vermicompost!'},
  {name:'Aluminium Can',emoji:'🥫',bin:'blue' as const,tip:'Metal → 100% recyclable, forever!'},
  {name:'Syringe',emoji:'💉',bin:'red' as const,tip:'Medical waste → hazardous disposal!'},
];

const WasteSorterGame: React.FC = () => {
  const [items, setItems] = useState<FallingItem[]>([]);
  const [score, setScore] = useState(0); const [hi, setHi] = useState(0);
  const [lives, setLives] = useState(3);
  const [phase, setPhase] = useState<'idle'|'playing'|'over'>('idle');
  const [tip, setTip] = useState(''); const [tipOk, setTipOk] = useState(true);
  const idRef = useRef(0);

  const startGame = () => { setItems([]); setScore(0); setLives(3); setTip(''); setPhase('playing'); };

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      setItems(prev=>{
        let lost=0;
        const survivors=prev.map(it=>({...it,y:it.y+it.speed})).filter(it=>{
          if(it.y>100){lost++; return false;} return true;
        });
        if(lost>0) setLives(l=>{const nl=l-lost; if(nl<=0)setPhase('over'); return Math.max(0,nl);});
        return survivors;
      });
    },40);
    return ()=>clearInterval(iv);
  },[phase]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const src=WASTE_DB[Math.floor(Math.random()*WASTE_DB.length)];
      setItems(prev=>[...prev,{id:idRef.current++,...src,col:Math.floor(Math.random()*3),y:0,speed:0.3+Math.random()*0.25}]);
    },1400);
    return ()=>clearInterval(iv);
  },[phase]);

  const handleSort=(col:number,bin:'green'|'blue'|'red')=>{
    const inCol=items.filter(it=>it.col===col&&it.y>65);
    if(inCol.length===0) return;
    const top=inCol.reduce((a,b)=>a.y>b.y?a:b);
    const ok=top.bin===bin;
    if(ok){setScore(s=>{const ns=s+15;setHi(h=>Math.max(h,ns));return ns;});confetti({particleCount:20,spread:40,origin:{y:0.8}});setTip(`✅ ${top.tip}`);setTipOk(true);}
    else{setLives(l=>{const nl=l-1;if(nl<=0)setPhase('over');return Math.max(0,nl);}); setTip(`❌ Wrong bin! ${top.tip}`); setTipOk(false);}
    setItems(prev=>prev.filter(it=>it.id!==top.id));
    setTimeout(()=>setTip(''),1800);
  };

  const BINS=[
    {bin:'green' as const,label:'🟢 Organic',color:'#16a34a',bg:'#14532d'},
    {bin:'blue' as const, label:'🔵 Recycle',color:'#2563eb',bg:'#1e3a8a'},
    {bin:'red' as const,  label:'🔴 Hazard', color:'#dc2626',bg:'#7f1d1d'},
  ];

  return (
    <GameShell title="🗑️ WASTE SORTER" score={score} highScore={hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.red,fontWeight:'bold'}}>{lives>0?'❤️'.repeat(lives):'☠️'}</span>}
      onReset={startGame} tip="Tap the matching bin BEFORE the item hits the floor!">
      <div className="relative overflow-hidden rounded-2xl border" style={{width:330,height:320,background:'#050d1a',borderColor:P.border}}>
        {[0,1,2].map(col=>(
          <div key={col} className="absolute top-0 bottom-0" style={{left:col*110,width:110,borderRight:col<2?`1px solid ${P.border}`:'none'}}/>
        ))}
        {items.map(it=>(
          <div key={it.id} className="absolute flex flex-col items-center pointer-events-none select-none"
            style={{left:it.col*110+25,top:`${it.y}%`,transform:'translateY(-50%)'}}>
            <span style={{fontSize:26}}>{it.emoji}</span>
            <span style={{...PIXEL,fontSize:7,color:P.slate,textAlign:'center',width:60}}>{it.name}</span>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex">
          {BINS.map((b,i)=>(
            <button key={b.bin} onClick={()=>handleSort(i,b.bin)}
              className="flex-1 py-2.5 flex items-center justify-center border-t transition-all active:scale-95"
              style={{background:b.bg,borderColor:b.color}}>
              <span style={{...PIXEL,fontSize:8,color:b.color,fontWeight:'bold'}}>{b.label}</span>
            </button>
          ))}
        </div>
        {phase==='idle'&&<StartOverlay title="WASTE SORTER" subtitle={"Items fall from the sky!\nTap the right bin before they land."} onStart={startGame}/>}
        {phase==='over'&&<GameOverOverlay score={score} message="Proper waste segregation diverts 40% of waste from landfills. Every sort counts!" onRestart={startGame}/>}
      </div>
      {tip&&<div style={{...PIXEL,fontSize:9,color:tipOk?P.green:P.red,textAlign:'center',lineHeight:2,maxWidth:320}}>{tip}</div>}
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 3 — NET ZERO CITY BUILDER (timed grid strategy)
════════════════════════════════════════════════════ */
type CellType='factory'|'coal'|'smog'|'solar'|'tree'|'wind'|'metro'|'park'|'empty';
const CELL_EMOJI:Record<CellType,string>={factory:'🏭',coal:'⛏️',smog:'☁️',solar:'☀️',tree:'🌳',wind:'🌬️',metro:'🚊',park:'🌿',empty:'🏢'};
const DIRTY_TYPES:CellType[]=['factory','coal','smog'];
const CLEAN_TOOLS=[
  {key:'solar' as CellType,label:'☀️ Solar', color:'#d97706',cost:20},
  {key:'tree'  as CellType,label:'🌳 Forest',color:'#16a34a',cost:15},
  {key:'wind'  as CellType,label:'🌬️ Wind',  color:'#0284c7',cost:25},
  {key:'metro' as CellType,label:'🚊 Metro', color:'#7c3aed',cost:30},
  {key:'park'  as CellType,label:'🌿 Park',  color:'#65a30d',cost:10},
];

const EcoCityBuilderGame:React.FC=()=>{
  const makeGrid=()=>{ const g:CellType[]=[]; const dt:CellType[]=['factory','coal','smog']; for(let i=0;i<25;i++) g.push(i<15?dt[i%3]:'empty'); return g.sort(()=>Math.random()-0.5); };
  const [grid,setGrid]=useState<CellType[]>(makeGrid);
  const [tool,setTool]=useState<CellType>('solar');
  const [budget,setBudget]=useState(300);
  const [won,setWon]=useState(false);
  const [score,setScore]=useState(0);

  const dirty=grid.filter(c=>DIRTY_TYPES.includes(c)).length;
  const carbonPct=Math.round((dirty/25)*100);

  const clickTile=(idx:number)=>{
    if(won||!DIRTY_TYPES.includes(grid[idx])) return;
    const td=CLEAN_TOOLS.find(t=>t.key===tool)!;
    if(budget<td.cost) return;
    const ng=[...grid]; ng[idx]=tool; setGrid(ng);
    setBudget(b=>b-td.cost);
    const rem=ng.filter(c=>DIRTY_TYPES.includes(c)).length;
    setScore((25-rem)*10);
    if(rem===0){setWon(true);confetti({particleCount:120,spread:80,origin:{y:0.5}});}
  };
  const reset=()=>{setGrid(makeGrid());setBudget(300);setWon(false);setScore(0);};

  return (
    <GameShell title="🏙️ NET ZERO CITY" score={score} onReset={reset} tip="Tap polluted tiles 🏭⛏️☁️ to replace with clean energy. Budget is limited!" dark={false}>
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between">
          <span style={{...PIXEL,fontSize:8,color:'#475569',fontWeight:'bold'}}>CARBON: {carbonPct}%</span>
          <span style={{...PIXEL,fontSize:8,color:'#d97706',fontWeight:'bold'}}>BUDGET: ₹{budget}</span>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden" style={{background:'#e2e8f0'}}>
          <div className="h-full rounded-full transition-all duration-500" style={{width:`${100-carbonPct}%`,background:carbonPct===0?P.green:'#ef4444'}}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {CLEAN_TOOLS.map(t=>(
          <button key={t.key} onClick={()=>setTool(t.key)}
            className="px-3 py-1.5 rounded-xl border transition-all text-xs font-bold"
            style={{background:tool===t.key?t.color:'#f8fafc',color:tool===t.key?'#fff':'#334155',borderColor:t.color}}>
            {t.label} (₹{t.cost})
          </button>
        ))}
      </div>
      <div className="grid gap-1.5 p-3 rounded-2xl border" style={{gridTemplateColumns:'repeat(5,1fr)',background:'#f1f5f9',borderColor:'#e2e8f0'}}>
        {grid.map((c,i)=>(
          <button key={i} onClick={()=>clickTile(i)}
            className="aspect-square rounded-xl flex items-center justify-center text-2xl transition-all hover:scale-105 active:scale-95 border"
            style={{background:DIRTY_TYPES.includes(c)?'#fee2e2':'#dcfce7',borderColor:DIRTY_TYPES.includes(c)?'#fca5a5':'#86efac',cursor:DIRTY_TYPES.includes(c)?'pointer':'default'}}>
            {CELL_EMOJI[c]}
          </button>
        ))}
      </div>
      {won&&<div className="p-4 rounded-2xl text-center" style={{background:'#dcfce7',border:'2px solid #22c55e'}}>
        <div style={{...PIXEL,fontSize:11,color:'#15803d',fontWeight:'bold'}}>🎉 NET ZERO ACHIEVED!</div>
        <div style={{...PIXEL,fontSize:8,color:'#166534',marginTop:8,lineHeight:2}}>Score: {score} pts • India aims Net Zero by 2070!</div>
      </div>}
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 4 — ECO TETRIS (canvas, real tetrominoes)
════════════════════════════════════════════════════ */
const TCOLS=10,TROWS=18,TS=22;
const TPIECES=[
  {shape:[[1,1,1,1]],color:'#06b6d4'},
  {shape:[[1,1],[1,1]],color:'#eab308'},
  {shape:[[0,1,0],[1,1,1]],color:'#a855f7'},
  {shape:[[1,0,0],[1,1,1]],color:'#f97316'},
  {shape:[[0,0,1],[1,1,1]],color:'#3b82f6'},
  {shape:[[0,1,1],[1,1,0]],color:'#22c55e'},
  {shape:[[1,1,0],[0,1,1]],color:'#ef4444'},
];
type TBoard=(string|0)[][];

const EcoTetrisGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const sRef=useRef({
    board:Array.from({length:TROWS},()=>Array(TCOLS).fill(0)) as TBoard,
    piece:null as {shape:number[][];color:string;x:number;y:number}|null,
    score:0,trees:0,running:false,over:false,
  });
  const [disp,setDisp]=useState({score:0,trees:0,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0);

  const newPiece=()=>{ const p=TPIECES[Math.floor(Math.random()*TPIECES.length)]; return {shape:p.shape,color:p.color,x:Math.floor(TCOLS/2)-Math.floor(p.shape[0].length/2),y:0}; };

  const drawB=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current;
    ctx.fillStyle='#050d1a'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle='#1e293b'; ctx.lineWidth=0.5;
    for(let r=0;r<TROWS;r++) for(let c=0;c<TCOLS;c++) ctx.strokeRect(c*TS,r*TS,TS,TS);
    for(let r=0;r<TROWS;r++) for(let c=0;c<TCOLS;c++){
      const cell=s.board[r][c]; if(!cell) continue;
      ctx.fillStyle=cell as string; ctx.fillRect(c*TS+1,r*TS+1,TS-2,TS-2);
      ctx.fillStyle='rgba(255,255,255,0.2)'; ctx.fillRect(c*TS+1,r*TS+1,TS-2,4);
    }
    if(s.piece) s.piece.shape.forEach((row,dr)=>row.forEach((cell,dc)=>{
      if(!cell) return;
      const x=(s.piece!.x+dc)*TS, y=(s.piece!.y+dr)*TS;
      ctx.fillStyle=s.piece!.color; ctx.fillRect(x+1,y+1,TS-2,TS-2);
      ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.fillRect(x+1,y+1,TS-2,4);
    }));
  },[]);

  const collides=(piece:typeof sRef.current.piece,board:TBoard)=>{
    if(!piece) return false;
    for(let dr=0;dr<piece.shape.length;dr++) for(let dc=0;dc<piece.shape[dr].length;dc++){
      if(!piece.shape[dr][dc]) continue;
      const nr=piece.y+dr,nc=piece.x+dc;
      if(nr>=TROWS||nc<0||nc>=TCOLS||board[nr]?.[nc]) return true;
    }
    return false;
  };

  const lockAndClear=useCallback(()=>{
    const s=sRef.current; if(!s.piece) return;
    s.piece.shape.forEach((row,dr)=>row.forEach((cell,dc)=>{if(cell)s.board[s.piece!.y+dr][s.piece!.x+dc]=s.piece!.color;}));
    let cleared=0;
    s.board=s.board.filter(row=>{if(row.every(c=>c!==0)){cleared++;return false;}return true;});
    while(s.board.length<TROWS) s.board.unshift(Array(TCOLS).fill(0));
    if(cleared>0){s.score+=cleared*cleared*100;s.trees+=cleared;confetti({particleCount:cleared*20,spread:60,origin:{y:0.6}});}
    s.piece=newPiece();
    if(collides(s.piece,s.board)){s.running=false;s.over=true;if(s.score>hiRef.current)hiRef.current=s.score;setPhase('over');}
    setDisp({score:s.score,trees:s.trees,hi:hiRef.current});
  },[collides]);

  const resetGame=useCallback(()=>{
    const s=sRef.current;
    s.board=Array.from({length:TROWS},()=>Array(TCOLS).fill(0));
    s.piece=newPiece(); s.score=0; s.trees=0; s.running=true; s.over=false;
    setDisp({score:0,trees:0,hi:hiRef.current}); setPhase('playing');
  },[]);

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      const s=sRef.current; if(!s.running||!s.piece) return;
      if(e.key==='ArrowLeft'){const np={...s.piece,x:s.piece.x-1};if(!collides(np,s.board))s.piece=np;}
      else if(e.key==='ArrowRight'){const np={...s.piece,x:s.piece.x+1};if(!collides(np,s.board))s.piece=np;}
      else if(e.key==='ArrowDown'){const np={...s.piece,y:s.piece.y+1};if(!collides(np,s.board))s.piece=np;else lockAndClear();}
      else if(e.key==='ArrowUp'||e.key===' '){
        const rot=s.piece.shape[0].map((_,i)=>s.piece!.shape.map(row=>row[i]).reverse());
        const np={...s.piece,shape:rot};if(!collides(np,s.board))s.piece=np;
      }
      drawB(); if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp',' '].includes(e.key)) e.preventDefault();
    };
    window.addEventListener('keydown',onKey,{passive:false});
    return ()=>window.removeEventListener('keydown',onKey);
  },[collides,lockAndClear,drawB]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running||!s.piece) return;
      const np={...s.piece,y:s.piece.y+1};
      if(!collides(np,s.board)) s.piece=np; else lockAndClear();
      drawB();
    },600);
    return ()=>clearInterval(iv);
  },[phase,collides,lockAndClear,drawB]);

  useEffect(()=>{drawB();},[drawB]);

  const mLeft=()=>{const s=sRef.current;if(!s.piece)return;const np={...s.piece,x:s.piece.x-1};if(!collides(np,s.board)){s.piece=np;drawB();}};
  const mRight=()=>{const s=sRef.current;if(!s.piece)return;const np={...s.piece,x:s.piece.x+1};if(!collides(np,s.board)){s.piece=np;drawB();}};
  const mDown=()=>{const s=sRef.current;if(!s.piece)return;const np={...s.piece,y:s.piece.y+1};if(!collides(np,s.board)){s.piece=np;drawB();}else lockAndClear();};
  const mRotate=()=>{
    const s=sRef.current;if(!s.piece)return;
    const rot=s.piece.shape[0].map((_,i)=>s.piece!.shape.map(row=>row[i]).reverse());
    const np={...s.piece,shape:rot};if(!collides(np,s.board)){s.piece=np;drawB();}
  };

  return (
    <GameShell title="🧱 ECO TETRIS" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.lime,fontWeight:'bold'}}>🌲 {disp.trees}</span>}
      onReset={resetGame} tip="Arrow keys to move/rotate. Clear a full row = plant 1 tree! ↑/Space to rotate.">
      <div className="relative" style={{width:TCOLS*TS,height:TROWS*TS,maxWidth:'100%'}}>
        <canvas ref={canvasRef} width={TCOLS*TS} height={TROWS*TS} style={{display:'block',imageRendering:'pixelated',maxWidth:'100%'}}/>
        {phase==='idle'&&<StartOverlay title="ECO TETRIS" subtitle={"Stack eco-bricks!\nClear rows to plant trees 🌲"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message={`${disp.trees} trees planted! 🌱 Green buildings reduce energy use by 30-50%.`} onRestart={resetGame}/>}
      </div>
      <div className="flex items-center gap-2 sm:hidden">
        <button onClick={mLeft} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>◀</button>
        <button onClick={mRotate} className="w-12 h-10 rounded-lg text-white text-base flex items-center justify-center font-bold" style={{background:P.purple}}>↻</button>
        <button onClick={mDown} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>▼</button>
        <button onClick={mRight} className="w-12 h-10 rounded-lg text-white text-xl flex items-center justify-center" style={{background:P.border}}>▶</button>
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 5 — ENERGY SAVER RUSH (canvas whack-a-mole)
════════════════════════════════════════════════════ */
const EnergySaverGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const sRef=useRef({rooms:Array(9).fill(false) as boolean[],score:0,watts:0,timeLeft:60,running:false});
  const [disp,setDisp]=useState({score:0,watts:0,time:60,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current; const W=canvas.width,H=canvas.height;
    ctx.fillStyle='#0f172a'; ctx.fillRect(0,0,W,H);
    for(let i=0;i<9;i++){
      const col=i%3,row=Math.floor(i/3),cw=W/3,ch=H/3;
      const x=col*cw,y=row*ch,on=s.rooms[i];
      ctx.fillStyle=on?'#451a03':'#1e293b'; ctx.fillRect(x+4,y+4,cw-8,ch-8);
      ctx.fillStyle=on?'#fbbf24':'#334155'; ctx.fillRect(x+16,y+16,cw-32,ch-32);
      ctx.font=`${Math.round(ch*0.38)}px serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(on?'💡':'🌙',x+cw/2,y+ch/2);
      ctx.font='9px Courier New,monospace'; ctx.fillStyle=on?'#fde68a':'#64748b';
      ctx.fillText(on?'TAP!':'OFF',x+cw/2,y+ch-12);
      ctx.strokeStyle=on?'#f59e0b':'#334155'; ctx.lineWidth=on?3:1;
      ctx.strokeRect(x+4,y+4,cw-8,ch-8);
    }
  },[]);

  const handleClick=useCallback((e:React.MouseEvent<HTMLCanvasElement>)=>{
    const s=sRef.current; if(!s.running) return;
    const canvas=canvasRef.current; if(!canvas) return;
    const rect=canvas.getBoundingClientRect();
    const mx=(e.clientX-rect.left)*(canvas.width/rect.width);
    const my=(e.clientY-rect.top)*(canvas.height/rect.height);
    const col=Math.floor(mx/(canvas.width/3)),row=Math.floor(my/(canvas.height/3));
    const idx=row*3+col;
    if(s.rooms[idx]){s.rooms[idx]=false;s.score+=10;s.watts+=50;if(s.score>hiRef.current)hiRef.current=s.score;setDisp({score:s.score,watts:s.watts,time:s.timeLeft,hi:hiRef.current});draw();}
  },[draw]);

  const resetGame=useCallback(()=>{
    const s=sRef.current; s.rooms=Array(9).fill(false); s.score=0; s.watts=0; s.timeLeft=60; s.running=true;
    setDisp({score:0,watts:0,time:60,hi:hiRef.current}); setPhase('playing');
  },[]);

  useEffect(()=>{if(phase!=='playing')return;const iv=setInterval(()=>{const s=sRef.current;s.rooms[Math.floor(Math.random()*9)]=true;draw();},900);return()=>clearInterval(iv);},[phase,draw]);
  useEffect(()=>{if(phase!=='playing')return;const iv=setInterval(()=>{const s=sRef.current;s.timeLeft--;setDisp(d=>({...d,time:s.timeLeft}));if(s.timeLeft<=0){s.running=false;if(s.score>hiRef.current)hiRef.current=s.score;setPhase('over');}},1000);return()=>clearInterval(iv);},[phase]);
  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="💡 ENERGY SAVER" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.amber,fontWeight:'bold'}}>⏱ {disp.time}s ⚡{disp.watts}W</span>}
      onReset={resetGame} tip="Click lit rooms 💡 to turn them OFF! 60 seconds. Each click saves 50 Watts.">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:P.border}}>
        <canvas ref={canvasRef} width={330} height={330} onClick={handleClick}
          style={{display:'block',cursor:'pointer',imageRendering:'pixelated'}}/>
        {phase==='idle'&&<StartOverlay title="ENERGY SAVER RUSH" subtitle={"Lights randomly turn ON!\nClick fast to turn them OFF!"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message={`${disp.watts}W saved! 💡 Switching off idle lights cuts building energy use by 20%.`} onRestart={resetGame}/>}
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 6 — OCEAN SWEEPER (side-scroll canvas)
════════════════════════════════════════════════════ */
interface OObj{id:number;type:'plastic'|'fish'|'turtle';x:number;y:number;speed:number;}

const OceanSweeperGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const W=380,H=260;
  const sRef=useRef({ship:{x:60,y:H/2},objects:[] as OObj[],score:0,plastic:0,lives:3,running:false,over:false,frame:0});
  const [disp,setDisp]=useState({score:0,plastic:0,lives:3,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0); const idRef=useRef(0);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current;
    const g=ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#0c4a6e'); g.addColorStop(1,'#082f49');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(56,189,248,0.15)'; ctx.lineWidth=2;
    for(let i=0;i<5;i++){ctx.beginPath();for(let x=0;x<W;x+=10)ctx.lineTo(x,35+i*40+Math.sin(x*0.05+s.frame*0.05)*6);ctx.stroke();}
    ctx.font='26px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    for(const o of s.objects) ctx.fillText(o.type==='plastic'?'🧴':o.type==='fish'?'🐠':'🐢',o.x,o.y);
    ctx.font='30px serif'; ctx.fillText('🚢',s.ship.x,s.ship.y);
    ctx.font='14px serif'; ctx.textAlign='left'; ctx.textBaseline='top';
    ctx.fillText('❤️'.repeat(s.lives)+'🖤'.repeat(Math.max(0,3-s.lives)),8,8);
  },[]);

  const resetGame=useCallback(()=>{
    const s=sRef.current; s.ship={x:60,y:H/2}; s.objects=[]; s.score=0; s.plastic=0; s.lives=3; s.running=true; s.over=false; s.frame=0;
    setDisp({score:0,plastic:0,lives:3,hi:hiRef.current}); setPhase('playing');
  },[]);

  const handleMove=useCallback((e:React.MouseEvent<HTMLCanvasElement>|React.TouchEvent<HTMLCanvasElement>)=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const rect=canvas.getBoundingClientRect();
    const cy='touches' in e?(e.touches[0].clientY-rect.top)*(H/rect.height):(e.clientY-rect.top)*(H/rect.height);
    sRef.current.ship.y=Math.max(20,Math.min(H-20,cy));
  },[]);

  useEffect(()=>{if(phase!=='playing')return;const iv=setInterval(()=>{const types:OObj['type'][]=['plastic','plastic','plastic','fish','turtle'];const t=types[Math.floor(Math.random()*types.length)];sRef.current.objects.push({id:idRef.current++,type:t,x:W+30,y:30+Math.random()*(H-60),speed:2+Math.random()*2});},900);return()=>clearInterval(iv);},[phase]);

  useEffect(()=>{
    if(phase!=='playing')return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running)return; s.frame++;
      s.objects=s.objects.filter(o=>{
        o.x-=o.speed; if(o.x<-40)return false;
        const dx=Math.abs(o.x-s.ship.x),dy=Math.abs(o.y-s.ship.y);
        if(dx<22&&dy<18){
          if(o.type==='plastic'){s.score+=20;s.plastic++;if(s.score>hiRef.current)hiRef.current=s.score;confetti({particleCount:12,spread:35,origin:{y:0.7}});}
          else{s.lives--;if(s.lives<=0){s.running=false;s.over=true;setPhase('over');}}
          setDisp({score:s.score,plastic:s.plastic,lives:s.lives,hi:hiRef.current}); return false;
        }
        return true;
      });
      draw();
    },30);
    return()=>clearInterval(iv);
  },[phase,draw]);

  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="🌊 OCEAN SWEEPER" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.sky,fontWeight:'bold'}}>🧴{disp.plastic} {'❤️'.repeat(disp.lives)}</span>}
      onReset={resetGame} tip="Move mouse/finger to steer ship. Collect 🧴 plastic but AVOID 🐠🐢 marine life!">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'#0c4a6e'}}>
        <canvas ref={canvasRef} width={W} height={H} onMouseMove={handleMove} onTouchMove={handleMove}
          style={{display:'block',cursor:'none',imageRendering:'pixelated'}}/>
        {phase==='idle'&&<StartOverlay title="OCEAN SWEEPER" subtitle={"Steer the ship — collect plastic!\nDodge fish and turtles 🐢"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message={`${disp.plastic} pieces swept! 🌊 Ocean plastics threaten 1M+ sea creatures annually.`} onRestart={resetGame}/>}
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 7 — PIPE FLOW PUZZLE (rotate to connect)
════════════════════════════════════════════════════ */
type PType='straight'|'elbow'|'cross'|'tee';
interface PCell{connections:boolean[];rotation:number;type:PType;filled:boolean;}

const makePipeCell=(type:PType,rot=0):PCell=>{
  const base={straight:[true,false,true,false],elbow:[true,true,false,false],cross:[true,true,true,true],tee:[true,true,true,false]};
  const b=[...base[type]];
  for(let i=0;i<rot;i++){b.unshift(b.pop()!);}
  return{connections:b,rotation:rot,type,filled:false};
};

const PIPE_ICONS:Record<string,string>={
  straight_0:'║',straight_1:'═',
  elbow_0:'╗',elbow_1:'╝',elbow_2:'╚',elbow_3:'╔',
  cross_0:'╬',
  tee_0:'╠',tee_1:'╦',tee_2:'╣',tee_3:'╩',
};

const PipeFlowGame:React.FC=()=>{
  const PROWS=4,PCOLS=5;
  const mkGrid=():PCell[]=>{
    const types:PType[]=['straight','elbow','tee','elbow','straight','tee'];
    return Array.from({length:PROWS*PCOLS},()=>makePipeCell(types[Math.floor(Math.random()*types.length)],Math.floor(Math.random()*4)));
  };
  const [grid,setGrid]=useState<PCell[]>(mkGrid);
  const [score,setScore]=useState(0);
  const [solved,setSolved]=useState(false);

  const bfs=(ng:PCell[]):boolean[]=>{
    const filled=ng.map((_,i)=>i===0);
    const queue=[0];const visited=new Set([0]);
    while(queue.length){
      const cur=queue.shift()!;const cr=Math.floor(cur/PCOLS),cc=cur%PCOLS;
      const dirs=[{dr:-1,dc:0,my:0,nb:2},{dr:0,dc:1,my:1,nb:3},{dr:1,dc:0,my:2,nb:0},{dr:0,dc:-1,my:3,nb:1}];
      for(const d of dirs){
        const nr=cr+d.dr,nc=cc+d.dc;
        if(nr<0||nr>=PROWS||nc<0||nc>=PCOLS) continue;
        const nIdx=nr*PCOLS+nc; if(visited.has(nIdx)) continue;
        if(ng[cur].connections[d.my]&&ng[nIdx].connections[d.nb]){filled[nIdx]=true;visited.add(nIdx);queue.push(nIdx);}
      }
    }
    return filled;
  };

  const rotateTile=(idx:number)=>{
    if(solved) return;
    setGrid(prev=>{
      const ng=[...prev];
      const c=ng[idx]; const b=[...c.connections]; b.unshift(b.pop()!);
      ng[idx]={...c,connections:b,rotation:(c.rotation+1)%4};
      const filled=bfs(ng); ng.forEach((cell,i)=>ng[i]={...cell,filled:filled[i]});
      const allFilled=filled.every(Boolean);
      if(allFilled){setScore(s=>s+500);setSolved(true);confetti({particleCount:100,spread:70,origin:{y:0.5}});}
      return ng;
    });
  };

  const reset=()=>{setGrid(mkGrid());setScore(0);setSolved(false);};
  const PCOLOR:Record<PType,string>={straight:'#38bdf8',elbow:'#22c55e',cross:'#f59e0b',tee:'#a855f7'};

  return (
    <GameShell title="💧 PIPE FLOW PUZZLE" score={score} onReset={reset} tip="Click tiles to rotate them. Connect all pipes from source (top-left) to fill the network!" dark={false}>
      <div className="grid gap-1.5 p-3 rounded-2xl border" style={{gridTemplateColumns:`repeat(${PCOLS},1fr)`,background:'#f1f5f9',borderColor:'#e2e8f0'}}>
        {grid.map((cell,idx)=>{
          const iconKey=`${cell.type}_${cell.rotation%(cell.type==='straight'?2:cell.type==='cross'?1:4)}`;
          return(
            <button key={idx} onClick={()=>rotateTile(idx)}
              className="aspect-square rounded-xl flex items-center justify-center font-black border-2 text-2xl transition-all hover:scale-105 active:scale-95"
              style={{background:cell.filled?'#dcfce7':'#fff',borderColor:cell.filled?'#22c55e':'#cbd5e1',color:PCOLOR[cell.type]}}>
              {PIPE_ICONS[iconKey]||'·'}
            </button>
          );
        })}
      </div>
      {solved&&<div className="p-4 rounded-2xl text-center" style={{background:'#dcfce7',border:'2px solid #22c55e'}}>
        <div style={{...PIXEL,fontSize:10,color:'#15803d',fontWeight:'bold'}}>💧 WATER FLOWS! +500 pts</div>
        <div style={{...PIXEL,fontSize:8,color:'#166534',marginTop:8,lineHeight:2}}>Efficient water networks save millions of litres daily!</div>
        <button onClick={reset} className="mt-3 px-4 py-2 rounded-xl text-white text-xs font-bold" style={{background:'#22c55e'}}>NEXT PUZZLE</button>
      </div>}
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 8 — GREEN SPRINT (canvas endless runner)
════════════════════════════════════════════════════ */
const GreenSprintGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const W=380,H=200,GROUND=H-40;
  const sRef=useRef({runnerY:GROUND-30,vy:0,jumping:false,obstacles:[] as{x:number;emoji:string}[],pickups:[] as{x:number;emoji:string;pts:number}[],score:0,dist:0,speed:3,running:false,over:false,frame:0});
  const [disp,setDisp]=useState({score:0,dist:0,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current;
    const sky=ctx.createLinearGradient(0,0,0,H); sky.addColorStop(0,'#0f172a'); sky.addColorStop(1,'#134e4a');
    ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#064e3b'; ctx.fillRect(0,GROUND,W,H-GROUND);
    ctx.fillStyle='#16a34a'; ctx.fillRect(0,GROUND,W,4);
    ctx.font='28px serif'; ctx.textAlign='center'; ctx.textBaseline='bottom';
    ctx.fillText('🏃',70,s.runnerY+30);
    ctx.font='26px serif';
    for(const o of s.obstacles) ctx.fillText(o.emoji,o.x,GROUND);
    ctx.font='22px serif';
    for(const p of s.pickups) ctx.fillText(p.emoji,p.x,GROUND-35+Math.sin(s.frame*0.12)*7);
  },[]);

  const jump=useCallback(()=>{ const s=sRef.current; if(!s.running||s.jumping)return; s.vy=-10; s.jumping=true; },[]);
  const resetGame=useCallback(()=>{
    const s=sRef.current;
    Object.assign(s,{runnerY:GROUND-30,vy:0,jumping:false,obstacles:[],pickups:[],score:0,dist:0,speed:3,running:true,over:false,frame:0});
    setDisp({score:0,dist:0,hi:hiRef.current}); setPhase('playing');
  },[]);

  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{ if(e.key===' '||e.key==='ArrowUp'){jump();e.preventDefault();} };
    window.addEventListener('keydown',h,{passive:false}); return()=>window.removeEventListener('keydown',h);
  },[jump]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running) return; s.frame++; s.dist++; s.speed=3+Math.floor(s.dist/200)*0.5;
      if(s.jumping){s.runnerY+=s.vy;s.vy+=0.65;if(s.runnerY>=GROUND-30){s.runnerY=GROUND-30;s.jumping=false;s.vy=0;}}
      if(s.frame%90===0) s.obstacles.push({x:W+20,emoji:['🛢️','💨','⚡'][Math.floor(Math.random()*3)]});
      if(s.frame%120===60) s.pickups.push({x:W+20,emoji:['🌱','♻️','💧'][Math.floor(Math.random()*3)],pts:['🌱','♻️','💧'].indexOf('🌱')===0?50:30});
      s.obstacles=s.obstacles.filter(o=>{
        o.x-=s.speed; if(o.x<-30)return false;
        if(Math.abs(o.x-70)<20&&Math.abs((GROUND-20)-(s.runnerY+14))<20){
          s.running=false;s.over=true;if(s.score>hiRef.current)hiRef.current=s.score;setPhase('over');
        }
        return true;
      });
      s.pickups=s.pickups.filter(p=>{
        p.x-=s.speed; if(p.x<-20)return false;
        if(Math.abs(p.x-70)<22&&Math.abs((GROUND-40)-(s.runnerY+14))<30){s.score+=30;confetti({particleCount:10,spread:35,origin:{y:0.75}});return false;}
        return true;
      });
      s.score+=1; setDisp({score:s.score,dist:s.dist,hi:hiRef.current}); draw();
    },30);
    return()=>clearInterval(iv);
  },[phase,draw]);

  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="🏃 GREEN SPRINT" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.green,fontWeight:'bold'}}>{disp.dist}m</span>}
      onReset={resetGame} tip="SPACE / ↑ / Tap to jump! Avoid 🛢️💨⚡ pollution. Collect 🌱♻️💧 for bonus points!">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'#064e3b'}}>
        <canvas ref={canvasRef} width={W} height={H} onClick={jump} style={{display:'block',cursor:'pointer',imageRendering:'pixelated'}}/>
        {phase==='idle'&&<StartOverlay title="GREEN SPRINT" subtitle={"Jump over oil barrels & smog!\nCollect trees 🌱 & recycling ♻️!"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message={`You ran ${disp.dist}m! 🏃 Green commuting cuts CO₂ by 4.6 tonnes per person per year.`} onRestart={resetGame}/>}
      </div>
      <button onTouchStart={jump} onClick={jump} className="sm:hidden px-8 py-3 rounded-xl text-white font-bold text-sm" style={{background:P.green}}>JUMP ↑</button>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 9 — SOLAR MATCH-3 (real jewel-swap match-3)
════════════════════════════════════════════════════ */
const GEMS=['☀️','🌬️','💧','⚡','🌱','🔥'];
const GM=6;
const SolarMatch3Game:React.FC=()=>{
  const mkGrid=()=>Array.from({length:GM*GM},()=>GEMS[Math.floor(Math.random()*GEMS.length)]);
  const [grid,setGrid]=useState<string[]>(mkGrid);
  const [selected,setSelected]=useState<number|null>(null);
  const [score,setScore]=useState(0); const [hi,setHi]=useState(0);
  const [matches,setMatches]=useState(0); const [flash,setFlash]=useState<Set<number>>(new Set());

  const findMatches=(g:string[]):Set<number>=>{
    const m=new Set<number>();
    for(let r=0;r<GM;r++) for(let c=0;c<GM-2;c++){const i=r*GM+c;if(g[i]===g[i+1]&&g[i]===g[i+2]){m.add(i);m.add(i+1);m.add(i+2);}}
    for(let r=0;r<GM-2;r++) for(let c=0;c<GM;c++){const i=r*GM+c;if(g[i]===g[i+GM]&&g[i]===g[i+GM*2]){m.add(i);m.add(i+GM);m.add(i+GM*2);}}
    return m;
  };

  const applyGravity=(g:string[]):{ng:string[];pts:number}=>{
    const m=findMatches(g); if(m.size===0)return{ng:g,pts:0};
    const ng=[...g]; m.forEach(i=>ng[i]='');
    for(let c=0;c<GM;c++){
      let col=[];for(let r=0;r<GM;r++)col.push(ng[r*GM+c]);
      col=col.filter(x=>x!=='');while(col.length<GM)col.unshift(GEMS[Math.floor(Math.random()*GEMS.length)]);
      for(let r=0;r<GM;r++)ng[r*GM+c]=col[r];
    }
    return{ng,pts:m.size*50};
  };

  const handleClick=(idx:number)=>{
    if(selected===null){setSelected(idx);return;}
    if(selected===idx){setSelected(null);return;}
    const sr=Math.floor(selected/GM),sc=selected%GM,ir=Math.floor(idx/GM),ic=idx%GM;
    if(Math.abs(sr-ir)+Math.abs(sc-ic)!==1){setSelected(idx);return;}
    const ng=[...grid];[ng[selected],ng[idx]]=[ng[idx],ng[selected]];setSelected(null);
    const m=findMatches(ng);
    if(m.size===0){setFlash(new Set([selected,idx]));setTimeout(()=>setFlash(new Set()),300);return;}
    setFlash(m);
    setTimeout(()=>{
      setFlash(new Set()); let cur=ng,total=0;
      for(let i=0;i<5;i++){const{ng:newG,pts}=applyGravity(cur);total+=pts;if(pts===0)break;cur=newG;}
      if(total>0){setScore(s=>{const ns=s+total;setHi(h=>Math.max(h,ns));return ns;});setMatches(m=>m+1);confetti({particleCount:25,spread:45,origin:{y:0.6}});}
      setGrid(cur);
    },300);
  };

  const GEM_BG:Record<string,string>={'☀️':'#fef3c7','🌬️':'#e0f2fe','💧':'#dbeafe','⚡':'#fef9c3','🌱':'#dcfce7','🔥':'#fee2e2'};

  return (
    <GameShell title="⚡ SOLAR MATCH-3" score={score} highScore={hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.amber,fontWeight:'bold'}}>COMBOS: {matches}</span>}
      onReset={()=>{setGrid(mkGrid());setScore(0);setMatches(0);setSelected(null);}}
      tip="Swap adjacent gems to match 3+ in a row! ☀️Solar 🌬️Wind 💧Hydro ⚡Battery 🌱Bio 🔥Geo" dark={false}>
      <div className="grid gap-1.5 p-3 rounded-2xl border" style={{gridTemplateColumns:`repeat(${GM},1fr)`,background:'#f1f5f9',borderColor:'#e2e8f0'}}>
        {grid.map((gem,idx)=>(
          <button key={idx} onClick={()=>handleClick(idx)}
            className="aspect-square rounded-xl flex items-center justify-center text-xl border-2 transition-all hover:scale-105 active:scale-95"
            style={{background:selected===idx?'#fef3c7':flash.has(idx)?'#fbbf24':GEM_BG[gem]||'#f8fafc',borderColor:selected===idx?'#f59e0b':flash.has(idx)?'#f97316':'#e2e8f0',transform:flash.has(idx)?'scale(1.2)':selected===idx?'scale(1.1)':'scale(1)'}}>
            {gem}
          </button>
        ))}
      </div>
      <div style={{...PIXEL,fontSize:9,color:'#64748b',textAlign:'center'}}>Every match = clean energy grid activated! ⚡</div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 10 — CARBON COMMUTE (route strategy)
════════════════════════════════════════════════════ */
const COMMUTERS=[
  {name:'Riya',from:'Home',to:'Office',dist:12},
  {name:'Arjun',from:'School',to:'Mall',dist:5},
  {name:'Priya',from:'Park',to:'Bank',dist:8},
  {name:'Dev',from:'Colony',to:'Station',dist:15},
  {name:'Ananya',from:'Hospital',to:'Market',dist:6},
];
const TRANSPORTS=[
  {id:'walk', emoji:'🚶',label:'Walk',        co2:0,   cost:0, maxDist:3},
  {id:'cycle',emoji:'🚲',label:'Bicycle',     co2:0,   cost:1, maxDist:10},
  {id:'bus',  emoji:'🚌',label:'City Bus',    co2:0.05,cost:3, maxDist:50},
  {id:'metro',emoji:'🚊',label:'Metro Rail',  co2:0.02,cost:4, maxDist:50},
  {id:'ev',   emoji:'🔋',label:'Electric Car',co2:0.05,cost:6, maxDist:100},
  {id:'car',  emoji:'🚗',label:'Petrol Car',  co2:0.21,cost:5, maxDist:100},
];

const CarbonCommuteGame:React.FC=()=>{
  const [cur,setCur]=useState(0); const [score,setScore]=useState(0); const [co2,setCo2]=useState(0);
  const [done,setDone]=useState(false); const [choices,setChoices]=useState<string[]>([]);
  const [fb,setFb]=useState('');
  const c=COMMUTERS[cur];

  const choose=(t:typeof TRANSPORTS[0])=>{
    if(t.maxDist<c.dist){setFb(`❌ ${t.label} can't cover ${c.dist}km!`);setTimeout(()=>setFb(''),1500);return;}
    const saved=0.21*c.dist-t.co2*c.dist; const pts=Math.round(saved*100)+(t.co2===0?50:0);
    setChoices(cs=>[...cs,t.emoji]); setCo2(s=>s+saved); setScore(s=>s+pts);
    setFb(`✅ ${t.label}! CO₂ saved: ${saved.toFixed(2)}kg`);
    if(cur+1>=COMMUTERS.length){setTimeout(()=>{setDone(true);confetti({particleCount:80,spread:70,origin:{y:0.5}});},1200);}
    else setTimeout(()=>{setCur(c=>c+1);setFb('');},1200);
  };
  const reset=()=>{setCur(0);setScore(0);setCo2(0);setDone(false);setChoices([]);setFb('');};

  return (
    <GameShell title="🚲 CARBON COMMUTE" score={score} onReset={reset} tip="Pick the greenest transport that covers the distance. Avoid petrol cars!" dark={false}>
      <div className="w-full max-w-md space-y-4">
        <div className="flex gap-1">{COMMUTERS.map((_,i)=><div key={i} className="flex-1 h-2 rounded-full" style={{background:i<cur?P.green:i===cur?P.amber:'#e2e8f0'}}/>)}</div>
        {!done?(
          <>
            <div className="p-4 rounded-2xl border" style={{background:'#f8fafc',borderColor:'#e2e8f0'}}>
              <div style={{...PIXEL,fontSize:9,color:'#f97316',fontWeight:'bold'}}>PASSENGER {cur+1}/{COMMUTERS.length}</div>
              <div style={{...PIXEL,fontSize:12,color:'#0f172a',marginTop:8,fontWeight:'bold'}}>{c.name}</div>
              <div style={{...PIXEL,fontSize:8,color:'#64748b',marginTop:6,lineHeight:2}}>{c.from} → {c.to} ({c.dist}km)</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TRANSPORTS.map(t=>{
                const ok=t.maxDist>=c.dist;
                return(
                  <button key={t.id} onClick={()=>choose(t)} disabled={!ok}
                    className="p-3 rounded-xl border-2 flex flex-col items-center gap-1 transition-all active:scale-95"
                    style={{background:!ok?'#f1f5f9':t.co2===0?'#dcfce7':t.co2<0.1?'#fef3c7':'#fee2e2',borderColor:!ok?'#e2e8f0':t.co2===0?'#22c55e':t.co2<0.1?'#f59e0b':'#ef4444',opacity:!ok?0.4:1}}>
                    <span style={{fontSize:28}}>{t.emoji}</span>
                    <span style={{...PIXEL,fontSize:7,color:'#0f172a',fontWeight:'bold'}}>{t.label}</span>
                    <span style={{...PIXEL,fontSize:7,color:t.co2===0?'#16a34a':'#dc2626'}}>{t.co2===0?'ZERO CO₂':`${t.co2}kg/km`}</span>
                  </button>
                );
              })}
            </div>
            {fb&&<div style={{...PIXEL,fontSize:9,color:fb.startsWith('✅')?P.green:P.red,textAlign:'center',lineHeight:2}}>{fb}</div>}
          </>
        ):(
          <div className="p-6 rounded-2xl text-center space-y-4" style={{background:'#dcfce7',border:'2px solid #22c55e'}}>
            <div style={{...PIXEL,fontSize:12,color:'#15803d',fontWeight:'bold'}}>🎉 ROUTE COMPLETE!</div>
            <div style={{...PIXEL,fontSize:8,color:'#166534',lineHeight:2}}>Score: {score}pts • CO₂ Saved: {co2.toFixed(2)}kg • Choices: {choices.join(' ')}</div>
            <div style={{...PIXEL,fontSize:7,color:'#064e3b',lineHeight:2}}>India has 250M+ daily commuters — switching to green transport could cut 100M tonnes CO₂/year!</div>
            <button onClick={reset} className="px-4 py-2 rounded-xl text-white text-xs font-bold" style={{background:'#22c55e'}}>PLAY AGAIN</button>
          </div>
        )}
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 11 — PLASTIC-FREE DASH (canvas catch/dodge)
════════════════════════════════════════════════════ */
interface DItem{id:number;emoji:string;isGreen:boolean;x:number;y:number;speed:number;}
const DGREEN=['🧺','♻️','🌱','🎋','🍃','🥬'];
const DBAD=['🛍️','🥤','🧴','📦'];

const PlasticFreeDashGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const W=340,H=260;
  const sRef=useRef({basket:{x:W/2,y:H-35},items:[] as DItem[],score:0,lives:3,running:false,frame:0});
  const [disp,setDisp]=useState({score:0,lives:3,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0); const idRef=useRef(0);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current;
    ctx.fillStyle='#faf5eb'; ctx.fillRect(0,0,W,H);
    for(let i=0;i<3;i++){ctx.fillStyle=i%2===0?'#fef9c3':'#fefce8';ctx.fillRect(i*(W/3)+1,0,W/3-2,H-50);}
    ctx.font='24px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    for(const it of s.items){
      ctx.fillText(it.emoji,it.x,it.y);
      ctx.strokeStyle=it.isGreen?'#22c55e':'#ef4444'; ctx.lineWidth=2;
      ctx.strokeRect(it.x-14,it.y-14,28,28);
    }
    ctx.font='30px serif'; ctx.fillText('🧺',s.basket.x,s.basket.y);
    ctx.font='14px serif'; ctx.textAlign='left'; ctx.textBaseline='top';
    ctx.fillText('❤️'.repeat(s.lives)+'🖤'.repeat(Math.max(0,3-s.lives)),8,H-35);
  },[]);

  const handleMove=useCallback((e:React.MouseEvent<HTMLCanvasElement>|React.TouchEvent<HTMLCanvasElement>)=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const rect=canvas.getBoundingClientRect();
    const cx='touches' in e?(e.touches[0].clientX-rect.left)*(W/rect.width):(e.clientX-rect.left)*(W/rect.width);
    sRef.current.basket.x=Math.max(20,Math.min(W-20,cx));
  },[]);

  const resetGame=useCallback(()=>{
    const s=sRef.current; s.basket={x:W/2,y:H-35}; s.items=[]; s.score=0; s.lives=3; s.running=true; s.frame=0;
    setDisp({score:0,lives:3,hi:hiRef.current}); setPhase('playing');
  },[]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running)return; s.frame++;
      if(s.frame%60===0){
        const isGreen=Math.random()>0.4; const pool=isGreen?DGREEN:DBAD;
        s.items.push({id:idRef.current++,emoji:pool[Math.floor(Math.random()*pool.length)],isGreen,x:50+Math.random()*(W-100),y:-20,speed:1.5+Math.random()*1.5});
      }
      s.items=s.items.filter(it=>{
        it.y+=it.speed; if(it.y>H+20){if(it.isGreen){s.lives=Math.max(0,s.lives-1);if(s.lives<=0){s.running=false;setPhase('over');}}return false;}
        const dx=Math.abs(it.x-s.basket.x),dy=Math.abs(it.y-s.basket.y);
        if(dx<28&&dy<24){
          if(it.isGreen){s.score+=20;if(s.score>hiRef.current)hiRef.current=s.score;confetti({particleCount:12,spread:40,origin:{y:0.8}});}
          else{s.lives=Math.max(0,s.lives-1);if(s.lives<=0){s.running=false;setPhase('over');}}
          setDisp({score:s.score,lives:s.lives,hi:hiRef.current}); return false;
        }
        return true;
      });
      draw();
    },30);
    return()=>clearInterval(iv);
  },[phase,draw]);

  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="🛍️ PLASTIC-FREE DASH" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.red,fontWeight:'bold'}}>{'❤️'.repeat(disp.lives)}</span>}
      onReset={resetGame} tip="Move mouse/finger to catch ♻️ eco items! Avoid 🛍️🥤 plastic — it costs a life!">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'#d97706'}}>
        <canvas ref={canvasRef} width={W} height={H} onMouseMove={handleMove} onTouchMove={handleMove} style={{display:'block',cursor:'none'}}/>
        {phase==='idle'&&<StartOverlay title="PLASTIC-FREE DASH" subtitle={"Catch 🧺♻️ eco items!\nAVOID 🛍️🥤 single-use plastic!"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message="Single-use plastics take 450+ years to decompose! Every eco-swap matters. 🌱" onRestart={resetGame}/>}
      </div>
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 12 — SOLAR PANEL MASTER (precision angle)
════════════════════════════════════════════════════ */
const SolarPanelGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const W=380,H=280;
  const [angle,setAngle]=useState(45); const [sunAngle,setSunAngle]=useState(45);
  const [phase,setPhase]=useState<'idle'|'playing'>('idle');
  const [score,setScore]=useState(0); const [hi,setHi]=useState(0);
  const [round,setRound]=useState(0); const [timeLeft,setTimeLeft]=useState(5);
  const [roundDone,setRoundDone]=useState(false);
  const efficiency=Math.max(0,100-Math.abs(angle-sunAngle)*3);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    ctx.fillStyle='#0c1a2e'; ctx.fillRect(0,0,W,H);
    const sky=ctx.createLinearGradient(0,0,0,H*0.7); sky.addColorStop(0,'#0369a1'); sky.addColorStop(1,'#0c4a6e');
    ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.7);
    ctx.fillStyle='#365314'; ctx.fillRect(0,H*0.7,W,H*0.3);
    const sRad=(sunAngle/90)*Math.PI;
    const sx=W/2+Math.cos(Math.PI-sRad)*140, sy=H*0.65-Math.sin(sRad)*120;
    const glow=ctx.createRadialGradient(sx,sy,0,sx,sy,40);
    glow.addColorStop(0,'#fef08a'); glow.addColorStop(0.4,'#fbbf24'); glow.addColorStop(1,'transparent');
    ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(sx,sy,40,0,Math.PI*2); ctx.fill();
    ctx.font='36px serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('☀️',sx,sy);
    const e01=efficiency/100;
    ctx.strokeStyle=`rgba(251,191,36,${e01})`; ctx.lineWidth=e01>0.7?3:1; ctx.setLineDash([8,8]);
    ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(W/2,H*0.65); ctx.stroke(); ctx.setLineDash([]);
    const pRad=((angle-90)*Math.PI)/180,cx=W/2,cy=H*0.65,pw=90,ph=14;
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(pRad);
    ctx.fillStyle=`rgb(${Math.round(30+e01*10)},${Math.round(80+e01*80)},${Math.round(120+e01*80)})`;
    ctx.fillRect(-pw/2,-ph,pw,ph); ctx.strokeStyle=efficiency>70?'#fbbf24':'#64748b'; ctx.lineWidth=2;
    ctx.strokeRect(-pw/2,-ph,pw,ph); ctx.restore();
    ctx.fillStyle='#94a3b8'; ctx.fillRect(cx-4,cy,8,H*0.3-5);
    const bW=W-60,bX=30,bY=H-30;
    ctx.fillStyle='#1e293b'; ctx.fillRect(bX,bY,bW,14);
    ctx.fillStyle=efficiency>70?'#22c55e':efficiency>40?'#f59e0b':'#ef4444';
    ctx.fillRect(bX,bY,bW*(efficiency/100),14);
    ctx.fillStyle='#fff'; ctx.font='9px Courier New,monospace'; ctx.textAlign='center';
    ctx.fillText(`EFFICIENCY: ${efficiency}%`,W/2,bY+10);
    ctx.fillStyle='#fbbf24'; ctx.font='8px Courier New,monospace'; ctx.textAlign='right';
    ctx.fillText(`SUN:${sunAngle}° PANEL:${angle}°`,W-8,18);
  },[angle,sunAngle,efficiency]);

  useEffect(()=>{draw();},[draw]);
  useEffect(()=>{
    if(phase!=='playing'||roundDone) return;
    const iv=setInterval(()=>{setTimeLeft(t=>{if(t<=1){const pts=Math.round(efficiency);setScore(s=>{const ns=s+pts;setHi(h=>Math.max(h,ns));return ns;});setRoundDone(true);return 0;}return t-1;});},1000);
    return()=>clearInterval(iv);
  },[phase,roundDone,efficiency]);

  const nextRound=()=>{setSunAngle(15+Math.floor(Math.random()*70));setAngle(45);setRound(r=>r+1);setTimeLeft(5);setRoundDone(false);};
  const startGame=()=>{setSunAngle(30+Math.floor(Math.random()*50));setAngle(45);setScore(0);setRound(1);setTimeLeft(5);setRoundDone(false);setPhase('playing');};

  return (
    <GameShell title="☀️ SOLAR MASTER" score={score} highScore={hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.amber,fontWeight:'bold'}}>R{round} ⏱{timeLeft}s</span>}
      onReset={startGame} tip="Adjust the slider to match panel angle to the sun! 5 seconds per round.">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'#0369a1'}}>
        <canvas ref={canvasRef} width={W} height={H} style={{display:'block',imageRendering:'pixelated'}}/>
        {phase==='idle'&&<StartOverlay title="SOLAR MASTER" subtitle={"Align the solar panel to\nmatch the sun angle perfectly!"} onStart={startGame}/>}
      </div>
      <div className="w-full max-w-sm space-y-2">
        <div className="flex justify-between" style={{...PIXEL,fontSize:9,color:P.slate}}>
          <span>0° Flat</span>
          <span style={{color:efficiency>80?P.green:P.amber,fontWeight:'bold'}}>PANEL: {angle}°</span>
          <span>90° Vertical</span>
        </div>
        <input type="range" min={5} max={89} value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-full h-3 rounded-full cursor-pointer" style={{accentColor:P.amber}}/>
      </div>
      {roundDone&&(
        <div className="p-4 rounded-2xl text-center space-y-2" style={{background:efficiency>70?'#dcfce7':'#fee2e2',border:`2px solid ${efficiency>70?'#22c55e':'#ef4444'}`}}>
          <div style={{...PIXEL,fontSize:11,color:efficiency>70?'#15803d':'#dc2626',fontWeight:'bold'}}>{efficiency>70?'☀️ GREAT!':'❌ MISSED!'} +{Math.round(efficiency)}pts</div>
          <div style={{...PIXEL,fontSize:8,color:'#374151',lineHeight:2}}>Target {sunAngle}° → You set {angle}° → {efficiency}% efficiency</div>
          <button onClick={nextRound} className="px-4 py-2 rounded-xl text-white font-bold text-xs" style={{background:'#f59e0b'}}>NEXT ROUND →</button>
        </div>
      )}
    </GameShell>
  );
};

/* ════════════════════════════════════════════════════
   GAME 13 — POLLINATOR BLITZ (canvas flappy bee)
════════════════════════════════════════════════════ */
const BeePollinatorGame:React.FC=()=>{
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const W=380,H=280;
  const sRef=useRef({bee:{x:80,y:H/2},vy:0,flowers:[] as{x:number;y:number;bloomed:boolean;id:number}[],hazards:[] as{x:number;y:number;id:number}[],score:0,pollinated:0,lives:3,running:false,frame:0});
  const [disp,setDisp]=useState({score:0,pollinated:0,lives:3,hi:0});
  const [phase,setPhase]=useState<'idle'|'playing'|'over'>('idle');
  const hiRef=useRef(0); const idRef=useRef(0);

  const flap=useCallback(()=>{ const s=sRef.current; if(!s.running)return; s.vy=-5; },[]);

  const draw=useCallback(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d'); if(!ctx) return;
    const s=sRef.current;
    const bg=ctx.createLinearGradient(0,0,0,H); bg.addColorStop(0,'#a7f3d0'); bg.addColorStop(1,'#6ee7b7');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#16a34a'; ctx.fillRect(0,H-30,W,30);
    ctx.font='26px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    for(const f of s.flowers) ctx.fillText(f.bloomed?'🌸':'🌺',f.x,f.y);
    ctx.font='22px serif';
    for(const h of s.hazards) ctx.fillText('☠️',h.x,h.y);
    ctx.font=`${24+(s.frame%4<2?0:2)}px serif`;
    ctx.fillText('🐝',s.bee.x,s.bee.y);
    ctx.font='14px serif'; ctx.textAlign='left'; ctx.textBaseline='top';
    ctx.fillText('❤️'.repeat(s.lives)+'🖤'.repeat(Math.max(0,3-s.lives)),8,8);
  },[]);

  const resetGame=useCallback(()=>{
    const s=sRef.current; s.bee={x:80,y:H/2}; s.vy=0; s.flowers=[]; s.hazards=[]; s.score=0; s.pollinated=0; s.lives=3; s.running=true; s.frame=0;
    setDisp({score:0,pollinated:0,lives:3,hi:hiRef.current}); setPhase('playing');
  },[]);

  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{ if(e.key===' '||e.key==='ArrowUp'){flap();e.preventDefault();} };
    window.addEventListener('keydown',h,{passive:false}); return()=>window.removeEventListener('keydown',h);
  },[flap]);

  useEffect(()=>{
    if(phase!=='playing') return;
    const iv=setInterval(()=>{
      const s=sRef.current; if(!s.running)return; s.frame++;
      s.vy+=0.35; s.bee.y+=s.vy;
      if(s.bee.y<10||s.bee.y>H-30){s.lives=Math.max(0,s.lives-1);s.bee.y=H/2;s.vy=0;if(s.lives<=0){s.running=false;setPhase('over');}setDisp(d=>({...d,lives:s.lives}));}
      if(s.frame%80===0) s.flowers.push({id:idRef.current++,x:W+20,y:40+Math.random()*(H-90),bloomed:false});
      if(s.frame%130===65) s.hazards.push({id:idRef.current++,x:W+20,y:30+Math.random()*(H-60)});
      s.flowers=s.flowers.filter(f=>{
        f.x-=2; if(f.x<-30)return false;
        if(!f.bloomed&&Math.abs(f.x-s.bee.x)<22&&Math.abs(f.y-s.bee.y)<22){
          f.bloomed=true; s.score+=50; s.pollinated++; if(s.score>hiRef.current)hiRef.current=s.score;
          confetti({particleCount:15,spread:40,origin:{y:0.6}});
          setDisp({score:s.score,pollinated:s.pollinated,lives:s.lives,hi:hiRef.current});
        }
        return true;
      });
      s.hazards=s.hazards.filter(h=>{
        h.x-=2.5; if(h.x<-30)return false;
        if(Math.abs(h.x-s.bee.x)<20&&Math.abs(h.y-s.bee.y)<20){
          s.lives=Math.max(0,s.lives-1); if(s.lives<=0){s.running=false;setPhase('over');}
          setDisp(d=>({...d,lives:s.lives})); return false;
        }
        return true;
      });
      draw();
    },30);
    return()=>clearInterval(iv);
  },[phase,draw]);

  useEffect(()=>{draw();},[draw]);

  return (
    <GameShell title="🐝 POLLINATOR BLITZ" score={disp.score} highScore={disp.hi}
      extra={<span style={{...PIXEL,fontSize:10,color:P.amber,fontWeight:'bold'}}>🌸{disp.pollinated} {'❤️'.repeat(disp.lives)}</span>}
      onReset={resetGame} tip="SPACE / ↑ to flap! Touch 🌺 flowers to pollinate. Avoid ☠️ pesticide clouds!">
      <div className="relative rounded-2xl overflow-hidden border" style={{borderColor:'#16a34a'}}>
        <canvas ref={canvasRef} width={W} height={H} onClick={flap} style={{display:'block',cursor:'pointer',imageRendering:'pixelated'}}/>
        {phase==='idle'&&<StartOverlay title="POLLINATOR BLITZ" subtitle={"Flap your bee to pollinate flowers!\nBees pollinate 1/3 of all our food 🍎"} onStart={resetGame}/>}
        {phase==='over'&&<GameOverOverlay score={disp.score} message={`${disp.pollinated} flowers pollinated! 🌸 Bees pollinate 75% of flowering plants — protect them from pesticides!`} onRestart={resetGame}/>}
      </div>
      <button onTouchStart={flap} onClick={flap} className="sm:hidden px-8 py-3 rounded-xl text-white font-bold text-sm" style={{background:P.amber}}>FLAP 🐝</button>
    </GameShell>
  );
};
