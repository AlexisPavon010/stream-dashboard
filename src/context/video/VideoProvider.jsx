import React, { createContext, useContext, useEffect, useState } from 'react'
import { Manager } from 'socket.io-client'
import { BASE_URL } from 'src/api'
import { IMAGES } from 'src/constants/images'

const Context = createContext()

export const useVideoContext = () => {
  return useContext(Context)
}

const connectTOSocket = () => {
  // const manager = new WebSocket('ws://wss.softwave.dev')
  const manager = new Manager(`${BASE_URL}/socket.io/socket.io.js`)
  const socket = manager.socket('/')

  console.log(socket)

  return socket
}

const VideoProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [isLive, setIsLive] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);

  const socket = connectTOSocket()

  socket.on('connect', () => {
    console.log('Connected')
    setIsLive(true)
  })


  socket.on('[SERVER]: set-image-preview', (data) => {
    console.log(data)
    console.log('[RECIVE]: set-image-preview')
  })

  const startAnimationVs = () => {
    console.log('[EMIT]: message-from-client')
    socket.emit('[CLIENT]: change-tranisition', {})
  }


  const startChangeTransition = () => {
    console.log('[EMIT]: change-tranisition')
    socket.emit('[CLIENT]: change-tranisition', {
      image_url: imgPreview,
      video_url: 'https://cdn.v4.controller.barracks.gg/MASTERS/A_VCT23_Masters_Art_Loop_10.webm',
    })
  }

  const startRemoveTransition = () => {
    console.log('[EMIT]: change-tranisition')
    socket.emit('[CLIENT]: change-tranisition', {
      image_url: null,
      video_url: null,
    })
    setImgPreview(null)
  }

  return (
    <Context.Provider
      value={{
        socket,
        play,
        isLive,
        imgPreview,
        setPlay,
        setIsLive,
        setImgPreview,
        startAnimationVs,
        startChangeTransition,
        startRemoveTransition
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default VideoProvider;
