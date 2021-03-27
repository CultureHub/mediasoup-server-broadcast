module.exports = {
  port: 8000, // port where socket server and broadcaster will be hosted
  local_SslKey: '/certs/localhost/localhost-key.pem',
  local_SslCert: '/certs/localhost/localhost.pem',
  sslKey: '/certs/web-server/privkey.pem',
  sslCert: '/certs/web-server/fullchain.pem',
  worker: {
    rtcMinPort: 3000,
    rtcMaxPort: 4000
  },
  webRtcTransport: {
    listenIps: [{
      //set to public IP
      //ip: "YOUR.PUBLIC.IP.ADDRESS",
      //OR
      //set to your local IP
      //ip: "YOUR.LOCAL.IP.ADDRESS",
    }]
  },
  router: {
    mediaCodecs: [{
        kind: "audio",
        name: "opus",
        mimeType: "audio/opus",
        clockRate: 48000,
        channels: 2
      },
      // {
      //   kind: "video",
      //   name: "VP8",
      //   mimeType: "video/VP8",
      //   clockRate: 90000
      // },
      {
        kind: 'video',
        mimeType: 'video/H264',
        clockRate: 90000,
        parameters: {
          'packetization-mode': 1,
          'level-asymmetry-allowed': 1
        }
      }
    ]
  }
}