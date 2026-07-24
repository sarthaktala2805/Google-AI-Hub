/* ==========================================================================
   GOOGLE AI HUB - APPLICATION ENGINE (3-TIER NESTED ROUTING & MODAL ENGINE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // State Management
  let currentCategoryId = 'all';
  let currentSubpartId = 'all-subparts';
  let currentSearchQuery = '';
  let activeModalNode = null;

  // DOM Elements
  const categoryNavTabs = document.getElementById('categoryNavTabs');
  const subpartsNavBar = document.getElementById('subpartsNavBar');
  const matrixGrid = document.getElementById('matrixGrid');
  const searchInput = document.getElementById('searchInput');
  const visibleNodeCount = document.getElementById('visibleNodeCount');
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  
  // Banner Elements
  const bannerTitle = document.getElementById('bannerTitle');
  const bannerDesc = document.getElementById('bannerDesc');
  const bannerTagline = document.getElementById('bannerTagline');
  const bannerNodeCount = document.getElementById('bannerNodeCount');
  const categoryBanner = document.getElementById('categoryBanner');

  // Modal Inspector Elements
  const nodeModalBackdrop = document.getElementById('nodeModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHeaderStrip = document.getElementById('modalHeaderStrip');
  const modalAvatar = document.getElementById('modalAvatar');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubpartLabel = document.getElementById('modalSubpartLabel');
  const modalTag = document.getElementById('modalTag');
  const modalDesc = document.getElementById('modalDesc');
  const modalFunction = document.getElementById('modalFunction');
  const modalSystemInfo = document.getElementById('modalSystemInfo');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const modalLaunchBtn = document.getElementById('modalLaunchBtn');
  const modalInspectRawBtn = document.getElementById('modalInspectRawBtn');

  // Telemetry Elements
  const telemetrySidebar = document.getElementById('telemetrySidebar');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  const sysLogBox = document.getElementById('sysLogBox');
  const tpuLoadText = document.getElementById('tpuLoadText');
  const tpuLoadFill = document.getElementById('tpuLoadFill');
  const telemetryCanvas = document.getElementById('telemetryCanvas');
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================================
     1. TIER-1: MAIN CATEGORY NAV RENDERER
     ========================================================================== */
  function renderNavTabs() {
    categoryNavTabs.innerHTML = MATRIX_CATEGORIES.map(cat => {
      const count = cat.id === 'all' 
        ? MATRIX_NODES.length 
        : MATRIX_NODES.filter(n => n.catId === cat.id).length;
      
      const isActive = cat.id === currentCategoryId;
      
      return `
        <button 
          class="tab-btn ${isActive ? 'active' : ''}" 
          data-category="${cat.id}"
          style="--active-accent: ${cat.accentColor};"
          title="${cat.name}"
        >
          ${cat.icon}
          <span>${cat.shortName}</span>
          <span class="tab-count">${count}</span>
        </button>
      `;
    }).join('');

    // Attach click events
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const catId = e.currentTarget.getAttribute('data-category');
        switchCategory(catId);
      });
    });
  }

  function switchCategory(catId) {
    currentCategoryId = catId;
    currentSubpartId = 'all-subparts'; // Reset subpart filter when category changes
    renderNavTabs();
    renderSubpartsNav();
    updateBannerInfo();
    renderMatrixCards();
  }

  /* ==========================================================================
     2. TIER-2: CATEGORY SUBPARTS NAV RENDERER
     ========================================================================== */
  function renderSubpartsNav() {
    const selectedCat = MATRIX_CATEGORIES.find(c => c.id === currentCategoryId);

    if (currentCategoryId === 'all' || !selectedCat || !selectedCat.subparts || selectedCat.subparts.length === 0) {
      subpartsNavBar.style.display = 'none';
      return;
    }

    subpartsNavBar.style.display = 'flex';

    let subpartsHtml = `
      <button class="subpart-pill ${currentSubpartId === 'all-subparts' ? 'active' : ''}" 
              data-subpart="all-subparts" 
              style="--subpart-accent: ${selectedCat.accentColor};">
        All Subparts
      </button>
    `;

    subpartsHtml += selectedCat.subparts.map(sub => {
      const count = MATRIX_NODES.filter(n => n.subpartId === sub.id).length;
      const isActive = sub.id === currentSubpartId;
      return `
        <button class="subpart-pill ${isActive ? 'active' : ''}" 
                data-subpart="${sub.id}" 
                style="--subpart-accent: ${selectedCat.accentColor};">
          ${escapeHtml(sub.name)} (${count})
        </button>
      `;
    }).join('');

    subpartsNavBar.innerHTML = subpartsHtml;

    // Attach Subpart click listeners
    document.querySelectorAll('.subpart-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentSubpartId = e.currentTarget.getAttribute('data-subpart');
        renderSubpartsNav();
        renderMatrixCards();
      });
    });
  }

  function updateBannerInfo() {
    const selectedCat = MATRIX_CATEGORIES.find(c => c.id === currentCategoryId);
    if (!selectedCat) return;

    if (currentCategoryId === 'all') {
      bannerTitle.textContent = 'Google AI Hub';
      bannerDesc.textContent = 'Complete un-truncated payload of all 54 Google AI tools, models, and platforms across 7 main categories.';
      bannerTagline.textContent = 'ENTERPRISE ECOSYSTEM ENGINE';
      bannerNodeCount.textContent = MATRIX_NODES.length;
      categoryBanner.style.setProperty('--banner-accent', '#4285F4');
    } else {
      bannerTitle.textContent = selectedCat.name;
      bannerDesc.textContent = selectedCat.tagline || `Active operational nodes under ${selectedCat.name}.`;
      bannerTagline.textContent = selectedCat.tagline || 'SYSTEM CATEGORY LAYER';
      
      const categoryCount = MATRIX_NODES.filter(n => n.catId === currentCategoryId).length;
      bannerNodeCount.textContent = categoryCount;
      categoryBanner.style.setProperty('--banner-accent', selectedCat.accentColor);
    }
  }

  /* ==========================================================================
     3. TIER-3: STREAMLINED CARDS GRID RENDERER (NAME, AVATAR, TAG ONLY)
     ========================================================================== */
  function renderMatrixCards() {
    let filteredNodes = MATRIX_NODES.filter(node => {
      const matchesCat = currentCategoryId === 'all' || node.catId === currentCategoryId;
      const matchesSubpart = currentSubpartId === 'all-subparts' || node.subpartId === currentSubpartId;
      
      const q = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        node.name.toLowerCase().includes(q) ||
        node.subpartName.toLowerCase().includes(q) ||
        node.tag.toLowerCase().includes(q) ||
        node.desc.toLowerCase().includes(q) ||
        node.function.toLowerCase().includes(q) ||
        node.systemInfo.toLowerCase().includes(q);

      return matchesCat && matchesSubpart && matchesSearch;
    });

    visibleNodeCount.textContent = filteredNodes.length;

    if (filteredNodes.length === 0) {
      matrixGrid.innerHTML = `
        <div class="no-results-box">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <h3>No Tools Found</h3>
          <p style="margin-top: 0.5rem; font-size: 0.85rem;">No AI nodes match your query "${currentSearchQuery}". Try clearing filters or search query.</p>
        </div>
      `;
      return;
    }

    matrixGrid.innerHTML = filteredNodes.map(node => {
      return `
        <article class="node-card" data-id="${node.id}" style="--card-accent: ${node.accentColor};">
          <div class="card-avatar-box">
            <div class="node-avatar">${node.avatar}</div>
            <div class="node-title-group">
              <span class="node-name">${escapeHtml(node.name)}</span>
              <span class="node-subpart-label">${escapeHtml(node.subpartName)}</span>
            </div>
          </div>
          <span class="node-tag-pill">${escapeHtml(node.tag)}</span>
        </article>
      `;
    }).join('');

    // Attach card click handlers to open Detail Sheet Modal
    document.querySelectorAll('.node-card').forEach(card => {
      card.addEventListener('click', () => {
        const nodeId = card.getAttribute('data-id');
        openNodeModal(nodeId);
      });
    });
  }

  /* ==========================================================================
     4. SEARCH & KEYBOARD SHORTCUTS
     ========================================================================== */
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderMatrixCards();
  });

  searchTriggerBtn.addEventListener('click', () => {
    searchInput.focus();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape') {
      if (nodeModalBackdrop.classList.contains('active')) {
        closeNodeModal();
      }
    }
  });

  /* ==========================================================================
     5. DETAIL SHEET INSPECTOR MODAL & DIRECT "LAUNCH TOOL LIVE" BUTTON
     ========================================================================== */
  window.openNodeModal = function(nodeId) {
    const node = MATRIX_NODES.find(n => n.id === nodeId);
    if (!node) return;

    activeModalNode = node;
    modalHeaderStrip.style.setProperty('--modal-accent', node.accentColor);
    modalAvatar.textContent = node.avatar;
    modalAvatar.style.color = node.accentColor;
    modalTitle.textContent = node.name;
    modalSubpartLabel.textContent = node.subpartName;
    modalTag.textContent = node.tag;
    modalDesc.textContent = node.desc;
    modalFunction.textContent = node.function;
    modalFunction.style.borderLeftColor = node.accentColor;
    modalSystemInfo.textContent = node.systemInfo;
    
    // Direct Hyperlinked Launch Tool Live Button
    modalLaunchBtn.href = node.officialLink || 'https://ai.google';
    modalLaunchBtn.style.setProperty('--modal-accent', node.accentColor);

    nodeModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeNodeModal() {
    nodeModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    activeModalNode = null;
  }

  modalCloseBtn.addEventListener('click', closeNodeModal);
  nodeModalBackdrop.addEventListener('click', (e) => {
    if (e.target === nodeModalBackdrop) closeNodeModal();
  });

  // Copy System ID to Clipboard
  copyCodeBtn.addEventListener('click', () => {
    if (!activeModalNode) return;
    navigator.clipboard.writeText(activeModalNode.systemInfo).then(() => {
      showToast(`System Code copied: ${activeModalNode.systemInfo}`);
    }).catch(() => {
      showToast('Copied code to clipboard');
    });
  });

  modalInspectRawBtn.addEventListener('click', () => {
    if (!activeModalNode) return;
    showToast(`Streaming telemetry test for ${activeModalNode.name}...`);
    addSysLog(`[TEST] Streaming data node ${activeModalNode.systemInfo}... OK`);
  });

  /* ==========================================================================
     6. TELEMETRY SIDEBAR & REAL-TIME GRAPH ANIMATION
     ========================================================================== */
  sidebarToggleBtn.addEventListener('click', () => {
    telemetrySidebar.classList.toggle('open');
  });

  function addSysLog(msg) {
    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false });
    const logDiv = document.createElement('div');
    logDiv.className = 'log-entry';
    logDiv.innerHTML = `<span class="time">[${timeStr}]</span> ${escapeHtml(msg)}`;
    sysLogBox.appendChild(logDiv);
    sysLogBox.scrollTop = sysLogBox.scrollHeight;
  }

  setInterval(() => {
    const randomVal = (40 + Math.random() * 12).toFixed(1);
    tpuLoadText.textContent = `${randomVal}%`;
    tpuLoadFill.style.width = `${randomVal}%`;

    const randomLogs = [
      "SYNAPSE_GRID: Heartbeat ACK 0.4ms.",
      "TPU_v6: Liquid coolant temp 34°C.",
      "VECTOR_STORE: RAG index sync complete.",
      "DEEPMIND_CORE: Inference cluster optimal.",
      "MODEL_ROUTER: Quad-color mesh balanced."
    ];
    if (Math.random() > 0.6) {
      const picked = randomLogs[Math.floor(Math.random() * randomLogs.length)];
      addSysLog(`<span class="ok">SYS_CHECK:</span> ${picked}`);
    }
  }, 3500);

  // Canvas Wave Animation
  let ctx = telemetryCanvas.getContext('2d');
  let step = 0;

  function drawCanvasWave() {
    ctx.clearRect(0, 0, telemetryCanvas.width, telemetryCanvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4285F4';

    const width = telemetryCanvas.width;
    const height = telemetryCanvas.height;

    for (let x = 0; x < width; x++) {
      let y = height / 2 + Math.sin((x + step) * 0.05) * 14 + Math.cos((x + step * 0.5) * 0.03) * 7;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    step += 1.5;
    requestAnimationFrame(drawCanvasWave);
  }
  drawCanvasWave();

  /* ==========================================================================
     7. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--g-green)" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  /* ==========================================================================
     INITIALIZATION
     ========================================================================== */
  renderNavTabs();
  renderSubpartsNav();
  updateBannerInfo();
  renderMatrixCards();
});
