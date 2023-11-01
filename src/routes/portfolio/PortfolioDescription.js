const PortfolioDescription = () => {
  return (
    <section className="portfolio-text">
      <h2 className="title-font pink-text h2-tag">Portfolio</h2>
      <p className="white-text p-tag">
      I'm in the process of building something truly exciting, but it's not quite ready for the spotlight just yet. While my portfolio might appear a bit sparse at the moment, it's because I'm channeling all my energy and expertise into a significant project I mentioned earlier. I'm diligently crafting a web and mobile app that will soon take center stage. This journey is all about bringing my ideas to life and creating seamless, engaging digital experiences. Stay tuned for updates on my upcoming project, and feel free to connect with me to learn more about what's in the pipeline. {" "}
        <span>
          <a
            href="https://github.com/catherineisonline?tab=repositories"
            className="pink-text"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
      </p>
    </section>
  );
};

export default PortfolioDescription;
