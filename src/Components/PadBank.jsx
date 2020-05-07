import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
    
    render() {
        
        const currentPadBank = this.props.currentPadBank;

        return (
        <div id="drum-pad-div">
            {currentPadBank.map((drumPad) => {
                return (
                <DrumPad 
                    key={drumPad.id}
                    keyCode={drumPad.keyCode}
                    keyTrigger={drumPad.keyTrigger}
                    id={drumPad.id}
                    url={drumPad.url}
                    displayClipName={this.props.displayClipName}
                    clipVolume={this.props.clipVolume}
                />
                )
                })}
        </div>
        )
    };
};

export default PadBank;