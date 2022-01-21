import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import './Contact.css';

export class Contact extends React.Component{
  render() {
    return(
      <>
        <Navigation />
        <main className="contactmain">

          <div className="contactbackpic">

            <section className="infosection">

              <h1 className="infohead">Info</h1>
              <p className="info1">
                I am currently working on linking this form into a database for Firebase. As this is not yet complete please contact me via Email: Jesus95santana@icloud.com <br/> Thank you.
              </p>
            </section>



            <section className="inputsection">

              <form id="form" action="" method="">

                <section className="nameinput">
                  <label for="name">Name: *</label>
                  <br/>
                  <input type="text" name="survey" id="name" />
                </section>

                <section className="emailinput">
                  <label for="email">Email Address: *</label>
                  <br/>
                  <input type="email" name="survey" id="email" />
                </section>

                <section className="companyinput">
                  <label for="company">Company: *</label>
                  <br/>
                  <input type="text" name="survey" id="company" ></input>
                </section>

                <section className="commentinput">
                  <label for="comment">Comment:</label>
                  <br/>
                  <textarea name="survey" id="comment" rows="5"></textarea>
                </section>

                <section>
                  <button className="formsubmitbutton" type="submit">Submit</button>
                </section>
              </form>

            </section>
          </div>
        </main>
      </>
    );
  }
}
