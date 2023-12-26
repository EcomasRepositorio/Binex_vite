module.exports = {
    apps: [
      {
        name: 'mi_proyecto_vite',
        script: 'npm',
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