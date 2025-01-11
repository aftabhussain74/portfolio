import React from "react";

const ProjectsTile: React.FC = () =>  {
    return (
        <div
            id="projects"
            className="col-span-3 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
        >
            <div className="text-[var(--text)]">Projects</div>
        </div>
    );
}

export default ProjectsTile;