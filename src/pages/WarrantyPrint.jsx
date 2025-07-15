// WarrantyPrint.jsx
import React, { forwardRef } from "react";

const warrantyCSS = `
  .warranty-sheet {
    font-family: 'Arial', sans-serif;
    width: 670px;
    margin: 0 auto;
    background: #fff;
    color: #222;
    border-radius: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 14px #0000000a;
    padding: 28px 38px 28px 38px;
  }
  .warranty-logo-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .warranty-logo-row img {
    height: 52px;
  }
  .warranty-header {
    text-align: center;
    margin: 14px 0 18px 0;
    font-size: 1.15rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .warranty-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0 38px;
    margin-bottom: 12px;
  }
  .warranty-label {
    font-weight: bold;
    min-width: 100px;
    display: inline-block;
    margin-right: 3px;
  }
  .warranty-details-row {
    margin-bottom: 8px;
    font-size: 1rem;
  }
  .warranty-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    margin-bottom: 16px;
    font-size: 1rem;
  }
  .warranty-table th, .warranty-table td {
    border: 1px solid #bfbfbf;
    padding: 5px 7px;
    text-align: center;
  }
  .warranty-table th {
    background: #f5f5f5;
    font-weight: bold;
  }
  .warranty-section-title {
    margin-top: 16px;
    font-size: 1.04rem;
    font-weight: 700;
  }
  .warranty-kushtet {
    font-size: 0.97rem;
    line-height: 1.7;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .warranty-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 34px;
    align-items: end;
    font-size: 0.95rem;
  }
  @media print {
    body * { visibility: hidden; }
    .warranty-sheet, .warranty-sheet * { visibility: visible !important; }
    .warranty-sheet { position: absolute; left: 0; top: 0; width: 100vw !important; box-shadow: none; border: none; }
  }
`;

const WarrantyPrint = forwardRef(({
  logo,
  company,
  address,
  phone,
  klienti,
  dataFillimit,
  cmimi,
  modeli,
  imei,
  software,
  kohezgjatja,
}, ref) => (
  <>
    <style>{warrantyCSS}</style>
    <div className="warranty-sheet" ref={ref}>
      <div className="warranty-logo-row">
        <img src={logo} alt="Logo" />
        <div>
          <div style={{ fontWeight: 600 }}>{company}</div>
          <div>{address}</div>
          <div>TEL: {phone}</div>
        </div>
      </div>
      <div className="warranty-header">
        Fletë Garancioni
      </div>

      <div className="warranty-grid">
        <div>
          <div className="warranty-details-row"><span className="warranty-label">Klienti:</span> {klienti}</div>
          <div className="warranty-details-row"><span className="warranty-label">Data e fillimit te garancionit:</span> {dataFillimit}</div>
        </div>
        <div>
          <div className="warranty-details-row"><span className="warranty-label">Detajet:</span> Çmimi: {cmimi}€</div>
        </div>
      </div>

      <table className="warranty-table">
        <thead>
          <tr>
            <th>Modeli</th>
            <th>ImeI</th>
            <th>Software Info</th>
            <th>Kohëzgjatja e garancionit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modeli}</td>
            <td>{imei}</td>
            <td>{software}</td>
            <td>{kohezgjatja}</td>
          </tr>
        </tbody>
      </table>

      <div className="warranty-section-title">Kushtet e Garancionit</div>
      <div className="warranty-kushtet">
        Periudha e Garancionit fillon nga data e blerjes dhe perfundon ne afatin e shprehur ne Fletë Garancion. Shërbimi i garancionit do te kryhet ne ambientet e servisit te Top Mobile.<br /><br />
        <b>Garancioni mbulon riparimin (kthimin ne gjendje pune) falas te produkteve te shitura nga Top Mobile, duke plotesuar njekohesisht te gjitha kushtet e meposhtme:</b><br />
        - Defekti i produktit eshte me origjine prodhimi / nga fabrika<br />
        - Produkti shoqerohet me Faturen e blerjes dhe Fleten e Garancise<br />
        - Produkti nuk eshte hapur nga persona te pa autorizuar me shkrim nga Top Mobile<br />
        Top Mobile ka per obligim eleminimin e defektit sa me te shpejte, ne rastin me te keq per nje periudhe 30 ditore.<br /><br />

        <b>Garancioni nuk vlen ne keto raste:</b><br />
        - Demtimet fizike nga keperdorimi, pakujdesia etj<br />
        - Perditësimi i software-sistemit operativ (Update, downgrade) etj<br />
        - Perdorimi i produktit ne ambiente te papershtatshme (lagështi, nxehtësi, etj)<br />
        - Demtimet e shkaktuara nga tensioni i larte apo i ulet i rrymes elektrike, nga demtimet termike apo mekanike rrufeja etj.<br />
        - Demtimet nga ekspozimi i pajisjes ndaj lagështisë, nxehtësisë, tymit, dridhjeve, papastërtive, apo kushteve te jashtëzakonshme apo te papershtatshme.<br />
        - Nëse numri ne flet-garancion nuk perputhet me IMEI numrin ne aparat.<br />
        - Nëse bleresi nuk e ka flet garancionin.<br />
        - Nëse aparati është hapur dhe është tentuar te riparohet nga person i cili nuk ka autorizim nga servisi i Top Mobile.<br />
      </div>
      <div className="warranty-footer">
        <div><b>Top Mobile</b></div>
        <div>Klienti</div>
      </div>
    </div>
  </>
));
export default WarrantyPrint;
