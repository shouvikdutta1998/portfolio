(function () {
  'use strict';

  const bounties = [
    {
      title: 'PHPGurukul Vehicle Record Management System — CVE-2024-46531',
      icon: 'fa-database',
      severity: 'medium',
      severityLabel: 'Medium',
      vulnType: 'SQL Injection',
      bounty: 'CVE Assigned',
      description: 'Identified a SQL injection vulnerability in PHPGurukul Vehicle Record Management System v1.0, exploitable via the searchinputdata parameter on /index.php, allowing manipulation of backend SQL queries.',
      accomplishments: [
        'Discovered an unsanitized searchinputdata parameter on the search endpoint',
        'Demonstrated SQL injection against /index.php',
        'Assigned CVE-2024-46531 (CVSS 3.1: 6.3, Medium)',
        'Publicly disclosed and indexed in the National Vulnerability Database'
      ]
    },
    {
      title: 'PHPGurukul Bus Pass Management System — CVE-2024-44798',
      icon: 'fa-code',
      severity: 'medium',
      severityLabel: 'Medium',
      vulnType: 'Cross-Site Scripting (XSS)',
      bounty: 'CVE Assigned',
      description: 'Identified a Cross-Site Scripting vulnerability in PHPGurukul Bus Pass Management System v1.0, exploitable via the fromdate and todate parameters on the admin reports page.',
      accomplishments: [
        'Discovered unsanitized fromdate and todate parameters',
        'Demonstrated script execution via /admin/pass-bwdates-reports-details.php',
        'Assigned CVE-2024-44798 (CVSS 3.1: 6.3, Medium)',
        'Publicly disclosed and indexed in the National Vulnerability Database'
      ]
    },
    {
      title: 'Runcloud.io',
      image: './img/skills/android.png',
      severity: 'high',
      severityLabel: 'High',
      vulnType: 'Cross-Site Scripting (XSS)',
      bounty: '$100',
      description: 'Identified a Cross-Site Scripting (XSS) vulnerability within the Runcloud.io Android application, allowing injection of malicious scripts through an unsanitized input field.',
      accomplishments: [
        'Discovered stored XSS in the Android application',
        'Demonstrated script execution via crafted payload',
        'Reported through the responsible disclosure program',
        'Bounty rewarded: $100'
      ]
    },
    {
      title: 'Central Bancompany',
      image: './img/projects/central.png',
      severity: 'critical',
      severityLabel: 'Critical',
      vulnType: 'Business Logic Flaw',
      bounty: '$100',
      description: 'A business logic vulnerability that allowed adding $10,000 to a real account by paying only $2.50, exploited by tampering with a value parameter.',
      accomplishments: [
        'Business logic vulnerability identified in under 5 minutes',
        'Exploited via parameter tampering',
        'Added $10,000 balance by paying only $2.50',
        'Vulnerability reported and bounty rewarded: $100'
      ]
    },
    {
      title: 'Red Wolf',
      image: './img/projects/redwolf.png',
      severity: 'high',
      severityLabel: 'High',
      vulnType: 'Application-Level DoS',
      bounty: '₹250',
      description: 'An application-level denial-of-service condition triggered through the address parameter on the user registration page, degrading site performance.',
      accomplishments: [
        'Application-level denial-of-service identified',
        'Exploited via the address parameter using Burp Suite',
        'Vulnerability reported and bounty rewarded: ₹250'
      ]
    },
    {
      title: 'Cox Communications',
      image: './img/projects/cox.png',
      severity: 'high',
      severityLabel: 'High',
      vulnType: 'IoT Exposure',
      bounty: 'Acknowledged',
      description: 'Using Shodan.io, identified exposed Telnet services on two Cox Communications IoT cameras, allowing memory dumping and remote shutdown.',
      accomplishments: [
        'Discovered exposed devices via Shodan dorking',
        'Dumped device memory over an open Telnet service',
        'Remotely powered down the affected cameras',
        'Vulnerability reported and formally acknowledged'
      ]
    },
    {
      title: 'Indigo Airlines',
      image: './img/projects/Indigo.jpeg',
      severity: 'medium',
      severityLabel: 'Medium',
      vulnType: 'Stored HTML Injection',
      bounty: 'Acknowledged',
      description: 'A stored HTML injection vulnerability in the Indigo support chat box, allowing arbitrary HTML payloads to execute during live support conversations.',
      accomplishments: [
        'Identified a stored HTML injection point in the chat widget',
        'Successfully injected and executed HTML payloads',
        'Vulnerability reported and formally acknowledged'
      ]
    },
    {
      title: 'NASA',
      image: './img/projects/NASA.jpeg',
      severity: 'medium',
      severityLabel: 'Medium',
      vulnType: 'Directory Listing / Sensitive Data Exposure',
      bounty: 'Acknowledged',
      description: 'Using Exploit-DB references and modified Google dorks, discovered a NASA subdomain exposing sensitive data through unrestricted directory listing.',
      accomplishments: [
        'Cross-referenced Exploit-DB advisories with custom Google dorks',
        'Located a NASA subdomain with directory listing enabled',
        'Sensitive data exposure confirmed',
        'Vulnerability reported and formally acknowledged'
      ]
    }
  ];

  // ---- Terminal typing effect ----
  const terminalLines = [
    { prompt: '$ whoami', out: 'shouvik-dutta — offensive security professional' },
    { prompt: '$ cat experience.txt', out: '7 years | AppSec, Pentesting, Red Team, VAPT' },
    { prompt: '$ cat role.txt', out: 'Senior Associate — Offensive Security @ PwC AC' },
    { prompt: '$ cat certs.txt', out: 'OSCP · CRTO · CEH v11' },
    { prompt: '$ ./run_scan.sh --target=web,api,mobile,cloud,ad', out: '[+] scan complete — 15+ findings disclosed responsibly' }
  ];

  function typeTerminal() {
    const body = document.getElementById('terminal-body');
    if (!body) return;
    let lineIndex = 0;

    function typeLine() {
      if (lineIndex >= terminalLines.length) {
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        body.appendChild(cursor);
        return;
      }
      const { prompt, out } = terminalLines[lineIndex];
      const promptEl = document.createElement('div');
      promptEl.className = 'line prompt';
      body.appendChild(promptEl);

      let charIndex = 0;
      const typeChar = () => {
        if (charIndex <= prompt.length) {
          promptEl.textContent = prompt.slice(0, charIndex);
          charIndex++;
          setTimeout(typeChar, 22);
        } else {
          const outEl = document.createElement('div');
          outEl.className = 'line out';
          outEl.textContent = out;
          body.appendChild(outEl);
          lineIndex++;
          setTimeout(typeLine, 260);
        }
      };
      typeChar();
    }
    typeLine();
  }

  // ---- Severity badge class map ----
  function severityBadgeClass(sev) {
    if (sev === 'critical') return 'sev-critical';
    if (sev === 'high') return 'sev-high';
    return 'sev-medium';
  }

  // ---- Render bounty cards ----
  function renderBounties() {
    const list = document.getElementById('bounty-list');
    if (!list) return;
    bounties.forEach((b, i) => {
      const card = document.createElement('div');
      card.className = 'bounty-card reveal';
      const thumb = b.image
        ? `<img class="bounty-thumb" src="${b.image}" alt="${b.title} cover">`
        : `<div class="bounty-thumb bounty-thumb-icon"><i class="fa-solid ${b.icon}" aria-hidden="true"></i></div>`;
      card.innerHTML = `
        ${thumb}
        <div class="bounty-main">
          <div class="title-row">
            <h4>${b.title}</h4>
            <span class="badge ${severityBadgeClass(b.severity)}">${b.severityLabel} · ${b.vulnType}</span>
          </div>
          <p>${b.description}</p>
        </div>
        <div class="bounty-side">
          <span class="bounty-bounty">${b.bounty}</span>
        </div>
        <button class="expand-toggle" data-index="${i}">+ show accomplishments</button>
        <div class="bounty-details" id="bounty-details-${i}">
          <ul>${b.accomplishments.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      `;
      list.appendChild(card);
    });

    list.addEventListener('click', (e) => {
      const btn = e.target.closest('.expand-toggle');
      if (!btn) return;
      const idx = btn.dataset.index;
      const details = document.getElementById(`bounty-details-${idx}`);
      const isOpen = details.classList.toggle('open');
      btn.textContent = isOpen ? '- hide accomplishments' : '+ show accomplishments';
    });
  }

  // ---- Nav behavior ----
  function initNav() {
    const nav = document.getElementById('site-nav');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('primary-links');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-close').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // ---- Back to top ----
  function initToTop() {
    const btn = document.getElementById('to-top');
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- Scroll reveal ----
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(item => observer.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    typeTerminal();
    renderBounties();
    initNav();
    initToTop();
    initReveal();
    // observe newly rendered bounty cards too
    setTimeout(initReveal, 50);
  });
})();
