import React from 'react';
import bankOne from './Components/audioBank/bankOne';
import bankTwo from './Components/audioBank/bankTwo';
import PadBank from './Components/PadBank';
import on from './Components/images/on.png';
import off from './Components/images/off.png';
import buttonBlue from './Components/images/button-blue.png';
import buttonGreen from './Components/images/button-green.png';
import buttonRed from './Components/images/button-red.png';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            power: true,
            display: '',
            currentPadBank: bankOne,
            currentPadBankId: 'Heater Kit',
            sliderVal: 0.3
        };
    };

    displayClipName = (name) => {
        if (this.state.power) {
            this.setState({
                display: name
            });
        };
    };

    selectBank = (bank) => {
        if (this.state.power) {
            bank === 'bankOne' ? 
                this.setState({
                    currentPadBank: bankOne,
                    currentPadBankId: 'Heater Kit',
                }) :
                this.setState({
                    currentPadBank: bankTwo,
                    currentPadBankId: 'Smooth Piano Kit',
                })
            ;
            this.clearDisplay();
        };
    };

    adjustVolume = (e) => {
        if (this.state.power) {
            this.setState({
              sliderVal: e.target.value,
            });
        };
    };

    powerControl = () => {
        this.setState({
            power: !this.state.power
        });
        this.clearDisplay();
    };

    clearDisplay = () => {
        this.setState({
            display: ''
        });
    };

    render(){
        return(
            <div id="drum-machine" className="inner-container">
                
                <div id="power">
                        <p id="power-text">Power</p>
                        {this.state.power ? 
                        <img onClick={this.powerControl} className="power" src={on} alt="power-on"/> :
                        <img onClick={this.powerControl} className="power" src={off} alt="power-off"/> 
                        }
                </div>

                <PadBank
                    currentPadBank={this.state.currentPadBank}
                    displayClipName={this.displayClipName}
                    clipVolume={this.state.sliderVal}
                />

                <div id="bank-selection">
                    <p id="bankOne">1</p>
                    { this.state.power === false ?
                    <img alt="button" className="button-bankOne" src={buttonRed}/> : 
                    this.state.currentPadBank === bankOne ? 
                    <img alt="button" className="button-bankOne" onClick={() => this.selectBank("bankOne")} src={buttonGreen}/> : 
                    <img alt="button" className="button-bankOne" onClick={() => this.selectBank("bankOne")} src={buttonBlue}/> }
                    <p id="bankTwo">2</p>
                    {this.state.power === false ?
                    <img alt="button" className="button-bankTwo" src={buttonRed}/> : 
                    this.state.currentPadBank === bankTwo ? 
                    <img alt="button" className="button-bankTwo" onClick={() => this.selectBank("bankTwo")} src={buttonGreen}/> : 
                    <img alt="button" className="button-bankTwo" onClick={() => this.selectBank("bankTwo")} src={buttonBlue}/> }
                </div>

                <div id="bank">
                    { this.state.power === true ? 
                    this.state.currentPadBankId :
                    ''}
                </div>

                <div id="display">{this.state.display}</div>

                <div id="volume-slider">
						🔉 <input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
				</div>
                
            </div>
        )
    }
};

export default App;