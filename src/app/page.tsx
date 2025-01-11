import "@/styles/animation.css";
import EducationTile from "@/components/Education/EducationTile";
import ProjectsTile from "@/components/Projects/ProjectsTile";
import ExperienceTile from "@/components/Experience/ExperienceTile";
import ProfileTile from "@/components/Profile/ProfileTile";
import SkillsTile from "@/components/Skills/SkillsTile";
import AchievementsTile from "@/components/Achievenments/AchievementsTile";
import ContactTile from "@/components/Contact/ContactTile";


export default function Home() {


    return (
        <>
            {/* Grid */}
            <div className="grid grid-cols-5 gap-6 h-full">
                {/* Grid Items */}

                {/* Education Tile */}
                <EducationTile />

                {/* Projects Tile */}
                <ProjectsTile />

                {/* Experience Tile */}
                <ExperienceTile />

                {/* Profile Tile */}
                <ProfileTile />

                {/*Skills Tile*/}
                <SkillsTile />

                {/* Achievements Tile */}
                <AchievementsTile />

                {/* Contact Tile */}
                <ContactTile />

            </div>
        </>
    );
}
