ComLab IMS — DEMO (walang Node.js at MySQL)
============================================

PAANO BUKSAN (VS Code Live Server)
1. Buksan ang folder na "ims-demo" sa VS Code (File > Open Folder).
2. I-right click ang index.html > "Open with Live Server".
3. Mag-login gamit ang isa sa mga demo account:

   Dean ................... demo.dean  / Dean123!
   Laboratory Coordinator . demo.coord / Coord123!
   Laboratory Technician .. demo.tech  / Tech123!

LAMAN NG DEMO
- 10 PC sets: COMLAB 1 (CL1-PC01 hanggang 05) at COMLAB 2 (CL2-PC01 hanggang 05)
- Storage: 8 bagong item + 1 buong PC set (ST-PC01)
- 5 spare parts, 4 maintenance logs
- Gumagana lahat: add/edit/archive, approvals ng Technician, deploy ng storage,
  reports at print, QR code, accounts, activity log, backup at restore.

PAANO GUMAGANA
- Walang server at database. Ang "demo-api.js" ang gumagaya sa server,
  at naka-save ang data sa browser (localStorage).
- Mananatili ang mga binago mo kahit i-refresh o isara ang browser.
- Para ibalik sa simulang data (para sa iyo lang, walang button sa screen):
  i-type sa address bar ang  .../index.html#reset-demo  at pindutin ang Enter.
- Kanya-kanyang data ang bawat browser/computer (hindi shared). Kapag may
  nag-try sa ibang computer, sa browser lang nila ang nagbago.

PAALALA
- Kailangan ng internet para sa fonts, Bootstrap at QR code library.
- Sa QR code: ang link ay papunta sa Live Server address (hal. 127.0.0.1:5500),
  kaya sa computer lang ito bubukas, hindi sa cellphone. Para sa totoong
  pag-scan gamit ang cellphone, gamitin ang buong system (ims.zip).
- Forgot Password: lalabas ang code sa screen (walang totoong email).
