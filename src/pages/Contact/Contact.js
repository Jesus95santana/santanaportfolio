import React from 'react';
import { Navigation } from '../../components/navigation_banner/Navigation.js';
import { ContactForm } from './ContactForm.js';
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
              <ContactForm />
            </section>
          </div>
        </main>
      </>
    );
  }
}
