# PantryTracker

PantryTracker is a full-stack web application that helps users manage their pantry inventory in real time. It allows users to add, update, and remove food items while keeping track of quantities so they always know what they have at home.

Live Demo: https://pantry-tracker-murex-nine.vercel.app

---

## Overview

PantryTracker was built to solve a simple but common problem: forgetting what items you already have and overbuying at the grocery store. This application provides a clean, responsive interface connected to a real-time database so inventory updates are immediately reflected in the UI.

This project demonstrates frontend development with Next.js, backend integration with Firebase Firestore, and production deployment using Vercel.

---

## Features

- Add pantry items with quantity tracking
- Update quantities as items are used or restocked
- Delete items from inventory
- Real-time database synchronization using Firebase
- Responsive UI built with Next.js
- Deployed production build using Vercel

---

## Tech Stack

Frontend:
- Next.js (React framework)
- JavaScript
- CSS

Backend / Database:
- Firebase Firestore (NoSQL database)

Deployment:
- Vercel

---

## Architecture Overview

The application follows a simple but scalable structure:

- `app/`  
  Contains the main Next.js application logic and UI components.

- `firebase.js`  
  Handles Firebase initialization and Firestore configuration.

- `public/`  
  Static assets used by the application.

User interactions (adding, updating, deleting items) trigger Firestore writes. The UI state updates based on database responses to reflect the current pantry contents. This ensures the interface remains synchronized with persistent storage.

---
