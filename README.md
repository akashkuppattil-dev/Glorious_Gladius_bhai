<div align="center">
  <img src="./mobile/assets/logo.png" width="120" height="120" alt="Glorious Gladius Logo" />
  <h1>⚔️ GLORIOUS GLADIUS</h1>
  <p><strong>The Future of Intelligent Logistics & Fleet Management</strong></p>

  [![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)](https://glorious-gladius-bhai-hwj3.vercel.app/)
  [![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/akashkuppattil-dev/Glorious_Gladius_bhai)
</div>

---

## 🌐 Official Project Links

### 🖥️ Admin Dashboard (Web)
Management interface for real-time tracking, fleet oversight, and order management.
👉 **[https://glorious-gladius-bhai-hwj3.vercel.app/](https://glorious-gladius-bhai-hwj3.vercel.app/)**

### 📱 Mobile App Demo (Web Preview)
Driver interface for route navigation, proof of delivery, and mission-critical updates.
👉 **[https://glorious-gladius-bhai-mobileapp.vercel.app/](https://glorious-gladius-bhai-mobileapp.vercel.app/)**

---

## 🔑 Quick Access Credentials

### 🚛 Driver Access
Used for the mobile application.
- **Login:** `driver1@glorious.com`
- **Password:** `123456`

### 👑 Administrator Access
Used for the central management dashboard.
- **Login:** `admin@glorious.com`
- **Password:** `admin123`

---

## 🛠️ Technology Stack

- **Backend:** Django REST Framework (Python)
- **Dashboard:** React, Vite, Tailwind CSS, Leaflet Maps
- **Mobile:** Expo, React Native, Google Maps API
- **Optimization:** Custom Greedy Route Algorithms & Google OR-Tools

---

## 📦 Project Structure

```bash
├── admin/      # React Dashboard (Vite)
├── backend/    # Django REST API
├── mobile/     # Expo Mobile Application
└── README.md   # Project Documentation
```

---

## 🚀 Local Development Setup

### 1. Backend (Django)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_admin  # Creates the demo accounts
python manage.py runserver
```

### 2. Admin Dashboard
```bash
cd admin
npm install
npm run dev
```

### 3. Mobile App
```bash
cd mobile
npm install
npx expo start
```

---

<div align="center">
  <p>© 2026 Glorious Gladius - Secured Logistics Infrastructure</p>
</div>
