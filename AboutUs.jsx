import React, { useEffect } from 'react'
import "./aboutUs.css"
import { Container, Row, Col } from 'react-bootstrap'
import about_us_page_img from "../../assets/images/aboutus/about_us_page_img.svg"
import vision_one_img from "../../assets/images/aboutus/vision_one_img.svg"
import vision_two_img from "../../assets/images/aboutus/vision_two_img.svg"
import vision_three_img from "../../assets/images/aboutus/vision_three_img.svg"
import vision_four_img from "../../assets/images/aboutus/vision_four_img.svg"
import vision_five_img from "../../assets/images/aboutus/vision_five_img.svg"
import mission_one_img from "../../assets/images/aboutus/mission_one_img.svg"
import mission_two_img from "../../assets/images/aboutus/mission_two_img.svg"
import mission_three_img from "../../assets/images/aboutus/mission_three_img.svg"
import mission_four_img from "../../assets/images/aboutus/mission_four_img.svg"
import mission_five_img from "../../assets/images/aboutus/mission_five_img.svg"
import employee_join_img from "../../assets/images/aboutus/employee_join_img.svg"
import memeber1_about_us from "../../assets/images/aboutus/memeber1_about_us.svg"
import memeber2_about_us from "../../assets/images/aboutus/memeber2_about_us.svg"
import memeber3_about_us from "../../assets/images/aboutus/memeber3_about_us.svg"
import memeber4_about_us from "../../assets/images/aboutus/memeber4_about_us.svg"
import memeber5_about_us from "../../assets/images/aboutus/memeber5_about_us.svg"
import memeber6_about_us from "../../assets/images/aboutus/memeber6_about_us.svg"
import memeber7_about_us from "../../assets/images/aboutus/memeber7_about_us.svg"
import memeber8_about_us from "../../assets/images/aboutus/memeber8_about_us.svg"



import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap-trial/SplitText';


gsap.registerPlugin(ScrollTrigger, SplitText);

function AboutUs() {

  useEffect(() => {
    console.log('useEffect running');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".textElement",
      }
    });

  
    tl.fromTo(".textElement",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.inOut"
      }
    );
    return () => {
      tl.kill();  
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  
  // useEffect(() => {
  //   console.log('useEffect running');
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".textData",
  //     }
  //   });

  //   tl.fromTo(".textData",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       ease: "power2.inOut",
  //       stagger: 0.4, 
  //       delay: 1, 
  //     }
  //   );
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);





  return (
    <section className='aboutus_main_div'>
      <Container><h2 className='about_main_title'>Més que un la empresa-it is more than a company</h2></Container>

      <Container fluid>
        <Row className='top_aboutus_row'>
          <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='top_aboutus_col'>
            <div>
              <h3>Nithya Sri Innovations</h3>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='top_aboutus_col'>
            <div className='img_div'>
              <img  src={about_us_page_img} alt="about_us_page_img" />
            </div>
          </Col>
        </Row>

        <Row className='vision_aboutus_row'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='vision_aboutus_col'>
            <div className='vision_text'>
              <h5>Nithya Sri Vision</h5>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='vision_aboutus_col'>
            <div className='main_vision_img'>
              <ul>
                <li>
                  <img src={vision_one_img} alt="vision_one_img" />
                </li>
                <li className='image_bottom'>
                  <img src={vision_two_img} alt="vision_two_img" />
                </li>
                <li>
                  <img src={vision_three_img} alt="vision_three_img" />
                </li>
                <li className='vision_fouth_img'>
                  <img  src={vision_four_img} alt="vision_four_img" />
                </li>
              </ul>
              <div>
                <img src={vision_five_img} alt="vision_five_img" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className='mission_aboutus_row'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='mission_aboutus_col'>
            <div className='main_mission_img'>
              <ul>
                <li className='mission_fouth_img'>
                  <img src={mission_four_img} alt="mission_four_img" />
                </li>
                <li>
                  <img src={mission_three_img} alt="mission_three_img" />
                </li>
                <li className='image_bottom'>
                  <img  src={mission_two_img} alt="mission_two_img" />
                </li>
                <li>
                  <img src={mission_one_img} alt="mission_one_img" />
                </li>
              </ul>
              <div>
                <img className='textData' src={mission_five_img} alt="mission_five_img" />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='mission_aboutus_col'>
            <div className='mission_text'>
              <h5>Nithya Sri Mission</h5>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </Col>
        </Row>

        <Container>
          <section className='inside_common_number_section'>
            <div className='inside_common_number_content'>
              <h6>Who is Nithya Sri</h6>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </section>

          <section className='inside_common_number_section'>
            <div className='inside_common_number_content'>
              <h6>What Nithya Sri Do</h6>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </section>

          <section className='inside_common_number_section'>
            <div className='inside_common_number_content'>
              <h6>Nithya Values</h6>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </section>

          <section className='inside_common_number_section'>
            <div className='inside_common_number_content'>
              <h6>A company's progress happens when skillful, bold leaders capture the
                chance to change things for the better.</h6>
              <p>Leadership is very important and the employees of Kevell Corp are managed, influenced, and led by a special
                crew of authorities, and leaders.</p>
            </div>
          </section>
        </Container>


        <Container>
          <h5 className='our_leadership_title'>Nithya's Leadership Team</h5>
          <div className='team_members_main'>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber1_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Chief Executive Officer</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber2_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Chief Operating Officer - US</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber3_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Chief Operating Officer</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber4_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Business Development Manager</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber5_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Internet of Things</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber6_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Technical Head</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber7_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Admin</h6>
            </div>

            <div className='team_members_card'>
              <div className='member_img_main'>
                <img className='textElement' src={memeber8_about_us} alt="" />
              </div>
              <h3>Sri</h3>
              <h6>Chief Content Editor</h6>
            </div>

          </div>
        </Container>

        <Row className='employeeJoin_aboutus_row'>
          <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} className='employeeJoin_aboutus_col'>
            <div className='employeejoin_main_content'>
              <h2>Want to become one amongst our
                employees?</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <button>Join Us</button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='employeeJoin_aboutus_col'>
            <div className='img_div'>
              <img src={employee_join_img} alt="employee_join_img" />
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default AboutUs