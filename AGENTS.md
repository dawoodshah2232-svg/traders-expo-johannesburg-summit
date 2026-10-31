# AGENTS.md — The Traders Expo (thetradersexpo.com)

Read this file before changing anything in this repo. It applies to humans and AI coding agents alike.

---

## 1. Project facts

| Item | Value |
|---|---|
| Live site | https://thetradersexpo.com |
| Backend / API URL | https://thetradersexpo.com/backend (API routes: `/backend/api/...`) |
| Repo owner | `dawoodshah2232-svg` |
| Branch | `main` (the only branch that deploys) |
| Hosting | GoDaddy cPanel, server `118.139.163.94` |
| cPanel user | `eazz6z8mutng` |
| Frontend live folder | `/home/eazz6z8mutng/public_html/thetradersexpo.com` |
| Backend (Laravel) folder | `/home/eazz6z8mutng/public_html/thetradersexpo.com/backend` |
| DNS | Managed in GoDaddy (A `@` → `118.139.163.94`, CNAME `www` → `thetradersexpo.com`) |

**Every push to `main` goes live automatically.** Test locally before pushing. Use a separate branch and a pull request for anything risky.

---

## 2. Allowed tech stack (strict — do not change)

The cPanel server only supports these versions. Anything else will break production.

| Layer | Allowed | Not allowed |
|---|---|---|
| Frontend (public site **and** admin panel) | **React with `.jsx` files**, built with **Vite** | TypeScript (`.tsx`), Next.js, Nuxt, Vue, Angular, server-side rendering |
| Backend | **Laravel 10** on **PHP 8.1** — **mandatory** | Laravel 11+, PHP 8.2+, Node/Express, Python, any other backend |
| Database | **MySQL** (cPanel) | PostgreSQL, MongoDB, SQLite in production |

Rules:
- The frontend must be a **static build** (HTML/CSS/JS). cPanel cannot run a Node server.
- The **admin panel is part of the React frontend** (e.g. routes under `/admin`). Do **not** build the admin in Blade, Filament, Nova, Livewire or any other Laravel UI package.
- Laravel is **API only**: it returns JSON to the React app. No Blade pages for users or admins.
- In `backend/composer.json`, keep this so Composer never installs packages that need PHP 8.2+:
  ```json
  "require": { "php": "^8.1", "laravel/framework": "^10.0" },
  "config": { "platform": { "php": "8.1.0" } }
  ```
- Node is only used on GitHub Actions (and locally) to **build** the frontend. Use Node 20.

---

## 3. Repo structure

```text
/
├── AGENTS.md                         # this file
├── README.md
├── .github/workflows/deploy-cpanel.yml
├── index.html, about.html, assets/…  # CURRENT static site (until React replaces it)
├── frontend/                         # React + Vite (JSX) — public site + admin panel
│   ├── public/
│   │   └── .htaccess                 # SPA fallback (section 5)
│   ├── src/
│   │   ├── pages/                    # public pages
│   │   ├── admin/                    # admin panel pages/components
│   │   └── api/                      # API client (uses VITE_API_URL)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── backend/                          # Laravel 10 (PHP 8.1), API only
    ├── app/ routes/ database/ …
    ├── composer.json
    └── .env.example                  # never commit the real .env
```

`frontend/` and `backend/` currently contain only a `.gitkeep`. The deploy workflow detects them automatically:

| Condition | What is deployed |
|---|---|
| `frontend/package.json` does **not** exist | Static HTML in the repo root → `public_html/thetradersexpo.com` |
| `frontend/package.json` exists | `npm run build` → `frontend/dist/` → `public_html/thetradersexpo.com` |
| `backend/composer.json` exists | Laravel → `public_html/thetradersexpo.com/backend` |

When the React app is ready to replace the static site, delete the old root HTML files and `assets/` in the same PR.

---

## 4. Database

Already created in cPanel → MySQL Databases:

| Setting | Value |
|---|---|
| Database name | `thetradersexpo` |
| Database user | `thetradersexpo` |
| Host | `localhost` |
| Port | `3306` |
| Prefix / suffix | none |
| Password | **Ask Kailash.** Never commit it, never paste it in code, issues, PRs or chat logs. |

