import React, {useState, useRef, useEffect} from 'react'

import play from '../assets/play.png'
import pause from '../assets/pause.png'
import moment from 'moment'

export default function MusicPlayer({songs}) {
  let [isPlaying, setIsPlaying] = useState(false)
  let [currentSong, setCurrentSong] = useState(songs[Math.floor(Math.random() * songs.length)])
  let [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    console.log(music.current.currentSrc)
    console.log(music.current.src)
  },[currentSong])

  let music = useRef(null)
  let playHead = useRef(null)
  let timeline = useRef(null)
  let pButton = useRef(null)

  let getCurrentTime = () => { if (music.current) return music.current.currentTime }

  let getDuration = () => { if (music.current) return music.current.duration }

  let getTimeLineWidth = () => timeline.current.offsetWidth - playHead.current.offsetWidth

  let playPause = () => {
    if (music.current.paused) {
      music.current.play()
      setIsPlaying(true)
    } else {
      music.current.pause()
      setIsPlaying(false)
    }
  }

  let queueNextSong = () => {
    let nextSong = songs[Math.floor(Math.random() * songs.length)]
    if (nextSong === currentSong) queueNextSong()
    else setCurrentSong(nextSong)
  }

  let timeUpdate = () => {
    let playPercent = (music.current.currentTime / getDuration()) * getTimeLineWidth()
    playHead.current.style.marginLeft = playPercent + 'px'
    setCurrentTime(msString(getCurrentTime()))
    if (getCurrentTime() === getDuration()) {
      setIsPlaying(false)
      queueNextSong()
    }
  }

  let timeLineClicked = (e) => {
    let timelineLeft = timeline.current.getBoundingClientRect().left
    let clickPercent = (e.clientX - timelineLeft) / getTimeLineWidth()
    music.current.currentTime = getDuration() * clickPercent
    setCurrentTime(msString(getCurrentTime()))
  }

  let msString = (seconds) => {
    let t = moment.duration(seconds * 1000);
    let m = t.minutes()
    let s = t.seconds() < 10 ? '0' + t.seconds() : t.seconds();
    if (Number.isNaN(m) || Number.isNaN(s)) return null;
    else return `${m}:${s}`
  };

  let button = isPlaying ?  
    <img id='pButton' src={pause} alt='button' ref={pButton} onClick={playPause} /> :
    <img id='pButton' src={play} alt='button' ref={pButton} onClick={playPause} />

  return (
    <div id='music-player'>
      <audio id='music' key={currentSong.file} ref={music} onTimeUpdate={timeUpdate}>
        <source src={currentSong.file} type='audio/mpeg'></source>
      </audio>

      <span className='player-info'>Stream my music while exploring the site</span>
      <img src={currentSong.art} width={30} alt='cover art' />
      <span className='song-title'>
        {currentSong.title}
      </span>
      {button}
      <span className='timestamp'>
        {music.current ? currentTime :  `-:--`}
      </span>
      <div id='timeline' ref={timeline} onClick={e => timeLineClicked(e)}>
        <div id='playhead' ref={playHead}></div>
      </div>
      <span className='timestamp'>
        {music.current ? msString(getDuration()) : `-:--`}
      </span>
    </div>
  )
}