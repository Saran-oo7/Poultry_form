import Icon from './Icons.jsx'

const items = [
  { icon: 'hen', text: 'Broiler chicken' },
  { icon: 'egg', text: 'Farm fresh eggs' },
  { icon: 'chick', text: 'Day-old chicks' },
  { icon: 'rooster', text: 'Country chicken' },
  { icon: 'feed', text: 'Poultry feed' },
  { icon: 'chart', text: 'Weighed at the gate' },
  { icon: 'truck', text: '5 batches a year' },
  { icon: 'shield', text: 'Contract growing' },
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* rendered twice so the loop is seamless */}
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((it) => (
              <span className="marquee-item" key={`${copy}-${it.text}`}>
                <Icon name={it.icon} size={26} />
                {it.text}
                <b>•</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
