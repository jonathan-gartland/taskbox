import '../src/index.css';
import { themes } from '@storybook/theming';
// Registers the msw addon
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW

let options = {};
if (location.hostname === "jonathan-gartland.github.io") {
  options = {
    serviceWorker: {
      url: "/taskbox/mockServiceWorker.js"
    }
  }
}

// Initialize MSW
initialize({
  // Remove log das requisições não tratadas
  onUnhandledRequest: 'bypass',
  ...options
});

export const decorators = [mswDecorator];
//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
