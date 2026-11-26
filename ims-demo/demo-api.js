/* =========================================================
   demo-api.js — ComLab IMS DEMO (walang Node.js / MySQL)
   Ginagaya nito ang server sa loob mismo ng browser.
   Ang data ay naka-save sa localStorage ng browser na ito.
   Gumagana sa VS Code "Live Server" o kahit anong static server.
   ========================================================= */
(function () {
  const KEY = "comlab-ims-demo-v1";
  const SEED = {
   "pcs": [
    {
     "pcNo": "CL1-PC01",
     "lab": "COMLAB 1",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "ASUS VP228HE",
       "serial": "MON-ASUS-001",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Logitech K120",
       "serial": "KB-LOG-001",
       "capacity": ""
      },
      "mouse": {
       "brand": "Logitech M90",
       "serial": "MS-LOG-001",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GTX 1050 Ti",
       "serial": "GPU-NV-001",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-7400",
       "serial": "CPU-INT-001",
       "capacity": ""
      },
      "motherboard": {
       "brand": "ASUS H110M-K",
       "serial": "MB-ASUS-001",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 8GB",
       "serial": "RAM-001",
       "capacity": ""
      },
      "psu": {
       "brand": "Corsair VS450",
       "serial": "PSU-COR-001",
       "capacity": ""
      },
      "ssd": {
       "brand": "Kingston A400",
       "serial": "SSD-001",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL1-PC02",
     "lab": "COMLAB 1",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Acer KA220HQ",
       "serial": "MON-ACE-002",
       "capacity": ""
      },
      "keyboard": {
       "brand": "A4Tech KR-85",
       "serial": "KB-A4-002",
       "capacity": ""
      },
      "mouse": {
       "brand": "A4Tech OP-720",
       "serial": "MS-A4-002",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GT 730",
       "serial": "GPU-NV-002",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i3-6100",
       "serial": "CPU-INT-002",
       "capacity": ""
      },
      "motherboard": {
       "brand": "Gigabyte H110M-H",
       "serial": "MB-GIG-002",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 4GB",
       "serial": "RAM-002",
       "capacity": ""
      },
      "psu": {
       "brand": "Huntkey 450W",
       "serial": "PSU-HUN-002",
       "capacity": ""
      },
      "ssd": {
       "brand": "Kingston",
       "serial": "SSD-002",
       "capacity": "120GB"
      }
     }
    },
    {
     "pcNo": "CL1-PC03",
     "lab": "COMLAB 1",
     "status": "defective",
     "components": {
      "monitor": {
       "brand": "Samsung S22F350",
       "serial": "MON-SAM-003",
       "capacity": ""
      },
      "keyboard": {
       "brand": "HP K1500",
       "serial": "KB-HP-003",
       "capacity": ""
      },
      "mouse": {
       "brand": "HP M100",
       "serial": "MS-HP-003",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-4570",
       "serial": "CPU-INT-003",
       "capacity": ""
      },
      "motherboard": {
       "brand": "ASUS H81M-K",
       "serial": "MB-ASUS-003",
       "capacity": ""
      },
      "ram1": {
       "brand": "TeamGroup 8GB",
       "serial": "RAM-003",
       "capacity": ""
      },
      "psu": {
       "brand": "FSP 500W",
       "serial": "PSU-FSP-003",
       "capacity": ""
      },
      "ssd": {
       "brand": "Crucial BX500",
       "serial": "SSD-003",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL1-PC04",
     "lab": "COMLAB 1",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Dell E2216H",
       "serial": "MON-DEL-004",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Dell KB216",
       "serial": "KB-DEL-004",
       "capacity": ""
      },
      "mouse": {
       "brand": "Dell MS116",
       "serial": "MS-DEL-004",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GTX 1650",
       "serial": "GPU-NV-004",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i7-7700",
       "serial": "CPU-INT-004",
       "capacity": ""
      },
      "motherboard": {
       "brand": "MSI H110M PRO-VH",
       "serial": "MB-MSI-004",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 8GB",
       "serial": "RAM-004",
       "capacity": ""
      },
      "psu": {
       "brand": "Cooler Master 550W",
       "serial": "PSU-CM-004",
       "capacity": ""
      },
      "ssd": {
       "brand": "Samsung 870 EVO",
       "serial": "SSD-004",
       "capacity": "500GB"
      }
     }
    },
    {
     "pcNo": "CL1-PC05",
     "lab": "COMLAB 1",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Lenovo ThinkVision E22-20",
       "serial": "MON-LEN-005",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Logitech K120",
       "serial": "KB-LOG-005",
       "capacity": ""
      },
      "mouse": {
       "brand": "Logitech B100",
       "serial": "MS-LOG-005",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i3-8100",
       "serial": "CPU-INT-005",
       "capacity": ""
      },
      "motherboard": {
       "brand": "Gigabyte H310M H",
       "serial": "MB-GIG-005",
       "capacity": ""
      },
      "ram1": {
       "brand": "ADATA 8GB",
       "serial": "RAM-005",
       "capacity": ""
      },
      "psu": {
       "brand": "Seasonic 500W",
       "serial": "PSU-SEA-005",
       "capacity": ""
      },
      "ssd": {
       "brand": "WD Green",
       "serial": "SSD-005",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL2-PC01",
     "lab": "COMLAB 2",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "HP V22",
       "serial": "MON-HP-006",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Logitech K120",
       "serial": "KB-LOG-006",
       "capacity": ""
      },
      "mouse": {
       "brand": "Logitech M90",
       "serial": "MS-LOG-006",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GTX 1050",
       "serial": "GPU-NV-006",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-6500",
       "serial": "CPU-INT-006",
       "capacity": ""
      },
      "motherboard": {
       "brand": "ASUS H110M-E",
       "serial": "MB-ASUS-006",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 8GB",
       "serial": "RAM-006",
       "capacity": ""
      },
      "psu": {
       "brand": "Corsair CV450",
       "serial": "PSU-COR-006",
       "capacity": ""
      },
      "ssd": {
       "brand": "Kingston A400",
       "serial": "SSD-006",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL2-PC02",
     "lab": "COMLAB 2",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Acer K202HQL",
       "serial": "MON-ACE-007",
       "capacity": ""
      },
      "keyboard": {
       "brand": "A4Tech KR-85",
       "serial": "KB-A4-007",
       "capacity": ""
      },
      "mouse": {
       "brand": "A4Tech OP-620D",
       "serial": "MS-A4-007",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i3-7100",
       "serial": "CPU-INT-007",
       "capacity": ""
      },
      "motherboard": {
       "brand": "Gigabyte H110M-S2H",
       "serial": "MB-GIG-007",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 4GB",
       "serial": "RAM-007",
       "capacity": ""
      },
      "psu": {
       "brand": "Huntkey 450W",
       "serial": "PSU-HUN-007",
       "capacity": ""
      },
      "ssd": {
       "brand": "Kingston A400",
       "serial": "SSD-007",
       "capacity": "120GB"
      }
     }
    },
    {
     "pcNo": "CL2-PC03",
     "lab": "COMLAB 2",
     "status": "maintenance",
     "components": {
      "monitor": {
       "brand": "Samsung S22F350",
       "serial": "MON-SAM-008",
       "capacity": ""
      },
      "keyboard": {
       "brand": "HP K1500",
       "serial": "KB-HP-008",
       "capacity": ""
      },
      "mouse": {
       "brand": "HP M100",
       "serial": "MS-HP-008",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GT 1030",
       "serial": "GPU-NV-008",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-7500",
       "serial": "CPU-INT-008",
       "capacity": ""
      },
      "motherboard": {
       "brand": "MSI H110M PRO-VD",
       "serial": "MB-MSI-008",
       "capacity": ""
      },
      "ram1": {
       "brand": "TeamGroup 8GB",
       "serial": "RAM-008",
       "capacity": ""
      },
      "psu": {
       "brand": "FSP 500W",
       "serial": "PSU-FSP-008",
       "capacity": ""
      },
      "ssd": {
       "brand": "Crucial BX500",
       "serial": "SSD-008",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL2-PC04",
     "lab": "COMLAB 2",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Dell E2016H",
       "serial": "MON-DEL-009",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Dell KB216",
       "serial": "KB-DEL-009",
       "capacity": ""
      },
      "mouse": {
       "brand": "Dell MS116",
       "serial": "MS-DEL-009",
       "capacity": ""
      },
      "gpu": {
       "brand": "NVIDIA GTX 1650",
       "serial": "GPU-NV-009",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-8400",
       "serial": "CPU-INT-009",
       "capacity": ""
      },
      "motherboard": {
       "brand": "ASUS PRIME H310M-E",
       "serial": "MB-ASUS-009",
       "capacity": ""
      },
      "ram1": {
       "brand": "ADATA 8GB",
       "serial": "RAM-009",
       "capacity": ""
      },
      "psu": {
       "brand": "Cooler Master 500W",
       "serial": "PSU-CM-009",
       "capacity": ""
      },
      "ssd": {
       "brand": "WD Green",
       "serial": "SSD-009",
       "capacity": "240GB"
      }
     }
    },
    {
     "pcNo": "CL2-PC05",
     "lab": "COMLAB 2",
     "status": "in-use",
     "components": {
      "monitor": {
       "brand": "Lenovo ThinkVision E2054",
       "serial": "MON-LEN-010",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Logitech K120",
       "serial": "KB-LOG-010",
       "capacity": ""
      },
      "mouse": {
       "brand": "Logitech B100",
       "serial": "MS-LOG-010",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i3-9100",
       "serial": "CPU-INT-010",
       "capacity": ""
      },
      "motherboard": {
       "brand": "Gigabyte H310M S2",
       "serial": "MB-GIG-010",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 8GB",
       "serial": "RAM-010",
       "capacity": ""
      },
      "psu": {
       "brand": "Seasonic 450W",
       "serial": "PSU-SEA-010",
       "capacity": ""
      },
      "ssd": {
       "brand": "Samsung 870 EVO",
       "serial": "SSD-010",
       "capacity": "250GB"
      }
     }
    },
    {
     "pcNo": "ST-PC01",
     "lab": "STORAGE",
     "status": "in-storage",
     "components": {
      "monitor": {
       "brand": "Dell E2222H",
       "serial": "MON-DEL-ST01",
       "capacity": ""
      },
      "keyboard": {
       "brand": "Dell KB216",
       "serial": "KB-DEL-ST01",
       "capacity": ""
      },
      "mouse": {
       "brand": "Dell MS116",
       "serial": "MS-DEL-ST01",
       "capacity": ""
      },
      "cpu": {
       "brand": "Intel Core i5-12400",
       "serial": "CPU-INT-ST01",
       "capacity": ""
      },
      "motherboard": {
       "brand": "ASUS PRIME H610M-E",
       "serial": "MB-ASUS-ST01",
       "capacity": ""
      },
      "ram1": {
       "brand": "Kingston 8GB DDR4",
       "serial": "RAM-ST01",
       "capacity": ""
      },
      "psu": {
       "brand": "Corsair CV550",
       "serial": "PSU-COR-ST01",
       "capacity": ""
      },
      "ssd": {
       "brand": "Kingston NV2",
       "serial": "SSD-ST01",
       "capacity": "500GB"
      }
     }
    }
   ],
   "storage": [
    {
     "category": "monitor",
     "name": "",
     "brand": "Acer EK220Q",
     "serial": "MON-ACE-NEW-001",
     "capacity": "",
     "dateReceived": "2026-11-18",
     "remarks": "Brand new, nasa kahon pa"
    },
    {
     "category": "monitor",
     "name": "",
     "brand": "Samsung S24C310",
     "serial": "MON-SAM-NEW-002",
     "capacity": "",
     "dateReceived": "2026-11-18",
     "remarks": "Brand new"
    },
    {
     "category": "keyboard",
     "name": "",
     "brand": "Logitech K120",
     "serial": "KB-LOG-NEW-003",
     "capacity": "",
     "dateReceived": "2026-11-19",
     "remarks": "Pamalit sa sirang keyboard"
    },
    {
     "category": "mouse",
     "name": "",
     "brand": "Logitech M90",
     "serial": "MS-LOG-NEW-004",
     "capacity": "",
     "dateReceived": "2026-11-19",
     "remarks": ""
    },
    {
     "category": "ram",
     "name": "",
     "brand": "Kingston Fury 8GB DDR4",
     "serial": "RAM-KF-NEW-005",
     "capacity": "8GB",
     "dateReceived": "2026-11-20",
     "remarks": "Pang-upgrade ng RAM"
    },
    {
     "category": "ssd",
     "name": "",
     "brand": "Kingston NV2",
     "serial": "SSD-KNV-NEW-006",
     "capacity": "500GB",
     "dateReceived": "2026-11-20",
     "remarks": ""
    },
    {
     "category": "psu",
     "name": "",
     "brand": "Corsair CV550",
     "serial": "PSU-COR-NEW-007",
     "capacity": "",
     "dateReceived": "2026-11-21",
     "remarks": ""
    },
    {
     "category": "other",
     "name": "Projector",
     "brand": "Epson EB-X06",
     "serial": "PRJ-EPS-NEW-008",
     "capacity": "",
     "dateReceived": "2026-11-21",
     "remarks": "Para sa lecture room"
    }
   ],
   "spare": [
    {
     "name": "Mouse",
     "brand": "A4Tech",
     "quantity": 12,
     "lowStockLevel": 5
    },
    {
     "name": "Keyboard",
     "brand": "Logitech",
     "quantity": 8,
     "lowStockLevel": 5
    },
    {
     "name": "LAN Cable (Cat6, 3m)",
     "brand": "Generic",
     "quantity": 25,
     "lowStockLevel": 10
    },
    {
     "name": "Thermal Paste",
     "brand": "Arctic MX-4",
     "quantity": 3,
     "lowStockLevel": 5
    },
    {
     "name": "RAM 8GB DDR4",
     "brand": "Kingston",
     "quantity": 0,
     "lowStockLevel": 2
    }
   ],
   "maint": [
    {
     "pcNo": "CL2-PC03",
     "component": "keyboard",
     "date": "2026-11-20",
     "type": "repair",
     "technician": "Demo Technician",
     "description": "Some keys are not working",
     "partsReplaced": "",
     "status": "in-progress"
    },
    {
     "pcNo": "CL1-PC02",
     "component": "mouse",
     "date": "2026-11-15",
     "type": "replacement",
     "technician": "Demo Technician",
     "description": "Mouse scroll wheel broken",
     "partsReplaced": "A4Tech OP-720 (MS-A4-002)",
     "status": "complete"
    },
    {
     "pcNo": "CL1-PC03",
     "component": "motherboard",
     "date": "2026-11-17",
     "type": "inspection",
     "technician": "Demo Technician",
     "description": "PC does not power on — motherboard suspected",
     "partsReplaced": "",
     "status": "in-progress"
    },
    {
     "pcNo": "CL2-PC01",
     "component": "",
     "date": "2026-11-10",
     "type": "cleaning",
     "technician": "Demo Technician",
     "description": "General cleaning and dust removal",
     "partsReplaced": "",
     "status": "complete"
    }
   ],
   "users": [
    {
     "fullName": "Demo Dean",
     "username": "demo.dean",
     "email": "demo.dean@comlab.local",
     "password": "Dean123!",
     "role": "dean"
    },
    {
     "fullName": "Demo Coordinator",
     "username": "demo.coord",
     "email": "demo.coord@comlab.local",
     "password": "Coord123!",
     "role": "coordinator"
    },
    {
     "fullName": "Demo Technician",
     "username": "demo.tech",
     "email": "demo.tech@comlab.local",
     "password": "Tech123!",
     "role": "technician"
    }
   ]
  };

  /* ===== Constants (pareho sa server.js) ===== */
  const ROLES = ["dean", "coordinator", "technician"];
  const ROLE_LABELS = { dean: "Dean", coordinator: "Laboratory Coordinator", technician: "Laboratory Technician" };
  const PARTS = ["monitor", "keyboard", "mouse", "gpu", "cpu", "motherboard", "ram1", "ram2", "psu", "ssd"];
  const PART_LABELS = { monitor: "Monitor", keyboard: "Keyboard", mouse: "Mouse", gpu: "GPU", cpu: "CPU",
    motherboard: "Motherboard", ram1: "RAM 1", ram2: "RAM 2", psu: "PSU", ssd: "SSD" };
  const PC_STATUSES = ["in-use", "maintenance", "defective", "in-storage"];
  const STATUS_LABELS = { "in-use": "In Use", maintenance: "Under Maintenance", defective: "Defective", "in-storage": "In Storage" };
  const MAINT_TYPES = ["repair", "replacement", "cleaning", "inspection", "upgrade", "other"];
  const MAINT_STATUSES = ["in-progress", "complete"];
  const STORAGE_CATS = ["monitor", "keyboard", "mouse", "gpu", "cpu", "motherboard", "ram", "psu", "ssd", "other"];
  const STORAGE_CAT_LABELS = { monitor: "Monitor", keyboard: "Keyboard", mouse: "Mouse", gpu: "GPU", cpu: "CPU",
    motherboard: "Motherboard", ram: "RAM", psu: "PSU", ssd: "SSD", other: "Other" };
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const USERNAME_RE = /^[a-zA-Z0-9_.-]+$/;

  class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
  const bad = m => new HttpError(400, m), notFound = m => new HttpError(404, m), forbidden = m => new HttpError(403, m);
  const str = (v, max = 255) => String(v == null ? "" : v).trim().slice(0, max);
  const nowIso = () => new Date().toISOString();
  const pad = n => String(n).padStart(2, "0");
  function ymd(d) {
    if (!d) return "";
    if (typeof d === "string" && /^\d{4}-\d{2}-\d{2}/.test(d)) return d.slice(0, 10);
    const x = new Date(d); if (isNaN(x)) return "";
    return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`;
  }
  const clone = o => JSON.parse(JSON.stringify(o));

  /* ===== Database (localStorage) ===== */
  function freshDb() {
    const db = { seq: {}, users: [], pcs: [], spare: [], maint: [], storage: [], requests: [], activity: [], pwreq: [], resets: [], session: null };
    const id = t => (db.seq[t] = (db.seq[t] || 0) + 1);
    const t0 = new Date(Date.now() - 6 * 864e5).toISOString();
    for (const u of SEED.users) db.users.push({ id: id("users"), ...u, status: "approved", createdAt: t0 });
    SEED.pcs.forEach((p, i) => db.pcs.push({ id: id("pcs"), pcNo: p.pcNo, lab: p.lab, status: p.status, components: p.components,
      createdAt: t0, updatedAt: new Date(Date.now() - (SEED.pcs.length - i) * 36e5).toISOString(), archivedAt: "", archivedByName: "" }));
    for (const s of SEED.spare) db.spare.push({ id: id("spare"), ...s, updatedAt: t0 });
    for (const m of SEED.maint) {
      const pc = db.pcs.find(p => p.pcNo === m.pcNo);
      db.maint.push({ id: id("maint"), pcId: pc.id, component: m.component, date: m.date, type: m.type, technician: m.technician,
        description: m.description, partsReplaced: m.partsReplaced, status: m.status, createdAt: t0, archivedAt: "", archivedByName: "" });
    }
    for (const s of SEED.storage) db.storage.push({ id: id("storage"), ...s, status: "in-storage", deployedPcId: null, deployedSlot: "",
      deployedNote: "", deployedAt: "", deployedByName: "", createdAt: t0 });
    db.activity.push({ id: id("activity"), userLabel: "System", action: "demo_data", detail: "Loaded demo data", createdAt: t0 });
    return db;
  }
  let DB;
  try { DB = JSON.parse(localStorage.getItem(KEY)); } catch (e) { DB = null; }
  if (!DB || !DB.users) DB = freshDb();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} };
  save();
  const nextId = t => (DB.seq[t] = (DB.seq[t] || 0) + 1);

  function logActivity(user, action, detail) {
    DB.activity.unshift({ id: nextId("activity"), userId: user ? user.id : null, userLabel: user ? (user.fullName || user.username) : "System", action, detail, createdAt: nowIso() });
  }

  /* ===== Public shapes (pareho sa server) ===== */
  const publicUser = u => ({ id: String(u.id), fullName: u.fullName, username: u.username, email: u.email, role: u.role,
    roleLabel: ROLE_LABELS[u.role] || u.role, status: u.status, createdAt: u.createdAt });
  function pcLink(id) {
    const base = location.href.replace(/[?#].*$/, "").replace(/[^/]*$/, "");
    return `${base}pc.html?id=${encodeURIComponent(id)}`;
  }
  function publicPc(p) {
    const components = {};
    for (const k of PARTS) components[k] = Object.assign({ brand: "", serial: "", capacity: "" }, p.components[k] || {});
    const r2 = p.components.ram2;
    return { id: String(p.id), pcNo: p.pcNo, lab: p.lab, status: p.status, statusLabel: STATUS_LABELS[p.status] || p.status,
      ramCount: r2 && (r2.brand || r2.serial) ? 2 : 1, components, qrData: pcLink(p.id), link: pcLink(p.id),
      createdAt: p.createdAt, updatedAt: p.updatedAt, archivedAt: p.archivedAt || "", archivedByName: p.archivedByName || "" };
  }
  const findPc = id => DB.pcs.find(p => String(p.id) === String(id));
  const getPc = id => { const p = findPc(id); return p ? publicPc(p) : null; };
  function publicSpare(s) {
    const qty = Number(s.quantity) || 0, low = Number(s.lowStockLevel);
    const stock = qty <= 0 ? "out" : qty <= low ? "low" : "in";
    return { id: String(s.id), name: s.name, brand: s.brand || "", quantity: qty, lowStockLevel: low, stock,
      stockLabel: stock === "out" ? "Out of Stock" : stock === "low" ? "Low Stock" : "In Stock", updatedAt: s.updatedAt };
  }
  function publicMaint(m) {
    const p = findPc(m.pcId) || {};
    return { id: String(m.id), pcId: String(m.pcId), pcNo: p.pcNo || "", lab: p.lab || "", component: m.component || "",
      componentLabel: m.component ? PART_LABELS[m.component] : "Whole PC set", date: m.date, type: m.type,
      technician: m.technician || "", description: m.description || "", partsReplaced: m.partsReplaced || "",
      status: m.status || "", createdAt: m.createdAt, archivedAt: m.archivedAt || "", archivedByName: m.archivedByName || "" };
  }
  function publicStorage(s) {
    const p = s.deployedPcId ? findPc(s.deployedPcId) : null;
    return { id: String(s.id), category: s.category, categoryLabel: STORAGE_CAT_LABELS[s.category] || s.category,
      name: s.name || "", brand: s.brand || "", serial: s.serial || "", capacity: s.capacity || "",
      dateReceived: s.dateReceived || "", remarks: s.remarks || "", status: s.status,
      deployedPcId: s.deployedPcId ? String(s.deployedPcId) : "", deployedPcNo: p ? p.pcNo : "", deployedLab: p ? p.lab : "",
      deployedSlot: s.deployedSlot || "", deployedNote: s.deployedNote || "", deployedAt: s.deployedAt || "",
      deployedByName: s.deployedByName || "", createdAt: s.createdAt };
  }

  /* ===== Validation ===== */
  function validatePc(body) {
    const pcNo = str(body.pcNo, 60), lab = str(body.lab, 80), status = str(body.status || "in-use", 20);
    if (!pcNo) throw bad("Unique Identifier (PC No.) is required.");
    if (!lab) throw bad("Please choose a Lab Assignment.");
    if (!PC_STATUSES.includes(status)) throw bad("Invalid status.");
    const ramCount = Number(body.ramCount) === 2 ? 2 : 1;
    const src = body.components || {}, components = {};
    for (const p of PARTS) {
      if (p === "ram2" && ramCount === 1) continue;
      const c = src[p] || {};
      const it = { brand: str(c.brand, 120), serial: str(c.serial, 120), capacity: p === "ssd" ? str(c.capacity, 40) : "" };
      if (it.brand || it.serial || it.capacity) components[p] = it;
    }
    return { pcNo, lab, status, components };
  }
  function assertUniquePc(pcNo, exceptId) {
    if (DB.pcs.some(p => p.pcNo.toLowerCase() === pcNo.toLowerCase() && String(p.id) !== String(exceptId || "")))
      throw bad("That PC No. is already used by another PC set (check the Archive too).");
  }
  function validateSpare(p) {
    const name = str(p.name, 160), brand = str(p.brand, 120);
    const quantity = Math.max(0, Math.floor(Number(p.quantity)));
    const lowStockLevel = p.lowStockLevel === "" || p.lowStockLevel == null ? 5 : Math.max(0, Math.floor(Number(p.lowStockLevel)));
    if (!name) throw bad("Name of equipment is required.");
    if (!Number.isFinite(quantity)) throw bad("Available quantity must be a number.");
    return { name, brand, quantity, lowStockLevel };
  }
  function validateMaint(p, actor) {
    const pcId = str(p.pcId, 20), component = str(p.component, 20), type = str(p.type || "repair", 20);
    const description = str(p.description, 2000), status = str(p.status, 20);
    if (!pcId) throw bad("Please select a PC set.");
    const pc = findPc(pcId);
    if (!pc || pc.archivedAt) throw bad("That PC set no longer exists.");
    if (component && !PARTS.includes(component)) throw bad("Invalid component.");
    if (!MAINT_TYPES.includes(type)) throw bad("Invalid maintenance type.");
    if (!description) throw bad("Please describe the maintenance.");
    if (status && !MAINT_STATUSES.includes(status)) throw bad("Invalid status.");
    return { pcId: pc.id, component, type, description, status, date: ymd(p.date) || ymd(new Date()),
      technician: str(p.technician, 160) || (actor && actor.fullName) || "", partsReplaced: str(p.partsReplaced, 1000),
      pcLabel: `${pc.pcNo} (${pc.lab})` };
  }
  function validateStorage(p) {
    const category = str(p.category, 20);
    if (!STORAGE_CATS.includes(category)) throw bad("Please choose the item type.");
    const name = str(p.name, 160), brand = str(p.brand, 120);
    if (!brand && !name) throw bad("Please enter the brand / model.");
    if (category === "other" && !name) throw bad("Please enter the item name.");
    return { category, name, brand, serial: str(p.serial, 120), capacity: ["ssd", "ram"].includes(category) ? str(p.capacity, 40) : "",
      dateReceived: ymd(p.dateReceived) || ymd(new Date()), remarks: str(p.remarks, 500) };
  }
  const storageLabel = d => `${d.category === "other" ? d.name : STORAGE_CAT_LABELS[d.category]} ${d.brand || ""}`.trim();

  function syncPcStatus(pcId) {
    const pc = findPc(pcId); if (!pc) return;
    const open = DB.maint.some(m => String(m.pcId) === String(pcId) && !m.archivedAt && m.status === "in-progress");
    if (open && pc.status === "in-use") pc.status = "maintenance";
    if (!open && pc.status === "maintenance") pc.status = "in-use";
  }

  /* ===== Apply (Coordinator diretso, o kapag in-approve ang request ng Technician) ===== */
  const APPLY = {
    pc: {
      create(actor, _id, p) {
        const d = validatePc(p); assertUniquePc(d.pcNo);
        const pc = { id: nextId("pcs"), pcNo: d.pcNo, lab: d.lab, status: d.status, components: d.components,
          createdAt: nowIso(), updatedAt: nowIso(), archivedAt: "", archivedByName: "" };
        DB.pcs.push(pc);
        return { id: pc.id, detail: `Added PC set ${d.pcNo} (${d.lab})` };
      },
      update(actor, id, p) {
        const pc = findPc(id); if (!pc || pc.archivedAt) throw notFound("PC set not found.");
        const d = validatePc(p); assertUniquePc(d.pcNo, id);
        Object.assign(pc, { pcNo: d.pcNo, lab: d.lab, status: d.status, components: d.components, updatedAt: nowIso() });
        return { id, detail: `Edited PC set ${d.pcNo} (${d.lab})` };
      },
      archive(actor, id) {
        const pc = findPc(id); if (!pc || pc.archivedAt) throw notFound("PC set not found or already archived.");
        Object.assign(pc, { archivedAt: nowIso(), archivedByName: actor.fullName, updatedAt: nowIso() });
        return { id, detail: `Archived PC set ${pc.pcNo} (${pc.lab})` };
      },
      restore(actor, id) {
        const pc = findPc(id); if (!pc || !pc.archivedAt) throw notFound("Archived PC set not found.");
        Object.assign(pc, { archivedAt: "", archivedByName: "", updatedAt: nowIso() });
        return { id, detail: `Restored PC set ${pc.pcNo} (${pc.lab})` };
      },
    },
    spare: {
      create(actor, _id, p) { const d = validateSpare(p); const s = { id: nextId("spare"), ...d, updatedAt: nowIso() }; DB.spare.push(s);
        return { id: s.id, detail: `Added spare part ${d.name} (qty ${d.quantity})` }; },
      update(actor, id, p) { const s = DB.spare.find(x => String(x.id) === String(id)); if (!s) throw notFound("Spare part not found.");
        Object.assign(s, validateSpare(p), { updatedAt: nowIso() }); return { id, detail: `Edited spare part ${s.name} (qty ${s.quantity})` }; },
      delete(actor, id) { const i = DB.spare.findIndex(x => String(x.id) === String(id)); if (i < 0) throw notFound("Spare part not found.");
        const [s] = DB.spare.splice(i, 1); return { id, detail: `Deleted spare part ${s.name}` }; },
    },
    maintenance: {
      create(actor, _id, p) {
        const d = validateMaint(p, actor);
        const m = { id: nextId("maint"), pcId: d.pcId, component: d.component, date: d.date, type: d.type, technician: d.technician,
          description: d.description, partsReplaced: d.partsReplaced, status: d.status, createdAt: nowIso(), archivedAt: "", archivedByName: "" };
        DB.maint.push(m); syncPcStatus(d.pcId);
        return { id: m.id, detail: `Logged ${d.type} for ${d.pcLabel}${d.component ? " (" + PART_LABELS[d.component] + ")" : ""}` };
      },
      update(actor, id, p) {
        const m = DB.maint.find(x => String(x.id) === String(id) && !x.archivedAt); if (!m) throw notFound("Maintenance record not found.");
        const d = validateMaint(p, actor), oldPc = m.pcId;
        Object.assign(m, { pcId: d.pcId, component: d.component, date: d.date, type: d.type, technician: d.technician,
          description: d.description, partsReplaced: d.partsReplaced, status: d.status });
        syncPcStatus(d.pcId); if (String(oldPc) !== String(d.pcId)) syncPcStatus(oldPc);
        return { id, detail: `Edited maintenance record #${id} for ${d.pcLabel}` };
      },
      archive(actor, id) {
        const m = DB.maint.find(x => String(x.id) === String(id) && !x.archivedAt); if (!m) throw notFound("Maintenance record not found or already archived.");
        Object.assign(m, { archivedAt: nowIso(), archivedByName: actor.fullName }); syncPcStatus(m.pcId);
        return { id, detail: `Archived maintenance record #${id}` };
      },
      restore(actor, id) {
        const m = DB.maint.find(x => String(x.id) === String(id) && x.archivedAt); if (!m) throw notFound("Archived maintenance record not found.");
        Object.assign(m, { archivedAt: "", archivedByName: "" }); syncPcStatus(m.pcId);
        return { id, detail: `Restored maintenance record #${id}` };
      },
    },
    storage: {
      create(actor, _id, p) {
        const d = validateStorage(p);
        const s = { id: nextId("storage"), ...d, status: "in-storage", deployedPcId: null, deployedSlot: "", deployedNote: "",
          deployedAt: "", deployedByName: "", createdAt: nowIso() };
        DB.storage.push(s);
        return { id: s.id, detail: `Added to Storage: ${storageLabel(d)}${d.serial ? " (" + d.serial + ")" : ""}` };
      },
      update(actor, id, p) {
        const s = DB.storage.find(x => String(x.id) === String(id) && x.status === "in-storage");
        if (!s) throw notFound("Storage item not found (or already deployed).");
        const d = validateStorage(p); Object.assign(s, d);
        return { id, detail: `Edited storage item: ${storageLabel(d)}` };
      },
      delete(actor, id) {
        const i = DB.storage.findIndex(x => String(x.id) === String(id)); if (i < 0) throw notFound("Storage item not found.");
        const [s] = DB.storage.splice(i, 1);
        return { id, detail: `Deleted storage item: ${storageLabel(s)}` };
      },
      deploy(actor, id, p) {
        const it = DB.storage.find(x => String(x.id) === String(id) && x.status === "in-storage");
        if (!it) throw notFound("Storage item not found (or already deployed).");
        const label = storageLabel(it);
        if (it.category === "other") {
          const note = str(p.note, 300); if (!note) throw bad("Please write where the item was deployed.");
          Object.assign(it, { status: "deployed", deployedNote: note, deployedAt: nowIso(), deployedByName: actor.fullName });
          return { id, detail: `Deployed ${label} — ${note}` };
        }
        const pc = findPc(p.pcId); if (!pc || pc.archivedAt) throw bad("Please choose an active PC set.");
        let slot = it.category; if (slot === "ram") slot = p.slot === "ram2" ? "ram2" : "ram1";
        const old = pc.components[slot];
        const newBrand = it.brand || it.name;
        const fmt = c => c ? `${c.brand || "—"}${c.capacity ? " " + c.capacity : ""}${c.serial ? " (SN " + c.serial + ")" : ""}` : "none";
        const oldTxt = old && (old.brand || old.serial) ? fmt(old) : "none";
        const newTxt = fmt({ brand: newBrand, capacity: it.capacity, serial: it.serial });
        pc.components[slot] = { brand: newBrand, serial: it.serial || "", capacity: it.capacity || "" };
        pc.updatedAt = nowIso();
        DB.maint.push({ id: nextId("maint"), pcId: pc.id, component: slot, date: ymd(new Date()), type: "replacement",
          technician: actor.fullName || "", description: `Deployed from Storage: ${PART_LABELS[slot]} ${newTxt}`,
          partsReplaced: `Old: ${oldTxt} → New: ${newTxt}`, status: "complete", createdAt: nowIso(), archivedAt: "", archivedByName: "" });
        Object.assign(it, { status: "deployed", deployedPcId: pc.id, deployedSlot: slot, deployedNote: `Replaced: ${oldTxt}`,
          deployedAt: nowIso(), deployedByName: actor.fullName });
        syncPcStatus(pc.id);
        return { id, detail: `Deployed ${label} to ${pc.pcNo} (${pc.lab}) as ${PART_LABELS[slot]}` };
      },
    },
  };
  const ACTION_VERBS = { create: "Add", update: "Edit", archive: "Archive", restore: "Restore", delete: "Delete", deploy: "Deploy" };
  const ENTITY_LABELS = { pc: "PC set", spare: "spare part", maintenance: "maintenance record", storage: "storage item" };

  function runApply(entity, action, actor, id, payload) {
    const fn = APPLY[entity] && APPLY[entity][action]; if (!fn) throw bad("Unknown action.");
    const backup = clone(DB);
    try { return fn(actor, id, payload || {}); }
    catch (e) { DB = backup; throw e; }
  }
  function describeRequest(entity, action, id, p) {
    if (entity === "pc") {
      if (action === "create" || action === "update") return `${ACTION_VERBS[action]} PC set ${str(p.pcNo)} (${str(p.lab)})`;
      const pc = findPc(id); return `${ACTION_VERBS[action]} PC set ${pc ? pc.pcNo + " (" + pc.lab + ")" : "#" + id}`;
    }
    if (entity === "maintenance") {
      if (action === "create" || action === "update") { const pc = findPc(p.pcId);
        return `${ACTION_VERBS[action]} maintenance log: ${str(p.type || "repair")} for ${pc ? pc.pcNo : "PC #" + p.pcId}`; }
      return `${ACTION_VERBS[action]} maintenance record #${id}`;
    }
    if (entity === "storage") {
      if (action === "create" || action === "update") return `${ACTION_VERBS[action]} storage item: ${storageLabel({ category: str(p.category), name: str(p.name), brand: str(p.brand) })}${p.serial ? " (" + str(p.serial) + ")" : ""}`;
      const it = DB.storage.find(x => String(x.id) === String(id));
      const lbl = it ? storageLabel(it) + (it.serial ? " (" + it.serial + ")" : "") : "#" + id;
      if (action === "deploy") { if (it && it.category === "other") return `Deploy ${lbl} — ${str(p.note)}`;
        const pc = findPc(p.pcId); return `Deploy ${lbl} to ${pc ? pc.pcNo + " (" + pc.lab + ")" : "PC #" + p.pcId}`; }
      return `${ACTION_VERBS[action]} storage item ${lbl}`;
    }
    return `${ACTION_VERBS[action] || action} ${ENTITY_LABELS[entity] || entity}`;
  }
  function itemOf(entity, id) {
    if (entity === "pc") return getPc(id);
    if (entity === "spare") { const s = DB.spare.find(x => String(x.id) === String(id)); return s ? publicSpare(s) : null; }
    if (entity === "maintenance") { const m = DB.maint.find(x => String(x.id) === String(id)); return m ? publicMaint(m) : null; }
    if (entity === "storage") { const s = DB.storage.find(x => String(x.id) === String(id)); return s ? publicStorage(s) : null; }
    return null;
  }
  function handleChange(user, entity, action, id, payload) {
    payload = payload || {};
    if (user.role === "technician") {
      if (entity === "spare") throw forbidden("Your role doesn't have access to Spare Parts.");
      if (entity === "pc" && (action === "create" || action === "update")) { const d = validatePc(payload); assertUniquePc(d.pcNo, id); }
      if (entity === "storage" && (action === "create" || action === "update")) validateStorage(payload);
      if (entity === "maintenance" && (action === "create" || action === "update")) validateMaint(payload, user);
      const summary = describeRequest(entity, action, id, payload);
      const r = { id: nextId("requests"), entity, action, targetId: id ? String(id) : "", payload: clone(payload), summary, status: "pending",
        requestedBy: String(user.id), requestedByName: user.fullName, reviewedByName: "", reviewNote: "", createdAt: nowIso(), reviewedAt: "" };
      DB.requests.unshift(r);
      logActivity(user, "request_" + action, `Requested: ${summary} (waiting for approval)`);
      return [202, { pending: true, requestId: String(r.id), message: "Sent to the Laboratory Coordinator for approval." }];
    }
    const out = runApply(entity, action, user, id, payload);
    logActivity(user, `${action}_${entity}`, out.detail);
    return [action === "create" ? 201 : 200, { pending: false, item: itemOf(entity, out.id), message: out.detail }];
  }

  /* ===== Auth helpers ===== */
  const me = () => DB.users.find(u => u.id === DB.session && u.status === "approved") || null;
  function need(...roles) {
    const u = me(); if (!u) throw new HttpError(401, "Not authenticated.");
    if (roles.length && !roles.includes(u.role)) throw forbidden("Your role doesn't have access to this action.");
    return u;
  }
  const canManageAccounts = u => u && (u.role === "dean" || (u.role === "coordinator" && !DB.users.some(x => x.role === "dean" && x.status === "approved")));
  function needAccounts() { const u = need(); if (!canManageAccounts(u)) throw forbidden("Only the Dean can manage accounts."); return u; }
  const COORD_TECH = ["coordinator", "technician"], DEAN_COORD = ["dean", "coordinator"];

  /* ===== Routes ===== */
  const routes = [];
  const on = (method, pattern, fn) => routes.push({ method, re: new RegExp("^" + pattern.replace(/:(\w+)/g, "(?<$1>[^/]+)") + "$"), fn });

  on("GET", "/api/auth/has-users", () => [200, { hasUsers: DB.users.length > 0 }]);
  on("GET", "/api/auth/me", () => { const u = me(); if (!u) throw new HttpError(401, "Not authenticated.");
    return [200, { user: { ...publicUser(u), canManageAccounts: canManageAccounts(u) } }]; });
  on("POST", "/api/auth/register", (_, b) => {
    const fullName = str(b.fullName, 120), username = str(b.username, 60), email = str(b.email, 160).toLowerCase(), password = String(b.password || "");
    if (!fullName || !username || !email || !password) throw bad("Please fill in all the fields.");
    if (username.length < 3) throw bad("Username must be at least 3 characters.");
    if (!USERNAME_RE.test(username)) throw bad("Username can only contain letters, numbers, dot, dash, underscore.");
    if (!EMAIL_RE.test(email)) throw bad("Please enter a valid email address.");
    if (password.length < 6) throw bad("Password must be at least 6 characters.");
    if (DB.users.some(u => u.username.toLowerCase() === username.toLowerCase())) throw new HttpError(409, "Username already exists. Please choose another.");
    if (DB.users.some(u => u.email === email)) throw new HttpError(409, "Email is already registered.");
    const isFirst = DB.users.length === 0;
    let role = str(b.role, 20); if (isFirst) role = "dean"; else if (!ROLES.includes(role)) throw bad("Please choose your role.");
    const u = { id: nextId("users"), fullName, username, email, password, role, status: isFirst ? "approved" : "pending", createdAt: nowIso() };
    DB.users.push(u);
    logActivity(u, "register", `Registered as ${ROLE_LABELS[role]}${isFirst ? " (first account)" : " (pending approval)"}`);
    return [201, isFirst ? { pending: false, role, message: "Dean account created. You can now sign in." }
      : { pending: true, role, message: "Account created. The Dean needs to approve it before you can sign in." }];
  });
  on("POST", "/api/auth/login", (_, b) => {
    const name = str(b.username, 160), pw = String(b.password || "");
    if (!name || !pw) throw bad("Please fill in both username and password.");
    const u = DB.users.find(x => x.username.toLowerCase() === name.toLowerCase() || x.email === name.toLowerCase());
    if (!u || u.password !== pw) throw new HttpError(401, "Incorrect credentials. Account denied.");
    if (u.status === "pending") return [403, { error: "Your account is waiting for approval from the Dean.", status: "pending" }];
    if (u.status === "rejected") return [403, { error: "Your registration was declined. Please contact the Dean.", status: "rejected" }];
    DB.session = u.id; logActivity(u, "login", `Signed in as ${ROLE_LABELS[u.role]}`);
    return [200, { user: publicUser(u) }];
  });
  on("POST", "/api/auth/logout", () => { DB.session = null; return [200, { message: "Signed out." }]; });
  on("POST", "/api/auth/recover/request", (_, b) => {
    const email = str(b.email, 160).toLowerCase();
    if (!email) throw bad("Please enter your email address.");
    if (!EMAIL_RE.test(email)) throw bad("Please enter a valid email address.");
    const u = DB.users.find(x => x.email === email); if (!u) throw notFound("No account found for that email.");
    const code = String(Math.floor(100000 + Math.random() * 900000));
    DB.resets = DB.resets.filter(r => r.userId !== u.id);
    DB.resets.push({ userId: u.id, code, expires: Date.now() + 10 * 6e4 });
    const pend = DB.pwreq.find(r => r.userId === u.id && r.status === "pending");
    if (pend) pend.requestedAt = nowIso(); else DB.pwreq.push({ id: nextId("pwreq"), userId: u.id, status: "pending", requestedAt: nowIso() });
    const [n, d] = u.email.split("@");
    return [200, { maskedEmail: n[0] + "•••" + n.slice(-1) + "@" + d, devCode: code }];
  });
  function checkCode(b) {
    const email = str(b.email, 160).toLowerCase(), code = str(b.code, 10);
    if (!/^\d{6}$/.test(code)) throw bad("Please enter the 6-digit code.");
    const u = DB.users.find(x => x.email === email); if (!u) throw bad("Incorrect recovery code. Please try again.");
    const r = DB.resets.find(x => x.userId === u.id);
    if (!r || r.expires < Date.now()) throw bad("Code expired. Please request a new one.");
    if (r.code !== code) throw bad("Incorrect recovery code. Please try again.");
    return u;
  }
  on("POST", "/api/auth/recover/check", (_, b) => { checkCode(b); return [200, { valid: true }]; });
  on("POST", "/api/auth/recover/verify", (_, b) => {
    const pw = String(b.newPassword || ""); if (pw.length < 6) throw bad("New password must be at least 6 characters.");
    const u = checkCode(b); u.password = pw;
    DB.resets = DB.resets.filter(r => r.userId !== u.id);
    DB.pwreq.forEach(r => { if (r.userId === u.id && r.status === "pending") r.status = "resolved"; });
    logActivity(u, "reset_password", "Reset own password using email code");
    return [200, { message: "Password updated.", username: u.username }];
  });

  /* PC sets */
  on("GET", "/api/pcs", q => { need(); const arch = q.get("archived") === "1";
    return [200, { items: DB.pcs.filter(p => !!p.archivedAt === arch).map(publicPc) }]; });
  on("GET", "/api/pcs/:id", (q, b, prm) => { need(); const p = getPc(prm.id); if (!p) throw notFound("PC set not found."); return [200, { item: p }]; });
  on("POST", "/api/pcs", (q, b) => handleChange(need(...COORD_TECH), "pc", "create", null, b));
  on("PUT", "/api/pcs/:id", (q, b, prm) => handleChange(need(...COORD_TECH), "pc", "update", prm.id, b));
  on("POST", "/api/pcs/:id/archive", (q, b, prm) => handleChange(need(...COORD_TECH), "pc", "archive", prm.id, b));
  on("POST", "/api/pcs/:id/restore", (q, b, prm) => handleChange(need(...COORD_TECH), "pc", "restore", prm.id, b));
  on("GET", "/api/labs", () => { need(); return [200, { items: [...new Set(DB.pcs.map(p => p.lab))].sort() }]; });

  /* Spare parts */
  on("GET", "/api/spare-parts", () => { need(...DEAN_COORD);
    return [200, { items: [...DB.spare].sort((a, b) => a.name.localeCompare(b.name)).map(publicSpare) }]; });
  on("POST", "/api/spare-parts", (q, b) => handleChange(need("coordinator"), "spare", "create", null, b));
  on("PUT", "/api/spare-parts/:id", (q, b, prm) => handleChange(need("coordinator"), "spare", "update", prm.id, b));
  on("DELETE", "/api/spare-parts/:id", (q, b, prm) => handleChange(need("coordinator"), "spare", "delete", prm.id, b));

  /* Maintenance */
  on("GET", "/api/maintenance", q => { need(); const arch = q.get("archived") === "1";
    return [200, { items: DB.maint.filter(m => !!m.archivedAt === arch)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || b.id - a.id).map(publicMaint) }]; });
  on("POST", "/api/maintenance", (q, b) => handleChange(need(...COORD_TECH), "maintenance", "create", null, b));
  on("PUT", "/api/maintenance/:id", (q, b, prm) => handleChange(need(...COORD_TECH), "maintenance", "update", prm.id, b));
  on("POST", "/api/maintenance/:id/archive", (q, b, prm) => handleChange(need(...COORD_TECH), "maintenance", "archive", prm.id, b));
  on("POST", "/api/maintenance/:id/restore", (q, b, prm) => handleChange(need(...COORD_TECH), "maintenance", "restore", prm.id, b));

  /* Storage */
  on("GET", "/api/storage", () => { need();
    return [200, { items: [...DB.storage].sort((a, b) => (a.status === "deployed") - (b.status === "deployed")
      || String(b.dateReceived).localeCompare(String(a.dateReceived)) || b.id - a.id).map(publicStorage) }]; });
  on("POST", "/api/storage", (q, b) => handleChange(need(...COORD_TECH), "storage", "create", null, b));
  on("PUT", "/api/storage/:id", (q, b, prm) => handleChange(need(...COORD_TECH), "storage", "update", prm.id, b));
  on("DELETE", "/api/storage/:id", (q, b, prm) => handleChange(need(...COORD_TECH), "storage", "delete", prm.id, b));
  on("POST", "/api/storage/:id/deploy", (q, b, prm) => handleChange(need(...COORD_TECH), "storage", "deploy", prm.id, b));

  /* Change requests */
  on("GET", "/api/requests", q => {
    const u = need(...COORD_TECH);
    const st = ["pending", "approved", "declined"].includes(q.get("status")) ? q.get("status") : null;
    const items = DB.requests.filter(r => (u.role !== "technician" || r.requestedBy === String(u.id)) && (!st || r.status === st)).map(clone);
    for (const it of items) {
      if (it.status !== "pending") continue;
      if (it.entity === "pc" && it.targetId) it.current = getPc(it.targetId);
      if (it.entity === "maintenance" && it.targetId) it.current = itemOf("maintenance", it.targetId);
      if (it.entity === "maintenance" && it.payload.pcId) it.pc = getPc(it.payload.pcId);
    }
    return [200, { items }];
  });
  on("POST", "/api/requests/:id/:decision", (q, b, prm) => {
    const u = need("coordinator");
    const r = DB.requests.find(x => String(x.id) === prm.id && x.status === "pending");
    if (!r) throw notFound("Request not found or already reviewed.");
    const note = str(b.note, 500);
    if (prm.decision === "approve") {
      const requester = DB.users.find(x => String(x.id) === r.requestedBy) || { id: null, fullName: r.requestedByName };
      let out;
      try { out = runApply(r.entity, r.action, requester, r.targetId || null, r.payload); }
      catch (e) { if (e instanceof HttpError) throw new HttpError(e.status, "Can't approve: " + e.message); throw e; }
      Object.assign(r, { status: "approved", reviewedByName: u.fullName, reviewedAt: nowIso(), reviewNote: note });
      logActivity(u, "approve_request", `Approved ${r.requestedByName}'s request: ${out.detail}`);
      return [200, { message: "Approved and saved." }];
    }
    if (prm.decision !== "decline") throw notFound("Not found.");
    Object.assign(r, { status: "declined", reviewedByName: u.fullName, reviewedAt: nowIso(), reviewNote: note });
    logActivity(u, "decline_request", `Declined ${r.requestedByName}'s request: ${r.summary}`);
    return [200, { message: "Request declined." }];
  });
  on("GET", "/api/pending-counts", () => {
    const u = need(), out = { accounts: 0, passwordRequests: 0, changeRequests: 0 };
    if (canManageAccounts(u)) { out.accounts = DB.users.filter(x => x.status === "pending").length;
      out.passwordRequests = DB.pwreq.filter(x => x.status === "pending").length; }
    if (u.role === "coordinator") out.changeRequests = DB.requests.filter(x => x.status === "pending").length;
    return [200, out];
  });

  /* Accounts (Dean) */
  on("GET", "/api/users", () => { needAccounts(); return [200, { items: DB.users.map(publicUser) }]; });
  on("POST", "/api/users/:id/:decision", (q, b, prm) => {
    const u = needAccounts(); const t = DB.users.find(x => String(x.id) === prm.id);
    if (!t) throw notFound("Account not found.");
    if (t.id === u.id) throw bad("You can't change your own account status.");
    t.status = prm.decision === "approve" ? "approved" : "rejected";
    logActivity(u, t.status === "approved" ? "approve_user" : "reject_user", `${t.status === "approved" ? "Approved" : "Declined"} ${ROLE_LABELS[t.role]} ${t.username}`);
    return [200, { message: t.status === "approved" ? "Account approved." : "Account declined." }];
  });
  const lastDean = t => t.role === "dean" && !DB.users.some(x => x.id !== t.id && x.role === "dean" && x.status === "approved");
  on("PUT", "/api/users/:id/role", (q, b, prm) => {
    const u = needAccounts(); const role = str(b.role, 20); if (!ROLES.includes(role)) throw bad("Invalid role.");
    const t = DB.users.find(x => String(x.id) === prm.id); if (!t) throw notFound("Account not found.");
    if (t.id === u.id) throw bad("You can't change your own role.");
    if (role !== "dean" && lastDean(t)) throw bad("There must be at least one Dean account.");
    t.role = role; logActivity(u, "change_role", `Changed ${t.username} to ${ROLE_LABELS[role]}`);
    return [200, { message: `Role changed to ${ROLE_LABELS[role]}.` }];
  });
  on("DELETE", "/api/users/:id", (q, b, prm) => {
    const u = needAccounts(); const t = DB.users.find(x => String(x.id) === prm.id); if (!t) throw notFound("Account not found.");
    if (t.id === u.id) throw bad("You can't delete your own account.");
    if (lastDean(t)) throw bad("Can't delete the last Dean account.");
    DB.users = DB.users.filter(x => x.id !== t.id); DB.pwreq = DB.pwreq.filter(x => x.userId !== t.id);
    logActivity(u, "delete_user", `Deleted account ${t.username}`);
    return [200, { message: "Account deleted." }];
  });
  on("GET", "/api/password-requests", () => { needAccounts();
    return [200, { items: DB.pwreq.filter(r => r.status === "pending").map(r => { const t = DB.users.find(x => x.id === r.userId) || {};
      return { id: String(r.id), userId: String(r.userId), fullName: t.fullName, username: t.username, email: t.email, role: t.role,
        roleLabel: ROLE_LABELS[t.role] || t.role, requestedAt: r.requestedAt }; }) }]; });
  on("POST", "/api/password-requests/:id/:act", (q, b, prm) => {
    const u = needAccounts(); const r = DB.pwreq.find(x => String(x.id) === prm.id && x.status === "pending");
    if (!r) throw notFound("Request not found or already handled.");
    const t = DB.users.find(x => x.id === r.userId) || {};
    if (prm.act === "resolve") {
      const pw = String(b.newPassword || ""); if (pw.length < 6) throw bad("New password must be at least 6 characters.");
      t.password = pw; r.status = "resolved"; DB.resets = DB.resets.filter(x => x.userId !== t.id);
      logActivity(u, "set_password", `Set a new password for ${ROLE_LABELS[t.role] || t.role} ${t.username}`);
      return [200, { message: `New password set for ${t.username}.` }];
    }
    r.status = "declined"; logActivity(u, "decline_password_request", `Declined password reset request of ${t.username}`);
    return [200, { message: "Request declined." }];
  });

  /* Activity */
  on("GET", "/api/activity", () => { const u = need();
    return [200, { items: DB.activity.filter(a => u.role !== "technician" || a.userId === u.id).slice(0, 1000)
      .map(a => ({ id: String(a.id), userLabel: a.userLabel || "System", action: a.action, detail: a.detail || "", createdAt: a.createdAt })) }]; });
  on("DELETE", "/api/activity", () => { const u = need("dean"); DB.activity = []; logActivity(u, "clear_activity", "Cleared the activity log");
    return [200, { message: "Activity log cleared." }]; });

  /* Backup / Restore (Dean) */
  on("GET", "/api/backup", () => { const u = need("dean"); logActivity(u, "backup", "Downloaded a backup file");
    const d = clone(DB); delete d.session; d.meta = { system: "ComLab-IMS", version: "3.0.0-demo", exportedAt: nowIso(), exportedBy: u.username };
    return [200, d]; });
  on("POST", "/api/restore", (q, b) => {
    const u = need("dean");
    if (!b.meta || b.meta.system !== "ComLab-IMS") throw bad("This file is not a ComLab IMS backup.");
    if (!Array.isArray(b.pcs)) throw bad("This backup is from the full (MySQL) version of ComLab IMS and can't be restored in the demo.");
    const keep = clone(u);
    DB = { seq: b.seq || {}, users: b.users || [], pcs: b.pcs, spare: b.spare || [], maint: b.maint || [], storage: b.storage || [],
      requests: b.requests || [], activity: b.activity || [], pwreq: b.pwreq || [], resets: [], session: keep.id };
    if (!DB.users.some(x => x.id === keep.id)) DB.users.push(keep);
    logActivity(keep, "restore", `Restored backup (${DB.pcs.length} PC sets)`);
    return [200, { message: "Data restored successfully.", counts: { pc_sets: DB.pcs.length } }];
  });

  /* Server info + public PC page */
  on("GET", "/api/server-info", () => { need(); return [200, { baseUrl: location.origin, lanIps: [], fromEnv: false, phoneReady: !/localhost|127\./.test(location.host) }]; });
  on("GET", "/api/public/pc/:id", (q, b, prm) => {
    const p = getPc(prm.id); if (!p) throw notFound("PC set not found.");
    const logs = DB.maint.filter(m => String(m.pcId) === String(p.id) && !m.archivedAt)
      .sort((a, b2) => String(b2.date).localeCompare(String(a.date)) || b2.id - a.id).slice(0, 5);
    return [200, { item: { id: p.id, pcNo: p.pcNo, lab: p.lab, status: p.status, statusLabel: p.statusLabel, ramCount: p.ramCount,
      components: p.components, updatedAt: p.updatedAt, archived: !!p.archivedAt },
      maintenance: logs.map(l => ({ date: l.date, component: l.component ? PART_LABELS[l.component] : "Whole PC set", type: l.type, status: l.status || "", description: l.description })) }];
  });

  /* ===== fetch interceptor ===== */
  const realFetch = window.fetch.bind(window);
  window.fetch = async function (input, init) {
    const url = new URL(typeof input === "string" ? input : input.url, location.href);
    const at = url.pathname.indexOf("/api/");
    if (at < 0) return realFetch(input, init);
    const path = url.pathname.slice(at), method = ((init && init.method) || "GET").toUpperCase();
    let body = {};
    try { body = init && init.body ? JSON.parse(init.body) : {}; } catch (e) {}
    let status = 404, data = { error: "Not found." };
    for (const r of routes) {
      if (r.method !== method) continue;
      const m = path.match(r.re); if (!m) continue;
      try { [status, data] = r.fn(url.searchParams, body, m.groups || {}); }
      catch (e) { status = e.status || 500; data = { error: e.status ? e.message : "Something went wrong (demo)." }; if (!e.status) console.error(e); }
      break;
    }
    save();
    await new Promise(res => setTimeout(res, 60));   // parang totoong server
    return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
  };

  /* ===== Nakatagong reset (walang button sa screen) =====
     Para ibalik sa simulang demo data: buksan ang  index.html#reset-demo  */
  function checkReset() {
    if (location.hash !== "#reset-demo") return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    DB = freshDb(); save();
    location.replace(location.pathname.replace(/[^/]*$/, "") + "index.html");
    setTimeout(() => location.reload(), 50);
  }
  checkReset();
  window.addEventListener("hashchange", checkReset);
})();