The user already has full privileges on the database. Make all schema changes with Laravel migrations — never edit live tables by hand in phpMyAdmin.

---

## 5. Frontend (React + Vite, JSX)

### Local development
```powershell
cd frontend
npm install
npm run dev
```

### Build
```powershell
npm run build      # outputs to frontend/dist
```
Only the contents of `frontend/dist` go to the server. Source files never do.

### Rules
- Components are `.jsx`, never `.tsx`.
- The API base URL comes from `import.meta.env.VITE_API_URL`. Never hard-code it.
  - Local: `frontend/.env.local` → `VITE_API_URL=http://127.0.0.1:8000/api`
  - Live: GitHub secret `FRONTEND_ENV` → `VITE_API_URL=https://thetradersexpo.com/backend/api`
- Admin pages live under `/admin` and must check login before rendering (redirect to `/admin/login` if not authenticated).
- Never put secrets in `VITE_` variables. Everything in them is visible in the browser.
- For React Router (browser history), create `frontend/public/.htaccess` so page refreshes work and `/backend` is never caught by React:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^backend(/|$) - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

---

## 6. Backend (Laravel 10 + PHP 8.1)

### How it is laid out on the server
The whole Laravel app is deployed to **`/home/eazz6z8mutng/public_html/thetradersexpo.com/backend`** and reached at **`https://thetradersexpo.com/backend`**.

Because the app sits inside the web root, the deploy generates two files in that folder on every run (they are **not** in the repo):

| Generated file | Purpose |
|---|---|
| `backend/index.php` | Copy of `public/index.php` with paths adjusted, so URLs are `/backend/api/...` |
| `backend/.htaccess` | Blocks `.env` and all dotfiles, `app/`, `config/`, `database/`, `routes/`, `storage/`, `vendor/`, `artisan`, `composer.*` etc. (403). Serves real files from `public/`, sends everything else to `index.php`, and passes the `Authorization` header (needed for Sanctum tokens). |

Rules:
- Keep `backend/` a **standard Laravel 10 project**. Do not move `public/index.php`, and do not commit a root `index.php` or `.htaccess` in `backend/`.
- Never remove or weaken the generated `.htaccess` rules. Without them `.env` (with the DB password) is downloadable.
- After the first backend deploy, check that `https://thetradersexpo.com/backend/.env` and `https://thetradersexpo.com/backend/composer.json` return **403 Forbidden**.
- Public uploaded files: set the `public` disk URL in `config/filesystems.php` to `env('APP_URL').'/public/storage'` (the `storage/` path itself is blocked).
- The frontend deploy never touches the `/backend` folder on the server.

### Creating the Laravel project (first time)
```powershell
composer create-project laravel/laravel:^10.0 backend
cd backend
composer require laravel/sanctum
```
Then add the `platform` config from section 2 to `composer.json`, and run `composer update` with PHP 8.1.

### Local development
```powershell
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve          # http://127.0.0.1:8000
```
Use PHP 8.1 locally too, so version problems show up before deploy.

### API and admin auth
- All routes go in `routes/api.php` → live at `https://thetradersexpo.com/backend/api/...`.
- Admin login uses **Laravel Sanctum** API tokens: React sends `POST /api/admin/login`, stores the token, and sends `Authorization: Bearer <token>` on admin requests.
- Protect admin routes with `auth:sanctum` and an admin check (e.g. `is_admin` column or role).
- Frontend and backend share one domain, so no CORS setup is needed in production. For local dev, allow `http://localhost:5173` in `config/cors.php`.

