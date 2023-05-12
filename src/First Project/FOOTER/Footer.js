import { Link } from "react-router-dom";
import "./Footer.css";
import Button from "../BUTTON/Button";
import { DiApple, DiAtom, DiAndroid } from "react-icons/di";

function Footer() {
  return (

    <span>

        <section className="footer_highlight">
            <div>
                <h3>This is Footer</h3>
                <p>Wsuisd jsjd idsndi dnsi dnid lmo.</p>
            </div>

            <Link className="footer_highlight_button" to="/">
                <Button button_name="back to top" />
            </Link> 
        </section>

        

        <footer className="footer_container">

            <div className="footer_4_div">
                <div className="footer_4_div_name_section">
                    <h3>ABDULLAH TANVEER</h3>
                    <p>I like chess game because it is Mind Game.</p>
                </div>

                <div className="footer_4_div_contact_section">

                    <p>If you want to play Chess game with then contact me</p>

                    <Link to="/Contact">
                        <Button button_name="contact us" />
                    </Link>

                </div>

                <div className="footer_4_div_follow_section">
                    <h3>Follow Us</h3>

                    <div className="footer_icons_section">
                        <div className="foo_icons">
                            <Link to="/Contact" target="_blank">
                                <DiApple className="icons"/>
                            </Link>
                        </div>
                        
                        <div className="foo_icons">
                            <Link to="/Contact" target="_blank">
                                <DiAtom  className="icons"/>
                            </Link>
                        </div>

                        <div className="foo_icons">
                            <Link to="/Contact" target="_blank">
                                <DiAndroid  className="icons"/>
                            </Link>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <h3>Call Us</h3>
                    <p>+92309-9014620</p>
                </div>
            </div>

            
            {/* Bottom Section Of Footer */}
            <div className="footer_bottom">
                <hr />

                <div className="footer_bottom_2_section">
                    <p>
                        @{new Date().getFullYear()} Abdullah. All Rights Reaserved
                    </p>
                
                    <div>
                        <p>Privacy Policy</p>
                        <p>TERMS & CONDITONS</p>
                    </div>
                </div>

            </div>

        </footer>

    </span>

  );
}

export default Footer;
