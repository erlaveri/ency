// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import {ColorSchemeScript, MantineProvider, mantineHtmlProps} from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
    <head>
      <ColorSchemeScript/>
    </head>
    <body>
    <MantineProvider>{children}</MantineProvider>
    </body>
    </html>
  );
}