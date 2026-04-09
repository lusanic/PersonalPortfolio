// ═══════════════════════════════════════════════════════════
// game-detail.js
// Shared rendering logic for individual game detail pages.
// Each game HTML sets GAME_ID before loading this file.
// ═══════════════════════════════════════════════════════════

// ── CURSOR ────────────────────────────────────────────────
const cur=document.getElementById('cur'), curR=document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function tick(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(tick)})();
document.addEventListener('mouseover',e=>{
  const h=e.target.closest('a,button,.gal-item');
  curR.style.transform=h?'translate(-50%,-50%) scale(1.5)':'translate(-50%,-50%) scale(1)';
  curR.style.borderColor=h?'rgba(170,34,23,.4)':'rgba(170,34,23,.25)';
});

// ── HELPERS ───────────────────────────────────────────────
const pills = arr => (Array.isArray(arr) ? arr : [arr]).map(t=>`<span class="pill">${t}</span>`).join('');
const esc   = s  => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function ytEmbed(raw) {
  const id = raw.includes('watch?v=') ? raw.split('watch?v=')[1].split('&')[0]
           : raw.includes('youtu.be/') ? raw.split('youtu.be/')[1].split('?')[0]
           : raw.includes('embed/')    ? raw.split('embed/')[1].split('?')[0]
           : raw;
  return '<iframe src="https://www.youtube.com/embed/' + id + '" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';
}

// ── MARKDOWN RENDERER ─────────────────────────────────────
// Supports: paragraphs, ![caption](src) images, - lists, **bold**, *italic*
function md(text) {
  if (!text) return '';
  const lines = text.split('\n');
  let html = '';
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trimEnd();
    // blank line
    if (line.trim() === '') { i++; continue; }
    // pdf: %[label | w:800px | h:600px](src)
    const pdfM = line.trim().match(/^%\[(.*?)\]\((.+?)\)$/);
    if (pdfM) {
      const parts = (pdfM[1]||'').split('|').map(s => s.trim());
      const label = parts[0] || '';
      const w = (parts.find(p => p.startsWith('w:')) || '').replace('w:','').trim() || '100%';
      const h = (parts.find(p => p.startsWith('h:')) || '').replace('h:','').trim() || '80vh';
      html += `<div class="sec-sub-pdf-wrap" style="width:${w};margin-top:12px">${label ? `<div class="sit-caption">${label}</div>` : ''}<iframe src="${pdfM[2]}" style="width:100%;height:${h};border:none;display:block;margin-top:6px"></iframe></div>`;
      i++; continue;
    }
    // audio: @[label](src)
    const audioM = line.trim().match(/^@\[(.*?)\]\((.+?)\)$/);
    if (audioM) {
      html += `<div class="sec-sub-audio-wrap">${audioM[1] ? `<div class="sit-caption">${audioM[1]}</div>` : ''}<audio src="${audioM[2]}" controls style="width:100%;margin-top:6px;display:block"></audio></div>`;
      i++; continue;
    }
    // image: ![caption](src)
    const imgM = line.trim().match(/^!\[(.*?)\]\((.+?)\)$/);
    if (imgM) {
      html += `<div class="sec-sub-img"><img src="${imgM[2]}" alt="${imgM[1]}" onerror="this.style.display='none'">${imgM[1] ? `<div class="sit-caption">${imgM[1]}</div>` : ''}</div>`;
      i++; continue;
    }
    // list
    if (/^[-•]\s/.test(line.trim())) {
      let items = '';
      while (i < lines.length && /^[-•]\s/.test(lines[i].trim())) {
        items += `<li>${inlineMd(lines[i].trim().replace(/^[-•]\s+/, ''))}</li>`;
        i++;
      }
      html += `<ul>${items}</ul>`; continue;
    }
    // paragraph — collect until blank line or special token
    let para = '';
    while (i < lines.length) {
      const l = lines[i].trimEnd();
      if (l.trim() === '' || /^[-•]\s/.test(l.trim()) || /^!\[/.test(l.trim())) break;
      para += (para ? ' ' : '') + l.trim();
      i++;
    }
    if (para) html += `<p>${inlineMd(para)}</p>`;
  }
  return html;
}
function inlineMd(t) {
  return t
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+?)\*/g,  '<em>$1</em>');
}

// ── REVEAL ────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
}, {threshold: .08});

