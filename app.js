/* ============================================================
   CivicPulse AI — Premium JS (Lenis + GSAP)
   ============================================================ */

'use strict';

const GRAPH = {
  techStack: [
    {layer:"Vision + Classification",google:"Gemini 2.0 Flash",replaces:"Claude Vision"},
    {layer:"Voice / STT",google:"Gemini Live API",replaces:"OpenAI Whisper"},
    {layer:"Agent Framework",google:"Google ADK",replaces:"Custom pipeline"},
    {layer:"LLM — Civic Mayor",google:"Gemini 2.0 Pro",replaces:"Manual RAG"},
    {layer:"Backend Hosting",google:"Cloud Run",replaces:"Railway.app"},
    {layer:"Database",google:"Cloud SQL PG16 + PostGIS",replaces:"Self-hosted PG"},
    {layer:"ML / Predictions",google:"BigQuery ML (BQML)",replaces:"Vertex AI AutoML"},
    {layer:"Analytics",google:"BigQuery",replaces:"PostgreSQL OLAP"},
    {layer:"Async Tasks",google:"Cloud Tasks + Scheduler",replaces:"Cron jobs"}
  ],
  agents: [
    {
      id: 1, name: "Reporter Agent", tech: "Gemini 2.0 Flash", status: "LIVE IN DEMO", color: "#3b82f6",
      capabilities: [
        "Multimodal: Photo + Voice via Gemini Live",
        "Extracts category, severity, exact location",
        "Outputs JSON complaint ticket in <0.8s"
      ]
    },
    {
      id: 2, name: "Verification Agent", tech: "Gemini Vision + pHash", status: "LIVE IN DEMO", color: "#8b5cf6",
      capabilities: [
        "Detects duplicates (pHash similarity >= 0.7)",
        "PostGIS 50m radius GPS clustering",
        "Identifies coordinated false reporting"
      ]
    },
    {
      id: 3, name: "Routing Agent", tech: "Gemini 2.0 + PostGIS", status: "LIVE IN DEMO", color: "#10b981",
      capabilities: [
        "Assigns officer by lowest current_load",
        "Drafts contextual assignment using BBMP guidelines",
        "Logs routing rationale for explainability"
      ]
    },
    {
      id: 4, name: "Escalation Agent", tech: "Cloud Tasks + FCM", status: "ASYNC", color: "#f59e0b",
      capabilities: [
        "Monitors 24h SLA timers",
        "Auto-escalates to senior officer if ignored",
        "Flags SLA breach patterns per officer"
      ]
    },
    {
      id: 5, name: "Prediction Agent", tech: "BigQuery ML", status: "ASYNC", color: "#ef4444",
      capabilities: [
        "Trains logistic regression on 3-yr data",
        "Refreshes ward risk scores weekly",
        "Feeds Civic Digital Twin heatmap"
      ]
    }
  ]
};

// ============================================================
// LENIS & GSAP SETUP
// ============================================================
let lenis;
function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
}

function initGSAP() {
  gsap.utils.toArray('.gsap-fade-up').forEach(elem => {
    let delay = 0;
    if(elem.classList.contains('delay-1')) delay = 0.2;
    if(elem.classList.contains('delay-2')) delay = 0.4;
    
    gsap.fromTo(elem, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: delay, ease: "power3.out",
        scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none none" }
      }
    );
  });

  gsap.utils.toArray('.gsap-stagger-cards').forEach(container => {
    gsap.fromTo(container.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 80%" }
      }
    );
  });

  gsap.to('.hero-bg-wrapper', {
    yPercent: 30, ease: "none",
    scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
  });
}

// ============================================================
// PARTICLES HERO
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  const particles = Array.from({length: 40}, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
    r: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.3 + 0.1
  }));
  
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#ffffff';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.globalAlpha = p.opacity;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
}

