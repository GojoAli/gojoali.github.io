const ICONS = window.PORTFOLIO_ICONS;
const DATA = window.PORTFOLIO_DATA;

function $(selector, parent) {
  return (parent || document).querySelector(selector);
}

function $$(selector, parent) {
  return Array.from((parent || document).querySelectorAll(selector));
}

function createBadgeList(items) {
  return items.map(function(item) {
    return '<span class="badge">' + item + '</span>';
  }).join('');
}

function renderDesktopNav(items) {
  return '<nav class="desktop">'
    + '<div class="nav-logo"><span>&gt; </span>D.DE-BERTHIN<span class="cursor-blink" style="color:var(--teal)">_</span></div>'
    + '<div class="nav-links">'
    + items.map(function(item, index) {
        return '<button class="nav-link ' + (index === 0 ? 'active' : '') + '" data-target="' + item.id + '" type="button"><span class="dot"></span>' + item.label + '</button>';
      }).join('')
    + '</div>'
    + '<a href="mailto:danideber1@gmail.com" class="nav-cta">Contacter</a>'
    + '</nav>';
}

function renderMobileNav(items) {
  return '<nav class="mobile">'
    + items.map(function(item, index) {
        return '<button class="dock-btn ' + (index === 0 ? 'active' : '') + '" data-target="' + item.id + '" type="button" aria-label="' + item.label + '">' + ICONS[item.icon] + '</button>';
      }).join('')
    + '</nav>';
}

function renderHeroTags(items) {
  return items.map(function(item) {
    return '<span class="hero-tag ' + item.className + '">' + item.label + '</span>';
  }).join('');
}

function renderSocialLinks(items) {
  return items.map(function(item) {
    return '<a href="' + item.href + '" class="social-btn" target="_blank" rel="noreferrer" aria-label="' + item.label + '">' + ICONS[item.icon] + '</a>';
  }).join('');
}

function renderStats(items) {
  return items.map(function(item) {
    return '<div class="stat-box"><div class="stat-num" style="color:' + item.color + '">' + item.value + '</div><div class="stat-lbl">' + item.label + '</div></div>';
  }).join('');
}

function renderAboutSection(data) {
  return '<div class="card-accent" style="background:linear-gradient(90deg, var(--blue), transparent)"></div>'
    + '<p class="label">présentation</p>'
    + '<h3 style="margin-top:10px">' + data.intro + '</h3>'
    + data.paragraphs.map(function(paragraph) { return '<p>' + paragraph + '</p>'; }).join('');
}

function renderProfileCards(items) {
  return items.map(function(item) {
    return '<article class="card profile-card reveal ' + item.delay + '">'
      + '<div class="card-accent" style="background:linear-gradient(90deg, ' + item.accent + ', transparent)"></div>'
      + '<div class="icon-wrap" style="color:' + item.iconColor + '">' + ICONS[item.icon] + '</div>'
      + '<h3>' + item.title + '</h3>'
      + '<p>' + item.text + '</p>'
      + '<div class="tags">' + createBadgeList(item.tags) + '</div>'
      + '</article>';
  }).join('');
}

function renderExperienceItems(items) {
  return items.map(function(item) {
    return '<article class="tl-item reveal ' + item.delay + '">'
      + '<div class="tl-dot ' + (item.colorClass === 'blue' ? 'blue' : '') + '"></div>'
      + '<div class="card card-pad">'
      + '<div class="row-wrap" style="margin-bottom:16px">'
      + '<span class="exp-date ' + item.dateClass + '">' + item.date + '</span>'
      + '<span class="exp-where">' + ICONS.marker + item.company + '</span>'
      + '</div>'
      + '<h3 style="margin-bottom:16px">' + item.title + '</h3>'
      + '<ul class="exp-list">'
      + item.bullets.map(function(bullet) {
          return '<li><span class="exp-bullet ' + item.colorClass + '"></span>' + bullet + '</li>';
        }).join('')
      + '</ul></div></article>';
  }).join('');
}

function renderEducationCards(items) {
  return items.map(function(item) {
    return '<article class="card edu-card reveal ' + item.delay + '">'
      + '<div class="card-accent" style="background:linear-gradient(90deg, ' + item.accent + ', transparent)"></div>'
      + '<p class="label">formation</p>'
      + '<h3 style="margin-top:10px">' + item.title + '</h3>'
      + '<p class="edu-meta">' + item.school + ' / ' + item.meta + '</p>'
      + '<p>' + item.description + '</p>'
      + '<div class="tags">' + createBadgeList(item.tags) + '</div>'
      + '</article>';
  }).join('');
}

function renderAcademicProjectCards(items) {
  return items.map(function(item) {
    return '<article class="card academic-card reveal ' + item.delay + '">'
      + '<div class="card-accent" style="background:linear-gradient(90deg, ' + item.accent + ', transparent)"></div>'
      + '<div class="icon-wrap" style="color:' + item.accent + '">' + ICONS[item.icon] + '</div>'
      + '<h3>' + item.title + '</h3>'
      + '<p>' + item.text + '</p>'
      + '<div class="tags">' + createBadgeList(item.tags) + '</div>'
      + '</article>';
  }).join('');
}

function getPreviewIconPath(type) {
  var paths = {
    server: '<rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
    briefcase: '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 01-9 9"></path>'
  };
  return paths[type] || paths.server;
}

