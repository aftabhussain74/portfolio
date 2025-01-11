import React from 'react';

const EducationTile: React.FC = () => {
    return (
        <div
            id="education"
            className="col-span-2 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
        >
            <div className="text-[var(--text)]">Education</div>
        </div>
    );
};

export default EducationTile;