import React, { Component } from 'react';

class VideoCard extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false
        };
        this.videoRef = React.createRef();
        this.videoOnClick = this.videoOnClick.bind(this);

    }

    componentDidUpdate(prevProps){
        if(this.props.refresh !== prevProps.refresh){
            if(this.state.isPlaying){
                this.setState({ isPlaying: !this.state.isPlaying });
                this.videoRef.current.pause();
                this.videoRef.current.currentTime = 0;
            }
        }
    }

    videoOnClick() {
        if (this.state.isPlaying)
            this.videoRef.current.pause();
        else
            this.videoRef.current.play();

        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render () {

        const {
            fileurl
        } = this.props;

        return (
            <div className="video-card">
                <video className="video-card__video"
                    src={fileurl}
                    loop
                    ref={this.videoRef}
                    onClick={this.videoOnClick}>
                </video>
               
            </div>
        );

    }
}

export default VideoCard;