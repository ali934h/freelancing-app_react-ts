import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import { BeatLoader } from "react-spinners";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
type Props = {};
function ProjectTable({}: Props) {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) <BeatLoader color="#67f1f6" />;
  if (!projects?.length) return <span>empty</span>;
  return (
    <Table>
      <Table.Header>
        <th>Number</th>
        <th>Title</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th>Status</th>
        <th>Action</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => {
          return (
            <ProjectRow key={project._id} project={project} index={index} />
          );
        })}
      </Table.Body>
    </Table>
  );
}
export default ProjectTable;
