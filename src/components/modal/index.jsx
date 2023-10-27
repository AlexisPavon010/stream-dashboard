import * as React from 'react';
import Button from '@mui/material/Button';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog
        sx={{
          height: 500,
        }}
        onClose={handleClose} open={open}
      >
        <DialogTitle>Set backup account</DialogTitle>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="500"
                image="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
              />
            </Grid>
            <Grid item xs={7}>
              2
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