### Production `.env` (stored in GitHub secret `BACKEND_ENV`, never in the repo)
```env
APP_NAME="The Traders Expo"
APP_ENV=production
APP_KEY=base64:REPLACE_ME
APP_DEBUG=false
APP_URL=https://thetradersexpo.com/backend

LOG_CHANNEL=stack
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=thetradersexpo
DB_USERNAME=thetradersexpo
DB_PASSWORD=ASK_KAILASH

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
FILESYSTEM_DISK=local

FRONTEND_URL=https://thetradersexpo.com
```
Generate `APP_KEY` once with `php artisan key:generate --show`, or without a Laravel project:
```powershell
php -r "echo 'base64:'.base64_encode(random_bytes(32));"
```
Never change `APP_KEY` after going live (it logs everyone out and breaks encrypted data).

### Migrations on production
Every deploy runs `php artisan migrate --force`. That means:
- Never edit a migration that has already been deployed. Create a new one.
- Never add `migrate:fresh`, `migrate:reset`, `migrate:rollback` or `db:wipe` to the workflow. They delete live data.
- Seeders do **not** run automatically. Create the first admin user with a one-off seeder or `php artisan tinker` over SSH.

### PHP on the server
On cPanel the plain `php` command may not be 8.1. Always use:
```bash
/opt/cpanel/ea-php81/root/usr/bin/php artisan ...
```
Also set **cPanel → MultiPHP Manager → thetradersexpo.com → PHP 8.1** (Kailash).

---

## 7. Deployment (GitHub Actions)

Workflow: `.github/workflows/deploy-cpanel.yml`. Runs on every push to `main`. It can also be run manually from **Actions → Deploy to cPanel → Run workflow**.

Steps, in order:
1. Detect whether `frontend/` (React) and `backend/` (Laravel) exist.
2. **Frontend:** build with Node 20 if React exists. Then rsync to `public_html/thetradersexpo.com` with `--delete`. It never uploads `*.md`, `.git`, `.github`, `frontend/` or `backend/` source, and never deletes the server's `.htaccess`, `.user.ini`, `.well-known/`, `cgi-bin/` or `backend/`.
3. **Backend** (only if `backend/composer.json` exists):
   - Install dependencies with PHP 8.1 (`composer install --no-dev`).
   - Upload the app → `public_html/thetradersexpo.com/backend` (server `.env` and `storage/` are kept).
   - Write `.env` from `BACKEND_ENV`.
   - Generate the protective `.htaccess` and root `index.php` (section 6).
   - Run `storage:link`, `migrate --force`, `config:cache`, `route:cache` and `view:cache` with PHP 8.1.

If a deploy fails: open **Actions**, read the failed step, fix it, and push again. Use **Re-run jobs** only for secret or server fixes that need no code change.

---

## 8. GitHub secrets

Add at **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**.
This file lists **secret names only**. Values are never written in this file or anywhere in the repo.

| Secret | Purpose | Needed for |
|---|---|---|
| `CPANEL_HOST` | `118.139.163.94` | All deploys |
| `CPANEL_PORT` | `22` | All deploys |
| `CPANEL_USER` | `eazz6z8mutng` | All deploys |
| `CPANEL_PATH` | `/home/eazz6z8mutng/public_html/thetradersexpo.com` | All deploys |
| `CPANEL_SSH_KEY` | Private SSH key (cPanel key `TheTraderExpo`), full text incl. BEGIN/END lines | All deploys |
| `CPANEL_SSH_PASSPHRASE` | Passphrase of that key (only if it has one) | All deploys |
| `BACKEND_ENV` | Full production Laravel `.env` (section 6) | Backend |
| `FRONTEND_ENV` | `VITE_API_URL=https://thetradersexpo.com/backend/api` (plus any other `VITE_` vars) | React frontend |

Need a new secret? Ask Kailash to add it, and add its **name and purpose** to this table in the same PR.

---

## 9. Rules for every change

1. Never commit passwords, `.env` files, SSH keys or API keys. `.env` must be in `.gitignore`.
2. Laravel 10 + PHP 8.1 only. Never upgrade either.
3. React with JSX only. No TypeScript. The admin panel is React too.
4. Build and test locally (`npm run build`, `php artisan test`) before pushing to `main`.
5. Never add destructive database commands to the deploy.
6. Anything needing cPanel or GoDaddy access (DNS, PHP version, DB password, SSL, new secrets) → ask Kailash.
