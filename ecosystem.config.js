module.exports = {
    apps: [
      {
        name: 'binex-pm2',
        script: '/home/binex/Binex_vite/src/App.js',
        args: 'run dev',
        watch: true,
        ignore_watch: ['node_modules', 'dist'], // Ignora la carpeta node_modules y dist
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };