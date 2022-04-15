import React, { Component } from 'react';
import './Dashboard.css';
import Thermometer from "react-thermometer";
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { keyframes } from '@emotion/react';

const MyThermometer = () => {
	<Thermometer 
	min={0}
	max={30}
	width={20}
	height={250}
	backgroundColor={'yellow'}
	fillColor={'green'}
	current={20}
/>

}
class Dashboards extends Component {

	constructor(props) {
		super(props);
		this.state = {
			d: 1,
			list: null,
			pp: 2,
			ppp: 20,
			list1: null,
			Thermometerheight:0,
			Randomnumber:0,
			priRandomnumber:0,
		};
		
	}


	componentDidMount() {
		this. Randomnumbergenerater();
		this.Thermometer();
			}
			
			 Randomnumbergenerater()
			 {
			
			   setInterval(() => {	this.setState({ priRandomnumber:this.state.Randomnumber, 
								Randomnumber:Math.floor(Math.random() * (100 - 0 + 1) ) + 0,})
			}, 1000);
			
			 }
	

			 Thermometer()
			 {	
		
				setInterval(() => {
		
				
					//document.querySelector('.ThermometerContainer').style.height=`${ secs}px`; 
					//document.querySelector('.ThermometerContainer').style.height=`${ this.state.Randomnumber}px`; 
					//document.querySelector('.ThermometerContainer').style.marginTop = `${100 - this.state.Randomnumber}px`; 
					 document.querySelector('.ThermometerContainer').animate(keyframes:Keyframe[])=`{  from { height: 50px;} to { height: 100px;}}`; 
					 /* 
					 document.getElementById("ThermometerContainer").animate([
						// keyframes
						{ transform: 'translateY(0px)' },
						{ transform: 'translateY(-300px)' }
					  ], {
						// timing options
						duration: 1000,
						iterations: Infinity
					 });
					*/   
		
				}, 1000);
				return(
					<>	
					<div class="ThermometerContainer "><span/>this.state.Randomnumber</div>
					</>
			)
			  }




			 


	render() {
		return (
			<div className= "Dashboardgrand_parent">
			<div className='Dashboardparents'>
			<div className= "Dashboardchild">   
            <div className= "npmThermometer">
	    <Thermometer 
                min={0}
                max={100}
                width={20}
                height={250}
                backgroundColor={'yellow'}
                fillColor={'green'}
                current={this.state.Randomnumber}
        />
		</div>
    
	</div>
	<div className= "Dashboardchild">{this.state.Randomnumber}</div>
	<div className= "Dashboardchild">{this.state.Randomnumber}</div>
			
			<div className= "Dashboardchild"><div className='ThermometerContainer'></div></div>
			<div className= "Dashboardchild">2</div>
			<div className= "Dashboardchild">3</div>
			</div>
				 Dashboards
			</div>
		);
	}
}

export default Dashboards;
/*




*/