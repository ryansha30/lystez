import React, { Component } from 'react';
import classnames from 'classnames';
  
class GameForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      cover: '',
      errors: ''
    }
  }

  handleChange = (e) => {
    if(!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {};
    if(this.state.title === '') errors.title = "All games must have a title";
    if(this.state.cover === '') errors.cover = "Please provide a cover image URL";
    this.setState({ errors })
  }

  render() {
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Add New Game</h1>
        <div className={classnames('field', { error: !!this.state.errors.title })}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            placeholder="...enter game title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.title}</span>
        </div>
        <div className={classnames('field', { error: this.state.errors.cover })}>
          <label htmlFor="cover">Cover URL</label>
          <input
            name="cover"
            id="cover"
            placeholder="...enter cover URL"
            value={this.state.cover}
            onChange={this.handleChange}
          />
          <span>{this.state.errors.cover}</span>
        </div>
        <div className="field">
          {this.state.cover !== '' &&
          <img
            src={this.state.cover}
            alt="cover"
            className="ui small bordered image"
          />}
        </div>
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    )
  }
}

export default GameForm;