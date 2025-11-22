# 📌 Subscription Tracker API

Subscription Tracker is a backend service built with **Node.js + Express** that helps users manage their subscriptions and receive automated reminders for upcoming payments.

---

## 🚀 Tech Stack
- Node.js / Express  
- MongoDB + Mongoose  
- JWT Authentication  
- Arcjet API Protection  
- Upstash QStash (Serverless Scheduler)  
- MVC Project Structure (Controllers, Routes, Models, Middleware)

---

## 🔧 Installation

```bash
git clone https://github.com/rtmgj/subscription-tracker
cd subscription-tracker
npm install
npm run dev


MONGODB_URI=...
JWT_SECRET=...
ARCJET_KEY=...
QSTASH_URL=...
QSTASH_TOKEN=...
SERVER_URL=http://localhost:5500

controllers/
models/
routes/
middleware/
utils/
config/
app.js

