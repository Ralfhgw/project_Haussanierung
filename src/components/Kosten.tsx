import './Kosten.css'

type CostEntry = {
  date: string
  market: string
  invoice: {
    label: string
    href: string | null
  }
  description: string
  price: string
}

const COST_ENTRIES: CostEntry[] = [
  {
    date: '20.08.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Px PU White 500ml',
    price: '8,99 EUR',
  },
  {
    date: '19.08.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Glättekelle 10x1',
    price: '10,49 EUR',
  },
  {
    date: '14.08.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Bau- und Elektrikergips 10kg',
    price: '9,79 EUR',
  },
  {
    date: '31.07.2026',
    market: 'Hornbach',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '10 x Acryl-Tiefengrund konservierungsmittelfrei farblos 10 l',
    price: '149,50 EUR',
  },
  {
    date: '29.07.2026',
    market: 'OBI',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Installations-, Elektro- und Stromkabel NYM-J 5 x 1,5 mm² 50 m Grau',
    price: '59,99 EUR',
  },
  {
    date: '29.07.2026',
    market: 'OBI',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Nagelscheibe 50 Stück',
    price: '14,99 EUR',
  },
  {
    date: '27.07.2026',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Annahme Gipskartonplatten',
    price: '51,04 EUR',
  },
  {
    date: '27.07.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '5411183180710 Acryl weiss',
    price: '1,99 EUR',
  },
  {
    date: '27.07.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '4337256129558 SPS Seko 5,0 x 60',
    price: '17,79 EUR',
  },
  {
    date: '17.07.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Inneneckenkelle, Maurerkelle 180mm, Edelstahlkratzer',
    price: '30,97 EUR',
  },
  {
    date: '16.07.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1100221 - Richtlatte Aluminium 2 m',
    price: '23,99 EUR',
  },
  {
    date: '08.07.2026',
    market: 'Fanztool GmbH',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260708_Betonschleifer.pdf',
    },
    description: 'FANZWORK Betonschleifer Betonfräse Set mit Diamantschleiftopf und Absaughaube (1500W/125mm+)',
    price: '129,99 EUR',
  },
  {
    date: '07.07.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Drahtbürste V2A-Stahl 5-reihig',
    price: '5,79 EUR',
  },
  {
    date: '06.07.2026',
    market: 'BAUHAUS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Scheppach Renovierungsschleifer MRS1300',
    price: '79,00 EUR',
  },
  {
    date: '05.07.2026',
    market: 'Hornbach',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260705_Signaldeckel.pdf',
    },
    description: 'Signaldeckel für Unterputz- dosen 60mm, VPE = 50 Stück',
    price: '9,84 EUR',
  },
  {
    date: '04.07.2026',
    market: 'Hornbach',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260704_Hornbach.pdf',
    },
    description: '2 x PRECIT Armierungsgewebe alkalibeständig 145 g/m² 4,5 x 4 mm weiß 50 x 1 m',
    price: '89,90 EUR',
  },
  {
    date: '04.07.2026',
    market: 'Hornbach',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260704_Hornbach.pdf',
    },
    description: '2 x Ho NN Acryl Tiefgrund KF 10L',
    price: '29,90 EUR',
  },
  {
    date: '04.07.2026',
    market: 'Hornbach',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260704_Hornbach.pdf',
    },
    description: 'Knauf SM700 PRO Klebe- und Armiermörtel weiß 25kg Pal.= 42 Sack',
    price: '339 EUR',
  },
  {
    date: '27.06.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Müllsäcke 120 l 25 Stück',
    price: '8,49 EUR',
  },
  {
    date: '23.06.2026',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Gipskartonplatten / Rigips 170 kg',
    price: '53,90 EUR',
  },
  {
    date: '19.06.2026',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Gipskartonplatten / Rigips 140 kg',
    price: '45,33 EUR',
  },
  {
    date: '19.06.2026',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Gipskartonplatten / Rigips Pauschalpreis',
    price: '5,00 EUR',
  },
  {
    date: '16.06.2026',
    market: 'TOOM',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Spanplattenschrauben Basic Ø 5,0 x 50 mm TX25 100 Stück',
    price: '13,29 EUR',
  },
  {
    date: '16.06.2026',
    market: 'TOOM',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Müllsäcke 120 l 25 Stück',
    price: '8,49 EUR',
  },
  {
    date: '13.06.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Müllbeutel 240 l',
    price: '6,49 EUR',
  },
  {
    date: '11.06.2026',
    market: 'Elektroshop Wagner',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260611_Hager_Sicherungskasten.pdf',
    },
    description: 'Hager ZB32ET215W2 Komplettschrank, universZ, 1ZP, RES, BKE-I, VT5, APZ, SLS, 63A, ESA, 1100x550x205 mm, IP44',
    price: '619,36 EUR',
  },
  {
    date: '05.06.2026',
    market: 'Voltking',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260605_Voltking.pdf',
    },
    description: 'Voxura Unterputz-Gerätedose Schalterdose Verbindungsdose mit Stutzen Ø 60mm 62mm Tiefe tief UP M25 schwarz 100 Stück',
    price: '38,50 EUR',
  },
  {
    date: '05.06.2026',
    market: 'DER Fuchs GmbH',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260605_Fuchs_GmbH.pdf',
    },
    description: '1000 Schnellbauschrauben, Grobgewinde 3,9 x 35 mm für Holzunterkonstruktionen im Trockenbau',
    price: '16,10 EUR',
  },
  {
    date: '04.06.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260604_Unterputzdose.pdf',
    },
    description: 'Voxura Unterputz-Gerätedose Schalterdose Verbindungsdose mit Stutzen Ø 60mm 62mm Tiefe tief UP M25 schwarz 100 Stück SKU: Voxura-K01-0020-01_4260741330019_100er',
    price: '6,15 EUR',
  },
  {
    date: '01.06.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260601_SiChuanErMuQian.pdf',
    },
    description: 'HAFRILY Bosch Schleifteller 125mm Klett 8-Loch für Bosch',
    price: '12,97 EUR',
  },
  {
    date: '30.05.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260530_Schleifteller.pdf',
    },
    description: 'HAFRILY Bosch Schleifteller 125mm Klett 8-Loch für Bosch Pex 400 AE/Pex 300 AE Ersatz Schleifplatte mit Hook für Bosch Exzenterschleifer',
    price: '8,98 EUR',
  },
  {
    date: '29.05.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260518_Scheibe für Fräse.pdf',
    },
    description: 'Kopp Abzweigdose Profi-Pack 10x Aufputz für den Feuchtraum 75 x 75 x 40mm spritzwassergeschützte Kabelabzweigdosen IP54 Verbindungsdosen mit 12 Kabeleinführungen grau 340604504 Kunststoff',
    price: '9,90 EUR',
  },
  {
    date: '28.05.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260529_Abzweigdosen.pdf',
    },
    description: '3 x Kopp Abzweigdose Profi-Pack 10x Aufputz für den Feuchtraum 75 x 75 x 40mm',
    price: '33,69 EUR',
  },
  {
    date: '28.05.2026',
    market: 'obi',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '2 x Feuchtraumleitung 100m',
    price: '134,62 EUR',
  },
  {
    date: '28.05.2026',
    market: 'toom',
    invoice: {
      label: '0104689268',
      href: null,
    },
    description: 'Art. 7200120 15 St. Glattkantbretter gehFi/Ta 18x100x2000mm',
    price: '74,70 EUR',
  },
  {
    date: '23.05.2026',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Kabelverschraubung',
    price: '4,69 EUR',
  },
  {
    date: '22.05.2026',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Sicherungskasten',
    price: '49,99 EUR',
  },
  {
    date: '22.05.2026',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Steckdosen Aqua',
    price: '8,97 EUR',
  },
  {
    date: '21.05.2026',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x SPS Senkkopfschrauben 4,5 x 20',
    price: '12,79 EUR',
  },
  {
    date: '19.05.2026',
    market: 'OBI',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260519_Obi.pdf',
    },
    description: 'Kabelkanal 110 x 60 x 2000mm grau',
    price: '167,77 EUR',
  },
  {
    date: '18.05.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260518_Scheibe für Fräse.pdf',
    },
    description: '4 x Bosch Professional Diamanttrennscheibe Standard for Universal (Beton und Mauerwerk, 150 x 22,23 mm, Zubehör Winkelschleifer)',
    price: '49,25 EUR',
  },

  {
    date: '16.05.2026',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Feuchtraumkabel NYM-J 3x1,5 50m',
    price: '36,99 EUR',
  },

  {
    date: '11.05.2026',
    market: 'Thomas Erfurth',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260511_Thomas_Erfurth.pdf',
    },
    description: 'TE-Office 32 Stück Kabel Aufkleber Label Etiketten Selbstklebend',
    price: '5,95 EUR',
  },
  {
    date: '29.04.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20160429_Amazon.pdf',
    },
    description: 'REV AquaStorm, Serienschalter, Lichtschalter Feuchtraum IP55, einpolig, Aufputz, 230V, 10A, anthrazit',
    price: '6,64 EUR',
  },
  {
    date: '29.04.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20160429_Amazon.pdf',
    },
    description: 'Kopp Abzweigdose Profi-Pack 10x Aufputz für den Feuchtraum 75 x 75 x 40mm',
    price: '9,90 EUR',
  },
  {
    date: '27.04.2026',
    market: 'Amazon',
    invoice: {
      label: 'Beleg',
      href: '/dokumente/20260427_C-E-E Manufaktur.pdf',
    },
    description: 'WAGO 221 Starter-Set | 20x Verbindungsklemmen',
    price: '34,02 EUR',
  },
  {
    date: '25.04.2026',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Sägeblatt für Säbelsäge',
    price: '17,99 EUR',
  },
  {
    date: '19.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 100 kg',
    price: '58,31 EUR',
  },
  {
    date: '19.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 60 kg',
    price: '42,84 EUR',
  },
  {
    date: '18.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 80 kg',
    price: '50,58 EUR',
  },
  {
    date: '14.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 90 kg',
    price: '54,44 EUR',
  },
  {
    date: '13.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 20 kg',
    price: '27,37 EUR',
  },
  {
    date: '12.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 40 kg',
    price: '35,11 EUR',
  },
  {
    date: '11.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 40 kg',
    price: '35,11 EUR',
  },
  {
    date: '10.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 60 kg',
    price: '42,84 EUR',
  },
  {
    date: '06.11.2025',
    market: 'REMONDIS',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Entsorgung Dämmmaterial 50 kg',
    price: '38,97 EUR',
  },

  {
    date: '11.10.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Bauplane 4x6m',
    price: '14,99 EUR',
  },
  {
    date: '09.10.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '2 x Lüsterklemme',
    price: '5,78 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Feuchtraumplane für Abdeckung draußen',
    price: '21,93 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Acryl weiss',
    price: '5,97 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Senkpfschrauben 5,0 x 40',
    price: '15,49 EUR',
  },
  {
    date: '30.09.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Handschuhe',
    price: '5,99 EUR',
  },
  {
    date: '11.08.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Senkopfschrauben 3,5 x 20',
    price: '5,69 EUR',
  },
  {
    date: '04.08.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Bodenausgleichmasse 1 - 40mm 22kg',
    price: '71,97 EUR',
  },
  {
    date: '28.07.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Feuchtraumplane',
    price: '7,31 EUR',
  },
  {
    date: '28.07.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Acryl weiss',
    price: '9,30 EUR',
  },
  {
    date: '23.07.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Acryl weiss',
    price: '5,97 EUR',
  },
  {
    date: '07.07.2025',
    market: 'obi',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Brettschichtholz SI Fichte für Bodentreppe',
    price: '94,41 EUR',
  },
  {
    date: '05.07.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '1 x Müllsack',
    price: '8,49 EUR',
  },
  {
    date: '05.07.2025',
    market: 'toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: '3 x Feuchtraumplane',
    price: '21,93 EUR',
  },
  {
    date: '11.06.2025',
    market: 'obi',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Hebeleisen 400mm',
    price: '30,78 EUR',
  },
  {
    date: '11.06.2025',
    market: 'obi',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Japan Nageleisen',
    price: '30,78 EUR',
  },
  {
    date: '10.03.2025',
    market: 'Toom',
    invoice: {
      label: 'Beleg',
      href: null,
    },
    description: 'Akku Bohrschrauber',
    price: '99,99 EUR',
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
              <tr key={`${entry.date}-${entry.market}-${entry.invoice.label}`}>
                <td>{entry.date}</td>
                <td>{entry.market}</td>
                <td>
                  {entry.invoice.href ? (
                    <a
                      className="kosten-invoice-link"
                      href={entry.invoice.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {entry.invoice.label}
                    </a>
                  ) : (
                    <span className="kosten-invoice-text">{entry.invoice.label}</span>
                  )}
                </td>
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
