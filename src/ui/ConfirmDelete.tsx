import React from "react";

type Props = {};

function ConfirmDelete({
  resourceName,
  confirmDeleteHandler,
  cancelDeleteHandler,
}) {
  return (
    <div className="flex flex-col gap-y-10">
      <div>are you sure to delete {resourceName} ?</div>
      <div className="flex w-full justify-between">
        <button onClick={confirmDeleteHandler} className="btn btn-sm btn-error">
          Delete
        </button>
        <button onClick={cancelDeleteHandler} className="btn btn-sm btn-info">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
