import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';
import VideoProvider from 'src/context/video/VideoProvider';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      <AppView />
    </>
  );
}
