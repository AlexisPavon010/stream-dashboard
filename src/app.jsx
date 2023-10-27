/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import AuthProvider from './context/auth/AuthProvider';
import VideoProvider from './context/video/VideoProvider';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <AuthProvider>
        <VideoProvider>
          <Router />
        </VideoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
