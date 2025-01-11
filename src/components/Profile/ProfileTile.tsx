const ProfileTile: React.FC = () => {
    return (
        <div
            id="profile"
            className="col-span-3 p-6 h-72 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
        >
            <div className="text-[var(--text)]">Profile</div>
        </div>
    );
}

export default ProfileTile;