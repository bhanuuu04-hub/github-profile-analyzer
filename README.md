# GitHub Profile Analyzer API

## Overview

A backend service built using Node.js, Express.js, MySQL, and the GitHub Public API. This application fetches GitHub user profile information, analyzes useful insights, stores them in a MySQL database, and provides APIs to retrieve stored profile data.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios

---

## Features

### Analyze GitHub Profile

Fetches public GitHub profile information using a username and stores useful insights in MySQL.

Stored insights include:

* GitHub Username
* Name
* Followers Count
* Following Count
* Public Repository Count
* Company
* Location
* Profile URL

---

## API Endpoints

### Analyze and Store Profile

```http
GET /api/github/analyze/:username
```

Example:

```http
GET /api/github/analyze/octocat
```

---

### Get All Stored Profiles

```http
GET /api/github/profiles
```

---

### Get Single Stored Profile

```http
GET /api/github/profiles/:username
```

Example:

```http
GET /api/github/profiles/octocat
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project folder:

```bash
cd github-profile-analyzer
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
```

---

## Database Setup

Create database:

```sql
CREATE DATABASE github_analyzer;
```

Use database:

```sql
USE github_analyzer;
```

Create table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    company VARCHAR(255),
    location VARCHAR(255),
    profile_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Run Application

Start the server:

```bash
node server.js
```

Server runs at:

```text
http://localhost:5000
```

---

## Sample Test URLs

```text
http://localhost:5000/api/github/analyze/octocat
```

```text
http://localhost:5000/api/github/profiles
```

```text
http://localhost:5000/api/github/profiles/octocat
```

---

## Project Structure

```text
github-profile-analyzer
│
├── config
│   └── db.js
│
├── controllers
│   └── githubControllers.js
│
├── models
│   └── profileModel.js
│
├── routes
│   └── githubRoutes.js
│
├── .env
├── server.js
├── package.json
├── README.md
```

---

## Author

Bhanu
