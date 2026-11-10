# Next.js Web Functions lab

Use Node.js 24 and a Linux/Arm64-compatible build environment for deployment.
From this directory, run:

```bash
npm install --save-exact next react react-dom
npm run build
bash package-app.sh
AWS_LAMBDA_HTTP_ENDPOINT=127.0.0.1:3000 node deployment/index.js
```

Save the resulting package.json and package-lock.json; use `npm ci` for repeat builds.
Dependencies are intentionally not pre-resolved: no remote package installation or Next.js
build was performed in the authoring environment. Record and validate your installed versions.

After local checks, stop the local process and use the deployment command in Article 1.
The article's ApplicationManaged endpoint is PUBLIC and must contain no sensitive data.
The example implements SSR, a health route, and a streaming route only: it does not
implement login, data persistence, ISR, distributed caching, or a database connection.
The publication draft includes a separate production-hardening section.
