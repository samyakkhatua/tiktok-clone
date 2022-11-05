import React, { useEffect, useRef } from 'react'
import Footer from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props

	const videoRef = useRef(null)

	useEffect(() => {
		if (playing !== id) {
			videoRef.current.pause()
		}
	}, [playing])

	const onVideoPress = () => {
		if (videoRef.current.paused){
            videoRef.current.play()
			setPlaying(id)
        } else {
            videoRef.current.pause()
			setPlaying(null)
        }
	}

	// var video = document.getElementById('player');
	// video.volume = 0.5;

	return (
		<div className="video">
			<video
				className="player"
				onClick={onVideoPress}
				// onClick={this.onVideoPress}
				ref={videoRef}
				loop
                autoplay
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
