  
# React Task Manager 📝

A simple and responsive task management application built with React. This app allows users to create, edit, and delete tasks. It's ideal for beginners learning React concepts like state management, context API, and form handling.

## 🚀 Features

- Add, edit, and delete tasks
- Uses **React Context API** for global state
- Form handling with **React Hook Form**
- Responsive layout using **Tailwind CSS**
- Clean and modular code


## 🛠️ Tech Stack

- **React**
- **React Hook Form**
- **React Context API**
- **Tailwind CSS**

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/itsmepraksh/react-task-manager.git
cd react-task-manager
````

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

Or if using create-react-app:

```bash
npm start
```

## 📁 Project Structure

```
/src
  ├── components/
  │     └── Read.jsx
  ├── context/
  │     └── Wrapper.jsx
  ├── App.jsx
  ├── main.jsx
```

## 🔧 How It Works

* Tasks are stored in React Context (`dataContext`)
* On clicking **Edit**, form fields are pre-filled using `setValue()` from React Hook Form
* Deletion filters the task array and updates the context
* Conditional rendering is used to show the edit panel

## 📌 Future Improvements

- ✅ LocalStorage persistence (Now data is saved even after page refresh)  
- Task status (e.g. completed / pending)   (planned for future)
- Task filtering & sorting   (planned for future)
- Dark mode   (planned for future)
- **Backend integration** using Node.js & Express (planned for future)



## 🧑‍💻 Author

* [Prakash Samanta](https://github.com/itsmepraksh)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
 

 
