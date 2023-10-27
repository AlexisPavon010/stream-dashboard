import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Badge, Chip } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';

import styles from './styles.module.css'
import { useVideoContext } from 'src/context/video/VideoProvider';


export const VideoPlayer = ({ title, subheader, chart, ...other }) => {
  const { isLive, setIsLive, imgPreview } = useVideoContext()

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <div className="video">
          <div className={styles.video__content} id="content">
            {
              imgPreview ? (
                <>
                  <video className={styles.video__content_player} loop autoPlay={true} muted>
                    <source src="https://cdn.v4.controller.barracks.gg/VCT23/CHAMPIONS/A_VCT23_Champions_Art_Loop_12.webm"
                      type="video/webm" />
                  </video>
                  {imgPreview && (
                    <img
                      className={styles.video__content_overlay}
                      alt='img-back'
                      src={imgPreview}
                    />
                  )}
                </>
              ) : (
                <img className="live-mode-enabled-img" src="https://cdn.softwave.dev/web/live_mode_enable2.png" alt="" />
              )
            }
          </div>
        </div>
      </Box>
      <Box sx={{ p: 3, }}>
        {isLive ? (
          <Chip label="Live" color="success" />
        ) : (
          <Chip label="Disconnected" variant="outlined" />
        )}
      </Box>
    </Card >

  )
}

VideoPlayer.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
