"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="button button--primary"
      onClick={() => window.print()}
    >
      Download as PDF <span aria-hidden="true">↓</span>
    </button>
  );
}
