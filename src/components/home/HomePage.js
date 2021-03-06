import  React  from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Pluralight Adminstration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web app </p>
                <Link to="about" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;