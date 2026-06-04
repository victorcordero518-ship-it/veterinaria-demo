
## Despliegue CI/CD a Cloudflare Workers con GitHub Actions

### Pasos previos (los hace el usuario, no Lovable)

1. **Conectar el proyecto a GitHub** desde Lovable: menú `+` → GitHub → Create Repository.
2. **Crear un API Token de Cloudflare** en https://dash.cloudflare.com/profile/api-tokens usando la plantilla *Edit Cloudflare Workers*. Copiar también el **Account ID** desde el dashboard.
3. En el repo de GitHub, ir a **Settings → Secrets and variables → Actions** y añadir:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

### Cambios en el proyecto (los hago yo al pasar a build mode)

1. **Crear `.github/workflows/deploy.yml`** con un workflow que:
   - Se ejecute en cada push a `main` (y manualmente con `workflow_dispatch`).
   - Instale Bun, ejecute `bun install` y `bun run build`.
   - Use `cloudflare/wrangler-action@v3` para desplegar desde `dist/server/` (que ya contiene `index.js` y `wrangler.json` generados por el build).
   - Pase `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` desde los secrets.

2. **Verificar `wrangler.jsonc`**: el `name` actual es `tanstack-start-app`. Confirmar si quieres ese nombre como subdominio en Workers (`tanstack-start-app.<tu-cuenta>.workers.dev`) o cambiarlo (p. ej. `veterinaria-demo`).

### Detalles técnicos

- El build de Vite ya genera `dist/server/index.js` y `dist/server/wrangler.json` con los assets correctamente configurados (verificado en la conversación anterior), así que el workflow solo necesita ejecutar `wrangler deploy` apuntando a ese directorio.
- Estructura del workflow:

```text
.github/workflows/deploy.yml
  ├─ checkout
  ├─ setup-bun
  ├─ bun install --frozen-lockfile
  ├─ bun run build
  └─ wrangler-action (workingDirectory: dist/server)
```

### Pregunta antes de implementar

¿Quieres mantener el nombre `tanstack-start-app` en Cloudflare Workers o prefieres renombrarlo (por ejemplo `veterinaria-demo`)?
