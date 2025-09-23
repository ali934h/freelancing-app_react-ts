import React, { useRef, useState } from "react";
import Table from "../../ui/Table";
import toShortText from "../../utils/truncateText";
import toShortDate from "../../utils/toShortDate";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "react-modal";
import { AppModal } from "../../ui/Modal";

type Props = {};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function ProjectRow({ project, index }) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  return (
    <Table.Row>
      <td className="text-center">{index + 1}</td>
      <td>{toShortText(project.title, 20)}</td>
      <td>{project?.category.title}</td>
      <td>{project.budget.toLocaleString()}</td>
      <td>{toShortDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="badge badge-primary badge-soft">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || <span>-</span>}</td>
      <td>
        <div
          className={`badge ${project.status === "OPEN" ? "" : "badge-error"}`}
        >
          {project.status.toLowerCase()}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <>
            <button
              onClick={() => setIsOpenEditModal(true)}
              className="cursor-pointer"
            >
              <FaRegEdit className="text-lg" />
            </button>

            <AppModal
              isOpen={isOpenEditModal}
              onRequestClose={() => setIsOpenEditModal(false)}
              title={`Edit ${project.title}`}
            >
              this is modal
            </AppModal>
          </>
          <>
            <button
              onClick={() => setIsOpenDeleteModal(true)}
              className="cursor-pointer"
            >
              <FaRegTrashAlt className="text-error text-lg" />
            </button>

            <AppModal
              isOpen={isOpenDeleteModal}
              onRequestClose={() => setIsOpenDeleteModal(false)}
              title={`Delete ${project.title}`}
            >
              this is modal
            </AppModal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
