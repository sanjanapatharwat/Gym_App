import './App.css'
import FeatureCard from './components/FeatureCard'
import ScheduleItem from './components/ScheduleItem'

const stats = [
  { value: '24/7', label: 'Open access' },
  { value: '12+', label: 'Expert coaches' },
  { value: '4.9/5', label: 'Member rating' },
]

const features = [
  {
    title: 'Performance training',
    text: 'Strength, conditioning, and mobility sessions tailored to your goals.',
  },
  {
    title: 'Recovery lounge',
    text: 'Sauna, stretch zones, and recovery tools to keep you feeling your best.',
  },
  {
    title: 'Community energy',
    text: 'Small-group classes and weekly challenges built to keep you motivated.',
  },
]

const schedule = [
  { time: '06:30', title: 'Sunrise strength' },
  { time: '12:00', title: 'Power HIIT' },
  { time: '18:30', title: 'Mobility flow' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-card">
        <p className="eyebrow">Strength • Cardio • Recovery</p>
        <h1>Train harder. Recover smarter.</h1>
        <p className="hero-copy">
          Step into a gym designed for real progress with expert coaching, premium
          equipment, and a community that keeps you moving.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#membership">
            Join now
          </a>
          <a className="btn btn-secondary" href="#classes">
            View classes
          </a>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="content-grid">
        <section className="panel" id="features">
          <div className="section-heading">
            <p className="eyebrow">Why members stay</p>
            <h2>Everything you need to build momentum.</h2>
          </div>
          <div className="card-list">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} text={feature.text} />
            ))}
          </div>
        </section>

        <section className="panel" id="classes">
          <div className="section-heading">
            <p className="eyebrow">This week</p>
            <h2>Fresh classes every day.</h2>
          </div>
          <div className="schedule-list">
            {schedule.map((item) => (
              <ScheduleItem key={item.time} time={item.time} title={item.title} />
            ))}
          </div>
        </section>

        <section className="panel membership-panel" id="membership">
          <div>
            <p className="eyebrow">Start today</p>
            <h2>First week free for new members.</h2>
            <p>
              Bring your goals, and we will handle the plan, coaching, and energy.
            </p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@peakfit.example">
            Book a tour
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
