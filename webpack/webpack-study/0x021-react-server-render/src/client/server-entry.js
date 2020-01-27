import React from 'react'
import { StaticRouter } from 'react-router-dom';
import App from './App'

const createApp = (context, url) => {
  const Root = () => (
    <StaticRouter context={context} location={url}>
      <App />
    </StaticRouter>
  )
  return <Root />;
}

export default createApp
