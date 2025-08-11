"use client";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-panel rounded-lg shadow-lg p-4 w-full max-w-md">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-accent text-sm font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 text-xs">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
