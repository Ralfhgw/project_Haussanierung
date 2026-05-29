import atgPageUrl from '../assets/atg.html?url'

export default function Atg() {
  return (
    <div className="legacy-container">
      <iframe
        title="Haussanierung Inhalte"
        src={atgPageUrl}
        className="legacy-view"
      />
    </div>
  )
}
