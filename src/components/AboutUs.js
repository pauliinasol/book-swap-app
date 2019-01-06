import React, { Component } from "react";

class AboutUs extends Component {
  state = {
    isLoading: false,
    data: [],
    errorMessage: ""
  };

  apiCall = () => {
    return Promise();
  };

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });

    this.apiCall()
      .then(response => {
        this.setState({
          ...this.state,
          isLoading: false,
          data: response.data
        });
      })
      .catch(err =>
        this.setState({
          ...this.state,
          isLoading: false,
          errorMessage: err
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <span>Loading...</span>}
        {this.state.data.map(u => u)}
        {this.state.errorMessage && <span>{this.state.errorMessage}</span>}
      </div>
    );
  }
}

export default AboutUs;
