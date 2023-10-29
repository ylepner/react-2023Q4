import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="wrapper pt-5 pb-5 flex justify-between">
        <div className="flex">
          <h5>Open Library Project</h5>
        </div>
        <a href="https://github.com/ylepner" target="_blank" rel="noreferrer">
          <h5>ylepner</h5>
        </a>
        <h5>2023</h5>
      </footer>
    );
  }
}
export default Footer;
