[# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
# ll-crew-battle-stream-app
](out: The output directory for the built binary (default: dist).
binaryName: The name of the executable (default: app).
embedStatic: Whether to embed static assets in the binary (default: true).
target: The target platform for the binary (default to your current platform). Available targets: linux-x64, linux-x64-baseline, macos-arm64, windows-x64, windows-x64-baseline, darwin-x64, darwin-arm64, linux-x64-musl, linux-arm64-musl.
volume: The volume mount point for the binary (no volume mount by default). Useful for persistent storage for self-hosting, usually /data.)
