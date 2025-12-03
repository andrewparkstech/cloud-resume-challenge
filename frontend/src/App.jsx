import { useState } from 'react'
// import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="wrap" role="main" aria-label="Resume of Andrew Parks">
        <section className="header">
          <h1 className="name">Andrew Parks</h1>

          <div className="contact" aria-label="Contact information">
            <div>andrew@example.com</div>
            <div>|</div>
            <div>(555) 555-5555</div>
            <div>|</div>
            <div>City, St</div>
            <div>|</div>
            <div><a href="#">Portfolio</a> / <a href="https://github.com/andrewparkstech">GitHub link</a></div>
          </div>
        </section>

        {/* <!--WORK EXPERIENCE --> */}
        <section className="work-section" aria-labelledby="work-heading">
          <div className="section-title">
            <h2 id="work-heading">Work Experience</h2>
          </div>

          <div className="work">

            {/* <!-- Job 1 --> */}
            <article className="job">
              <div className="job-head">
                <div>
                  <div className="company">Example Company</div>
                  <div className="title">Consulting Engineer</div>
                </div>
                <div className="dates">Jan. 2019 — Present<br /><span>Remote</span></div>
              </div>

              <ul>
                <li><strong>Example Company</strong> provides IT services to clients.</li>
              </ul>
            </article>

            {/* <!-- Job 2 --> */}
            <article className="job">
              <div className="job-head">
                <div>
                  <div className="company">Company Name #2</div>
                  <div className="title">Job Title</div>
                </div>
                <div className="dates">Oct. 2017 — Jul. 2023<br /><span>City, ST</span></div>
              </div>

              <ul>
                <li>Lead with a company overview to borrow validity from the company's numbers.</li>
                <li>As [role], I [responsibilities that match the job description].
                  <ul>
                    <li><em>Key Results:</em> List quantifiable outcomes like revenue, cost savings, customers/users acquired, etc.</li>
                    <li>Sub-bullets add extra detail like KPIs, tech stack, or major projects.</li>
                  </ul>
                </li>
              </ul>
            </article>

            {/* <!-- Job 3 --> */}
            <article className="job">
              <div className="job-head">
                <div>
                  <div className="company">Company Name #3</div>
                  <div className="title">Job Title</div>
                </div>
                <div className="dates">Month Year — Month Year<br /><span>City, ST</span></div>
              </div>

              <ul>
                <li>Core responsibility / achievements / summary of job or company.</li>
                <li><strong>Key Result:</strong> Nest further context as sub-bullet points.</li>
                <li>Core responsibility #2. Bold/italicize sparingly.</li>
              </ul>
            </article>

          </div>
        </section>

        {/* <!-- EDUCATION --> */}
        <section className="education">
          <div className="section-title">
            <h2>Education</h2>
          </div>

          <div className="edu-row">
            <div className="edu-left">University Name</div>
            <div className="edu-right">Graduation Month, Year</div>
          </div>

          <p className="muted-note">
            B.S., Computer Science — City, ST
          </p>
        </section>

        {/* <!-- SKILLS --> */}
        <section className="skills">
          <div className="section-title">
            <h2>Certifications, Skills &amp; Interests</h2>
          </div>

          <ul>
            <li><strong>Certifications:</strong> Add relevant ones or delete section.</li>
            <li><strong>Technologies:</strong> Split into hard skills vs soft skills if needed.</li>
            <li><strong>Skills:</strong> Strategic Planning; Brand Marketing; Copywriting; Hiring</li>
            <li><strong>Interests:</strong> Camping; Composting; Yoga; Traveling; Fishing; Reddit; <em>Seinfeld</em></li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App
