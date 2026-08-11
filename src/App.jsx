import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedNews, setSelectedNews] = useState(null) // State to store the selected news item

  const logoUrl = '/oyengameworks.png'
  const ig = '/instagram.png'

  const navigateTo = (page) => {
    setActivePage(page)
    setSelectedNews(null) // Reset news detail when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openNewsDetail = (news) => {
    setSelectedNews(news)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const projects = [
    {
      id: 1,
      title: 'Catty Cardy',
      description: 'Catty Cardy is a hybrid Idle Clicker + Card Battle game centered around viral, absurd internet cat memes.',
      image: 'https://img.itch.zone/aW1nLzI4MjcxMjA0LnBuZw==/original/lEdJ%2BY.png',
      link: 'https://oyen-gameworks.itch.io/catty-cardy'
    }
  ]

  const newsList = [
    {
      id: 1,
      title: 'Catty Cardy Officially Released on Itch.io!',
      date: 'July 4, 2026',
      summary: 'Our absurd cat meme card battle game is now playable for free!',
      content: `We are pleased to announce that we are developing a game for Gameseed 2026 and our first project for Oyen Gameworks.

Thank you to the Oyen Gameworks team for their hard work, even under tight deadlines.`,
      image: 'https://img.itch.zone/aW1nLzI4MjcxMjA0LnBuZw==/original/lEdJ%2BY.png',
    },
    {
      id: 2,
      title: 'A New Indie Game Studio Has Arrived!',
      date: 'March 22, 2026',
      summary: 'Guess who is behind this team?',
      content: `Hello, Oyen Gameworks!
      Welcome to the world of gameram development.
      For More Info: https://www.instagram.com/p/Dawm9INGMrp/?img_index=1`,
      image: '/news2.png',
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Arka',
      role: 'Technical Project Manager & Lead Game Designer',
      city: 'Tasikmalaya',
      image: '/arka.jpg'
    },
    {
      id: 2,
      name: 'Farid',
      role: 'Lead Programmer',
      city: 'Gorontalo',
      image: '/farid.png'
    },
    {
      id: 3,
      name: 'Satriya',
      role: 'Lead 2D Artist',
      city: 'Surabaya',
      image: '/samsat.jpg'
    },
    {  
      id: 4,
      name: 'Najih',
      role: '2D Artist',
      city: 'Semarang',
      image: '/najih.png'
    },
  ]

  return (
    <div className="app-container">
      {/* Floating Sidebar */}
      <aside className="floating-sidebar">
        <a 
          href="https://www.instagram.com/direct/t/18067331291452366" 
          target="_blank" 
          rel="noopener noreferrer"   
          className="sidebar-link instagram"
          title="Contact Us via Instagram"
        >
          <img src={ig} alt="Instagram" className="logo-img-header" />
        </a>
      </aside>

      {/* Header / Navbar */}
      <header className="header">
        <div className="logo-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <img src={logoUrl} alt="Oyen Gameworks Logo" className="logo-img-header" />
          <span className="logo-text">Oyen Gameworks</span>
        </div>
        <nav className="navbar">
          <button 
            className={activePage === 'home' && !selectedNews ? 'active' : ''} 
            onClick={() => navigateTo('home')}
          >
            Home
          </button>
          <button 
            className={activePage === 'about' ? 'active' : ''} 
            onClick={() => navigateTo('about')}
          >
            About Us
          </button>
          <button 
            className={activePage === 'team' ? 'active' : ''} 
            onClick={() => navigateTo('team')}
          >
            Our Team
          </button>
          <button 
            className={activePage === 'projects' ? 'active' : ''} 
            onClick={() => navigateTo('projects')}
          >
            Projects
          </button>
          <button 
            className={activePage === 'news' || selectedNews ? 'active' : ''} 
            onClick={() => navigateTo('news')}
          >
            News
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* NEWS DETAIL VIEW */}
        {selectedNews ? (
          <section className="section news-detail-section">
            <button className="back-btn" onClick={() => setSelectedNews(null)}>
              ← Back to News
            </button>
            <article className="full-news-article">
              <span className="news-date">{selectedNews.date}</span>
              <h1 className="news-detail-title">{selectedNews.title}</h1>
              <div className="news-detail-image-wrapper">
                <img src={selectedNews.image} alt={selectedNews.title} className="news-detail-image" />
              </div>
              <div className="news-detail-content">
                {selectedNews.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </section>
        ) : (
          <>
            {/* HOME PAGE */}
            {activePage === 'home' && (
              <section className="section home-section">
                <div className="hero-banner">
                  <h1>Welcome to <span className="highlight-text">Oyen Gameworks</span></h1>
                </div>

                <div className="home-split-container">
                  {/* News Subsection (Left) */}
                  <div className="home-block">
                    <div className="section-header-flex">
                      <button className="see-more-btn" onClick={() => navigateTo('news')}>
                        View All News →
                      </button>
                    </div>
                    <div className="news-grid">
                      {newsList.slice(0, 2).map((item) => (
                        <div 
                          key={item.id} 
                          className="news-card clickable" 
                          onClick={() => openNewsDetail(item)}
                        >
                          <div className="news-image-wrapper">
                            <img src={item.image} alt={item.title} className="news-image" />
                          </div>
                          <div className="news-info">
                            <span className="news-date">{item.date}</span>
                            <h3>{item.title}</h3>
                            <p>{item.summary}</p>
                            <span className="read-more-text">Read More →</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects Subsection (Right) */}
                  <div className="home-block">
                    <div className="section-header-flex">
                      <button className="see-more-btn" onClick={() => navigateTo('projects')}>
                        View All Projects →
                      </button>
                    </div>
                    <div className="projects-grid">
                      {projects.slice(0, 3).map((project) => (
                        <a 
                          key={project.id} 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-card"
                        >
                          <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                          </div>
                          <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span className="project-btn">View →</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ABOUT PAGE */}
            {activePage === 'about' && (
              <section id="about" className="section about-section">
                <div className="about-card">
                  <img src={logoUrl} alt="Oyen Gameworks Logo" className="about-logo-img" />
                  <div className="about-content">
                    <h1>Oyen Gameworks</h1>
                    <p className="about-text">
                      An indie studio born out of the Gameseed 2026 competition, we want to create a game you are sure to love
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* PROJECTS PAGE */}
            {activePage === 'projects' && (
              <section id="projects" className="section projects-section">
                <div className="projects-container">
                  <div className="projects-grid">
                    {projects.map((project) => (
                      <a 
                        key={project.id} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-card"
                      >
                        <div className="project-image-wrapper">
                          <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-info">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <span className="project-btn">View →</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* NEWS PAGE */}
            {activePage === 'news' && (
              <section id="news" className="section news-section">
                <div className="news-grid">
                  {newsList.map((item) => (
                    <div 
                      key={item.id} 
                      className="news-card clickable"
                      onClick={() => openNewsDetail(item)}
                    >
                      <div className="news-image-wrapper">
                        <img src={item.image} alt={item.title} className="news-image" />
                      </div>
                      <div className="news-info">
                        <span className="news-date">{item.date}</span>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                        <span className="read-more-text">Read More →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TEAM PAGE */}
            {activePage === 'team' && (
              <section id="team" className="section team-section">
                {/* Team Members Grid */}
                <div className="team-grid">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                      <div className="team-avatar-wrapper">
                        <img src={member.image} alt={member.name} className="team-avatar" />
                        <span className="team-city-badge">{member.city}</span>
                      </div>
                      <div className="team-card-content">
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Oyen Gameworks. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App