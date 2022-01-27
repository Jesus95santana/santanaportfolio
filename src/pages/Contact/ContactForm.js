import React from 'react';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      company: '',
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
    alert('Submission Succesful!\n' + this.state.name );
    event.preventDefault();
  }

  render() {
    return(
      <form
      id="form"
      action=""
      method=""
      onSubmit={this.handleSubmit}>

        <section className="nameinput">
          <label for="name">Name: *</label>
          <br/>
          <input
          name='name'
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}/>
        </section>

        <section className="emailinput">
          <label for="email">Email Address: *</label>
          <br/>
          <input
          name='email'
          type="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}/>
        </section>

        <section className="companyinput">
          <label for="company">Company: *</label>
          <br/>
          <input
          name='company'
          type="text"
          id="company"
          value={this.state.company}
          onChange={this.handleChange}></input>
        </section>

        <section className="commentinput">
          <label for="comment">Comment:</label>
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
