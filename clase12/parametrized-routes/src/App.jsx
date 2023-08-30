import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import styles from "./App.module.scss"

function App() {
return (
    <div className={styles["root"]}>
      <Header />
      <Outlet />
      <Footer />
    </div>
)}
export default App