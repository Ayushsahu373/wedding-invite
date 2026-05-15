import "../../styles/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-dev">
          <h2>Ayush Sahu</h2>
          <p className="footer-dev-role">Full Stack Developer</p>
          <p className="footer-dev-bio">
            I build cinematic, interactive wedding websites and digital
            experiences. Interested in a custom wedding site?
          </p>
          <a href="mailto:ayush@example.com" target="_blank" rel="noreferrer">
            ayush@example.com
          </a>
        </div>

        <div className="footer-links-group">
          <h3>Let's Connect</h3>
          <div className="footer-connect">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://portfolio.com/" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 Ayush Sahu — All Rights Reserved</p>
        <p className="footer-tag">Crafted with care for love stories</p>
      </div>
    </footer>
  );
};

export default Footer;