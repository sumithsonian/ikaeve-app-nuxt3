import auth from 'basic-auth'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  if (!config.BASIC_AUTH_ENABLED) {
    return
  }

  if (event.req.url.match(/api/)) {
    return
  }

  const credential = auth(event.req)

  if (
    !credential ||
    credential.name !== config?.BASIC_AUTH_USERNAME ||
    credential.pass !== config?.BASIC_AUTH_PASSWORD
  ) {
    event.res.statusCode = 401
    event.res.setHeader('WWW-Authenticate', 'Basic realm="blah"')
    event.res.end('Unauthorized')
  }
})
