import './FeatureCard.css'

function FeatureCard({ title, text }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default FeatureCard
