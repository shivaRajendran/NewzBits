export default function ExportFooter() {
  function openApi(){
    window.open('https://newsdata.io/', '_blank');
  }
  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/siva-kumaran-45066b1ab/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="ri-linkedin-fill"></i>
        </a>
        <div className="link-seperator"></div>
        <a
          href="https://dribbble.com/siva_kumaran"
          target="_blank"
          rel="noreferrer"
        >
          <i class="ri-dribbble-line"></i>
        </a>
        <div className="link-seperator"></div>
        <a
          href="https://mail.google.com/mail/?extsrc=mailto&url=shivarajendran19@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i class="ri-mail-fill"></i>
        </a>
        <div className="link-seperator"></div>
        <a
          href="tel:+918072925269"
          target="_blank"
          rel="noreferrer"
        >
          <i class="ri-smartphone-line"></i>
        </a>
      </div>
      <p>
        Designed and Developed by <span>Shiva Kumaran</span> in association with{" "}
        <a href="https://newsdata.io/" target="_blank" rel="noreferrer"><span onClick={openApi}>newsdata.io</span></a>
      </p>
    </div>
  );
}
