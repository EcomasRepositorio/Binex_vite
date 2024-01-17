module.exports = {
  apps: [
    {
      name: 'frontend_vite',
      script: 'npm',
      args: 'run dev',
      watch: true,
      ignore_watch: ['node_modules', 'dist'], // Ignora la carpeta node_modules y dist
      env: {
        NODE_ENV: 'development',
        PORT: 3500, // Agrega el puerto que quieres utilizar en desarrollo
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000, // Puedes especificar un puerto diferente para producción si es necesario
      },
    },
  ],
};