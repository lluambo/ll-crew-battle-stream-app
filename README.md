# Crew Battle Admin (JesterKit)

A local-first, web-based scoreboard manager designed for streamers. Control the match state in one tab and update your OBS overlays instantly without complex cloud hosting.



## ✨ Features

* **Admin Dashboard:** Easily manage team names, player lives, and active status.
* **Drag & Drop Logos:** Upload team logos directly from your computer (saved locally).
* **Instant OBS Sync:** Updates on the Admin panel reflect on the OBS overlays in ~1 second.
* **Persistent Data:** Scores and names are saved to a local `data.json` file, so you never lose progress if the app restarts.
* **Transparent Overlays:**
    * **Roster View:** Displays full team lists, stocks, and logos.
    * **Versus Overlay:** A "Fight Card" lower-third showing the current active matchup.

---

## 🚀 How to Run

### Option A: Using the Executable (Recommended for Streamers)
If you have downloaded the standalone release (e.g., `CrewBattle.exe` or Linux binary):

1.  **Double-click the executable** to start the app.
2.  A terminal window may appear indicating the server is running on port `3000`.
3.  Open your browser to `http://localhost:3000` to see the control panel.
4.  Copy the OBS links provided on the home page.

### Option B: Running from Source (For Developers)
If you want to modify the code or run it using `pnpm`:

1.  **Install Dependencies:**
    ```bash
    pnpm install
    ```
2.  **Start Development Server:**
    ```bash
    pnpm dev
    ```
3.  **Build & Preview (Production Mode):**
    ```bash
    pnpm build
    pnpm preview
    ```
    *The app will be available at `http://localhost:5173` (Dev) or `http://localhost:4173` (Preview).*

---

## 🎥 OBS Setup Guide

1.  Open **OBS Studio**.
2.  Add a new **Browser Source**.
3.  **Roster View:**
    * **URL:** `http://localhost:3000/roster` (Check port number based on how you launched it)
    * **Width:** 1920
    * **Height:** 1080
4.  **Versus Overlay:**
    * **URL:** `http://localhost:3000/overlay`
    * **Width:** 1920
    * **Height:** 1080
5.  **Important:** If the view does not update, right-click the Browser Source > **Properties** > **Refresh cache of current page**.

---

## 🛠️ How It Works

This application is built with **SvelteKit 5** and uses a local file-system database to ensure reliability during streams.

1.  **The "Brain" (Server):**
    When you launch the app, it creates a local web server on your computer. It reads and writes to a file named `data.json` located in the app's folder. This file acts as the "Single Source of Truth."

2.  **The "Controller" (Admin Page):**
    When you make changes (like removing a life), the Admin page sends a `POST` request to the server. The server updates `data.json` immediately.

3.  **The "View" (OBS):**
    The overlay pages in OBS automatically "poll" (ask) the server for new data every second. If the `data.json` file has changed, the overlay updates its visuals instantly. This bypasses browser security restrictions that usually stop OBS from talking to Chrome.

---

## 🏗️ Built With

* **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework
* **[Svelte 5 Runes](https://svelte.dev/docs/svelte/what-are-runes)** - Reactive state management
* **[TailwindCSS](https://tailwindcss.com/)** & **[DaisyUI](https://daisyui.com/)** - Styling
* **Node.js** - Local runtime environment
