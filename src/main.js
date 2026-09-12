import { getRoadmap, getRegisteredChapters, getChapter } from './chapters/registry.js';

const appContent = document.getElementById('app-content');
const landedNav = document.getElementById('landed-nav');
const roadmapNav = document.getElementById('roadmap-nav');
const mainNav = document.getElementById('main-nav');

/**
 * Render the Radar / Overview Home Screen
 */
function renderRadarView() {
  const roadmap = getRoadmap();

  appContent.innerHTML = `
    <div class="radar-view">
      <section class="hero-banner">
        <h1 class="hero-title">Modern CSS Layout Learning Catalog</h1>
        <p class="hero-subtitle">
          An interactive living material reference and deliberate practice showcase for modern CSS layout architecture, based on Google's <code>web.dev/learn/css</code>.
        </p>
      </section>

      <section class="methodology-callout">
        <div class="methodology-icon">💡</div>
        <div class="methodology-text">
          <h4>The "Brain & Arms" On-Demand Delivery Model</h4>
          <p>
            This repository is developed via human-AI pair engineering. Oscar (The Brain) sets the real-world scenarios, testing criteria, and edge cases after studying each lesson on web.dev; AI (The Arms) scaffolds the self-contained chapter module, live interactive playground, and GitHub Pull Request.
          </p>
        </div>
      </section>

      <section>
        <div class="radar-section-header">
          <h2 class="radar-section-title">🗺️ The 8-Stage Layout Radar</h2>
          <a
            class="header-link"
            href="https://github.com/oscarlopez1991/web-dev-learn-css/issues/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Track in GitHub Issue #1 &rarr;
          </a>
        </div>

        <div class="radar-grid">
          ${roadmap
            .map(
              (item) => `
            <div class="radar-card">
              <div class="radar-card-header">
                <span class="radar-card-num">STAGE ${item.id}</span>
                <span class="radar-card-badge ${item.status}">
                  ${item.status === 'active' ? '⚡ Active (Issue #1)' : '⏳ Queued'}
                </span>
              </div>
              <h3 class="radar-card-title">${item.title}</h3>
              <p class="radar-card-desc">${item.description}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    </div>
  `;
}

/**
 * Update Sidebar UI
 */
function updateSidebar(activeSlug = 'radar') {
  // Update main nav active state
  mainNav.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.route === activeSlug);
  });

  // Render landed chapters in sidebar
  const chapters = getRegisteredChapters();
  if (chapters.length === 0) {
    landedNav.innerHTML = `
      <li class="nav-item" style="cursor: default; opacity: 0.6;">
        <span style="font-size: 0.8125rem;">⏳ Awaiting first signal</span>
      </li>
    `;
  } else {
    landedNav.innerHTML = chapters
      .map(
        (chap) => `
      <li class="nav-item ${chap.slug === activeSlug ? 'active' : ''}" data-route="${chap.slug}">
        <span>${chap.title}</span>
        <span class="nav-tag ready">Ready</span>
      </li>
    `
      )
      .join('');
  }

  // Render 8 roadmap items in sidebar
  const roadmap = getRoadmap();
  roadmapNav.innerHTML = roadmap
    .map(
      (item) => `
    <li class="nav-item" style="cursor: default;" title="${item.description}">
      <span>${item.id}. ${item.title}</span>
      <span class="nav-tag ${item.status === 'active' ? 'ready' : 'upcoming'}">
        ${item.status === 'active' ? 'Active' : 'Queued'}
      </span>
    </li>
  `
    )
    .join('');
}

/**
 * Navigate to Route / Chapter
 */
function navigate(route) {
  updateSidebar(route);

  if (route === 'radar') {
    renderRadarView();
    return;
  }

  const chapter = getChapter(route);
  if (chapter && typeof chapter.mount === 'function') {
    chapter.mount(appContent);
  } else {
    renderRadarView();
  }
}

// Event Listeners
mainNav.addEventListener('click', (e) => {
  const item = e.target.closest('[data-route]');
  if (item) {
    navigate(item.dataset.route);
  }
});

landedNav.addEventListener('click', (e) => {
  const item = e.target.closest('[data-route]');
  if (item) {
    navigate(item.dataset.route);
  }
});

// Boot Shell
updateSidebar('radar');
renderRadarView();
