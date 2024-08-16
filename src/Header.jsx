const Header = () => (
  <div className='home'>
    <div className="header_background-video-wrapper">
      <div className="video-wrap w-embed">
        <video
          autoPlay
          muted
          loop
          playsInline
          id="myVideo"
          poster="https://cdn.prod.website-files.com/65b8cd72835ceeacd4449a53/65c8ed3e7d491e37259a30c5_Langchain-hero-1_1706794335%201-placeholder.jpg"
        >
          <source
            src="https://customer-xp1a3vy0ydc4ega7.cloudflarestream.com/bb6cf069546e3d829aa5808ac8b07748/downloads/default.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div className="header_content">
      <div className="header_title-wrap">
        <h1>
          Breast Abnormality detection
        </h1>
      </div>
      <div className="join-us_buttons-wrapper">
        <a href="https://orcid.org/0000-0001-5911-8327" target="_blank" className="button w-button">Dr. Brindha GR</a>
        <a href="http://www.linkedin.com/in/mukesh-prasanna" target="_blank" className="button is-alternate w-button">Mukesh Prasanna</a>
      </div>
    </div>
  </div>
);

export default Header;