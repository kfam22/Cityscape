import photographer from '../assets/photographer.jpg';
import ContactForm from './contactForm';

export default function contact() {
  return (
    <div className="contactContainer">
      <div className='headerImageContainer'><img src={photographer}/></div>
      
      <div className='aboutText'>
        
        <div className='bio'>
          <h1>Bio</h1>
          <p>Jon Famurewa is a published photographer currently based in Ann Arbor, Michigan. He is fascinated with documenting nature, people, and automobiles.<br/>His work has been featured by organizations such as Wanderer, Travelust, Outdoor Photographer, Far & Wild, and others.</p>
        </div>

        <div className='featured'>
          <h1>Featured Work</h1>
          <p>The Outsiders, New Outdoor Creativity, Gestalten, 2019</p>
          <p>Travelust Magazine, The Adventure Issue, Spring, 2018</p>
          <p>Wanderer Magazine, Issue 16, 2017</p>
          <p>Far & Wild Magazine, The Summer Issue 2014</p>
        </div>

      </div>

      <div className='featuredImages'>

          <div className='accomplishment' id='featuredImage1'></div>
          <div className='accomplishment' id='featuredImage2'></div>
          <div className='accomplishment' id='featuredImage3'></div>

      </div>

      <div className='contactSection'>

        <div className='contactText'>
          <h2>Contact</h2>
          <p>For more information on Jon's work, to get in touch about collaborations, interviews, exhibitions or other opportunities, please use this form.</p>
        </div>

        <div className='contactForm'>
          <ContactForm/>
        </div>

      </div>
      
    </div>
  )
}
