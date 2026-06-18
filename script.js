  // ── Typing animation ──────────────────────────────────
  const phrases = [
    "AI & Automation Engineer.",
    "Vector Search Systems.",
    "LLM Orchestration.",
    "FastAPI Backend Dev.",
    "Open to Internships."
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const el = document.getElementById('typed-text');

  function type() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 45 : 75);
  }
  type();

  // ── Scroll reveal ─────────────────────────────────────
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

