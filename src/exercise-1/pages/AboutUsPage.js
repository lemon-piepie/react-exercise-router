import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class AboutUsPage extends Component {
  render() {
    return (
      <div className="AboutUsPage">
          <p>Company: ThoughtWorks Local.</p>
          <p>Location: Xi'an.</p>
          <br/>
          <p>For more information, please<br/> view our <Link to = "/">websit</Link>.</p>
      </div>
    );
  }
}

export default AboutUsPage;