import React from "react";
import {} from "./style.css";
import FacebookIcon from '../../Sources/icons/facebook-icon.png'
import InstagramIcon from '../../Sources/icons/instagram-icon.png'
import GithubIcon from '../../Sources/icons/github-icon.png'
function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="redes_sociais">
            <ul>
              <a
                target="_blank"
                href="https://www.facebook.com/serratecoficial/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={FacebookIcon}
                    alt="facebook"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/serratecoficial/"
                rel="noreferrer"
              >
                <li>
                  <img
                    src={InstagramIcon}
                    alt="instagram"
                  />
                </li>
              </a>
              <a
                target="_blank"
                href="https://github.com/MatheusCarius/DesenvolvimentoWeb_Grupo6"
                rel="noreferrer"
              >
                <li>
                  <img src={GithubIcon} alt="github" />
                </li>
              </a>
             </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
