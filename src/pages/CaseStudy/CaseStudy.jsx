import { Link } from 'react-router-dom';
import userflow from '../../assets/images/userflow.png';
import sitemap from '../../assets/images/sitemap.png';
import mockup1 from '../../assets/images/mockups/Mockup_1.png';
import mockup2 from '../../assets/images/mockups/Mockup_2.png';
import mockup3 from '../../assets/images/mockups/Mockup_3.png';
import mockup4 from '../../assets/images/mockups/Mockup_4.png';
import './CaseStudy.styles.scss';

const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="case-study__header">
        <Link to="/" className="case-study__back">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="case-study__title">UX Case Study</h1>
      </div>

      <div className="case-study__content">
        <section className="case-study__section">
          <h2>1. Meeting the Client</h2>
          <p>I met with a client who owned a small company. He told me he had a problem: for quotes, he needed to visit clients' houses, take measurements, find the materials, and, with all that information, estimate the quote including materials and labor. Of course, this required a lot of time, gas, and effort—and he is an elderly man. So he needed a quote app to have all the necessary information for the clients and they quickly order an installation.</p>
          <br/>
          <p>I identified the main problem and found a different solution: <strong style={{color: "#3D518C"}}>a Digital Catalog where clients can check out the prices of differents installations including materials costs, labor prices and more. Some actions on the client´s side include providing measures of their installation space.</strong></p>
        </section>

        <section className="case-study__section">
          <h2>2. User's Segmentation</h2>
          <p>First of all, I segmented the users in different categories:<br/>
            <br/>
            <strong style={{color: "#190EB2"}}>Types of users</strong>
            <ul>
              <li><strong style={{color: "#3D518C"}}>Principal users:</strong> The company owner</li>
              <li><strong style={{color: "#3D518C"}}>Secondary users:</strong> Workers that help with installations and need to be informed about it</li>
              <li><strong style={{color: "#3D518C"}}>Clients:</strong> All the people that want to find quotes of installations, materials costs, labor prices and more</li>    
            </ul>
          </p>
          <p>
            <br/>
            <strong style={{color: "#190EB2"}}>User's characteristics</strong>
            <ul>
              <li><strong style={{color: "#3D518C"}}>User 1:</strong> Small company that doesn't have a high budget and requires a efficient solution</li>
              <li><strong style={{color: "#3D518C"}}>User 2:</strong> Clients that want a quick way to get a quote of their installation (all included)</li>
            </ul>
          </p>
        </section>

        <section className="case-study__section">
          <h2>3. Sketching</h2>
          <p>With the solution in mind, i started creating sketches and drawings of the structure, styles and user flow. I constantly came up with great ideas but at the end i discarded them. After multiple discarded ideas and concepts i found the perfect option for the catalog.</p>
        </section>

        <section className="case-study__section">
          <h2>4. User Flow & Sitemap</h2>
          <p>After the sketches, i went to Figma. I created the main User flow and the Roadmap, based on what i draw. I created all the necessary components and forms (i was helped with some plugins that are amazing!).</p>
          <div className="case-study__images">
            <img src={userflow} alt="User_Flow" />
            <img src={sitemap} alt="Sitemap" />
          </div>
        </section>

        <section className="case-study__section">
          <h2>5. Wireframing & Prototyping</h2>
          <p>Then, i did my favorite part. I created multiple components, interactive components, variants and assets. Using all those elements, i designed various interactive wireframes. Once i verified that everything worked correctly i transformed those wireframes into a more realistic design.</p>
          <br/>
          <div className="case-study__mockups">
            <div className="case-study__mockup">
              <img src={mockup1} alt="Home mockup" />
              <span>Home</span>
            </div>
            <div className="case-study__mockup">
              <img src={mockup2} alt="Product mockup" />
              <span>Product</span>
            </div>
            <div className="case-study__mockup">
              <img src={mockup3} alt="Photos mockup" />
              <span>Product photos</span>
            </div>                
            <div className="case-study__mockup">
              <img src={mockup4} alt="Product mockup" />
              <span>Product</span>
            </div>            
          </div>
        </section>

        <section className="case-study__section">
          <h2>6. Stuck Project</h2>
          <p>Unfortunately, the project was halted because the client didn't meet with me to review the next steps. However, i deeply appreciate this experience because it allowed me to learn how to engage with clients and practice everything i learned.</p>
        </section>
      </div>
    </div>
  )
}

export default CaseStudy
