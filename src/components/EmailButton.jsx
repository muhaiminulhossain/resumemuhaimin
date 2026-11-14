import { useEffect, useRef, useState } from "react";
import { profile } from "../data/resume";

// mailto: links silently do nothing when the visitor has no default mail app
// (common with webmail users), so clicking also copies the address and
// confirms it on screen. The mailto still opens a mail app where one exists.
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}

export default function EmailButton({ className = "btn btn-ghost", children = "Email" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    if (await copyText(profile.email)) {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <a
      className={className}
      href={`mailto:${profile.email}`}
      onClick={onClick}
      title={`Email ${profile.email} (also copies the address)`}
    >
      <span aria-live="polite">{copied ? "Email copied ✓" : children}</span>
    </a>
  );
}
