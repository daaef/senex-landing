module.exports = {
  apps: [
    {
      name: 'v3_client',
      port: 3003,
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
