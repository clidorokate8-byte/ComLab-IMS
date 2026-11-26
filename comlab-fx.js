/* =========================================================
   comlab-fx.js — animated background (shared ng lahat ng page)
   Ilagay sa pinakataas ng <body>:  <script src="comlab-fx.js"></script>
   ========================================================= */
document.write('<canvas id="bg3d" aria-hidden="true"></canvas>\n<div class="bg-aura" aria-hidden="true">\n  <span class="aura aura-1"></span>\n  <span class="aura aura-2"></span>\n  <span class="aura aura-3"></span>\n</div>\n<div class="scene3d" aria-hidden="true">\n  <!-- CPU chip -->\n  <div class="part cpu" style="top:12%; left:6%; --w:120px; --h:120px; --d:120px; --op:.40; --sp:36s; --bb:9s; --rx:22deg; --edge:rgba(120,150,255,.55);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n  <!-- RAM stick -->\n  <div class="part ram" style="top:62%; left:13%; --w:150px; --h:56px; --d:16px; --op:.38; --sp:30s; --bb:11s; --rx:16deg; --edge:rgba(0,211,167,.5);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n  <!-- GPU card -->\n  <div class="part gpu hide-sm" style="top:16%; left:80%; --w:150px; --h:72px; --d:22px; --op:.34; --sp:40s; --bb:12s; --rx:20deg; --edge:rgba(123,59,255,.5);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n  <!-- HDD -->\n  <div class="part hdd hide-sm" style="top:70%; left:84%; --w:120px; --h:34px; --d:88px; --op:.34; --sp:34s; --bb:10s; --rx:26deg; --edge:rgba(150,175,255,.5);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n  <!-- Monitor -->\n  <div class="part mon hide-sm" style="top:44%; left:49%; --w:96px; --h:64px; --d:12px; --op:.24; --sp:44s; --bb:8s; --rx:14deg; --edge:rgba(0,211,167,.45);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n  <!-- small CPU accent -->\n  <div class="part cpu hide-sm" style="top:82%; left:45%; --w:64px; --h:64px; --d:64px; --op:.26; --sp:28s; --bb:7s; --rx:24deg; --edge:rgba(255,122,89,.45);">\n    <div class="face fx-front"></div><div class="face fx-back"></div><div class="face fx-left"></div><div class="face fx-right"></div><div class="face fx-top"></div><div class="face fx-bottom"></div>\n  </div>\n</div>\n<div class="bg-vignette" aria-hidden="true"></div>\n<div class="bg-noise" aria-hidden="true"></div>');

/* =========================================================
   BACKGROUND — subtle moving 3D perspective grid (canvas)
   Dependency-free. Kept low-contrast so data stays readable.
   ========================================================= */
document.addEventListener("DOMContentLoaded", function initDashboardGrid() {
  const canvas = document.getElementById("bg3d");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, DPR = 1, cx = 0, horizon = 0;
  let mx = 0, tmx = 0;      // horizontal mouse parallax (smoothed)
  let scroll = 0;           // flows the grid gently toward the viewer

  const ROWS = 18;
  const COLS = 24;
  const SPEED = 0.0032;     // slow + elegant
  const DIM = 0.5;          // global opacity multiplier (subtle)

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = W / 2; horizon = H / 2;
  }

  function drawPlane(dir) {
    const half = (dir === 1 ? (H - horizon) : horizon);
    const baseY = horizon;
    const colSpread = W * 1.15;

    for (let i = 0; i < ROWS; i++) {
      let p = (i + (scroll % 1)) / ROWS;
      if (p <= 0 || p >= 1) continue;
      const eased = p * p;
      const y = baseY + dir * half * eased;
      const alpha = (0.05 + 0.30 * eased) * (dir === 1 ? 1 : 0.6) * DIM;
      const rowHalf = (W * 0.12) + (colSpread * eased);
      ctx.strokeStyle = "rgba(90,140,255," + alpha.toFixed(3) + ")";
      ctx.lineWidth = 0.5 + 1.1 * eased;
      ctx.beginPath();
      ctx.moveTo(cx - rowHalf, y);
      ctx.lineTo(cx + rowHalf, y);
      ctx.stroke();
    }

    const vpX = cx + mx * 0.6;
    for (let j = -COLS; j <= COLS; j++) {
      const t = j / COLS;
      const xNear = cx + t * colSpread + mx;
      const yEdge = baseY + dir * half;
      const dist = Math.abs(t);
      const alpha = 0.16 * (1 - dist * 0.55) * (dir === 1 ? 1 : 0.6) * DIM;
      if (alpha <= 0.015) continue;
      ctx.strokeStyle = "rgba(70,180,210," + alpha.toFixed(3) + ")";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(vpX, baseY);
      ctx.lineTo(xNear, yEdge);
      ctx.stroke();
    }
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    mx += (tmx - mx) * 0.045;
    scroll += SPEED;
    drawPlane(1);
    drawPlane(-1);

    // faint horizon glow
    const grad = ctx.createLinearGradient(0, horizon - 2, 0, horizon + 2);
    grad.addColorStop(0, "rgba(0,211,167,0)");
    grad.addColorStop(0.5, "rgba(0,211,167,0.22)");
    grad.addColorStop(1, "rgba(0,211,167,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, horizon - 2, W, 4);

    if (!prefersReduced) requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    tmx = (e.clientX / window.innerWidth - 0.5) * 90;
  });

  resize();
  if (prefersReduced) frame();
  else requestAnimationFrame(frame);
});
