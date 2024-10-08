const HeroSection = () => {
  return (
    <>
      <article className="hero">
        <section className="hero-section">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src="/C0021_6_SlowSpray.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h4>Trending Now</h4>
            <h2>Ladies, a man will never remember your handbag,<br/> but he will remember your perfume.
            <br/>
            Each fragrance is a piece of art that tells a story.
            <br/>
            Perfume is a reflection of your soul.</h2>
            <br/>
            <p>By Olivier Creed</p>
          </div>
        </section>
      </article>
    </>
  );
}

export default HeroSection;