// ── SECTION BUILDER ───────────────────────────────────────
function buildSection(sec, i) {
  const el = document.createElement('div');
  el.className = 'rv'; el.style.transitionDelay = (i * 60) + 'ms';

  if (sec.type === 'blocks') {
    function renderBlock(b) {
      if (b.type === 'text')       return `<div class="sec-body">${md(b.body||'')}</div>`;
      if (b.type === 'subsection') return `<div class="sec-sub"><div class="sec-sub-title">${b.title||''}</div><div class="sec-sub-body">${md(b.body||'')}</div></div>`;
      if (b.type === 'image') {
        const w = b.width || '100%';
        return `<div class="sec-img-wrap" style="max-width:${w}">
          <img src="${esc(b.src)}" alt="${esc(b.caption||'')}" style="width:100%;display:block" onerror="this.style.display='none'">
          ${b.caption ? `<div class="sit-caption">${b.caption}</div>` : ''}
        </div>`;
      }
      if (b.type === 'links') {
        const linksHTML = (b.items||[]).map(l => `
          <div class="doc-link-wrap">
            <a href="${esc(l.url)}" target="_blank" rel="noopener" class="doc-link">
              <span class="doc-link-icon">↗</span>
              <span class="doc-link-label">${esc(l.label||'Open')}</span>
            </a>
            ${l.caption ? `<div class="doc-link-caption">${l.caption}</div>` : ''}
          </div>`).join('');
        return `<div class="doc-link-group">${linksHTML}</div>`;
      }
      return '';
    }
    const blocksHTML = (sec.blocks||[]).map(b => `<div class="block-item">${renderBlock(b)}</div>`).join('');
    el.innerHTML = `${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}<div class="blocks-wrap">${blocksHTML}</div>`;

  } else if (sec.type === 'text') {
    const bodyHTML = sec.body ? `<div class="sec-body">${md(sec.body)}</div>` : '';
    const subsHTML = (sec.subsections && sec.subsections.length)
      ? '<div class="sec-subs">' + sec.subsections.map(sub => {
          let mediaHTML = '';
          if (sub.videoSrc) {
            mediaHTML = '<video class="sec-sub-video" src="' + sub.videoSrc + '" controls playsinline style="width:100%;margin-top:16px;display:block"></video>';
          } else if (sub.video) {
            mediaHTML = '<div class="yt-wrap" style="margin-top:16px">' + ytEmbed(sub.video) + '</div>';
          }
          if (sub.audioSrc) {
            mediaHTML += '<audio class="sec-sub-audio" src="' + sub.audioSrc + '" controls style="width:100%;margin-top:16px;display:block"></audio>';
          }
          if (sub.pdfSrc) {
            const h = sub.pdfHeight || '80vh';
            mediaHTML += '<iframe src="' + sub.pdfSrc + '" style="width:100%;height:' + h + ';border:none;display:block;margin-top:16px"></iframe>';
          }
          return '<div class="sec-sub"><div class="sec-sub-title">' + (sub.title||'') + '</div><div class="sec-sub-body">' + md(sub.body||'') + mediaHTML + '</div></div>';
        }).join('') + '</div>'
      : '';
    el.innerHTML = `${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}${bodyHTML}${subsHTML}`;

  } else if (sec.type === 'image-text') {
    const pos    = sec.imagePosition || 'right';
    const imgW   = sec.imageWidth  || '50%';
    const aspect = sec.imageAspect || '4/3';
    const textW  = `calc(100% - ${imgW} - 52px)`;
    const colsCols = pos === 'left' ? `${imgW} ${textW}` : `${textW} ${imgW}`;
    el.className += ' sec-imgtxt';
    const imgHTML = sec.image
      ? `<div class="sit-img-inner" style="aspect-ratio:${aspect}"><img src="${sec.image}" alt="${esc(sec.title)}" onerror="this.parentElement.innerHTML='<div class=sit-img-ph>✦</div>'"></div>`
      : `<div class="sit-img-inner" style="aspect-ratio:${aspect}"><div class="sit-img-ph">✦</div></div>`;
    el.innerHTML = `
      <div class="sec-title-el">${sec.title}</div>
      <div class="sit-cols img-${pos}" style="grid-template-columns:${colsCols}">
        <div class="sit-text">
          <div class="sec-body">${md(sec.body)}</div>
        </div>
        <div class="sit-img">${imgHTML}${sec.caption ? `<div class="sit-caption">${sec.caption}</div>` : ''}</div>
      </div>`;

  } else if (sec.type === 'text-video') {
    const pos = sec.videoPosition || 'right';
    function renderVid(v) {
      if (v.src) return `<video src="${esc(v.src)}" controls playsinline style="width:100%;display:block"></video>${v.caption ? `<div class="sit-caption">${v.caption}</div>` : ''}`;
      if (v.id)  return `<div class="sit-yt-wrap"><iframe src="https://www.youtube.com/embed/${v.id}?rel=0" allowfullscreen loading="lazy"></iframe></div>${v.caption ? `<div class="sit-caption">${v.caption}</div>` : ''}`;
      return '';
    }
    const videos = sec.videos
      ? sec.videos
      : sec.videoSrc ? [{ src: sec.videoSrc, caption: sec.caption }]
      : sec.videoId  ? [{ id: sec.videoId,   caption: sec.caption }]
      : [];
    const vidHTML = `<div class="sec-video-stack">${videos.map(renderVid).join('')}</div>`;
    const hasBody = sec.body && sec.body.trim();
    el.innerHTML = `
      ${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}
      ${hasBody
        ? `<div class="sec-vidtxt vid-${pos}">
             <div class="sit-text"><div class="sec-body">${md(sec.body)}</div></div>
             <div class="sit-vid">${vidHTML}</div>
           </div>`
        : `<div style="max-width:760px;margin:0 auto">${vidHTML}</div>`
      }`;

  } else if (sec.type === 'gallery') {
    const imgs = sec.images || [];
    if (!imgs.length) {
      el.innerHTML = `
        <div class="sec-title-el">${sec.title}</div>
        <div class="gal-empty">No screenshots yet — add image paths to this game's .js file</div>`;
    } else {
      const sid = 'gal-' + i;
      const dotsHTML = imgs.map((_,k) => `<button class="gal-dot${k===0?' on':''}" data-k="${k}" aria-label="Slide ${k+1}"></button>`).join('');
      const slideHTML = imgs.map((img,k) => {
        const inner = img.src
          ? `<img src="${img.src}" alt="${img.caption||''}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=gal-slide-ph>✦</div>'">`
          : `<div class="gal-slide-ph">✦</div>`;
        return `<div class="gal-slide" data-k="${k}">${inner}</div>`;
      }).join('');

      el.innerHTML = `
        <div class="sec-title-el">${sec.title}</div>
        <div class="gal-slideshow" id="${sid}">
          <div class="gal-track-wrap">
            <div class="gal-track">${slideHTML}</div>
          </div>
          <div class="gal-caption-el">${imgs[0].caption||''}</div>
          <div class="gal-info">
            <button class="gal-arr" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
            <div class="gal-dots">${dotsHTML}</div>
            <button class="gal-arr" data-dir="1"  aria-label="Next"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></button>
          </div>
          <div class="gal-progress"><div class="gal-progress-bar"></div></div>
        </div>`;

      setTimeout(() => {
        const root   = document.getElementById(sid); if (!root) return;
        const wrap   = root.querySelector('.gal-track-wrap');
        const track  = root.querySelector('.gal-track');
        const slides = [...root.querySelectorAll('.gal-slide')];
        const dots   = [...root.querySelectorAll('.gal-dot')];
        const capEl  = root.querySelector('.gal-caption-el');
        const bar    = root.querySelector('.gal-progress-bar');
        const total  = slides.length;
        let cur = 0, autoTimer = null;
        const GAP = 16;

        function layout() {
          const W = wrap.offsetWidth;
          const slideW = Math.round(W * 0.76);
          const peekW  = Math.round((W - slideW) / 2);
          slides.forEach(s => { s.style.width = slideW + 'px'; s.style.marginRight = GAP + 'px'; });
          track.style.transition = 'none';
          track.style.transform  = `translateX(${peekW - cur * (slideW + GAP)}px)`;
          updateClasses();
        }

        function moveTo(animate) {
          const W      = wrap.offsetWidth;
          const slideW = Math.round(W * 0.76);
          const peekW  = Math.round((W - slideW) / 2);
          track.style.transition = animate ? 'transform .55s cubic-bezier(.4,0,.2,1)' : 'none';
          track.style.transform  = `translateX(${peekW - cur * (slideW + GAP)}px)`;
          updateClasses();
        }

        function updateClasses() {
          slides.forEach((s, k) => {
            const wasActive = s.classList.contains('s-active');
            s.className = 'gal-slide';
            const diff = ((k - cur) + total) % total;
            if      (diff === 0)       s.classList.add('s-active');
            else if (diff === 1)       s.classList.add('s-next');
            else if (diff === total-1) s.classList.add('s-prev');
            else                       s.classList.add('s-hidden');
            if (diff === 0 && !wasActive) {
              const img = s.querySelector('img');
              if (img && img.src) { const src = img.src; img.src = ''; img.src = src; }
            }
          });
        }

        function goTo(n) {
          cur = ((n % total) + total) % total;
          moveTo(true);
          dots.forEach((d,k) => d.classList.toggle('on', k === cur));
          capEl.textContent = imgs[cur].caption || '';
          restartProgress();
        }

        function restartProgress() {
          clearTimeout(autoTimer);
          bar.style.transition = 'none'; bar.style.width = '0%';
          bar.getBoundingClientRect();
          bar.style.transition = 'width 10s linear'; bar.style.width = '100%';
          autoTimer = setTimeout(() => goTo(cur + 1), 10000);
        }

        root.querySelectorAll('.gal-arr').forEach(btn =>
          btn.addEventListener('click', () => goTo(cur + parseInt(btn.dataset.dir))));
        dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.k))));
        slides.forEach(s => s.addEventListener('click', () => {
          if (s.classList.contains('s-prev')) goTo(cur - 1);
          if (s.classList.contains('s-next')) goTo(cur + 1);
        }));
        root.addEventListener('mouseenter', () => { clearTimeout(autoTimer); bar.style.transition = 'none'; });
        root.addEventListener('mouseleave', () => restartProgress());
        new ResizeObserver(() => layout()).observe(wrap);

        layout();
        goTo(0);
      }, 0);
    }

  } else if (sec.type === 'gameloop') {
    el.innerHTML = `<div class="sec-title-el">${sec.title||'Game Loop'}</div><div class="gl-wrap" id="gl-${i}"></div>`;
    setTimeout(() => {
      const container = document.getElementById('gl-' + i);
      if (!container) return;
      const steps = sec.steps || [];
      const edges = sec.edges || [];

      const BW=160, BH=64, GAP_X=80, GAP_Y=56;
      const PAD=40, PAD_TOP=80;
      const COL_BG='#f5f3ef', COL_BRD='#d9d5ce', COL_RED='#aa2217', COL_TXT='#1a1816', COL_DIM='#6b6560';

      const stepMap = {};
      steps.forEach(s => { stepMap[s.id] = s; });

      const minCol = Math.min(...steps.map(s => s.pos ? s.pos.col : 0));
      const maxCol = Math.max(...steps.map(s => s.pos ? s.pos.col : 0));
      const maxRow = Math.max(...steps.map(s => s.pos ? s.pos.row : steps.indexOf(s)));

      const colCount = maxCol - minCol + 1;
      const svgW = colCount * (BW + GAP_X) - GAP_X + PAD * 2;
      const svgH = PAD_TOP + (maxRow + 1) * (BH + GAP_Y) - GAP_Y + PAD;

      function colToX(col) { return (col - minCol) * (BW + GAP_X) + PAD; }
      function rowToY(row) { return PAD_TOP + row * (BH + GAP_Y); }

      function cx(s) { return colToX(s.pos ? s.pos.col : 0) + BW/2; }
      function cy(s) { return rowToY(s.pos ? s.pos.row : steps.indexOf(s)) + BH/2; }

      let svgContent = '';

      // draw edges
      edges.forEach(e => {
        const from = stepMap[e.from], to = stepMap[e.to];
        if (!from || !to) return;
        const x1=cx(from), y1=cy(from), x2=cx(to), y2=cy(to);

        if (e.loop) {
          // Arc ABOVE the diagram — exit top of source node, re-enter top of target node
          const fromTopY = y1 - BH/2;
          const toTopY   = y2 - BH/2;
          const arcY = Math.abs(e.loopOffset || 40) / 2; // stays within PAD_TOP space
          svgContent += `<path d="M${x1},${fromTopY} C${x1},${arcY} ${x2},${arcY} ${x2},${toTopY}" fill="none" stroke="${COL_BRD}" stroke-width="1.5" marker-end="url(#arr)"/>`;
          if (e.label) {
            const lx = (x1 + x2) / 2;
            const ly = arcY - 8;
            svgContent += `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="10" fill="${COL_DIM}" dominant-baseline="middle">${e.label}</text>`;
          }
        } else {
          const dx = x2-x1, dy = y2-y1;
          const startX = x1 + (dx===0 ? 0 : (dx>0 ? BW/2 : -BW/2));
          const startY = y1 + (dy===0 ? 0 : (dy>0 ? BH/2 : -BH/2));
          const endX   = x2 - (dx===0 ? 0 : (dx>0 ? BW/2 : -BW/2));
          const endY   = y2 - (dy===0 ? 0 : (dy>0 ? BH/2 : -BH/2));
          svgContent += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}" stroke="${COL_BRD}" stroke-width="1.5" marker-end="url(#arr)"/>`;
          if (e.label) {
            const lx=(startX+endX)/2, ly=(startY+endY)/2 - 8;
            svgContent += `<text x="${lx}" y="${ly}" text-anchor="middle" font-size="10" fill="${COL_DIM}">${e.label}</text>`;
          }
        }
      });

      // draw nodes
      steps.forEach(s => {
        const x = colToX(s.pos ? s.pos.col : 0);
        const y = rowToY(s.pos ? s.pos.row : steps.indexOf(s));
        const brdColor = s.branch ? COL_RED : COL_BRD;
        svgContent += `<rect x="${x}" y="${y}" width="${BW}" height="${BH}" fill="${COL_BG}" stroke="${brdColor}" stroke-width="1.5"/>`;
        svgContent += `<text x="${x+BW/2}" y="${y+BH/2-8}" text-anchor="middle" font-size="13" font-weight="500" fill="${COL_TXT}" dominant-baseline="middle">${s.label}</text>`;
        if (s.desc) {
          svgContent += `<text x="${x+BW/2}" y="${y+BH/2+12}" text-anchor="middle" font-size="10" fill="${COL_DIM}">${s.desc}</text>`;
        }
      });

      container.innerHTML = `<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke="${COL_BRD}" stroke-width="1"/>
          </marker>
        </defs>
        ${svgContent}
      </svg>`;
    }, 0);

  } else if (sec.type === 'credits') {
    el.innerHTML = `
      <div class="sec-title-el">${sec.title}</div>
      <div class="credits-grid">${sec.items.map(it=>`<div class="credit-item"><div class="credit-role">${it.role}</div><div class="credit-name">${it.name}</div></div>`).join('')}</div>`;

  } else if (sec.type === 'video-text') {
    const pos = sec.videoPosition || 'right';
    const raw = sec.videoId || '';
    const ytId = raw.includes('watch?v=') ? raw.split('watch?v=')[1].split('&')[0]
               : raw.includes('youtu.be/')  ? raw.split('youtu.be/')[1].split('?')[0]
               : raw.includes('embed/')     ? raw.split('embed/')[1].split('?')[0]
               : raw;
    el.className += ' sec-vidtxt vid-' + pos;
    el.innerHTML = `
      <div class="sit-text">
        <div class="sec-title-el">${sec.title}</div>
        <div class="sec-body">${md(sec.body)}</div>
      </div>
      <div class="sit-vid">
        <div class="sit-yt-wrap">
          <iframe src="https://www.youtube.com/embed/${ytId}" title="${esc(sec.title)}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        ${sec.caption ? `<div class="sit-caption">${sec.caption}</div>` : ''}
      </div>`;

  } else if (sec.type === 'gdoc') {
    const links = sec.links || [{ url: sec.url, label: sec.label, caption: sec.caption }];
    const linksHTML = links.map(l => `
      <div class="doc-link-wrap">
        <a href="${esc(l.url)}" target="_blank" rel="noopener" class="doc-link">
          <span class="doc-link-icon">↗</span>
          <span class="doc-link-label">${esc(l.label || 'Open Document')}</span>
        </a>
        ${l.caption ? `<div class="doc-link-caption">${l.caption}</div>` : ''}
      </div>`).join('');
    el.innerHTML = `
      ${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}
      ${sec.body  ? `<div class="sec-body" style="margin-bottom:20px">${sec.body}</div>` : ''}
      <div class="doc-link-group">${linksHTML}</div>`;

  } else if (sec.type === 'events') {
    const rowsHTML = (sec.items || []).map(ev => `
      <div class="ev-row">
        <span class="ev-name">${esc(ev.name)}</span>
        ${ev.note ? `<span class="ev-note">${esc(ev.note)}</span>` : ''}
        ${ev.date ? `<span class="ev-date">${esc(ev.date)}</span>` : ''}
      </div>`).join('');
    el.innerHTML = `
      ${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}
      <div class="ev-list">${rowsHTML}</div>`;

  } else if (sec.type === 'image') {
    const w = sec.width || '100%';
    el.innerHTML = `
      ${sec.title ? `<div class="sec-title-el">${sec.title}</div>` : ''}
      <div class="sec-img-wrap" style="max-width:${w}">
        <img src="${esc(sec.src)}" alt="${esc(sec.caption||sec.title||'')}" style="width:100%;display:block" onerror="this.style.display='none'">
        ${sec.caption ? `<div class="sit-caption">${sec.caption}</div>` : ''}
      </div>`;

  } else if (sec.type === 'video') {
    const raw = sec.videoId || '';
    const ytId = raw.includes('watch?v=') ? raw.split('watch?v=')[1].split('&')[0]
               : raw.includes('youtu.be/')  ? raw.split('youtu.be/')[1].split('?')[0]
               : raw.includes('embed/')     ? raw.split('embed/')[1].split('?')[0]
               : raw;
    el.className += ' sec-video';
    el.innerHTML = `
      <div class="sec-title-el">${sec.title}</div>
      <div class="yt-wrap">
        <iframe src="https://www.youtube.com/embed/${ytId}" title="${esc(sec.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      ${sec.caption ? `<div class="sit-caption">${sec.caption}</div>` : ''}`;
  }
  return el;
}

