# Anime Social Network

## About the Project  
Anime Social Network is a platform designed specifically for anime enthusiasts. It provides a unique user experience with personalized features, seamless navigation, and a clean interface powered by **React** and **Redux Toolkit**.

## Key Features  
### 1. **Themes**  
- Switch between **light** and **dark** themes effortlessly.  
- Theme switching is implemented using **React Context**.

### 2. **Multi-Language Support**  
- Easily switch between **English** and **Russian** in the app settings.  
- Translations are stored in a separate file and managed manually.  
- Language switching is implemented using **Context API** and a custom **Provider**.

### 3. **Profile Management**  
- Create and customize your personal profile.  
- Publish and delete posts.  
- Like posts, comment on them, and reply to comments.  

### 4. **Messages**  
- Send and receive messages.  
- Start a conversation by searching for friends in your list.  
- Delete messages to keep chats organized.

### 5. **Feeds**  
- Browse a feed of the most popular news.  
- Filter content by your interests with a functional filter system.

### 6. **Anime Search (In Progress)**  
- Search for anime titles in a dedicated search bar.  
- Select an anime to view more details (watching feature under development).

### 7. **Settings**  
Settings include:  
- **Account Settings**: Edit personal details like name, age, and city.  
- **Privacy Settings**: Manage privacy preferences.  
- **Language**: Switch between available languages.  
- **Terms and Conditions**: View all terms in an accordion layout with clickable descriptions.  
- **Help**: Contact developers by submitting a form.  
- **Log Out**: Currently under development.

### 8. **Friends**  
- View your friends list and start conversations directly from the Friends page.  
- Recent active friends are displayed in a circle list for quick access.

### 9. **Sidebar Navigation**  
The sidebar includes the following sections:  
- **Profile**  
- **Messages**  
- **Feeds**  
- **Anime**  
- **Settings**  
- **Friends**  

Each section dynamically renders content based on the **URL** using **React Router**.

## Technologies Used  
The application is built with modern tools and libraries:  
- **React**  
- **Redux Toolkit**  
- **React Router DOM**  
- **React Autosuggest**  
- **React Select**  
- **Clsx**  
- **Web Vitals**

## Architecture  
The application is designed with a modular and clean architecture to ensure maintainability and scalability:

### State Management  
- Utilizes **Redux Toolkit** for concise, readable, and maintainable reducers and actions.  
- Each page (e.g., Profile, Messages) has its own reducer. Detailed action logic is stored in helper files to keep reducers clean and simple.  

### Routing  
- Dynamic rendering of pages based on **URL** using **React Router**.  

### Context API  
- Used for managing **themes** and **language settings**.  

### Component Structure  
- The application follows a **component-based structure**, making it easy to scale and update.  

## Tools for Development  
### Flowchart Mapping  
- A graphical flowchart is used during development to map out the structure and flow of the application, aiding in efficient planning and implementation.  

### Package Versions  
```json
"@reduxjs/toolkit": "^2.3.0",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"clsx": "^2.1.1",
"react": "^18.3.1",
"react-autosuggest": "^10.1.0",
"react-dom": "^18.3.1",
"react-redux": "^9.1.2",
"react-router-dom": "^6.26.1",
"react-scripts": "5.0.1",
"react-select": "^5.8.3",
"web-vitals": "^2.1.4"

