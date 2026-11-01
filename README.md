# Traders Expo Johannesburg — thetradersexpo.com
- Event: 18–19 February 2027, Emperors Palace, Centre Court, 64 Jones Road, Kempton Park, Johannesburg
- Organiser: ProFX Media FZ-LLC — info@profxmedia.com, +971 58 553 1033
- Brand, logo and colours: Traders Expo Johannesburg (green / black)
- Register interest only — no payment is collected on the site, and ticket pricing is not confirmed.

## Before you change anything
Read and follow **[AGENTS.md](AGENTS.md)**. It defines the allowed stack (React JSX frontend + admin, Laravel 10 / PHP 8.1 backend, MySQL), the folder structure, the database, the auto-deploy to cPanel on every push to `main`, and the GitHub secrets.

## Frontend (public site + admin panel)
React + Vite (JSX) + Tailwind CSS in [`frontend/`](frontend/).

```powershell
cd frontend
npm install
copy .env.example .env.local   # VITE_API_URL for the local Laravel API
npm run dev                    # http://localhost:5173  (admin: /admin)
npm run build                  # → frontend/dist
```
