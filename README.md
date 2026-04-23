# 🧾 Invoice App

A simple and responsive Invoice Management Application built with **React**. This app allows users to create, view, and manage invoices with data persisted in the browser using **Local Storage**.

---

## 🚀 Features

- Create new invoices
- View a list of all invoices
- Update invoice status (Paid, Pending, Draft)
- Persistent data using Local Storage
- Responsive UI for different screen sizes
- Simple and clean user interface

---

## 🛠️ Tech Stack

- **Frontend:** React (JavaScript)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Storage:** Browser Local Storage
- **Styling:** Tailwind CSS

---

## 📂 Project Structure

```
src/
│
├── components/      # Reusable UI components
├── pages/           # Main pages/views
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

---

## 💾 Data Persistence

This app uses **Local Storage** to store invoice data.

- On initial load, the app checks if invoices exist in Local Storage.
- If not, it seeds initial mock data.
- Any changes (create/update/delete) are automatically saved to Local Storage.

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/invoice-app.git
cd invoice-app
```

---

### 2. Install Dependencies

Make sure you have **Node.js** installed.

```bash
pnpm install
```

---

### 3. Start the Development Server

```bash
pnpm dev
```

---

### 4. Open in Browser

Visit:

```
http://localhost:5173
```

_(Port may vary depending on your setup)_

---

## 📦 Available Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build app for production |

---

## 🧠 How It Works

- React manages UI and state
- Invoice data is stored in Local Storage using `localStorage.setItem()`
- Data is retrieved using `localStorage.getItem()`
- `useEffect` ensures data sync between UI and storage

---

## 🧪 Future Improvements

- Add backend (Node.js / Firebase / Supabase)
- User authentication
- Export invoices as PDF
- Search and filter invoices
- Dark mode support
- Pagination for large datasets

---

## 🐞 Known Limitations

- Data is stored locally (not shared across devices)
- Clearing browser storage will delete all invoices
- No authentication or user accounts

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

- Inspired by real-world invoicing systems
- Built as part of a learning project / internship (e.g., HNG Internship)

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
