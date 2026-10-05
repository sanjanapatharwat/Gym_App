import './ScheduleItem.css'

function ScheduleItem({ time, title }) {
  return (
    <div className="schedule-item">
      <span>{time}</span>
      <strong>{title}</strong>
    </div>
  )
}

export default ScheduleItem
