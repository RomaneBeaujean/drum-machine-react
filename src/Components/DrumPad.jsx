import React from 'react';

class DrumPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    playSound = () => {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.volume = this.props.clipVolume;
        sound.play();
        this.props.displayClipName(this.props.id);
    };

    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        };
    };

    render(){
        const {keyTrigger, id, url} = this.props;

        return (
        <button
            id={id}
            className="drum-pad"
            onClick={this.playSound}
        >
            {keyTrigger}
            <audio id={keyTrigger} src={url} type="audio/mp3"  className="clip"></audio>
        </button>
        )
    }
};

export default DrumPad;