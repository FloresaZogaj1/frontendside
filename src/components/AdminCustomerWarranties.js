// src/admin/components/AdminCustomerWarranties.jsx
import React, { useEffect, useMemo, useState } from "react";
import { api } from "../api";

const colors = {
  bg: "#0b0b0b",
  surface: "#0f0f0f",
  card: "#111111",
  stroke: "#1f1f1f",
  text: "#ffffff",
  muted: "#c9c9c9",
  accent: "#ff8000",
  accentHover: "#e67300",
  chip: "#151515",
  chipStroke: "#1e1e1e",
  shadow: "0 18px 42px rgba(0,0,0,.35)",
};

export default function AdminCustomerWarranties() {
  const [rows, setRows] = useState([]);
  const [q, setQ] = useState("");

  const [showPicker, setShowPicker] = useState(false);
  const [selectedCols, setSelectedCols] = useState([
    "id","created_at","client","phone","email","brandModel","imei","duration","price",
  ]);

  const load = async () => {
    try {
      const { data } = await api.get(`/api/warranty`); // production backend ka /api prefix
      setRows(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error loading warranties:', error);
      setRows([]);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("A je i sigurt që do ta fshish?")) return;
    try {
      await api.delete(`/warranty/${id}`); // Hequr /api prefix
      load();
    } catch (error) {
      console.error('Error deleting warranty:', error);
    }
  };

  const filt = useMemo(() => {
    const ql = q.toLowerCase();
    return rows.filter((r) => {
      const s = `${r.first_name} ${r.last_name} ${r.phone || ""} ${r.email || ""} ${r.brand} ${r.model} ${r.imei}`.toLowerCase();
      return s.includes(ql);
    });
  }, [rows, q]);

  const allColumns = [
    { key: "id", label: "ID", get: (r) => r.id },
    { key: "created_at", label: "Data", get: (r) => new Date(r.created_at).toLocaleString() },
    { key: "client", label: "Klienti", get: (r) => `${r.first_name} ${r.last_name}`.trim() },
    { key: "phone", label: "Tel", get: (r) => r.phone || "-" },
    { key: "email", label: "Email", get: (r) => r.email || "-" },
    { key: "brandModel", label: "Marka/Modeli", get: (r) => `${r.brand} ${r.model}`.trim() },
    { key: "imei", label: "IMEI", get: (r) => r.imei },
    { key: "duration", label: "Kohëzgj.", get: (r) => `${r.duration_months} muaj` },
    { key: "price", label: "Çmimi", get: (r) => `${Number(r.price).toFixed(2)} €` },
  ];
  const visibleColumns = allColumns.filter((c) => selectedCols.includes(c.key));

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[s]));

  const handlePrintSelected = () => {
    if (!visibleColumns.length) { alert("Zgjidh të paktën një kolonë për printim."); return; }
    const headCells = visibleColumns.map((c) => `<th>${c.label}</th>`).join("");
    const bodyRows = filt.map((r) => {
      const tds = visibleColumns.map((c) => `<td>${escapeHtml(c.get(r) ?? "")}</td>`).join("");
      return `<tr>${tds}</tr>`;
    }).join("");
    const styles = `
      <style>
        *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}
        h1{margin:0 0 8px 0;font-size:18px}
        .meta{font-size:12px;color:#666}
        table{width:100%;border-collapse:collapse;margin-top:8px;table-layout:fixed}
        th,td{border:1px solid #bbb;padding:6px 8px;font-size:13px;word-break:break-word}
        th{background:#f5f5f5;text-align:left}
        @media print { @page { size:A4; margin:12mm } thead{display:table-header-group} tfoot{display:table-footer-group} }
      </style>
    `;
    const html = `
      <!doctype html><html lang="sq"><head><meta charset="utf-8">${styles}</head>
      <body>
        <h1>Lista e garancioneve</h1>
        <div class="meta">Kolonat: ${visibleColumns.map((c) => c.label).join(", ")} • Rekorde: ${filt.length}</div>
        <table>
          <thead><tr>${headCells}</tr></thead>
          <tbody>${bodyRows || `<tr><td colspan="${visibleColumns.length}" style="text-align:center;padding:20px">S’ka të dhëna</td></tr>`}</tbody>
        </table>
      </body></html>
    `;
    const iframe = document.createElement("iframe");
    Object.assign(iframe.style, { position: "fixed", right: 0, bottom: 0, width: 0, height: 0, border: 0 });
    document.body.appendChild(iframe);
    iframe.srcdoc = html;
    iframe.onload = () => {
      try { iframe.contentWindow.focus(); iframe.contentWindow.print(); }
      finally { setTimeout(() => document.body.removeChild(iframe), 500); }
    };
  };

  return (
    <div style={{ maxWidth: 1160, margin: "24px auto", color: colors.text }}>
      <h2 style={{ margin: "8px 0 16px", fontWeight: 900, letterSpacing: 0.3 }}>
        Garancionet e Klientëve
      </h2>

      {/* Toolbar */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr auto auto", gap: 10, alignItems: "center",
        background: colors.surface, border: `1px solid ${colors.stroke}`, borderRadius: 10, padding: 10, boxShadow: colors.shadow,
      }}>
        <input
          placeholder="Kërko (emër, tel, email, model, IMEI)…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={styles.input}
        />
        <button onClick={() => setShowPicker(true)} style={styles.btnGhost}>Zgjedh kolonat…</button>
        <button onClick={handlePrintSelected} style={styles.btnAccent}>Printo kolonat</button>
      </div>

      {/* Tabela */}
      <div style={{ marginTop: 12, background: colors.surface, border: `1px solid ${colors.stroke}`, borderRadius: 12, overflow: "hidden", boxShadow: colors.shadow }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
            <thead>
              <tr style={{ background: "linear-gradient(180deg, rgba(255,128,0,.08), rgba(255,128,0,.03))", color: colors.text }}>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Data</th>
                <th style={styles.th}>Klienti</th>
                <th style={styles.th}>Tel</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Marka/Modeli</th>
                <th style={styles.th}>IMEI</th>
                <th style={styles.th}>Kohëzgj.</th>
                <th style={styles.th}>Çmimi</th>
                <th style={{ ...styles.th, textAlign: "center" }}>Veprime</th>
              </tr>
            </thead>
            <tbody>
              {filt.map((r) => (
                <tr key={r.id} style={{ borderTop: `1px solid ${colors.stroke}`, background: colors.card }}>
                  <td style={styles.td}>{r.id}</td>
                  <td style={styles.td}>{new Date(r.created_at).toLocaleString()}</td>
                  <td style={styles.td}><span style={styles.badge}>{r.first_name} {r.last_name}</span></td>
                  <td style={styles.td}>{r.phone || "-"}</td>
                  <td style={styles.td}>{r.email || "-"}</td>
                  <td style={styles.td}>{r.brand} {r.model}</td>
                  <td style={styles.tdMonospace}>{r.imei}</td>
                  <td style={styles.td}>{r.duration_months} muaj</td>
                  <td style={styles.tdStrong}>{Number(r.price).toFixed(2)} €</td>
                  <td style={{ ...styles.td, textAlign: "center", whiteSpace: "nowrap" }}>
                    <a href={`/admin/customer-warranties/${r.id}`} style={styles.link}>Shiko</a>
                    <span style={{ color: colors.muted }}> {" | "} </span>
                    <button onClick={() => window.open(`/admin/customer-warranties/${r.id}`, "_blank")} style={styles.btnTiny}>Printo</button>
                    <span style={{ color: colors.muted }}> {" | "} </span>
                    <button onClick={() => handleDelete(r.id)} style={styles.btnDanger}>Fshij</button>
                  </td>
                </tr>
              ))}
              {!filt.length && (
                <tr>
                  <td colSpan={10} style={{ ...styles.td, textAlign: "center", padding: 24, color: colors.muted }}>
                    S’ka të dhëna
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal picker kolonash */}
      {showPicker && (
        <div style={dlg.backdrop} onClick={() => setShowPicker(false)}>
          <div style={dlg.card} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, color: colors.text }}>Zgjedh kolonat për print</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(160px,1fr))", gap: 10, margin: "12px 0 18px" }}>
              {allColumns.map((col) => (
                <label key={col.key} style={{
                  display: "flex", gap: 8, alignItems: "center", color: colors.text,
                  background: colors.surface, border: `1px solid ${colors.stroke}`, borderRadius: 10, padding: "10px 12px",
                }}>
                  <input
                    type="checkbox"
                    checked={selectedCols.includes(col.key)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedCols((prev) => checked ? [...new Set([...prev, col.key])] : prev.filter((k) => k !== col.key));
                    }}
                  />
                  {col.label}
                </label>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setSelectedCols(["client"])} style={styles.btnGhost}>Vetëm Klienti</button>
              <button onClick={() => setSelectedCols(allColumns.map((c) => c.key))} style={styles.btnGhost}>Zgjidh të gjitha</button>
              <button onClick={() => setShowPicker(false)} style={styles.btnGhost}>Mbyll</button>
              <button onClick={() => { setShowPicker(false); setTimeout(handlePrintSelected, 50); }} style={styles.btnAccent}>Printo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  input: {
    width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${colors.stroke}`,
    outline: "none", color: colors.text, background: colors.card, transition: "border-color .14s ease",
  },
  th: { textAlign: "left", padding: "12px 12px", fontWeight: 800, fontSize: 13, borderBottom: `1px solid ${colors.stroke}`, whiteSpace: "nowrap" },
  td: { padding: "12px 12px", fontSize: 14, color: colors.muted },
  tdStrong: { padding: "12px 12px", fontSize: 14, fontWeight: 800, color: colors.text },
  tdMonospace: { padding: "12px 12px", fontSize: 14, color: colors.muted, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", letterSpacing: 0.2 },
  link: { color: colors.accent, textDecoration: "none", fontWeight: 700 },
  btnGhost: { background: colors.card, border: `1px solid ${colors.stroke}`, color: colors.text, borderRadius: 10, padding: "10px 14px", fontWeight: 700, cursor: "pointer" },
  btnAccent: { background: colors.accent, border: "none", color: "#000", borderRadius: 10, padding: "10px 14px", fontWeight: 900, cursor: "pointer" },
  btnTiny: { background: colors.card, border: `1px solid ${colors.stroke}`, color: colors.text, borderRadius: 8, padding: "6px 10px", fontWeight: 700, cursor: "pointer" },
  btnDanger: { background: "transparent", border: "none", color: "#ff4d4f", fontWeight: 800, cursor: "pointer" },
};

const dlg = {
  backdrop: { position: "fixed", inset: 0, background: "rgba(0,0,0,.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 },
  card: { background: colors.card, padding: 16, borderRadius: 14, width: 560, maxWidth: "92vw", boxShadow: colors.shadow, border: `1px solid ${colors.stroke}` },
};