function renderProjectCards(items) {
  return items.map(function(item) {
    var projectLink = item.href
      ? '<a href="' + item.href + '" class="proj-link" target="_blank" rel="noreferrer" aria-label="Voir le projet ' + item.title + '">' + ICONS.external + '</a>'
      : '<button class="proj-link" type="button" aria-label="Voir le projet ' + item.title + '">' + ICONS.external + '</button>';
    return '<article class="card proj-card">'
      + '<div class="proj-preview">'
      + '<svg class="icon-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">' + getPreviewIconPath(item.previewIcon) + '</svg>'
      + '<div class="overlay-top"></div>'
      + '<span class="proj-badge ' + item.badge.className + '">' + (item.badge.pulse ? '<span class="pulse"></span>' : '') + item.badge.text + '</span>'
      + '</div>'
      + '<div class="proj-body">'
      + '<div class="row-between"><span class="proj-num">' + item.number + '</span>' + projectLink + '</div>'
      + '<h3>' + item.title + '</h3>'
      + '<p class="proj-desc">' + item.description + '</p>'
      + '<div class="proj-tags">' + createBadgeList(item.tags) + '</div>'
      + '</div></article>';
  }).join('');
}

function renderSkillCards(items) {
  return items.map(function(item) {
    return '<article class="card skill-card reveal ' + item.delay + '">'
      + '<div class="head"><div style="color:' + item.color + '">' + ICONS[item.icon] + '</div><span>' + item.title + '</span></div>'
      + '<div class="skill-levels">'
      + item.levels.map(function(level) {
          return '<div><p class="skill-level-label">' + level.label + '</p><div class="badges">' + createBadgeList(level.items) + '</div></div>';
        }).join('')
      + '</div>'
      + '</article>';
  }).join('');
}

function mountContent() {
  $('#nav-desktop-root').innerHTML = renderDesktopNav(DATA.nav);
  $('#nav-mobile-root').innerHTML = renderMobileNav(DATA.nav);
  $('#hero-tags').innerHTML = renderHeroTags(DATA.heroTags);
  $('#hero-social').innerHTML = renderSocialLinks(DATA.socialLinks);
  $('#hero-stats').innerHTML = renderStats(DATA.stats);
  $('#about-content').innerHTML = renderAboutSection(DATA.about);
  $('#about-highlights').innerHTML = createBadgeList(DATA.about.highlights);
  $('#profile-grid').innerHTML = renderProfileCards(DATA.profileCards);
  $('#timeline').innerHTML = renderExperienceItems(DATA.experiences);
  $('#education-grid').innerHTML = renderEducationCards(DATA.education);
  $('#academic-projects').innerHTML = renderAcademicProjectCards(DATA.academicProjects);
  $('#projects-grid').innerHTML = renderProjectCards(DATA.projects);
  $('#skills-grid').innerHTML = renderSkillCards(DATA.skillGroups);
}

function goTo(id) {
  var el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 68, behavior: 'smooth' });
}

function bindScrollTargets() {
  document.addEventListener('click', function(event) {
    var trigger = event.target.closest('[data-target], [data-scroll-target]');
    if (!trigger) return;
    var targetId = trigger.dataset.target || trigger.dataset.scrollTarget;
    if (!targetId) return;
    if (trigger.tagName === 'A') event.preventDefault();
    goTo(targetId);
  });
}

function setupResponsiveHero() {
  var heroRight = $('#hero-right');
  function syncHeroVisibility() {
    heroRight.hidden = window.innerWidth < 900;
  }
  syncHeroVisibility();
  window.addEventListener('resize', syncHeroVisibility);
}

function setupTypewriter() {
  var typingEl = $('#term-typing');
  if (!typingEl) return;
  var commands = DATA.terminalCommands;
  var commandIndex = 0;
  var charIndex = 0;
  var isTypingForward = true;
  var timeoutId;

  function loop() {
    var command = commands[commandIndex];
    if (isTypingForward) {
      charIndex += 1;
      typingEl.textContent = command.slice(0, charIndex);
      if (charIndex >= command.length) {
        isTypingForward = false;
        timeoutId = setTimeout(loop, 1800);
        return;
      }
      timeoutId = setTimeout(loop, 80);
      return;
    }

    charIndex -= 1;
    typingEl.textContent = command.slice(0, charIndex);
    if (charIndex <= 0) {
      isTypingForward = true;
      commandIndex = (commandIndex + 1) % commands.length;
      timeoutId = setTimeout(loop, 400);
      return;
    }
    timeoutId = setTimeout(loop, 40);
  }

  timeoutId = setTimeout(loop, 1200);
  window.addEventListener('beforeunload', function() { clearTimeout(timeoutId); });
}

function setupActiveNav() {
  var sections = $$('section[id], footer[id]');
  var desktopLinks = $$('nav.desktop .nav-link');
  var mobileButtons = $$('nav.mobile .dock-btn');

  function updateNav() {
    var currentId = sections.length ? sections[0].id : 'accueil';
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 140) currentId = section.id;
    });
    desktopLinks.forEach(function(link) {
      link.classList.toggle('active', link.dataset.target === currentId);
    });
    mobileButtons.forEach(function(button) {
      button.classList.toggle('active', button.dataset.target === currentId);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

function setupRevealOnScroll() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  $$('.reveal').forEach(function(element) {
    observer.observe(element);
  });
}

function init() {
  mountContent();
  bindScrollTargets();
  setupResponsiveHero();
  setupTypewriter();
  setupActiveNav();
  setupRevealOnScroll();
}

init();
