import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import './Project.css';
import TeaPic from "../../images/tea.png";
import TicPic from "../../images/tictactoe.png";
import TimerPic from "../../images/stopwatch.png";
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
                  <img src={TeaPic} alt="tea image"/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="tictacbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/2_16_tictactoe/index.html"}>
                    <button>Tic Tac Toe</button>
                  </a>
                  <img src={TicPic} alt="tictactoe image"/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="timerbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/2_15_stopwatch/index.html"}>
                    <button>Timer</button>
                  </a>
                  <img src={TimerPic} alt="timer image"/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="surveybutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_4_Positioning/document.html"}>
                    <button>Online Survey</button>
                  </a>
                  <img src={SurveyPic} alt="survey image"/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="pupbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/10_6_Pup_spa/pup.html"}>
                    <button>Pup Spa</button>
                  </a>
                  <img src={PupPic} alt="pup web image"/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="calcbutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_7_Calculator/index.html"}>
                    <button>Calculator</button>
                  </a>
                  <img src={CalcPic} alt="calculator image"/>
                </figure>
              </div>

              <div className="projectbox odd">
                <div className="boxtitle">Html, Css, &<br/> Javascript</div>
                <figure>
                  <a className="todobutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/11_1_java_todo/document.html"}>
                    <button>Todo List</button>
                  </a>
                  <img src={TodoPic} alt="todo list image"/>
                </figure>
              </div>

              <div className="projectbox even">
                <div className="boxtitle">Html & Css</div>
                <figure>
                  <a className="spacebutton" target='_blank' rel="noreferrer" href={process.env.PUBLIC_URL + "./projects/9_11_Nasa_web/9_11.html"}>
                    <button>Space Web</button>
                  </a>
                  <img src={SpacePic} alt="spaceweb image"/>
                </figure>
              </div>



            </section>
          </div>





        </main>
      </>
    );
  }
}
