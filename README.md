# DataVinci Assignment – Responsive Layout & Nested Checkbox Component

This repository contains a React.js project (bootstrapped with Vite) that implements:

1. A fully **responsive layout** (Desktop & Mobile) based on the provided Figma design.  

2. A **nested checkbox component** with full parent–child selection logic and indeterminate states.

It also includes a Loom walkthrough video demonstrating these implementations.

---

##  Features

### 1. Responsive Layout

- Built with **mobile-first design principles** using CSS **Flexbox** and **Grid**.

- Adapts dynamically:

  - **Desktop (≥ 1024px)** – Multi-column layout, full navigation bar.

  - **Tablet / Mobile (< 768px)** – Single-column layout, collapsible hamburger menu.

- Ensures pixel-perfect fidelity with Figma (spacing, typography, colors).

- Accessibility compliant: proper color contrast, minimum font sizes, and full keyboard navigation.

### 2. Nested Checkbox Component

- Hierarchical structure:

  - **Select All** toggles all categories and individual items.

  - **Parent Categories** (e.g., Fruits, Vegetables) control their child items.

  - **Children** update parent state to checked, unchecked, or indeterminate.

- Implements bidirectional state propagation:

  - **Downwards**: Parent → Children.

  - **Upwards**: Children → Parent reflects partial or full selection.

### 3. Loom Walkthrough Video

A step-by-step demonstration covers:

1. **Introduction** – Developer overview.

2. **Code Walkthrough** – Architecture and logic for layout and checkbox functionality.

3. **Live Demo** – Desktop and mobile responsiveness, plus checkbox behavior.

4. **Conclusion** – Summary and potential enhancements.

---

##  Project Structure

DataVinci_Assignment/

│── public/

│── src/

│ ├── components/

│ │ ├── Navbar.jsx

│ │ ├── Layout.jsx

│ │ ├── CheckboxTree.jsx

│ │ └── CheckboxItem.jsx

│ ├── styles/

│ │ ├── layout.css

│ │ └── checkbox.css

│ ├── App.jsx

│ └── main.jsx

│── .gitignore

│── package.json

│── package-lock.json

│── vite.config.js

│── README.md


---

##  Getting Started

### Step 1: Clone the Repository

git clone https://github.com/ibrahim9492/DataVinci_Assignment.git

cd DataVinci_Assignment

Step 2: Install Dependencies

npm install

Step 3: Start the App

npm run dev


The app will be accessible at http://localhost:5000

Testing & Verification

Responsive Behavior

View in standard desktop browser — look for multi-column layout and full nav.

Resize viewport to mobile — check for responsive single-column layout and hamburger menu toggle.

Checkbox Functionality

Select All → selects all categories and items.

Unselect All → deselects everything.

Parent Checkbox (e.g., Fruits) → toggles its children.

Child Selection (e.g., Apple, Banana) → parent reflects checked, unchecked, or indeterminate accurately.

Future Enhancements

Add unit tests using Jest and React Testing Library for checkbox logic.

Improve animations for smoother visual feedback (e.g., transition on menu toggle).

Refactor using TypeScript for enhanced type safety and scalability.

Integrate CSS-in-JS or design systems for better theming and component reuse.

About the Author

Ibrahim Shaik

Frontend Developer (React & Vite)

Passionate about responsive design, UI/UX, and clean, maintainable code.

Feel free to connect or reach out for collaboration!
