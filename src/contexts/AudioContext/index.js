import React, { useCallback, useContext, useRef, createContext } from "react"
import Audio from "./components/Audio"
import ButtonClickAudio from "./audios/button-click.mp3"
import MenuUpAndDownAudio from "./audios/menu-up-and-down.mp3"
import MenuDownAudio from "./audios/menu-down.mp3"

export const AudioContext = createContext({})

export const useAudioContext = () => useContext(AudioContext)

export const AudioProvider = ({ children }) => {
  const buttonClickAudioRef = useRef()
  const playButtonClickAudio = useCallback(() => {
    const audioDOM = buttonClickAudioRef.current
    audioDOM.play()
  }, [])

  const menuUpAndDownAudioRef = useRef()
  const playMenuUpAndDownAudio = useCallback(() => {
    const audioDOM = menuUpAndDownAudioRef.current
    audioDOM.play()
  }, [])

  const menuDownAudioRef = useRef()
  const playMenuDownAudio = useCallback(() => {
    const audioDOM = menuDownAudioRef.current
    audioDOM.play()
  }, [])

  return (
    <AudioContext.Provider
      value={{ playButtonClickAudio, playMenuUpAndDownAudio, playMenuDownAudio }}
    >
      {children}

      <Audio ref={buttonClickAudioRef} src={ButtonClickAudio} />
      <Audio ref={menuUpAndDownAudioRef} src={MenuUpAndDownAudio} />
      <Audio ref={menuDownAudioRef} src={MenuDownAudio} />
    </AudioContext.Provider>
  )
}
