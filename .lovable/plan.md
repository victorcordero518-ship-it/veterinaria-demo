## Diagnóstico

El step "Verify build output" falla porque mis suposiciones previas sobre la salida del build eran incorrectas. Lo que realmente genera `bun run build` en este proyecto es:

```
dist/server/
├── assets/
└── server.js          ← (no "index.js")
```

Y **no** se genera ningún `wrangler.json` en `dist/server/`. La configuración real de Cloudflare está en `wrangler.jsonc` en la **raíz del repo**, que apunta a `src/server.ts` como entry. El plugin `@cloudflare/vite-plugin` se encarga del bundling durante el build, y `wrangler deploy` debe ejecutarse desde la raíz para que encuentre `wrangler.jsonc`.

Por eso los chequeos `test -f dist/server/index.js` y `test -f dist/server/wrangler.json` devuelven exit code 1.

## Cambios

### `.github/workflows/deploy.yml`

1. **Eliminar el step "Verify build output"** (los `test -f` con nombres incorrectos son la causa directa del fallo).
2. **Quitar `workingDirectory: dist/server`** del step de deploy. Wrangler debe ejecutarse desde la raíz para leer `wrangler.jsonc`.
3. Mantener `command: deploy` y `wranglerVersion: "4"`.

Workflow resultante (sección relevante):

```yaml
      - name: Build
        run: bun run build

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          wranglerVersion: "4"
          command: deploy
```

## Por qué esto funciona

- `wrangler deploy` ejecutado en la raíz detecta automáticamente `wrangler.jsonc`.
- El campo `main: "src/server.ts"` + el plugin de Cloudflare en Vite producen el bundle correcto en `dist/` durante `bun run build`, y wrangler lo empaqueta y sube en el deploy.
- No hace falta `--config` ni `workingDirectory`.

## Requisitos previos (sin cambios)

En GitHub → Settings → Secrets and variables → Actions deben existir:
- `CLOUDFLARE_API_TOKEN` (con permisos *Workers Scripts:Edit* + *Account:Read*)
- `CLOUDFLARE_ACCOUNT_ID`

Tras aplicar el plan, hago push y el siguiente run de Actions debería completar el deploy.
