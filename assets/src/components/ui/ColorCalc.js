import React, { Component } from 'react';
import NumChooser  from '../containers/NumChooserWrap'
import MonthChooser  from '../containers/MonthChooser';
import TargetChooser from '../containers/TargetChooser';
import ColorPane from '../containers/ColorPane';
import WeekBar from '../containers/WeekBar';
import './App.css';

class ColorCalc extends Component {

  render() {

    return (
     <div className="App">
		<nav className="navbar navbar-default" style={{margin: "0px"}}>
			<ul className="nav navbar-nav navbar-left">
				<li><a href="/">Home<span className="sr-only">(current)</span></a></li>
				<li><a href="/colors2/">Colors w/ Data</a></li>
				<li><a href="/weather/">Multi Weather</a></li>
				<li className="active"><a href="#">Color Calc 1</a></li>
			</ul>

		</nav>
        <div className="App-header">
          <h1>Colors and Numbers </h1>
          <h3>Calculate your Personal Color of the Day </h3>
        </div>

       <div id="top">
        <div id="controls">
            <p className="instructions">
            Please enter the month and day of your birthday: </p>
            <div>
                <MonthChooser />
                <NumChooser />
            </div>
            <TargetChooser />
            <div id="bar">
                <WeekBar />
            </div>

			
			
        </div>
        <ColorPane />
       </div>



     </div>
    );
  }

}
export default ColorCalc;