// ── PAGE INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const g = GAMES[GAME_ID]; if (!g) return;

  document.title = g.title + ' — Luke Li';

  // hero
  const heroSrc = (g.bannerImage && g.bannerImage !== '') ? g.bannerImage
                : (g.coverImage  && g.coverImage  !== '') ? g.coverImage
                : '';
  const hero = document.getElementById('d-hero');
  hero.innerHTML = heroSrc
    ? `<img src="${heroSrc}" alt="${esc(g.title)}" onerror="this.parentElement.innerHTML='<div class=d-hero-ph><span>${g.title[0]}</span></div><div class=d-hero-ov></div>'">`
      + `<div class="d-hero-ov"></div>`
    : `<div class="d-hero-ph"><span>${g.title[0]}</span></div><div class="d-hero-ov"></div>`;

  // title & trailer
  const words = g.title.split(' '); const lw = words.pop();
  const raw = g.trailerUrl || '';
  const ytId = raw.includes('watch?v=') ? raw.split('watch?v=')[1].split('&')[0]
             : raw.includes('youtu.be/')  ? raw.split('youtu.be/')[1].split('?')[0]
             : raw.includes('embed/')     ? raw.split('embed/')[1].split('?')[0]
             : raw;
  const trailerHTML = ytId ? `
    <div class="ov-trailer">
      <div class="ov-trailer-wrap">
        <iframe src="https://www.youtube.com/embed/${ytId}" title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>`
  : (g.trailerAudio && g.trailerAudio !== '') ? `
    <div class="ov-trailer-audio">
      ${g.trailerAudioCaption ? `<p class="ov-trailer-audio-cap">${g.trailerAudioCaption}</p>` : ''}
      <audio controls>
        <source src="${g.trailerAudio}">
      </audio>
    </div>` : '';

  document.getElementById('d-main').innerHTML = `
    <div class="d-genre-tag">${g.genre}</div>
    <h1 class="d-title">${words.length ? words.join(' ') + ' ' : ''}<span>${lw}</span></h1>
    <p class="d-tagline">${g.tagline}</p>
    ${trailerHTML}
    <div class="d-links-ov">${g.links.map(l=>`<a href="${l.url}" class="dlnk ${l.type}" target="_blank">${l.label}</a>`).join('')}</div>`;

  document.getElementById('d-sidebar').innerHTML = `
    <div class="d-sb-item"><div class="d-sb-lbl">Role</div><div class="d-sb-pills">${(Array.isArray(g.role) ? g.role : [g.role]).map(r=>`<span class="pill-mode">${r}</span>`).join("")}</div></div>
    <div class="d-sb-item"><div class="d-sb-lbl">Tools</div><div class="d-sb-pills">${pills(g.tools)}</div></div>
    <div class="d-sb-item"><div class="d-sb-lbl">Year</div><div class="d-sb-val">${g.year}</div></div>
    <div class="d-sb-item"><div class="d-sb-lbl">Genre</div><div class="d-sb-val">${g.genre}</div></div>
    ${g.modes && g.modes.length ? `<div class="d-sb-item"><div class="d-sb-lbl">Game Mode</div><div class="d-sb-pills">${pills(g.modes)}</div></div>` : ''}
    ${g.team ? `<div class="d-sb-item"><div class="d-sb-lbl">Team</div><div class="d-sb-val">${g.team}</div></div>` : ''}
    ${g.publisher ? `<div class="d-sb-item"><div class="d-sb-lbl">Publisher</div><div class="d-sb-val">${g.publisher}</div></div>` : ''}`;

  // sections
  const sw = document.getElementById('sections-wrap');
  sw.innerHTML = '';
  g.sections.forEach((sec, i) => {
    if (sec.type === 'overview') return;
    sw.appendChild(Object.assign(document.createElement('div'), {className:'sec-divider'}));
    const el = buildSection(sec, i);
    el.id = 'd-sec-' + i;
    if (sec.subsections) {
      el.querySelectorAll('.sec-sub').forEach((subEl, j) => { subEl.id = 'd-sub-' + i + '-' + j; });
    }
    sw.appendChild(el);
  });

  // side nav
  const navEl = document.getElementById('d-sidenav');
  navEl.innerHTML = '';
  const navTargets = [];

  if (g.sections.some(s => s.type === 'overview')) {
    const group = document.createElement('div');
    group.className = 'dnav-section';
    const btn = document.createElement('button');
    btn.className = 'dnav-item';
    btn.textContent = 'Overview';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    group.appendChild(btn);
    navEl.appendChild(group);
  }

  g.sections.forEach((sec, i) => {
    if (sec.type === 'overview' || !sec.title) return;
    const secEl = document.getElementById('d-sec-' + i);
    const group = document.createElement('div');
    group.className = 'dnav-section';

    const btn = document.createElement('button');
    btn.className = 'dnav-item';
    btn.textContent = sec.title;
    btn.addEventListener('click', () => {
      if (secEl) window.scrollBy({ top: secEl.getBoundingClientRect().top - 64, behavior: 'smooth' });
    });
    group.appendChild(btn);

    const entry = { navBtn: btn, el: secEl, subItems: [] };

    if (sec.subsections && sec.subsections.length) {
      const subsDiv = document.createElement('div');
      subsDiv.className = 'dnav-subs';
      sec.subsections.forEach((sub, j) => {
        const subEl = document.getElementById('d-sub-' + i + '-' + j);
        const subBtn = document.createElement('button');
        subBtn.className = 'dnav-sub-item';
        subBtn.textContent = sub.title;
        subBtn.addEventListener('click', () => {
          if (subEl) window.scrollBy({ top: subEl.getBoundingClientRect().top - 64, behavior: 'smooth' });
        });
        subsDiv.appendChild(subBtn);
        entry.subItems.push({ navBtn: subBtn, el: subEl });
      });
      group.appendChild(subsDiv);
    }

    navEl.appendChild(group);
    navTargets.push(entry);
  });

  // scroll spy
  const allNavTargets = [];
  navTargets.forEach(({el, navBtn, subItems}) => {
    if (el) allNavTargets.push({ el, navBtn });
    subItems.forEach(s => { if (s.el) allNavTargets.push({ el: s.el, navBtn: s.navBtn }); });
  });
  window.addEventListener('scroll', () => {
    let activeNavBtn = null;
    allNavTargets.forEach(({el, navBtn}) => {
      if (el.getBoundingClientRect().top <= 120) activeNavBtn = navBtn;
    });
    allNavTargets.forEach(({navBtn}) => navBtn.classList.toggle('active', navBtn === activeNavBtn));
  }, { passive: true });

  // reveal
  document.querySelectorAll('.rv').forEach(r => obs.observe(r));
});
