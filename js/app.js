const intro = document.getElementById("intro");
window.addEventListener("load", () => {
  if (intro) {
    setTimeout(() => {
      intro.classList.add("hidden");
    }, 1700);
  }
});

const cursor = document.querySelector(".cursor");
if (cursor) {
  window.addEventListener("pointermove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  document.querySelectorAll("button,a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "36px";
      cursor.style.height = "36px";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "11px";
      cursor.style.height = "11px";
    });
  });
}

const enter = document.getElementById("enter");
if (enter) {
  enter.onclick = () =>
    document.querySelector(".cinema").scrollIntoView({ behavior: "smooth" });
}

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.animate(
          [
            { opacity: 0, transform: "translateY(35px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 1100,
            easing: "cubic-bezier(.16,1,.3,1)",
            fill: "forwards",
          }
        );
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.13 }
);
document.querySelectorAll("main section").forEach((x) => {
  x.style.opacity = 0;
  io.observe(x);
});

const star = document.getElementById("particles"),
  fx = document.getElementById("confetti");
let W,
  H,
  S = [],
  F = [];

if (star && fx) {
  const sc = star.getContext("2d");
  const fc = fx.getContext("2d");
  function resize() {
    W = innerWidth;
    H = innerHeight;
    star.width = fx.width = W;
    star.height = fx.height = H;
    S = Array.from({ length: 150 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1,
      a: Math.random(),
      v: Math.random() * 0.18,
    }));
  }
  resize();
  addEventListener("resize", resize);
  function drawStars() {
    sc.clearRect(0, 0, W, H);
    S.forEach((s) => {
      s.y += s.v;
      if (s.y > H) s.y = 0;
      s.a += 0.01;
      sc.globalAlpha = 0.15 + Math.sin(s.a) * 0.25;
      sc.fillStyle = "#ddd7c7";
      sc.beginPath();
      sc.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      sc.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();

  function burst(x = W / 2, y = H / 2) {
    for (let i = 0; i < 220; i++)
      F.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.65) * 15,
        g: 0.23,
        a: 1,
        r: Math.random() * 3 + 1,
        rot: Math.random() * 6,
      });
  }
  function drawFx() {
    fc.clearRect(0, 0, W, H);
    F.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.g;
      p.a -= 0.009;
      p.rot += 0.12;
      fc.save();
      fc.globalAlpha = Math.max(0, p.a);
      fc.translate(p.x, p.y);
      fc.rotate(p.rot);
      fc.fillStyle = Math.random() > 0.45 ? "#c8a66a" : "#e7e0d0";
      fc.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
      fc.restore();
    });
    F = F.filter((p) => p.a > 0);
    requestAnimationFrame(drawFx);
  }
  drawFx();

  const modal = document.getElementById("modal");
  const surprise = document.getElementById("surprise");
  const close = document.getElementById("close");
  if (surprise && modal) {
    surprise.onclick = () => {
      modal.classList.add("open");
      burst();
    };
  }
  if (close && modal) {
    close.onclick = () => modal.classList.remove("open");
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
}
