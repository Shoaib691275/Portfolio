import '../global.css'
export default function Intro(){
    return(
        <div className="introduct row">
        <div style={{ paddingBottom: "30px" }} className="name col">
          <h2 className="fname">
            <span className="f_name">Shoaib</span>
            <span className="l_name">
              <br />
              Ali
            </span>
            <span className="dot">.</span>
            <hr style={{ height: "3px" }} className="line-intro" />
            <p className="Contacts">
              Instagram | Linkedin <br />
              Facebook | Discord
            </p>
            <button style={{ fontWeight: "bolder" }} className="btn-intro">
              <a
                style={{ color: "#764971", textDecoration: "none" }}
                href="mailto:shoaibaali1945@gmail.com"
              >
                Contact Me
              </a>
            </button>
          </h2>
        </div>
        <div style={{ paddingTop: "0px" }} className="pic col">
          <img
            className="main_pic"
            style={{ height: "550px" }}
            src="/pic2.png"
            alt=""
          />
        </div>
        <div className="intro col">
          <h2 className="heading-intro">INTRODUCTION</h2>
          <span>
            <h2 className="skills" style={{ width: "300px" }}>
              App Developer,
              <br /> Game Developer, Web Developer
            </h2>
          </span>
          <p className="description" style={{ width: "300px" }}>
            I'm Shoaib, a versatile developer skilled in web, app, and game
            creation. My passion lies in crafting immersive digital solutions
            that seamlessly blend creativity and technology. Let's explore the
            possibilities together.
          </p>
          <a className="learn-more" href="">
            Learn More ↓
          </a>
        </div>
      </div>

    )
}