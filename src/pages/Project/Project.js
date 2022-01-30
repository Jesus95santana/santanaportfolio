import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import './Project.css';
import TeaPic from "../../images/tea.png";
import BallPic from "../../images/javaball.png";
import BreadPic from "../../images/breadform.png";
import SurveyPic from "../../images/survey.png";
import PupPic from "../../images/pup.png";
import CalcPic from "../../images/calcjav.png";
import TodoPic from "../../images/todo.png";
import SpacePic from "../../images/space.png";


export class Project extends React.Component{
  render() {
    return(
      <>
        <Navigation />
        <main className="projectmain">
          <div className="projectback">


            <section className="projecttitle">
              <h1>Projects</h1>
            </section>



            <section className="gitsection">
              <h3>Link to my Github</h3>
              <a className="gitbutton" target='_blank' rel="noreferrer" href="https://github.com/Jesus95santana/santanaportfolio">
                <button>Github</button>
              </a>
            </section>


            <section className="projectwrapper">


              <div className="projectbox odd">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="teabutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_14_Flex_Tea/document.html"}>
                    <button>Tea Cosy</button>
                  </a>
                  <img src={TeaPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="ballbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/10_9_event_practice_ball/document.html"}>
                    <button>Ball Bounce</button>
                  </a>
                  <img src={BallPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="pizzabutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/10_15_forms/document.html"}>
                    <button>Pizza Form</button>
                  </a>
                  <img src={BreadPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="surveybutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_4_Positioning/document.html"}>
                    <button>Online Survey</button>
                  </a>
                  <img src={SurveyPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="pupbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/10_6_Pup_spa/pup.html"}>
                    <button>Pup Spa</button>
                  </a>
                  <img src={PupPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="calcbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_7_Calculator/index.html"}>
                    <button>Calculator</button>
                  </a>
                  <img src={CalcPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="todobutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_1_java_todo/document.html"}>
                    <button>Todo List</button>
                  </a>
                  <img src={TodoPic} alt=""/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="spacebutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/9_11_Nasa_web/9_11.html"}>
                    <button>Space Web</button>
                  </a>
                  <img src={SpacePic} alt=""/>
                </figure>
              </div>



            </section>
          </div>





        </main>
      </>
    );
  }
}
