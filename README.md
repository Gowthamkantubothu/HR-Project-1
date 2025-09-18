# Candidate Management System

## Project Overview
The **Candidate Management System** is a web application designed to manage candidate details efficiently. It allows users to add, view, and manage candidate information, including their email, phone number, current status, and resume link. The system ensures **data uniqueness** for email, phone number, and resume links to prevent duplicate entries.

This project is built using **React.js** for the frontend, **Django** for the backend, and **MySQL** as the database.

---

## Features
- Add new candidates with validation for:
  - Unique email
  - Unique phone number
  - Unique resume link
- View all candidates in a tabular format
- Real-time input validation and duplicate checks
- Responsive and user-friendly UI

---

## Technology Stack
- **Frontend:** React.js, Axios, JavaScript
- **Backend:** Django, Django REST Framework
- **Database:** MySQL
- **Other Tools:** Node.js, Virtual Environment (venv), Git

---

## Project Structure

project-1/
├── backend/
│ ├── backend/ # Django project folder
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── ...
│ ├── candidates/ # Django app folder
│ │ ├── models.py
│ │ ├── serializers.py
│ │ ├── views.py
│ │ └── ...
│ ├── manage.py
│ └── venv/
└── frontend/
├── src/
│ ├── components/
│ │ └── CandidateForm.js
│ ├── App.js
## Setup Instructions

### Backend (Django)
1. Navigate to the backend folder:
   ```bash
   cd project-1/backend
2.Activate virtual environment:
  venv\Scripts\activate
3.Install dependencies:
  pip install -r requirements.txt
4.Configure MySQL database in backend/settings.py.
5.Apply migrations:
  python manage.py makemigrations
  python manage.py migrate
6.Start the Django server:
  python manage.py runserver


**Validation Features
    -Email validation to ensure correct format
    -Phone number validation
    -Duplicate checking for email, phone number, and resume link
    -Alerts and error messages for invalid or duplicate data
