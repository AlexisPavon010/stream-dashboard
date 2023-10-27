import { Box, Container, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'

export const SkeletonView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        <Skeleton height={60} width={200} />
      </Typography>

      <Grid container spacing={3}>
        {/* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<Iconify icon="la:box" color="#21b57d" width={64} />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<Iconify icon="ph:users-duotone" color="#3281e6" width={64} />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<Iconify icon="mdi-light:cart" color="#fabd3f" width={64} />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<Iconify icon="iconamoon:badge-duotone" color="#fc9069" width={64} />}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <Box sx={{ p: 2 }}>
            <Skeleton variant="rounded" height={519} />
          </Box>
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Box sx={{ p: 2 }}>
            <Skeleton variant="rounded" height={519} />
          </Box>
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <Skeleton variant="rounded" width={640} height={519} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Skeleton variant="rounded" width={340} height={300} />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        </Grid>

        <Grid xs={12} md={6} lg={8}>
        </Grid>
      </Grid>
    </Container>
  )
}
