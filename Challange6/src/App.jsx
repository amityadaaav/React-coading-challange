import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")

  const valueScore = () => {
    let score = 0
    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    return score
  }

  const score = valueScore()

  // map score to label, color, and percentage width
  const getStrength = (score) => {
    switch (score) {
      case 1:
        return { label: "Weak", color: "red", width: "25%" }
      case 2:
        return { label: "Moderate", color: "orange", width: "50%" }
      case 3:
        return { label: "Strong", color: "blue", width: "75%" }
      case 4:
        return { label: "Very Strong", color: "green", width: "100%" }
      default:
        return { label: "", color: "gray", width: "0%" }
    }
  }

  const { label, color, width } = getStrength(score)

  return (
    <>
      <h1>Live Password Checker</h1>

      <input
        type="password"
        placeholder="Enter strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          width: "250px",
          marginTop: "10px",
        }}
      />

      {/* Progress bar container */}
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#e5e7eb",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: width,
            height: "100%",
            backgroundColor: color,
            borderRadius: "5px",
            transition: "width 0.5s ease",
          }}
        />
      </div>

      {/* Label */}
      {label && <p style={{ marginTop: "8px", fontWeight: "bold" }}>{label}</p>}
    </>
  )
}

export default App
