"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const DEFAULT_PASSWORD = "qiongran2026";
const DEFAULT_STORAGE_KEY = "case_studies_unlocked";

export default function CaseStudyGate({
  children,
  password = DEFAULT_PASSWORD,
  storageKey = DEFAULT_STORAGE_KEY,
  title = "This case study is protected",
  description = "Enter the password to continue",
}: {
  children: ReactNode;
  password?: string;
  storageKey?: string;
  title?: string;
  description?: string;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "1") {
      setUnlocked(true);
    }
    setChecking(false);
  }, [storageKey]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (input === password) {
      localStorage.setItem(storageKey, "1");
      setUnlocked(true);
      return;
    }

    setError(true);
    setInput("");
    window.setTimeout(() => setError(false), 1200);
  }

  if (checking) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf9f7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        style={{ textAlign: "center" }}
      >
        <div style={{ fontSize: 36, marginBottom: 20 }}>🔒</div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>
          {title}
        </h2>
        <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 32 }}>
          {description}
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
        >
          <motion.input
            animate={error ? { x: [-8, 8, -6, 6, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
            type="password"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: 220,
              padding: "10px 16px",
              borderRadius: 10,
              border: `1.5px solid ${error ? "#ef4444" : "rgba(0,0,0,0.12)"}`,
              fontSize: 16,
              textAlign: "center",
              outline: "none",
              background: "white",
              color: "#111827",
              letterSpacing: "0.2em",
              transition: "border-color 0.2s",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 28px",
              borderRadius: 10,
              background: "#111827",
              color: "white",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: 220,
            }}
          >
            Unlock
          </button>
          {error && <p style={{ fontSize: 13, color: "#ef4444", margin: 0 }}>Incorrect password</p>}
        </form>
      </motion.div>
    </div>
  );
}
