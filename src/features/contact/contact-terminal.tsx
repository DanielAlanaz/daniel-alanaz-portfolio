"use client";
import { useState } from "react";
import { ArrowUpRight, CornerDownLeft, Copy, Check } from "lucide-react";
import { executeCommand, type TerminalResult } from "./commands";
import { profile } from "@/content/profile";
export function ContactTerminal() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [history, setHistory] = useState<
    { command: string; result: TerminalResult }[]
  >([]);
  function run(command: string) {
    const result = executeCommand(command);
    setHistory((old) =>
      result.clear ? [] : [...old.slice(-5), { command, result }],
    );
    setInput("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="contact-terminal">
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>daniel@portfolio: ~</span>
        <span className="terminal-shell">CONTACT.SH</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-muted">
          # Good things start with a conversation.
        </p>
        <p>
          <span className="terminal-prompt">❯</span> connect --with daniel
        </p>
        <div className="terminal-contact">
          <a href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={18} />
          </a>
          <button onClick={copy} aria-label="Copy email address">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        <div className="terminal-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={profile.cv} target="_blank" rel="noreferrer">
            Read my CV <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="copy-status" role="status">
          {copied
            ? "Email copied."
            : copyError
              ? "Select the email address above to copy it."
              : ""}
        </p>
        <div className="terminal-history" role="log" aria-live="polite">
          {history.map((entry, index) => (
            <div key={index}>
              <p>
                <span className="terminal-prompt">❯</span> {entry.command}
              </p>
              <p className="terminal-output">
                {entry.result.text}
                {entry.result.href && (
                  <>
                    {" "}
                    <a
                      href={entry.result.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.result.label} ↗
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <form
          className="terminal-input"
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
          }}
        >
          <label htmlFor="terminal-command">
            <span className="terminal-prompt">❯</span>
            <span className="sr-only">Terminal command</span>
          </label>
          <input
            id="terminal-command"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={120}
            placeholder="Type ‘help’ to explore..."
          />
          <button aria-label="Run command" type="submit">
            <CornerDownLeft size={17} />
          </button>
        </form>
      </div>
      <div className="terminal-status">
        <span>BEIRUT, LEBANON</span>
        <span>LET’S BUILD SOMETHING MEANINGFUL</span>
      </div>
    </div>
  );
}
