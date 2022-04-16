import photographer from '../assets/photographer.jpg';

export default function contact() {
  return (
    <div className="contactContainer">
      <div className='headerImageContainer'><img src={photographer}/></div>
      <div className='aboutText'>
        <div className='bio'>
          <h1>Biography</h1>
          <p>Drasko Lovrenco (born 1978, Zadar, Croatia) is an internationally-published photographer currently based in Vienna. He is fascinated with documenting the most remote parts of the world.<br/>His work has been featured by organizations such as Wanderer, Travelust, Outdoor Photographer, Far & Wild, and others.</p>
        </div>
        <div className='featured'>
          <h1>Featured Work</h1>
          <p>The Outsiders, New Outdoor Creativity, Gestalten, 2019</p>
          <p>Travelust Magazine, The Adventure Issue, Spring, 2018</p>
          <p>Wanderer Magazine, Issue 16, 2017</p>
          <p>Far & Wild Magazine, The Summer Issue 2014</p>
        </div>
      </div>
      
    </div>
  )
}
