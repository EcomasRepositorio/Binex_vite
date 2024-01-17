module.exports = {
  apps: [
    {
      name: 'frontend_vitee',
      script: 'npm',
      args: 'run dev',
      watch: true,
      ignore_watch: ['node_modules', 'dist'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};