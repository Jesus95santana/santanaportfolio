import React from 'react';
import emailjs from '@emailjs/browser';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      subject: '',
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Submission Succesful!\n');
    event.preventDefault();
    const serviceId='service_twzhi08'
    const templateId='template_ppx2xjm'
    const userId='user_zA6kwtauOu3xt3kdc8alx'
    emailjs.send(serviceId, templateId, this.state, userId)
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
  });
  }

  render() {
    return(
      <form
      method='post'
      action='#'
      id="form"
      onSubmit={this.handleSubmit}>

        <section className="nameinput">
          <label htmlFor="name">Name: *</label>
          <br/>
          <input
          name='name'
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}/>
        </section>

        <section className="emailinput">
          <label htmlFor="email">Email Address: *</label>
          <br/>
          <input
          name='email'
          type="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}/>
        </section>

        <section className="subjectinput">
          <label htmlFor="subject">Subject: *</label>
          <br/>
          <input
          name='subject'
          type="text"
          id="subject"
          value={this.state.subject}
          onChange={this.handleChange}></input>
        </section>

        <section className="commentinput">
          <label htmlFor="comment">Comment:</label>
          <br/>
          <textarea
          name='comment'
          id="comment"
          rows="5"
          value={this.state.comment}
          onChange={this.handleChange}></textarea>
        </section>

        <section>
          <button className="formsubmitbutton" type="submit">Submit</button>
        </section>
      </form>
    );
  }
}
