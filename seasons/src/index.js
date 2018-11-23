import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
    
class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }

    //The same as initialize in constructor --> abbreviate syntax
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage : err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - rerendered');
    }
    
    co
    render() {
        
        if (this.state.lat && !this.state.errorMessage) {
           return  <SeasonDisplay lat={this.state.lat}/>;
        }

        if (!this.state.lat && this.state.errorMessage) {
            return  <div>Error: {this.state.errorMessage}</div>;
        }
        
        return  <Spinner />;
    }
}

ReactDom.render(
	<App />,
	document.querySelector('#root')
);