/* =========================================================
   comlab-core.js — SHARED CORE (Revision 1)
   Ginagamit ng lahat ng page pagkatapos mag-login.

   - COMLAB.init()   : chine-check ang session at role, ginagawa ang sidebar
   - COMLAB.api.*    : mga tawag sa server
   - Kapag Laboratory Technician ang nag-save, babalik ang { pending: true }
     dahil kailangan pa itong i-approve ng Laboratory Coordinator.
   ========================================================= */

const COMLAB = (() => {

  let _session = null;

  /* ===== Logo — ginagamit sa gitna ng QR code ===== */
  const LOGO_DATA_URI = "data:image/png;base64,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";

  /* ===== Constants ===== */
  const ROLE_LABELS = { dean: "Dean", coordinator: "Laboratory Coordinator", technician: "Laboratory Technician" };
  const PARTS = ["monitor", "keyboard", "mouse", "gpu", "cpu", "motherboard", "ram1", "ram2", "psu", "ssd"];
  const PART_LABELS = {
    monitor: "Monitor", keyboard: "Keyboard", mouse: "Mouse", gpu: "GPU", cpu: "CPU",
    motherboard: "Motherboard", ram1: "RAM 1", ram2: "RAM 2", psu: "PSU", ssd: "SSD",
  };
  const STATUS_LABELS = { "in-use": "In Use", maintenance: "Under Maintenance", defective: "Defective", "in-storage": "In Storage" };
  const STORAGE_CAT_LABELS = { monitor: "Monitor", keyboard: "Keyboard", mouse: "Mouse", gpu: "GPU", cpu: "CPU",
    motherboard: "Motherboard", ram: "RAM", psu: "PSU", ssd: "SSD", other: "Other" };
  const MAINT_TYPE_LABELS = {
    repair: "Repair", replacement: "Replacement", cleaning: "Cleaning",
    inspection: "Inspection", upgrade: "Upgrade", other: "Other",
  };
  const MAINT_STATUS_LABELS = { "in-progress": "In Progress", complete: "Complete" };
  const DEFAULT_LABS = ["COMLAB 1", "COMLAB 2", "COMLAB 3", "COMLAB 4", "COMLAB 5", "COMLAB 6", "COMLAB 7"];

  /* Sinong role ang puwedeng pumasok sa bawat page */
  const PAGE_ROLES = {
    "dashboard.html":   ["dean", "coordinator", "technician"],
    "inventory.html":   ["dean", "coordinator", "technician"],
    "storage.html":     ["dean", "coordinator", "technician"],
    "spare-parts.html": ["dean", "coordinator"],
    "maintenance.html": ["coordinator", "technician"],
    "archive.html":     ["dean", "coordinator", "technician"],
    "reports.html":     ["dean", "coordinator"],
    "settings.html":    ["dean", "coordinator", "technician"],
  };

  const ICONS = {
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    inventory: '<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M6 18h6M9 14v4" stroke-linecap="round"/><rect x="18" y="4" width="4" height="14" rx="1"/>',
    storage: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z" stroke-linejoin="round"/><path d="M3 7l9 4 9-4M12 11v10M7.5 5l9 4" stroke-linecap="round" stroke-linejoin="round"/>',
    spare: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" stroke-linejoin="round"/>',
    scanner: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 18v3M17 21h4" stroke-linecap="round"/>',
    maintenance: '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4" stroke-linecap="round"/>',
    archive: '<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M10 12h4" stroke-linecap="round"/>',
    reports: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke-linejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke-linecap="round"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>',
  };

  const NAV = [
    { label: "Main", items: [
      { href: "dashboard.html", text: "Dashboard", icon: "dashboard" },
      { href: "inventory.html", text: "Equipment Inventory", icon: "inventory" },
      { href: "storage.html", text: "Storage", icon: "storage" },
      { href: "spare-parts.html", text: "Spare Parts & Supplies", icon: "spare" },
    ]},
    { label: "Operations", items: [
      { href: "maintenance.html", text: "Maintenance Log", icon: "maintenance" },
      { href: "archive.html", text: "Archive", icon: "archive" },
      { href: "reports.html", text: "Reports", icon: "reports" },
    ]},
    { label: "System", items: [
      { href: "settings.html", text: "Settings", icon: "settings", badge: "navBadgeSettings" },
    ]},
  ];

  /* =========================================================
     HTTP
     ========================================================= */
  async function call(method, path, body) {
    try {
      const res = await fetch(path, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: body ? JSON.stringify(body) : undefined,
      });
      if (res.status === 401 && !path.includes("/auth/")) {
        window.location.replace("index.html");
        return { ok: false, error: "Session expired." };
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return { ok: false, status: res.status, error: data.error || "Server error. Please try again." };
      return { ok: true, status: res.status, ...data };
    } catch (err) {
      return { ok: false, error: "Cannot reach the server. Is it running?" };
    }
  }

  const api = {
    pcs:          (archived) => call("GET", "/api/pcs" + (archived ? "?archived=1" : "")),
    pc:           (id) => call("GET", "/api/pcs/" + encodeURIComponent(id)),
    serverInfo:   () => call("GET", "/api/server-info"),
    addPc:        (d) => call("POST", "/api/pcs", d),
    updatePc:     (id, d) => call("PUT", "/api/pcs/" + id, d),
    archivePc:    (id) => call("POST", "/api/pcs/" + id + "/archive"),
    restorePc:    (id) => call("POST", "/api/pcs/" + id + "/restore"),

    storage:      () => call("GET", "/api/storage"),
    addStorage:   (d) => call("POST", "/api/storage", d),
    updateStorage:(id, d) => call("PUT", "/api/storage/" + id, d),
    deleteStorage:(id) => call("DELETE", "/api/storage/" + id),
    deployStorage:(id, d) => call("POST", "/api/storage/" + id + "/deploy", d),
    spareParts:   () => call("GET", "/api/spare-parts"),
    addSpare:     (d) => call("POST", "/api/spare-parts", d),
    updateSpare:  (id, d) => call("PUT", "/api/spare-parts/" + id, d),
    deleteSpare:  (id) => call("DELETE", "/api/spare-parts/" + id),

    maintenance:  (archived) => call("GET", "/api/maintenance" + (archived ? "?archived=1" : "")),
    addMaint:     (d) => call("POST", "/api/maintenance", d),
    updateMaint:  (id, d) => call("PUT", "/api/maintenance/" + id, d),
    archiveMaint: (id) => call("POST", "/api/maintenance/" + id + "/archive"),
    restoreMaint: (id) => call("POST", "/api/maintenance/" + id + "/restore"),

    requests:     (status) => call("GET", "/api/requests" + (status ? "?status=" + status : "")),
    approveReq:   (id, note) => call("POST", "/api/requests/" + id + "/approve", { note }),
    declineReq:   (id, note) => call("POST", "/api/requests/" + id + "/decline", { note }),
    pendingCounts:() => call("GET", "/api/pending-counts"),

    users:        () => call("GET", "/api/users"),
    approveUser:  (id) => call("POST", "/api/users/" + id + "/approve"),
    rejectUser:   (id) => call("POST", "/api/users/" + id + "/reject"),
    setRole:      (id, role) => call("PUT", "/api/users/" + id + "/role", { role }),
    deleteUser:   (id) => call("DELETE", "/api/users/" + id),
    pwRequests:   () => call("GET", "/api/password-requests"),
    resolvePw:    (id, newPassword) => call("POST", "/api/password-requests/" + id + "/resolve", { newPassword }),
    declinePw:    (id) => call("POST", "/api/password-requests/" + id + "/decline"),

    activity:     () => call("GET", "/api/activity"),
    clearActivity:() => call("DELETE", "/api/activity"),
    backup:       () => call("GET", "/api/backup"),
    restore:      (data) => call("POST", "/api/restore", data),
  };

  /* =========================================================
     INIT — tawagin sa simula ng bawat page:  await COMLAB.init()
     ========================================================= */
  function currentPage() {
    return (location.pathname.split("/").pop() || "dashboard.html").toLowerCase();
  }
  function canOpen(page, role) {
    const allowed = PAGE_ROLES[page];
    return !allowed || allowed.includes(role || getRole());
  }

  async function init() {
    const res = await call("GET", "/api/auth/me");
    if (!res.ok) { window.location.replace("index.html"); return false; }
    _session = res.user;
    const role = _session.role;
    const page = currentPage();
    if (!canOpen(page, role)) { window.location.replace("dashboard.html"); return false; }

    const root = document.documentElement;
    root.dataset.role = role;
    root.dataset.page = page;

    renderSidebar(role, page);
    fillTopbar();
    refreshBadge();
    return true;
  }

  function renderSidebar(role, page) {
    const el = document.getElementById("sidebar");
    if (!el) return;
    let html = `
      <div class="brand-block">
        <span class="logo"><img src="logo2.jfif" alt="School of Computer Studies" /></span>
        <div class="text"><span class="name">ComLab IMS</span></div>
      </div>`;
    for (const g of NAV) {
      const items = g.items.filter(i => canOpen(i.href, role));
      if (!items.length) continue;
      html += `<div class="nav-group"><span class="nav-label">${g.label}</span>`;
      for (const i of items) {
        html += `<a class="nav-item${i.href === page ? " is-active" : ""}" href="${i.href}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[i.icon]}</svg>
          ${i.text}${i.badge ? `<span class="nav-badge" id="${i.badge}" style="display:none">0</span>` : ""}
        </a>`;
      }
      html += `</div>`;
    }
    html += `<div class="sidebar-foot">
        <div class="ver">v3.0.0 · Node + MySQL</div>
        <span class="status"><i class="pulse-dot"></i> System Online</span>
      </div>`;
    el.innerHTML = html;
  }

  function fillTopbar() {
    const s = _session;
    const name = document.getElementById("userName");
    const av = document.getElementById("userAvatar");
    if (name) name.textContent = s.fullName || s.username;
    if (av) av.textContent = initialsOf(s.fullName || s.username);
    document.querySelectorAll(".user-info").forEach(el => { el.dataset.roleLabel = ROLE_LABELS[s.role] || s.role; });
    const lo = document.getElementById("logoutBtn");
    if (lo) lo.addEventListener("click", logout);
    const mt = document.getElementById("mobileToggle");
    const sb = document.getElementById("sidebar");
    if (mt && sb) mt.addEventListener("click", () => sb.classList.toggle("is-open"));
  }

  async function refreshBadge() {
    const b = document.getElementById("navBadgeSettings");
    if (!b) return;
    const r = await api.pendingCounts();
    if (!r.ok) return;
    const n = (r.accounts || 0) + (r.passwordRequests || 0) + (r.changeRequests || 0);
    b.textContent = n;
    b.style.display = n > 0 ? "" : "none";
  }

  function getSession() { return _session; }
  function getRole() { return _session ? _session.role : null; }
  function roleLabel(role) { return ROLE_LABELS[role || getRole()] || ""; }
  function is(...roles) { return roles.includes(getRole()); }

  async function logout() {
    await call("POST", "/api/auth/logout");
    try { localStorage.removeItem("comlab.rememberedUser"); } catch (e) {}
    window.location.replace("index.html");
  }

  /* Pagkatapos mag-save: ipakita kung na-save o naghihintay ng approval */
  function afterSave(res, okMessage) {
    if (!res.ok) { showToast(res.error, "error"); return false; }
    if (res.pending) showToast("Sent to the Laboratory Coordinator for approval.", "info");
    else showToast(okMessage || res.message || "Saved.", "success");
    refreshBadge();
    return true;
  }

  /* =========================================================
     UI HELPERS
     ========================================================= */
  function escapeHtml(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, m => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[m]));
  }
  const esc = escapeHtml;

  function initialsOf(name) {
    if (!name) return "U";
    const p = name.trim().split(/\s+/);
    return (p.length === 1 ? p[0].charAt(0) : p[0].charAt(0) + p[p.length - 1].charAt(0)).toUpperCase();
  }

  function showToast(message, type = "success") {
    let c = document.getElementById("toastContainer");
    if (!c) { c = document.createElement("div"); c.id = "toastContainer"; document.body.appendChild(c); }
    const t = document.createElement("div");
    t.className = `toast ${type}`;
    const icon = type === "success"
      ? '<path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>'
      : type === "info" ? '<path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/>'
      : '<path d="M12 8v5M12 17h.01" stroke-linecap="round"/>';
    t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/>${icon}</svg><span>${esc(message)}</span>`;
    c.appendChild(t);
    setTimeout(() => {
      t.style.transition = "all 0.3s"; t.style.opacity = "0"; t.style.transform = "translateY(8px)";
      setTimeout(() => t.remove(), 300);
    }, type === "info" ? 4200 : 2800);
  }

  function emptyStateHTML(title, message, buttonHTML = "") {
    return `<div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20 7L12 3 4 7v10l8 4 8-4V7z" stroke-linejoin="round"/>
          <path d="M4 7l8 4 8-4M12 11v10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3>${esc(title)}</h3><p>${message}</p>${buttonHTML}
      </div>`;
  }

  function statusBadge(s) {
    return `<span class="badge ${esc(s)}"><i class="b-dot"></i>${esc(STATUS_LABELS[s] || s)}</span>`;
  }
  function maintStatusBadge(s) {
    if (!s) return '<span class="muted">—</span>';
    const cls = s === "complete" ? "available" : "maintenance";
    return `<span class="badge ${cls}"><i class="b-dot"></i>${esc(MAINT_STATUS_LABELS[s] || s)}</span>`;
  }
  function stockBadge(sp) {
    const cls = sp.stock === "in" ? "available" : sp.stock === "low" ? "maintenance" : "defective";
    return `<span class="badge ${cls}"><i class="b-dot"></i>${esc(sp.stockLabel)}</span>`;
  }

  function fmtDate(v) {
    if (!v) return "—";
    const d = new Date(String(v).length === 10 ? v + "T00:00:00" : v);
    if (isNaN(d)) return esc(v);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }
  function fmtDateTime(v) {
    if (!v) return "—";
    const d = new Date(v);
    if (isNaN(d)) return esc(v);
    return d.toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }
  function today() {
    const d = new Date(), p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  /* Natural sort: PC-2 bago PC-10 */
  function natCompare(a, b) {
    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
  }
  function sortPcs(list) {
    return [...list].sort((a, b) => natCompare(a.lab, b.lab) || natCompare(a.pcNo, b.pcNo));
  }
  function labsOf(list) {
    return [...new Set(list.map(p => p.lab))].sort(natCompare);
  }

  /* Isang cell ng component: Brand + Serial (maliit) */
  function partCell(c) {
    if (!c || (!c.brand && !c.serial && !c.capacity)) return '<span class="muted">—</span>';
    return `<div class="part-cell"><span class="pb">${esc(c.brand) || "—"}${c.capacity ? ` <em>${esc(c.capacity)}</em>` : ""}</span>${c.serial ? `<span class="ps">${esc(c.serial)}</span>` : ""}</div>`;
  }
  function ramCell(pc) {
    const a = pc.components.ram1, b = pc.components.ram2;
    const has = c => c && (c.brand || c.serial);
    if (!has(b)) return partCell(a);
    if (!has(a)) return partCell(b);
    return partCell(a) + partCell(b);
  }
  const TABLE_PARTS = ["monitor", "keyboard", "mouse", "gpu", "cpu", "motherboard", "ram", "psu", "ssd"];
  function pcTableHead(extra = "") {
    return `<tr><th>PC No.</th><th>Laboratory</th>${TABLE_PARTS.map(p => `<th>${p === "ram" ? "RAM" : PART_LABELS[p]}</th>`).join("")}<th>Status</th>${extra}</tr>`;
  }
  function pcTableCells(pc) {
    return `<td class="cell-strong cell-mono">${esc(pc.pcNo)}</td><td>${esc(pc.lab)}</td>`
      + TABLE_PARTS.map(p => `<td>${p === "ram" ? ramCell(pc) : partCell(pc.components[p])}</td>`).join("")
      + `<td>${statusBadge(pc.status)}</td>`;
  }

  /* Detalye ng PC set (para sa View Details / Scanner / Archive) */
  function pcDetailsHTML(pc) {
    const rows = PARTS.filter(p => p !== "ram2" || (pc.components.ram2 && (pc.components.ram2.brand || pc.components.ram2.serial)))
      .map(p => {
        const c = pc.components[p] || {};
        return `<tr><th>${PART_LABELS[p]}</th><td>${esc(c.brand) || '<span class="muted">—</span>'}${p === "ssd" && c.capacity ? ` <span class="muted">(${esc(c.capacity)})</span>` : ""}</td><td class="cell-mono">${esc(c.serial) || '<span class="muted">—</span>'}</td></tr>`;
      }).join("");
    return `<div class="pc-detail-head">
        <div><span class="lbl">PC No.</span><strong class="cell-mono">${esc(pc.pcNo)}</strong></div>
        <div><span class="lbl">Laboratory</span><strong>${esc(pc.lab)}</strong></div>
        <div><span class="lbl">Status</span>${statusBadge(pc.status)}</div>
      </div>
      <div class="table-wrap"><table class="table comp-table">
        <thead><tr><th>Component</th><th>Brand</th><th>Serial Number</th></tr></thead>
        <tbody>${rows}</tbody></table></div>`;
  }

  /* =========================================================
     MODALS — gumagamit ng .modal-backdrop.is-open ng comlab.css
     ========================================================= */
  function openModal(el) { el.classList.add("is-open"); }
  function closeModal(el) { el.classList.remove("is-open"); }
  function wireModal(el, onClose) {
    const close = () => { closeModal(el); if (onClose) onClose(); };
    el.addEventListener("click", e => { if (e.target === el) close(); });
    el.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", close));
    return close;
  }
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const open = [...document.querySelectorAll(".modal-backdrop.is-open")].pop();
    if (open) open.classList.remove("is-open");
  });

  /* Confirm / prompt na hindi native (mas maganda tingnan) */
  function confirmBox(message, { title = "Please confirm", okText = "Confirm", danger = false, input = null } = {}) {
    return new Promise(resolve => {
      const wrap = document.createElement("div");
      wrap.className = "modal-backdrop is-open";
      wrap.innerHTML = `<div class="modal modal-sm">
          <div class="modal-head"><div><h2>${esc(title)}</h2></div></div>
          <div class="modal-body"><p style="margin:0 0 ${input ? "12px" : "0"};color:var(--ink-2);line-height:1.55">${message}</p>
            ${input ? `<div class="field"><label>${esc(input.label)}</label><input type="${input.type || "text"}" id="cbInput" placeholder="${esc(input.placeholder || "")}" /></div>` : ""}
          </div>
          <div class="modal-foot">
            <button type="button" class="btn btn-ghost" data-v="0">Cancel</button>
            <button type="button" class="btn ${danger ? "btn-danger" : "btn-primary"}" data-v="1">${esc(okText)}</button>
          </div></div>`;
      document.body.appendChild(wrap);
      const inp = wrap.querySelector("#cbInput");
      if (inp) setTimeout(() => inp.focus(), 50);
      const done = (v) => { wrap.remove(); resolve(v); };
      wrap.addEventListener("click", e => {
        if (e.target === wrap) return done(input ? null : false);
        const b = e.target.closest("[data-v]");
        if (!b) return;
        if (b.dataset.v === "1") done(input ? inp.value : true); else done(input ? null : false);
      });
      if (inp) inp.addEventListener("keydown", e => { if (e.key === "Enter") done(inp.value); });
    });
  }

  /* =========================================================
     QR CODE (qrcodejs) — may logo sa gitna
     ========================================================= */
  function renderQr(container, pc, size = 300) {
    container.innerHTML = "";
    if (typeof QRCode === "undefined") {
      container.innerHTML = '<div class="qr-error"><strong>QR library not loaded.</strong>Check the internet connection, then refresh the page.</div>';
      return false;
    }
    const text = pc.qrData || JSON.stringify({ sys: "ComLab-IMS", id: String(pc.id), pc: pc.pcNo, lab: pc.lab });
    const levels = [
      { lvl: QRCode.CorrectLevel.H, logo: true }, { lvl: QRCode.CorrectLevel.Q, logo: true },
      { lvl: QRCode.CorrectLevel.M, logo: false }, { lvl: QRCode.CorrectLevel.L, logo: false },
    ];
    let built = null;
    for (const step of levels) {
      try {
        new QRCode(container, { text, width: size, height: size, colorDark: "#0c1330", colorLight: "#ffffff", correctLevel: step.lvl });
        built = step; break;
      } catch (e) { container.innerHTML = ""; }
    }
    if (!built) { container.innerHTML = '<div class="qr-error"><strong>Could not build the QR code.</strong></div>'; return false; }
    if (built.logo) {
      const o = document.createElement("div");
      o.className = "qr-logo-overlay";
      o.innerHTML = `<img src="${LOGO_DATA_URI}" alt="ComLab Logo" />`;
      container.appendChild(o);
    }
    container.dataset.logo = built.logo ? "1" : "";
    return true;
  }

  /* Gumawa ng PNG (QR + label) — para sa Download at Print */
  function qrToDataUrl(container, pc) {
    return new Promise(resolve => {
      const canvas = container.querySelector("canvas");
      const img = [...container.querySelectorAll("img")].find(i => !i.closest(".qr-logo-overlay"));
      const out = document.createElement("canvas");
      const size = 320, top = 66, bottom = 16;
      out.width = size; out.height = size + top + bottom - 40;
      const ctx = out.getContext("2d");
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, out.width, out.height);
      ctx.fillStyle = "#0c1330"; ctx.textAlign = "center";
      ctx.font = "bold 20px Outfit, Arial, sans-serif"; ctx.fillText(pc.pcNo, size / 2, 26);
      ctx.font = "11px monospace"; ctx.fillStyle = "#56607a";
      ctx.fillText((pc.lab + " · COMLAB IMS").toUpperCase(), size / 2, 46);
      const q = size - 40, qx = 20, qy = top - 6;
      const finish = () => resolve(out.toDataURL("image/png"));
      const drawLogo = () => {
        if (container.dataset.logo !== "1") return finish();
        const ls = Math.round(q * 0.22), lx = qx + (q - ls) / 2, ly = qy + (q - ls) / 2;
        ctx.fillStyle = "#fff"; ctx.fillRect(lx - 4, ly - 4, ls + 8, ls + 8);
        const logo = new Image();
        logo.onload = () => { ctx.drawImage(logo, lx, ly, ls, ls); finish(); };
        logo.onerror = finish;
        logo.src = LOGO_DATA_URI;
      };
      const draw = (src) => { ctx.drawImage(src, qx, qy, q, q); drawLogo(); };
      if (canvas) draw(canvas);
      else if (img && img.src) { const t = new Image(); t.onload = () => draw(t); t.onerror = finish; t.src = img.src; }
      else finish();
    });
  }

  async function downloadQr(container, pc) {
    const url = await qrToDataUrl(container, pc);
    const a = document.createElement("a");
    a.download = `QR_${String(pc.pcNo).replace(/[^\w.-]+/g, "_")}.png`;
    a.href = url; a.click();
    showToast("QR code downloaded.", "success");
  }

  async function printQr(container, pc) {
    const url = await qrToDataUrl(container, pc);
    printHTML(`<div style="text-align:center;padding-top:30px"><img src="${url}" style="width:300px" /></div>`, "QR " + pc.pcNo);
  }

  /* =========================================================
     PRINT — gamit ang nakatagong iframe (walang popup blocker)
     ========================================================= */
  function printHTML(bodyHTML, title = "ComLab IMS", extraCss = "") {
    const old = document.getElementById("comlabPrintFrame");
    if (old) old.remove();
    const f = document.createElement("iframe");
    f.id = "comlabPrintFrame";
    f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden";
    document.body.appendChild(f);
    const doc = f.contentWindow.document;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${esc(title)}</title>
      <base href="${location.origin}/">
      <style>
        @page { size: A4; margin: 14mm 12mm; }
        * { box-sizing: border-box; }
        body { font-family: Arial, Helvetica, sans-serif; color: #111; font-size: 11.5px; margin: 0; }
        .rpt-head { display: flex; align-items: center; gap: 18px; padding-bottom: 8px; border-bottom: 2px solid #333; }
        .rpt-head .logos { display: flex; gap: 6px; align-items: center; flex-shrink: 0; }
        .rpt-head img { height: 66px; width: auto; max-width: 74px; object-fit: contain; }
        .rpt-head .txt { text-align: left; line-height: 1.2; }
        .rpt-head .t1 { font-size: 15px; font-family: Arial, sans-serif; }
        .rpt-head .t2 { font-size: 23px; font-weight: 700; font-family: Arial, sans-serif; color: #c62828; letter-spacing: .3px; }
        .rpt-head .t3 { font-size: 13px; font-family: Arial, sans-serif; }
        .rpt-head .t4 { font-size: 18px; font-weight: 700; font-family: "Courier New", Courier, monospace; color: #1b5e20; letter-spacing: 1.5px; margin-top: 2px; }
        h1 { font-size: 15px; text-align: center; margin: 16px 0 2px; text-transform: uppercase; letter-spacing: .4px; }
        .sub { text-align: center; color: #444; margin-bottom: 14px; }
        h2 { font-size: 12.5px; margin: 16px 0 6px; text-transform: uppercase; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 8px; page-break-inside: auto; }
        tr { page-break-inside: avoid; }
        th, td { border: 1px solid #555; padding: 4px 5px; text-align: left; vertical-align: top; }
        th { background: #e8efe8; font-size: 10.5px; text-transform: uppercase; }
        td small { display: block; color: #555; font-family: monospace; font-size: 9.5px; }
        .num { text-align: center; }
        .sig { display: flex; justify-content: space-between; margin-top: 40px; gap: 30px; }
        .sig div { flex: 1; text-align: center; }
        .sig .line { border-top: 1px solid #111; margin-top: 36px; padding-top: 3px; font-weight: 700; }
        .muted { color: #777; }
        ${extraCss}
      </style></head><body>${bodyHTML}</body></html>`);
    doc.close();
    const go = () => { try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) {} };
    const imgs = [...doc.images];
    let left = imgs.length;
    if (!left) return setTimeout(go, 150);
    const one = () => { if (--left === 0) setTimeout(go, 150); };
    imgs.forEach(im => {
      if (im.complete) one();
      else { im.addEventListener("load", one); im.addEventListener("error", () => { im.style.visibility = "hidden"; one(); }); }
    });
    setTimeout(() => { if (left > 0) { left = 0; go(); } }, 4000);
  }

  /* Official header ng City College of Tagaytay (para sa Reports) */
  function officialHeaderHTML() {
    const hide = `onerror="this.style.visibility='hidden'"`;
    return `<div class="rpt-head">
        <div class="logos">
          <img src="bagong-pilipinas.png" alt="Bagong Pilipinas" ${hide} />
          <img src="tagaytay-city.png" alt="City of Tagaytay" ${hide} />
          <img src="logo-cct.png" alt="City College of Tagaytay" ${hide} />
          <img src="logo-scs.png" alt="School of Computer Studies" ${hide} />
        </div>
        <div class="txt">
          <div class="t1">City of Tagaytay</div>
          <div class="t2">CITY COLLEGE OF TAGAYTAY</div>
          <div class="t3">Akle St., Kaybagal South, Tagaytay City</div>
          <div class="t4">SCHOOL OF COMPUTER STUDIES</div>
        </div>
      </div>`;
  }

  /* =========================================================
     CSV
     ========================================================= */
  function toCsv(headers, rows) {
    const e = v => {
      const s = String(v == null ? "" : v);
      return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    return [headers.map(e).join(","), ...rows.map(r => r.map(e).join(","))].join("\n");
  }
  function downloadCsv(filename, csv) {
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function downloadJson(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return {
    LOGO_DATA_URI, ROLE_LABELS, PARTS, PART_LABELS, STATUS_LABELS, STORAGE_CAT_LABELS, MAINT_TYPE_LABELS, MAINT_STATUS_LABELS, DEFAULT_LABS,
    call, api, init, getSession, getRole, roleLabel, is, canOpen, logout, refreshBadge, afterSave,
    escapeHtml, esc, initialsOf, showToast, emptyStateHTML,
    statusBadge, maintStatusBadge, stockBadge, fmtDate, fmtDateTime, today,
    natCompare, sortPcs, labsOf, partCell, pcTableHead, pcTableCells, pcDetailsHTML,
    openModal, closeModal, wireModal, confirmBox,
    renderQr, downloadQr, printQr, printHTML, officialHeaderHTML,
    toCsv, downloadCsv, downloadJson,
  };
})();

if (typeof window !== "undefined") window.COMLAB = COMLAB;