function initCardHover() {
  document.querySelectorAll('.premium-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ============================================================
// AGENT PIPELINE LOGIC
// ============================================================
let selectedAgent = null;
window.selectAgent = function(id) {
  selectedAgent = id;
  document.querySelectorAll('.agent-node').forEach(node => node.classList.remove('active'));
  const node = document.querySelector(`.agent-node[data-agent="${id}"]`);
  if (node) node.classList.add('active');
  
  const agent = GRAPH.agents.find(a => a.id === id);
  if (!agent) return;
  
  const name = document.getElementById('detail-name');
  const tech = document.getElementById('detail-tech');
  const caps = document.getElementById('detail-capabilities');
  const badge = document.getElementById('detail-status-badge');
  const trace = document.getElementById('detail-trace');
  
  if(badge) {
    badge.textContent = agent.status;
    badge.style.color = agent.color;
    badge.style.background = agent.color + '1a';
    badge.style.borderColor = agent.color + '4d';
  }
  if(name) { name.textContent = agent.name; name.style.color = agent.color; }
  if(tech) { tech.textContent = agent.tech; }
  if(caps) {
    caps.innerHTML = agent.capabilities.map(c => `<li><span style="color:${agent.color}">✓</span> ${c}</li>`).join('');
  }
  if(trace) {
    trace.innerHTML = `<span style="color:${agent.color};">> Running ${agent.name.replace(' ','')}...</span><br/>> OK. Response < 1s.<br/>> Output logged to BigQuery.`;
  }
};

function autoCycleAgents() {
  let i = 1;
  setInterval(() => {
    if(!document.querySelector('.agent-node:hover')) {
      selectAgent(i);
      i = (i % 5) + 1;
    }
  }, 4000);
}

// ============================================================
// FEATURES SIMULATION
// ============================================================
function initDigitalTwinMap() {
  const canvas = document.getElementById('twin-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const wards = [
    {x:0.2,y:0.3,r:20,c:'#10b981'}, {x:0.5,y:0.2,r:25,c:'#f59e0b'},
    {x:0.8,y:0.4,r:15,c:'#ef4444'}, {x:0.3,y:0.7,r:22,c:'#10b981'},
    {x:0.7,y:0.8,r:30,c:'#f59e0b'}
  ];
  
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize(); window.addEventListener('resize', resize);
  
  let time = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += 0.05;
    
    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    for(let i=0; i<canvas.width; i+=40) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); ctx.stroke(); }
    for(let i=0; i<canvas.height; i+=40) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(canvas.width,i); ctx.stroke(); }
    
    wards.forEach(w => {
      const x = w.x * canvas.width, y = w.y * canvas.height;
      const pulse = Math.sin(time + x) * 5;
      
      const grd = ctx.createRadialGradient(x,y,0,x,y,w.r*2.5 + pulse);
      grd.addColorStop(0, w.c + '66'); grd.addColorStop(1, w.c + '00');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(x,y,w.r*2.5+pulse,0,Math.PI*2); ctx.fill();
      
      ctx.fillStyle = w.c + '40';
      ctx.strokeStyle = w.c;
      ctx.beginPath(); ctx.arc(x,y,w.r,0,Math.PI*2); ctx.fill(); ctx.stroke();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

window.askAIMayor = function() {
  const btn = document.getElementById('ask-ai-mayor-btn');
  const text = document.getElementById('ai-mayor-text');
  btn.textContent = 'Thinking...';
  text.textContent = '';
  const response = "Rainfall +32%, Budget −18%. BBMP Sec 7.3.2 recommends ₹1.8 Cr emergency allocation. Predicted 40% reduction in potholes.";
  let i = 0;
  setTimeout(() => {
    const int = setInterval(() => {
      text.textContent += response[i++];
      if(i >= response.length) { clearInterval(int); btn.textContent = 'Ask Again'; }
    }, 20);
  }, 500);
};

window.simulateVoice = function() {
  openModal('voice-modal');
  setTimeout(() => {
    document.getElementById('voice-pipeline-ui').style.display = 'block';
    showToast('success', 'Voice processed successfully in Kannada.');
  }, 1500);
};

window.simulateDisaster = function() {
  document.getElementById('disaster-stats').style.display = 'block';
  showToast('error', 'DISASTER MODE: 25 flood reports detected. NDRF alerted.');
};

window.simulateCorruption = function() {
  document.getElementById('corruption-result').style.display = 'block';
  showToast('error', 'INTEGRITY RISK: Officer #147 flagged for fake closure.');
};

window.showARDemo = function() {
  openModal('ar-modal');
  const canvas = document.getElementById('ar-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  ctx.fillStyle = '#0a0a0a'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = '#3b82f640';
  for(let i=0; i<canvas.height; i+=20) { ctx.beginPath(); ctx.moveTo(0,canvas.height/2+i*2); ctx.lineTo(canvas.width,canvas.height/2+i*2); ctx.stroke(); }
};

// ============================================================
// IMPACT COUNTERS
// ============================================================
function initCounters() {
  const targets = [{id:'counter-1',to:8.4},{id:'counter-2',to:2.1},{id:'counter-3',to:1.8}];
  targets.forEach(t => {
    gsap.to(document.getElementById(t.id), {
      innerHTML: t.to,
      duration: 2,
      snap: { innerHTML: 0.1 },
      scrollTrigger: { trigger: "#impact", start: "top 70%" },
      onUpdate: function() { document.getElementById(t.id).innerHTML = '₹' + Number(this.targets()[0].innerHTML).toFixed(1) + ' Cr'; }
    });
  });
}

function populateTechStack() {
  const tbody = document.getElementById('tech-tbody');
  if (!tbody) return;
  tbody.innerHTML = GRAPH.techStack.map(item => `
    <tr>
      <td>${item.layer}</td>
      <td><strong>${item.google}</strong></td>
      <td><span class="text-muted line-through">${item.replaces}</span></td>
    </tr>
  `).join('');
}

// ============================================================
// MODALS & TOASTS
// ============================================================
window.openModal = function(id) {
  const m = document.getElementById(id);
  if(m) { m.classList.add('open'); lenis.stop(); }
};
window.closeModal = function(id) {
  const m = document.getElementById(id);
  if(m) { m.classList.remove('open'); lenis.start(); }
};
window.openAIThinkingModal = () => openModal('ai-thinking-modal');

window.showToast = function(type, msg) {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type} show`;
  t.innerHTML = `<span style="font-size: 1.2rem;">${type === 'success' ? '✅' : '🚨'}</span> ${msg}`;
  container.appendChild(t);
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3000);
};

// ============================================================
// BOOTSTRAP
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initGSAP();
  initParticles();
  initCardHover();
  initDigitalTwinMap();
  initCounters();
  populateTechStack();
  
  selectAgent(1);
  autoCycleAgents();
  
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
  });
  
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
});
