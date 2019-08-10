 import React from 'react';
import {Link} from 'react-router-dom';

class Common extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
 <div id="listDiv" class="left">
           <ul>
               <li><Link to="/home">Click</Link></li>
               <li><Link to="/giphy">Giphy</Link></li>
           </ul>
        </div>
        )}
    }
export default Common;
