var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
