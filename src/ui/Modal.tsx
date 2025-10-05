import React from "react";
import { IoClose } from "react-icons/io5";
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
          "bg-base-100 rounded-2xl p-6 shadow-2xl",
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
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          {title ? <h2>{title}</h2> : <span></span>}
          <IoClose
            className="text-info fill h-6 w-6 cursor-pointer rounded-full"
            onClick={onRequestClose}
          />
        </div>
        <div className="divider my-0"></div>

        <div>{children}</div>
      </div>
    </Modal>
  );
}
