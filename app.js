(() => {
  'use strict';

  // Bilingual CV content and rendering.
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const copy = {
      en: {
        heroEyebrow:'Academic profile', heroRole:'Computer Science student at the University of Information Technology, pursuing the field of AI.', location:'Ho Chi Minh City, Vietnam',
        navFocus:'01 Focus',navEducation:'02 Education',navSkills:'03 Skills',navLabs:'04 Labs',navAchievements:'05 Achievements',navProjects:'06 Projects',navContact:'07 Contact',
        vnoiMetric:'Rating 1671',cfDesc:'Expert',ghDesc:'Projects',
        focusTitle:'Focus',focusIntro:'I am building a strong foundation in computer science through algorithms, competitions, and practical exploration of artificial intelligence.',
        educationTitle:'Education',skillsTitle:'Skills',labsTitle:'Labs',labsIntro:'Small, client-side simulations that connect readable Python with algorithmic intuition. They are educational visualizations, not a Python runtime.',
        achievementsTitle:'Achievements',projectsTitle:'Projects',contactTitle:'Let’s connect',contactIntro:'Open to conversations about algorithms, research, and learning together.',
        focus:[
          ['Algorithms','Problem solving, data structures, and mathematical reasoning.'],
          ['Competitive programming','Learning through rigorous contests and deliberate practice.'],
          ['Artificial intelligence','Interested in machine learning fundamentals and research.']
        ],
        education:[
          {title:'University of Information Technology (UIT)',place:'B.Sc. in Computer Science · Honors Program',date:'2026 - Present',items:['First-year Computer Science student.']},
          {title:'Chi Lang High School · Gia Lai',place:'High School Diploma',date:'2023 - 2026',items:['GPA: 9.43 / 10.0']}
        ],
        skills:[
          ['Languages','C++, Python; basic HTML and CSS.'],
          ['Core strengths','Algorithms, data structures, competitive programming.'],
          ['AI foundation','Basic understanding of artificial intelligence and machine learning concepts.']
        ],
        achievements:[
          ['Third Prize','National Excellent Student Competition in Informatics · 2025 - 2026'],['Honorable Mention','National Excellent Student Competition in Informatics · 2024 - 2025'],
          ['First Prize','Hue-ICT Challenge, Pro Challenge · 2026'],['Two-time Gold Medal','Olympic 30/4 · 2024, 2025'],
          ['Bronze Prize','High School Division, Namwon Mayor’s Cup International Drone Coding Competition · Korea, 2023']
        ],
        projects:[
          {title:'preGLOI 2023',place:'C++ · Competitive Programming',date:'12/2023',items:['Co-organized a mock competitive programming contest for high-school students in Gia Lai.', 'Prepared and verified test cases for algorithmic problems.']},
          {title:'Cùng Nhau Học Tập',place:'Python · Django',date:'2022',items:['Developed a learning platform where high-school peers could share materials and study resources.']}
        ]
      },
      vi: {
        heroEyebrow:'Hồ sơ học thuật', heroRole:'Sinh viên ngành Khoa học máy tính tại Trường Đại học Công nghệ Thông tin, theo đuổi lĩnh vực về AI.', location:'Thành phố Hồ Chí Minh, Việt Nam',
        navFocus:'01 Định hướng',navEducation:'02 Học vấn',navSkills:'03 Kỹ năng',navLabs:'04 Labs',navAchievements:'05 Thành tích',navProjects:'06 Dự án',navContact:'07 Liên hệ',
        vnoiMetric:'Ảnh chụp tĩnh: Rating 1671 · 669 bài đã giải',cfDesc:'Hồ sơ lập trình thi đấu',ghDesc:'Hồ sơ mã nguồn và dự án',
        focusTitle:'Định hướng',focusIntro:'Tôi xây dựng nền tảng Khoa học máy tính qua thuật toán, các kỳ thi và việc khám phá thực tế về trí tuệ nhân tạo.',
        educationTitle:'Học vấn',skillsTitle:'Kỹ năng',labsTitle:'Labs',labsIntro:'Các mô phỏng chạy trực tiếp trên trình duyệt, kết nối Python dễ đọc với trực giác thuật toán. Đây là minh hoạ học thuật, không phải môi trường chạy Python.',
        achievementsTitle:'Thành tích',projectsTitle:'Dự án',contactTitle:'Kết nối',contactIntro:'Sẵn sàng trao đổi về thuật toán, nghiên cứu và cùng học hỏi.',
        focus:[
          ['Thuật toán','Giải quyết vấn đề, cấu trúc dữ liệu và tư duy toán học.'],
          ['Lập trình thi đấu','Học hỏi qua các kỳ thi nghiêm túc và luyện tập có chủ đích.'],
          ['Trí tuệ nhân tạo','Quan tâm đến nền tảng học máy và nghiên cứu AI.']
        ],
        education:[
          {title:'Đại học Công nghệ Thông tin (UIT)',place:'Cử nhân Khoa học máy tính · Chương trình Tiên tiến',date:'2026 - Nay',items:['Sinh viên năm nhất ngành Khoa học máy tính.']},
          {title:'Trường THPT Chi Lăng · Gia Lai',place:'Tốt nghiệp THPT',date:'2023 - 2026',items:['GPA: 9.43 / 10.0']}
        ],
        skills:[
          ['Ngôn ngữ','C++, Python; HTML và CSS cơ bản.'],
          ['Thế mạnh','Thuật toán, cấu trúc dữ liệu, lập trình thi đấu.'],
          ['Nền tảng AI','Kiến thức cơ bản về các khái niệm trí tuệ nhân tạo và học máy.']
        ],
        achievements:[
          ['Giải Ba','Học sinh giỏi quốc gia môn Tin học · 2025 - 2026'],['Giải Khuyến khích','Học sinh giỏi quốc gia môn Tin học · 2024 - 2025'],
          ['Giải Nhất','Hue-ICT Challenge, Pro Challenge · 2026'],['Hai lần Huy chương Vàng','Olympic 30/4 · 2024, 2025'],
          ['Giải Đồng','Bảng THPT, Namwon Mayor’s Cup International Drone Coding Competition · Hàn Quốc, 2023']
        ],
        projects:[
          {title:'preGLOI 2023',place:'C++ · Lập trình thi đấu',date:'12/2023',items:['Đồng tổ chức kỳ thi lập trình mô phỏng cho học sinh THPT tại Gia Lai.', 'Chuẩn bị và kiểm thử test cho các bài toán thuật toán.']},
          {title:'Cùng Nhau Học Tập',place:'Python · Django',date:'2022',items:['Xây dựng nền tảng học tập để học sinh THPT chia sẻ tài liệu và nguồn học liệu.']}
        ]
      }
    };
    let lang = 'en';
    function cards(items, cls) { return items.map(([a,b]) => '<article class="'+cls+'"><h3>'+a+'</h3><p>'+b+'</p></article>').join(''); }
    function entries(items) { return items.map(x => '<article class="entry"><div class="entry-top"><div><h3>'+x.title+'</h3><p class="place">'+x.place+'</p></div><span class="date">'+x.date+'</span></div><ul>'+x.items.map(i => '<li>'+i+'</li>').join('')+'</ul></article>').join(''); }
    function renderLanguage() {
      const d=copy[lang]; document.documentElement.lang=lang;
      document.querySelectorAll('[data-copy]').forEach(el=>el.textContent=d[el.dataset.copy]);
      document.getElementById('displayName').textContent=lang==='en'?'Hieu Nguyen':'Nguyễn Minh Hiếu';
      document.getElementById('footerName').textContent=lang==='en'?'Hieu Nguyen':'Nguyễn Minh Hiếu';
      document.title=(lang==='en'?'Hieu Nguyen':'Nguyễn Minh Hiếu')+' - Academic CV';
      document.getElementById('focusGrid').innerHTML=cards(d.focus,'mini-card');
      document.getElementById('skillsGrid').innerHTML=cards(d.skills,'skill-card');
      document.getElementById('educationList').innerHTML=entries(d.education);
      document.getElementById('projectsList').innerHTML=entries(d.projects);
      document.getElementById('achievementsList').innerHTML=d.achievements.map(x=>'<article class="achievement"><strong>'+x[0]+'</strong><span>'+x[1]+'</span></article>').join('');
      document.getElementById('languageButton').textContent=lang==='en'?'EN':'VI';
    }
    document.getElementById('languageButton').addEventListener('click',()=>{lang=lang==='en'?'vi':'en';renderLanguage();});
    document.getElementById('year').textContent=new Date().getFullYear();

    // Theme preference and canvas redraw.
    let linear;
    let linearResizeObserver=null;
    const themeButton=document.getElementById('themeButton');
    function setTheme(theme,save=false) { document.documentElement.dataset.theme=theme; themeButton.textContent=theme==='dark'?'☀':'◐'; themeButton.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme'); if(save)localStorage.setItem('hieu-cv-theme',theme); drawLinear(); }
    const savedTheme=localStorage.getItem('hieu-cv-theme'); setTheme(savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
    themeButton.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',true));

    // Optional Lab feedback sounds (Web Audio API only).
    let audioContext=null, soundLastStep=0;
    let soundEnabled=localStorage.getItem('hieu-cv-sound')!=='off';
    const soundToggle=document.getElementById('soundToggle');
    function syncSoundButton(){
      soundToggle.setAttribute('aria-pressed',String(soundEnabled));
      soundToggle.setAttribute('aria-label',soundEnabled?'Sound on':'Sound off');
      soundToggle.title=soundEnabled?'Sound on':'Sound off';
      soundToggle.classList.toggle('is-muted',!soundEnabled);
      soundToggle.innerHTML='<svg class="svg-icon"><use href="#i-'+(soundEnabled?'volume':'volume-off')+'"></use></svg>';
    }
    function ensureAudio(){
      if(!soundEnabled||!window.AudioContext&&!window.webkitAudioContext)return null;
      if(!audioContext){const AudioCtor=window.AudioContext||window.webkitAudioContext;audioContext=new AudioCtor();}
      if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
      return audioContext;
    }
    function playTone(frequency,duration=.055,volume=.025,delay=0){
      const ctx=ensureAudio();if(!ctx)return;
      const start=ctx.currentTime+delay,osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.type='sine';osc.frequency.setValueAtTime(frequency,start);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
      osc.connect(gain);gain.connect(ctx.destination);osc.start(start);osc.stop(start+duration+.02);
    }
    function playSound(kind){
      if(!soundEnabled)return;
      if(kind==='step'||kind==='back'){const now=performance.now();if(now-soundLastStep<85)return;soundLastStep=now;playTone(kind==='back'?245:380,.04,.018);return;}
      if(kind==='play'){playTone(520,.06,.022);return;}
      if(kind==='pause'){playTone(270,.05,.018);return;}
      if(kind==='reset'){playTone(220,.05,.016);return;}
      if(kind==='generate'){playTone(330,.05,.018);return;}
      if(kind==='success'){playTone(523,.08,.022);playTone(659,.12,.019,.07);return;}
      if(kind==='failure'){playTone(220,.1,.02);playTone(175,.13,.016,.08);}
    }
    syncSoundButton();
    soundToggle.addEventListener('click',()=>{
      soundEnabled=!soundEnabled;localStorage.setItem('hieu-cv-sound',soundEnabled?'on':'off');syncSoundButton();
      if(soundEnabled)playTone(640,.06,.02);
    });

    // Shared Lab controls, code view, and animation lifecycle.
    let activeLab='bfs', animationId=0;
    const controls=document.getElementById('labControls'), content=document.getElementById('simulationContent'), code=document.getElementById('labCode'), status=document.getElementById('labStatus'), simTitle=document.getElementById('simulationTitle');
    function cancelAnimation(){ if(animationId) cancelAnimationFrame(animationId); animationId=0; }
    function setStatus(value){status.textContent=value;const headerLog=document.getElementById('labEventLog');if(headerLog)headerLog.textContent=value;const log=document.getElementById('eventLog');if(log)log.textContent='> '+value.toUpperCase();}
    function setLabStat(value){const stat=document.getElementById('labStat');if(stat)stat.textContent=value;}
    function showCode(lines,active=-1){code.innerHTML=lines.map((l,i)=>'<span class="code-line '+(i===active?'active':'')+'">'+String(i+1).padStart(2,' ')+'  '+escapeHtml(l)+'</span>').join('');}
    function highlight(line){code.querySelectorAll('.code-line').forEach((el,i)=>el.classList.toggle('active',i===line));}
    function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
    function switchLab(lab) {
      cancelAnimation();
      if(activeLab==='bfs')bfs.playing=false;
      if(activeLab==='linear'&&linear)linear.running=false;
      if(linearResizeObserver){linearResizeObserver.disconnect();linearResizeObserver=null;}
      activeLab=lab;
      document.querySelectorAll('.lab-tab').forEach(x=>x.setAttribute('aria-selected',x.dataset.lab===lab));
      lab==='bfs'?buildBfs():buildLinear();
    }
    document.querySelectorAll('.lab-tab').forEach(tab=>tab.addEventListener('click',()=>switchLab(tab.dataset.lab)));

    // BFS grid explorer.
    const bfsCode=[
      'from collections import deque','',
      'def bfs(grid, start, goal):','    queue = deque([start])','    parent = {start: None}','    while queue:','        u = queue.popleft()','        if u == goal: break','        for v in neighbors(u):','            if v not in parent and grid[v] != "#":','                parent[v] = u','                queue.append(v)','    return reconstruct_path(parent, goal)'
    ];
    let bfs={size:12,density:20,speed:3,cells:[],walls:new Set(),start:0,end:143,parent:{},events:[],eventIndex:0,playing:false,lastFrame:0,elapsed:0};
    function bfsControls(){return '<h3>BFS Grid Explorer</h3><p>Find a shortest route on a generated grid.</p>'+
      slider('Grid size','bfsSize',bfs.size,8,20,1)+slider('Obstacle density','bfsDensity',bfs.density,0,35,1,'%')+slider('Animation speed','bfsSpeed',bfs.speed,1,5,1)+
      '<div class="control-row transport"><button class="secondary" id="bfsBack" aria-label="Previous BFS step" title="Previous step"><svg class="svg-icon"><use href="#i-back"></use></svg></button><button class="primary" id="bfsPlay" aria-label="Run BFS" title="Run"><svg class="svg-icon"><use href="#i-play"></use></svg></button><button class="secondary" id="bfsNext" aria-label="Next BFS step" title="Next step"><svg class="svg-icon"><use href="#i-forward"></use></svg></button></div><div class="control-row"><button class="secondary" id="bfsReset">Reset steps</button><button class="secondary" id="bfsGenerate">New grid</button></div>';}
    function slider(label,id,value,min,max,step,suffix=''){return '<div class="control"><label for="'+id+'"><span>'+label+'</span><output id="'+id+'Out">'+value+suffix+'</output></label><input id="'+id+'" type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'"></div>';}
    function buildBfs(){
      cancelAnimation(); controls.innerHTML=bfsControls(); content.innerHTML='<div class="bfs-grid" id="bfsGrid" role="img" aria-label="BFS pathfinding grid"></div><div class="legend"><span><i class="dot start"></i>start</span><span><i class="dot frontier"></i>frontier</span><span><i class="dot"></i>visited</span><span><i class="dot path"></i>path</span></div><div class="event-log" id="eventLog" aria-live="polite">&gt; READY · WAITING FOR BFS INPUT</div>';
      simTitle.textContent='BFS Grid Explorer'; showCode(bfsCode); setStatus('Ready'); createBfsGrid();
      [['bfsSize','size'],['bfsDensity','density'],['bfsSpeed','speed']].forEach(([id,key])=>document.getElementById(id).addEventListener('input',e=>{bfs[key]=+e.target.value; document.getElementById(id+'Out').textContent=e.target.value+(id==='bfsDensity'?'%':''); if(id!=='bfsSpeed') createBfsGrid();}));
      document.getElementById('bfsBack').onclick=()=>stepBfs(-1); document.getElementById('bfsPlay').onclick=toggleBfs; document.getElementById('bfsNext').onclick=()=>stepBfs(1); document.getElementById('bfsReset').onclick=()=>{playSound('reset');prepareBfs();}; document.getElementById('bfsGenerate').onclick=()=>{playSound('generate');createBfsGrid();};
    }
    function createBfsGrid(){
      cancelAnimation(); const n=bfs.size,total=n*n; bfs.start=0;bfs.end=total-1;bfs.walls=new Set();bfs.parent={}; bfs.cells=[];
      for(let i=1;i<total-1;i++) if(Math.random()*100<bfs.density) bfs.walls.add(i);
      const grid=document.getElementById('bfsGrid');grid.style.gridTemplateColumns='repeat('+n+',1fr)';grid.innerHTML='';
      for(let i=0;i<total;i++){const el=document.createElement('div');el.className='bfs-cell'+(i===bfs.start?' start':i===bfs.end?' end':bfs.walls.has(i)?' wall':'');el.setAttribute('aria-hidden','true');el.title='Cell '+i;grid.append(el);bfs.cells.push(el);}
      prepareBfs();
    }
    function bfsNeighbors(i){const n=bfs.size,r=Math.floor(i/n),c=i%n,out=[];if(r)out.push(i-n);if(r<n-1)out.push(i+n);if(c)out.push(i-1);if(c<n-1)out.push(i+1);return out;}
    function prepareBfs(){
      cancelAnimation(); bfs.playing=false; bfs.eventIndex=0; let queue=[bfs.start],head=0,parent={[bfs.start]:null},events=[{type:'enqueue',node:bfs.start}],found=false;
      while(head<queue.length){const u=queue[head++];events.push({type:'visit',node:u});if(u===bfs.end){found=true;break;}for(const v of bfsNeighbors(u))if(!(v in parent)&&!bfs.walls.has(v)){parent[v]=u;queue.push(v);events.push({type:'enqueue',node:v});}}
      if(found){let p=bfs.end;while(p!==null){events.push({type:'path',node:p});p=parent[p];}} bfs.parent=parent;bfs.events=events;bfs.found=found;resetBfsVisual();showCode(bfsCode);setLabStat('STEPS 0 / '+events.length);setStatus('Ready · 0 / '+events.length);updateBfsButtons();
    }
    function resetBfsVisual(){
      bfs.cells.forEach((cell,i)=>cell.className='bfs-cell'+(i===bfs.start?' start':i===bfs.end?' end':bfs.walls.has(i)?' wall':''));highlight(-1);
    }
    function stepBfs(direction,keepPlaying=false){
      if(!keepPlaying){cancelAnimation();bfs.playing=false;}
      let changed=false;
      if(direction>0&&bfs.eventIndex<bfs.events.length){applyBfsEvent(bfs.events[bfs.eventIndex++]);changed=true;}
      if(direction<0&&bfs.eventIndex>0){bfs.eventIndex--;resetBfsVisual();for(let i=0;i<bfs.eventIndex;i++)applyBfsEvent(bfs.events[i]);changed=true;}
      if(changed)playSound(direction<0?'back':'step');
      const done=bfs.eventIndex===bfs.events.length;setLabStat('STEPS '+bfs.eventIndex+' / '+bfs.events.length);setStatus(done?(bfs.found?'Shortest path found':'No path found'):'Step '+bfs.eventIndex+' / '+bfs.events.length);if(done&&changed)playSound(bfs.found?'success':'failure');updateBfsButtons();
    }
    function toggleBfs(){
      if(bfs.playing){cancelAnimation();bfs.playing=false;playSound('pause');setStatus('Paused · '+bfs.eventIndex+' / '+bfs.events.length);updateBfsButtons();return;}
      if(bfs.eventIndex===bfs.events.length)prepareBfs();bfs.playing=true;bfs.lastFrame=performance.now();bfs.elapsed=0;updateBfsButtons();
      playSound('play');
      if(reduceMotion){while(bfs.eventIndex<bfs.events.length)stepBfs(1,true);bfs.playing=false;updateBfsButtons();return;}
      function frame(now){if(!bfs.playing)return;bfs.elapsed+=now-bfs.lastFrame;bfs.lastFrame=now;const gap=Math.max(55,270-bfs.speed*42);while(bfs.elapsed>=gap&&bfs.eventIndex<bfs.events.length){bfs.elapsed-=gap;stepBfs(1,true);}if(bfs.eventIndex<bfs.events.length&&bfs.playing)animationId=requestAnimationFrame(frame);else{bfs.playing=false;updateBfsButtons();}}animationId=requestAnimationFrame(frame);
    }
    function updateBfsButtons(){
      const back=document.getElementById('bfsBack'),next=document.getElementById('bfsNext'),play=document.getElementById('bfsPlay');if(!back||!next||!play)return;
      back.disabled=bfs.eventIndex===0;next.disabled=bfs.eventIndex===bfs.events.length;play.innerHTML='<svg class="svg-icon"><use href="#i-'+(bfs.playing?'pause':'play')+'"></use></svg>';play.setAttribute('aria-label',bfs.playing?'Pause BFS':'Run BFS');play.title=bfs.playing?'Pause':'Run';
    }
    function applyBfsEvent(e){
      const cell=bfs.cells[e.node]; if(!cell)return;
      if(e.type==='enqueue'){if(e.node!==bfs.start&&e.node!==bfs.end)cell.classList.add('frontier');highlight(10);setStatus('Enqueueing frontier');}
      else if(e.type==='visit'&&e.node!==bfs.start){cell.classList.remove('frontier');cell.classList.add('visited');highlight(6);setStatus('Exploring grid');}
      else if(e.type==='path'){if(e.node!==bfs.start&&e.node!==bfs.end){cell.classList.remove('frontier','visited');cell.classList.add('path');}highlight(12);setStatus('Reconstructing path');}
    }
    function animateEvents(events,step,apply,done){
      let index=0,last=performance.now(),elapsed=0;
      if(reduceMotion){events.forEach(apply);done();return;}
      function frame(now){elapsed+=now-last;last=now;while(elapsed>=step&&index<events.length){apply(events[index++]);elapsed-=step;}if(index<events.length)animationId=requestAnimationFrame(frame);else{animationId=0;done();}} animationId=requestAnimationFrame(frame);
    }

    // Linear regression gradient-descent simulation.
    const linearCode=[
      'import numpy as np','',
      'w, b = 0.0, 0.0','for step in range(iterations):','    prediction = w * x + b','    error = prediction - y','    dw = (2 / len(x)) * np.sum(error * x)','    db = (2 / len(x)) * np.sum(error)','    w -= learning_rate * dw','    b -= learning_rate * db','    loss = np.mean((w * x + b - y) ** 2)'
    ];
    linear={lr:.025,noise:12,iterations:160,step:0,w:0,b:0,points:[],running:false,canvas:null,ctx:null,last:0,acc:0,seed:0};
    function linearControls(){return '<h3>Linear Regression</h3><p>Fit a line with gradient descent.</p>'+
      slider('Learning rate','linearRate',linear.lr,.001,.08,.001)+slider('Noise','linearNoise',linear.noise,0,24,1)+slider('Iterations','linearIterations',linear.iterations,20,300,10)+
      '<div class="control-row"><button class="primary" id="linearRun">Run</button><button class="secondary" id="linearReset">Reset</button></div><div class="control-row"><button class="secondary" id="linearGenerate">Generate data</button></div>';}
    function buildLinear(){
      cancelAnimation(); linear.running=false; controls.innerHTML=linearControls(); simTitle.textContent='Linear Regression · Gradient Descent';
      content.innerHTML='<div class="chart-wrap"><canvas id="linearCanvas" aria-label="Linear regression scatter plot"></canvas></div><div class="chart-metrics"><div class="metric">Iteration<strong id="metricStep">0 / '+linear.iterations+'</strong></div><div class="metric">Loss<strong id="metricLoss">-</strong></div><div class="metric">Fit<strong id="metricFit">w 0.00 · b 0.00</strong></div></div><p class="lab-note">Blue: fitted line · Lime dashed: target trend · Gray: observations</p><div class="event-log" id="eventLog" aria-live="polite">&gt; READY · WAITING FOR PARAMETERS</div>';
      showCode(linearCode); setStatus('Ready');linear.canvas=document.getElementById('linearCanvas');linear.ctx=linear.canvas.getContext('2d'); generateLinear(); 
      [['linearRate','lr'],['linearNoise','noise'],['linearIterations','iterations']].forEach(([id,key])=>document.getElementById(id).addEventListener('input',e=>{linear[key]=+e.target.value;document.getElementById(id+'Out').textContent=e.target.value; if(key!=='lr')generateLinear();}));
      document.getElementById('linearRun').onclick=runLinear;document.getElementById('linearReset').onclick=()=>{playSound('reset');cancelAnimation();linear.running=false;linear.w=0;linear.b=0;linear.step=0;updateLinearMetrics();drawLinear();highlight(-1);setStatus('Reset');};document.getElementById('linearGenerate').onclick=()=>{playSound('generate');generateLinear();};
      linearResizeObserver=new ResizeObserver(drawLinear);
      linearResizeObserver.observe(linear.canvas.parentElement);
    }
    function generateLinear(){
      cancelAnimation();linear.running=false;linear.step=0;linear.w=0;linear.b=0;linear.points=[];linear.seed=(Math.random()*4294967295)>>>0;
      const random=mulberry32(linear.seed);
      for(let i=0;i<34;i++){const x=-5+i*(10/33);const noise=(random()+random()+random()-1.5)*linear.noise*.42;linear.points.push({x,y:1.45*x+1.1+noise});}
      updateLinearMetrics();drawLinear();highlight(-1);setStatus('New data generated');
    }
    function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
    function loss(){return linear.points.reduce((s,p)=>s+(linear.w*p.x+linear.b-p.y)**2,0)/linear.points.length;}
    function gradientStep(){let dw=0,db=0;linear.points.forEach(p=>{const e=linear.w*p.x+linear.b-p.y;dw+=e*p.x;db+=e;});linear.w-=linear.lr*(2/linear.points.length)*dw;linear.b-=linear.lr*(2/linear.points.length)*db;linear.step++;}
    function runLinear(){
      cancelAnimation();linear.running=true;linear.last=performance.now();linear.acc=0;playSound('play');setStatus('Optimizing parameters');highlight(6);
      if(reduceMotion){while(linear.step<linear.iterations)gradientStep();linear.running=false;updateLinearMetrics();drawLinear();highlight(10);playSound('success');setStatus('Completed');return;}
      function frame(now){const dt=Math.min(48,now-linear.last);linear.last=now;linear.acc+=dt;while(linear.acc>=18&&linear.step<linear.iterations){gradientStep();linear.acc-=18;}updateLinearMetrics();drawLinear();highlight(linear.step%3===0?4:linear.step%3===1?6:8);if(linear.step<linear.iterations&&linear.running)animationId=requestAnimationFrame(frame);else{animationId=0;linear.running=false;highlight(10);playSound('success');setStatus('Completed');}}animationId=requestAnimationFrame(frame);
    }
    function updateLinearMetrics(){const s=document.getElementById('metricStep'),l=document.getElementById('metricLoss'),f=document.getElementById('metricFit');if(!s)return;s.textContent=linear.step+' / '+linear.iterations;l.textContent=loss().toFixed(3);f.textContent='w '+linear.w.toFixed(2)+' · b '+linear.b.toFixed(2);setLabStat('ITER '+linear.step+' / '+linear.iterations);}
    function drawLinear(){
      if(!linear||!linear.canvas||!linear.ctx||activeLab!=='linear')return;

      const canvas=linear.canvas;
      const rect=canvas.getBoundingClientRect();
      const dpr=window.devicePixelRatio||1;
      const width=Math.max(1,rect.width);
      const height=Math.max(1,rect.height);
      const pixelWidth=Math.max(1,Math.round(width*dpr));
      const pixelHeight=Math.max(1,Math.round(height*dpr));
      if(canvas.width!==pixelWidth||canvas.height!==pixelHeight){
        canvas.width=pixelWidth;
        canvas.height=pixelHeight;
      }

      const ctx=linear.ctx;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const style=getComputedStyle(document.documentElement);
      const grid=style.getPropertyValue('--grid').trim();
      const muted=style.getPropertyValue('--muted').trim();
      const blue=style.getPropertyValue('--blue').trim();
      const lime=style.getPropertyValue('--lime').trim();
      const ink=style.getPropertyValue('--ink').trim();
      const surface=style.getPropertyValue('--surface').trim();
      ctx.fillStyle=surface;
      ctx.fillRect(0,0,width,height);

      const xMin=-5.5,xMax=5.5,pad=30;
      const modelStart=linear.w*-5+linear.b;
      const modelEnd=linear.w*5+linear.b;
      const targetStart=1.45*-5+1.1;
      const targetEnd=1.45*5+1.1;
      const yValues=linear.points.map(point=>point.y).concat([modelStart,modelEnd,targetStart,targetEnd]);
      const rawMin=Math.min(...yValues);
      const rawMax=Math.max(...yValues);
      const yPadding=Math.max(1,(rawMax-rawMin)*.08);
      const yMin=rawMin-yPadding;
      const yMax=rawMax+yPadding;
      const px=value=>pad+(value-xMin)/(xMax-xMin)*(width-pad*2);
      const py=value=>height-pad-(value-yMin)/(yMax-yMin)*(height-pad*2);

      ctx.strokeStyle=grid;
      ctx.lineWidth=1;
      for(let tick=-5;tick<=5;tick++){
        ctx.beginPath();
        ctx.moveTo(px(tick),pad);
        ctx.lineTo(px(tick),height-pad);
        ctx.stroke();
      }
      for(let tick=0;tick<=6;tick++){
        const y=yMin+(yMax-yMin)*tick/6;
        ctx.beginPath();
        ctx.moveTo(pad,py(y));
        ctx.lineTo(width-pad,py(y));
        ctx.stroke();
      }

      ctx.strokeStyle=lime;
      ctx.lineWidth=2;
      ctx.setLineDash([5,5]);
      ctx.beginPath();
      ctx.moveTo(px(-5),py(targetStart));
      ctx.lineTo(px(5),py(targetEnd));
      ctx.stroke();
      ctx.setLineDash([]);

      linear.points.forEach(point=>{
        ctx.fillStyle=muted;
        ctx.globalAlpha=.68;
        ctx.beginPath();
        ctx.arc(px(point.x),py(point.y),3.2,0,Math.PI*2);
        ctx.fill();
      });
      ctx.globalAlpha=1;
      ctx.strokeStyle=blue;
      ctx.lineWidth=3;
      ctx.beginPath();
      ctx.moveTo(px(-5),py(modelStart));
      ctx.lineTo(px(5),py(modelEnd));
      ctx.stroke();
      ctx.fillStyle=ink;
      ctx.font='11px Inter, sans-serif';
      ctx.fillText('x',width-22,height-14);
      ctx.fillText('y',15,18);
    }
    renderLanguage(); switchLab('bfs');
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    const navLinks=[...document.querySelectorAll('nav a')];
    const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-28% 0px -62% 0px',threshold:0});
    document.querySelectorAll('main > .section').forEach(section=>navObserver.observe(section));
})();
