import { Helmet } from 'react-helmet-async';
import { useVideoContext } from 'src/context/video/VideoProvider';


// ----------------------------------------------------------------------

export default function ViewPreview() {
  const { socket, isLive, imgPreview, setImgPreview } = useVideoContext()

  console.log(socket)
  console.log(imgPreview)


  socket.on('[SERVER]: set-image-preview', (data) => {
    console.log(data)
    console.log('[RECIVE]: set-image-preview')
    setImgPreview(data.image_url)
  })


  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      {imgPreview ? (
        <div className='video'>
          <video className='video-preview' loop autoPlay={true} muted>
            <source src="https://cdn.v4.controller.barracks.gg/VCT23/CHAMPIONS/A_VCT23_Champions_Art_Loop_12.webm"
              type="video/webm" />
          </video>
          {imgPreview && (
            <img
              className='video-imagen-overlay'
              alt='img-back'
              src={imgPreview}
            />
          )}
        </div>
      ) : (
        <img className="live-mode-enabled-img" src="https://cdn.softwave.dev/web/live_mode_enable2.png" alt="" />
      )}
    </>
  );
}
