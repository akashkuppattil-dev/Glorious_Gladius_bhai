# Glorious Gladius - Fleet Management System

A premium logistics and delivery management system. Includes an **Admin Dashboard** (React), a **Mobile Driver App** (Expo), and a **Django REST API** backend.

## 🚀 Live Demo URLs (Sample)

- **Admin Dashboard:** `https://glorious-gladius-demo.vercel.app/`
- **Mobile App:** `https://glorious-gladius-demo.vercel.app/app`

## 🔐 Access Credentials

### Administrator Access
- **Login:** `admin@glorious.com`
- **Password:** `admin123`

### Driver Access
- **Login:** `driver1@glorious.com`
- **Password:** `123456`

---

## 🛠️ Project Structure

- `/admin`: React + Vite + Tailwind CSS (Vite dev server)
- `/backend`: Django REST Framework + SQLite (WSGI server)
- `/mobile`: React Native + Expo (Metro bundler)

---

## 💻 Local Development Setup

### 1. Backend (Django)
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Unix:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py seed_admin  # Creates the default accounts
python manage.py runserver
```

### 2. Admin Dashboard (React)
```bash
cd admin
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Mobile App (Expo)
```bash
cd mobile
npm install
npm start
```
Scan the QR code with the **Expo Go** app on your phone.

---

## 📡 Git Repository
**Main Repo:** [https://github.com/akashkuppattil-dev/Glorious_Gladius_bhai.git](https://github.com/akashkuppattil-dev/Glorious_Gladius_bhai.git)
