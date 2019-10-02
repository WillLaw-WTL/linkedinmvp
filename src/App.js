import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      job: "",
      location: "",
      education: "",
      output: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onQuery = e => {
    e.preventDefault();

    const output = `http://www.google.com/search?q=+"${this.state.job}"+"${this.state.location}+"${this.state.education}"" -intitle:"profiles" -inurl:"dir/+"+site:ca.linkedin.com/in/+OR+site:ca.linkedin.com/pub/`;

    this.setState({ output: output });
  };

  render() {
    return (
      <div className="App">
        <div className="container pt-5 mt-5">
          <h3 className="font-weight-bold">Linkedin</h3>

          <form onSubmit={this.onQuery}>
            <div class="form-group">
              <label for="job">Job</label>
              <input
                type="text"
                class="form-control"
                name="job"
                value={this.state.job}
                onChange={this.onChange}
                id="job"
                placeholder="swe"
              />
            </div>

            <div class="form-group">
              <label for="location">Locations</label>
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                class="form-control"
                id="location"
                placeholder="location"
              />
            </div>

            <div class="form-group">
              <label for="education">Education</label>
              <input
                type="text"
                class="form-control"
                name="education"
                value={this.state.education}
                onChange={this.onChange}
                id="education"
                placeholder="education"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Find
            </button>
          </form>

          {this.state.output !== "" ? (
            <a className="pt-3 mt-3" href={`${this.state.output}`}>
              Click here!
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
