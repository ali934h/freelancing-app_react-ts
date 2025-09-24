import React from "react";
import Modal from "react-modal";

export interface AppModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function AppModal({
  isOpen,
  onRequestClose,
  title,
  children,
}: AppModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200} // match durations below
      contentLabel={title ?? "Modal"}
      overlayClassName={{
        base: "fixed inset-0 z-50 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-200",
        afterOpen: "bg-black/40 opacity-100",
        beforeClose: "opacity-0",
      }}
      className={{
        base: [
          "relative w-full max-w-lg",
          "rounded-2xl bg-white p-6 shadow-2xl",
          "dark:bg-zinc-900",
          // start slightly translated and faded
          "translate-y-2 scale-[0.98] opacity-0",
          // animate
          "transition-[opacity,transform] duration-200 ease-out",
        ].join(" "),
        afterOpen: "translate-y-0 scale-100 opacity-100",
        beforeClose: "translate-y-1 scale-[0.99] opacity-0",
      }}
      // Prevent scroll behind modal on iOS/Safari too
      bodyOpenClassName="overflow-hidden"
      htmlOpenClassName="overflow-hidden"
    >
      <div className="flex items-start justify-between gap-4">
        {title ? (
          <h2
            id="app-modal-title"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {title}
          </h2>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onRequestClose}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-black/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10"
          aria-label="Close modal"
        >
          <span aria-hidden>×</span>
        </button>
      </div>

      <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-200">
        {children}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={onRequestClose}
          className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 active:scale-[0.99] dark:text-zinc-200 dark:hover:bg-white/10"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
