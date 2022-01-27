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
                Thank you for checking out my webscite! Let me know what you think through this form. Im always working on projects so give me at least 24 hours to respond back. <br/><br/> Thank you and have a great day!.
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
