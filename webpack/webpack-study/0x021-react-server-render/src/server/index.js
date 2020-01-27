const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const clientConfig = require('./../../webpack.client.config')
const serverConfig = require('./../../webpack.server.config')
const webpack = require('webpack')
const MFS = require('memory-fs')

const clientCompiler = webpack(clientConfig)
const devMiddleWare = require('webpack-dev-middleware')(clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  noInfo: true,
})

const app = express()
let template

app.use(devMiddleWare)

clientCompiler.plugin('done', stats => {
  const info = stats.toJson()
  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  if (stats.hasErrors()) {
    console.error(info.errors)
    return
  }

  template = devMiddleWare.fileSystem.readFileSync(info.outputPath + '/index.html', 'utf-8')
  // // 从webpack-dev-middleware中间件存储的内存中读取打包后的inddex.html文件模板
  // let template = readFreadFileile(devMiddleware.fileSystem, 'index.html')
})
//
app.use(require('webpack-hot-middleware')(clientCompiler))
//
//
const serverCompiler = webpack(serverConfig)
let serverEntry
const mfs = new MFS()
serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  const info = stats.toJson()
  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  if (stats.hasErrors()) {
    console.error(info.errors)
    return
  }

  console.log(info.outputPath)
  // // 读取打包后的内容并编译模块
  const bundle = mfs.readFileSync('/Users/lyxxxx/Own/Js/webpack-study/0x021-react-server-render/build/server/server-entry.js', 'utf-8')

  const m = new module.constructor()
  m._compile(bundle, 'entry-server.js')
  serverEntry = (m.exports)

})
//
// const serverEntry = require('./../../build/server/server-entry')
//
// const template = fs.readFileSync('./../../build/client/index.html', 'utf-8')
//
// // 静态资源映射到dist路径下
// app.use('/build', express.static(path.join(__dirname, './../../build/client')))
//
// /* eslint-disable no-console */
const render = (req, res) => {
  console.log('======enter server======')
  console.log(`visit url: ${req.url}`)
  const createApp = serverEntry.default

  const html = ReactDOMServer.renderToString(createApp({}, req.url))
  const htmlStr = template.replace('<!--react-ssr-outlet-->', html)
  // 将渲染后的html字符串发送给客户端
  res.send(htmlStr)
}
//
app.get('*', render)
app.listen(3000, () => {
  console.log('Your app is running')
})
