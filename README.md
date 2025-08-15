# 💬 Realtime Chat App with Sentiment Analysis 🚀

A sleek, modern realtime chat application built with **Next.js**, **Express**, **Pusher**, and **Sentiment Analysis**. Chat like never before — in real time — with emoji-powered mood detection! 😄😢😐

Chat Preview 

image(https://github.com/user-attachments/assets/bc7f1859-23de-42d0-a511-0255af1bf9a0)


---

## ⚡️ Features

- 🔄 Real-time messaging using **Pusher**
- 💡 Emoji-based **Sentiment Analysis** with sentiment
- ⚛️ Modern UI powered by **React** + **Next.js**
- 📦 Node.js & Express server with REST API
- 🧠 Intelligent mood tagging (Happy / Sad / Neutral)
- 📜 Emoji icons appear automatically based on message tone!

---

## 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Pusher](https://img.shields.io/badge/Pusher-1A1F71?style=for-the-badge)
![Sentiment](https://img.shields.io/badge/Sentiment_Analysis-FFB400?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

---

## 🌐 Live Demo

> 🧪 [COMING SOON] – Deploy it on [Vercel](https://vercel.com/) or [Render](https://render.com/)

---



## 📁 Project Structure

realtime-chat-app/
│

├── components/

│ ├── Layout.js

│ └── Chat.js

│
├── pages/

│ └── index.js

│
├── server.js

├── .env.example

├── package.json

└── README.md



---

## 🛠️ Getting Started

### 1️⃣ Clone the Repo


git clone https://github.com/shafaq0410/realtime-chat-app.git

cd realtime-chat-app


2️⃣ Install Dependencies

npm install


3️⃣ Configure Environment Variables

Create a .env file based on .env.example and fill in your Pusher credentials:

cp .env.example .env


4️⃣ Run the App -

npm run dev

Visit http://localhost:3000 to chat live!



🔐 Environment Variables (.env)
env

PUSHER_APP_ID=your_app_id

PUSHER_APP_KEY=your_app_key

PUSHER_APP_SECRET=your_app_secret

PUSHER_APP_CLUSTER=your_cluster

NODE_ENV=development

PORT=3000


---


✨ Screenshots
💬 Chat View	

![image](https://github.com/user-attachments/assets/ad508b5f-7de4-43c1-92f2-24590a74c6ba)


User Entry 

![image](https://github.com/user-attachments/assets/b328fc7a-28a5-424c-9f6f-5e2047b7e49b)


---


🧠 Behind the Scenes
Each message goes through sentiment analysis using Sentiment. Depending on the tone:

Positive → 😄

Negative → 😢

Neutral → 😐

---


🏗️ Future Improvements
✅ Typing indicators

✅ Online user list

✅ Message history with MongoDB

✅ Emoji picker integration

---


💻 Author
Made with ❤️ by Shafaq Ali

⭐️ Give it a Star!
If you like it, consider giving this repo a ⭐️ — it helps others discover it!

