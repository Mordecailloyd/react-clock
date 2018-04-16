import React from 'react';
import ReactDOM from 'react-dom';
import Time from './time';




class Root extends React.Component {
  render() {
    return(
      <div> <Time/> </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
