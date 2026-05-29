import './Kosten.css'

const COST_ENTRIES = [
    {
    date: '28.05.2026',
    market: 'obi',
    invoice: 'Beleg',
    description: '2 x Feuchtraumleitung 100m',
    price: '134,62 EUR',
  },
  {
    date: '28.05.2026',
    market: 'toom',
    invoice: '0104689268',
    description: 'Art. 7200120 15 St. Glattkantbretter gehFi/Ta 18x100x2000mm',
    price: '74,70 EUR',
  },
    {
    date: '23.05.2026',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Kabelverschraubung',
    price: '4,69 EUR',
  },
      {
    date: '22.05.2026',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Sicherungskasten',
    price: '49,99 EUR',
  },
        {
    date: '22.05.2026',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Steckdosen Aqua',
    price: '8,97 EUR',
  },
          {
    date: '21.05.2026',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x SPS Senkkopfschrauben 4,5 x 20',
    price: '12,79 EUR',
  },
            {
    date: '25.04.2026',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Sägeblatt für Säbelsäge',
    price: '17,99 EUR',
  },
  {
    date: '11.10.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Bauplane 4x6m',
    price: '14,99 EUR',
  },
    {
    date: '09.10.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '2 x Lüsterklemme',
    price: '5,78 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Feuchtraumplane für Abdeckung draußen',
    price: '21,93 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Acryl weiss',
    price: '5,97 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Senkpfschrauben 5,0 x 40',
    price: '15,49 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Handschuhe',
    price: '5,99 EUR',
  },
  {
    date: '11.08.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Senkopfschrauben 3,5 x 20',
    price: '5,69 EUR',
  },
  {
    date: '04.08.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Bodenausgleichmasse 1 - 40mm 22kg',
    price: '71,97 EUR',
  },
  {
    date: '28.07.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Feuchtraumplane',
    price: '7,31 EUR',
  },
  {
    date: '28.07.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Acryl weiss',
    price: '9,30 EUR',
  },
  {
    date: '23.07.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Acryl weiss',
    price: '5,97 EUR',
  },
  {
    date: '07.07.2025',
    market: 'obi',
    invoice: 'Beleg',
    description: '3 x Brettschichtholz SI Fichte für Bodentreppe',
    price: '94,41 EUR',
  },
  {
    date: '05.07.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '1 x Müllsack',
    price: '8,49 EUR',
  },
  {
    date: '05.07.2025',
    market: 'toom',
    invoice: 'Beleg',
    description: '3 x Feuchtraumplane',
    price: '21,93 EUR',
  },
  {
    date: '11.06.2025',
    market: 'obi',
    invoice: 'Beleg',
    description: 'Hebeleisen 400mm',
    price: '30,78 EUR',
  },
  {
    date: '11.06.2025',
    market: 'obi',
    invoice: 'Beleg',
    description: 'Japan Nageleisen',
    price: '30,78 EUR',
  },


]

const parseEuroAmount = (price: string) =>
  Number(price.replace(' EUR', '').replace('.', '').replace(',', '.'))

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

export default function Kosten() {
  const totalPrice = COST_ENTRIES.reduce(
    (sum, entry) => sum + parseEuroAmount(entry.price),
    0,
  )

  return (
    <section className="kosten">
      <div className="kosten-header">
        <p className="kosten-kicker">Kosten</p>
        <h3>Kostenübersicht</h3>
        <p>
          Hier werden Belege und Ausgaben strukturiert gesammelt, damit
          die Projektkosten schnell nachvollziehbar bleiben.
        </p>
      </div>

      <div className="kosten-summary">
        <span>Gesamtbetrag</span>
        <strong>{euroFormatter.format(totalPrice)}</strong>
      </div>

      <div className="kosten-table-wrap">
        <table className="kosten-table">
          <thead>
            <tr>
              <th scope="col">Datum</th>
              <th scope="col">Markt</th>
              <th scope="col">Rechnung</th>
              <th scope="col">Beschreibung</th>
              <th scope="col">Preis</th>
            </tr>
          </thead>
          <tbody>
            {COST_ENTRIES.map((entry) => (
              <tr key={`${entry.date}-${entry.invoice}`}>
                <td>{entry.date}</td>
                <td>{entry.market}</td>
                <td>{entry.invoice}</td>
                <td>{entry.description}</td>
                <td>{entry.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
