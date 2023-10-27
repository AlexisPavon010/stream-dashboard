import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import { fDateTime } from 'src/utils/format-time';
import { Box, CardContent, CardMedia, IconButton, Paper } from '@mui/material';
import { IMAGES } from 'src/constants/images';
import { useVideoContext } from 'src/context/video/VideoProvider';

// ----------------------------------------------------------------------

export default function AnalyticsOrderTimeline({ title, subheader, list, ...other }) {
  const { setImgPreview } = useVideoContext()

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Paper sx={{ maxHeight: '280px', overflow: 'auto' }}>
        <Box sx={{ p: 2, gap: 1, display: 'flex', flexDirection: 'column' }}>
          {IMAGES.overlays.map(({ name, url }, i) => (
            <Card onClick={() => setImgPreview(url)} sx={{ display: 'flex' }} key={i}>
              <CardMedia
                component="img"
                sx={{ width: 90, height: 90, objectFit: 'cover' }}
                image={url}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography component="div" variant="p">
                    {name}
                  </Typography>
                  <Typography variant="p" color="text.secondary" component="p">
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Box>
      </Paper>

    </Card >
  );
}

AnalyticsOrderTimeline.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function OrderItem({ item, lastTimeline }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  lastTimeline: PropTypes.bool,
};
