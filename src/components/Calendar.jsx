import './Calendar.css';

const RACE_EVENTS = [
  {
    name: 'RMC Kenya Round 1',
    date: '25-26 April',
    location: 'Kenya'
  },
  {
    name: 'RMC Kenya Round 2',
    date: '6-7 June',
    location: 'Kenya'
  },
  {
    name: 'British Champions of the Future Academy Round 3',
    date: '19-21 June',
    location: 'Larkhall Circuit International'
  },
  {
    name: 'RMC Kenya Round 3',
    date: '22-23 September',
    location: 'Kenya'
  },
  {
    name: 'RMC Kenya Round 4',
    date: '7-8 November',
    location: 'Kenya'
  }
];

export default function Calendar() {
  return (
    <section id="calendar" className="calendar-section">
      <div className="calendar-shell">
        <div className="calendar-layout">
          <div className="calendar-left">
            <div className="calendar-header">
              <span className="calendar-kicker">03 - RACE CALENDAR</span>
              <h2>Upcoming Rounds</h2>
            </div>

            <div className="calendar-grid">
              {RACE_EVENTS.map((event) => (
                <article className="calendar-card" key={`${event.name}-${event.date}`}>
                  <p className="event-date">{event.date}</p>
                  <h3>{event.name}</h3>
                  <p className="event-location">{event.location}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="calendar-right" aria-label="Calendar cover image">
            <div className="calendar-hero">
              <img src="/calendar.jpeg" alt="Magana Luusa race calendar" />
              <span>2026 SEASON</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
