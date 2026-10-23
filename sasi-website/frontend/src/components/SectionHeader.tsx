type Props = { number?: string; eyebrow: string; title: string; text?: string; light?: boolean }
export default function SectionHeader({ number, eyebrow, title, text, light = false }: Props) {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''}`}>
      <div className="section-header-top">{number && <span className="section-number">{number}</span>}<span className="eyebrow">{eyebrow}</span></div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
