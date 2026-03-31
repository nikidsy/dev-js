import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb";
import Modal from "./components/Modal";
import DatePicker from "./components/DatePicker";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "30px", color: "white", background: "#050509", minHeight: "100vh" }}>
      <h1>Styled Components</h1>
      <Breadcrumb/>
      <br/>
      <button onClick={() => setOpen(true)}
        style={{
          padding: "10px 16px",
          background:"linear-gradient(135deg, #7c3aed, #4f46e5)",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer",
        }}>
        Abrir
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}/>
      <br/><br/>
      <DatePicker/>
    </div>
  );
}