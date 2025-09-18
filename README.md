# Candidate Management System

## Project Overview
The Candidate Management System is a web application to manage candidate details efficiently. Users can add, view, and manage candidate information like email, phone number, current status, and resume link. The system ensures data uniqueness to prevent duplicates.

## Features
- Add new candidates with validation:
  - Unique email
  - Unique phone number
  - Unique resume link
- View candidates in a table
- Real-time validation and error alerts
- Responsive and user-friendly interface

## Technology Stack
- Frontend: React.js, Axios
- Backend: Django, Django REST Framework
- Database: MySQL
- Tools: Node.js, Python virtual environment (venv), Git

## Project Structure
HR-Project-1/
├── backend/
│ ├── cmsProject/ # Django project folder
│ ├── candidates/ # Django app folder
│ ├── manage.py
│ └── env/
└── frontend/
├── src/
│ ├── components/
│ └── App.js
