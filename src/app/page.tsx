
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/animation.css";


export default function Home() {

    return (
        <>
            <div
                className="min-h-screen bg-[var(--background)] flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16 bg-gradient-to-r from-[var(--crust)] via-[var(--mantle)] to-[var(--base)] flex justify-end items-center p-4">
                    {/* Toggle Button */}
                    <ThemeToggle/>
                </div>
                {/* Wrapper */}
                <div className="flex-1 bg-gradient-to-r from-[var(--crust)] via-[var(--mantle)] to-[var(--base)] shadow-lg border border-[var(--surface2)] p-12 px-16">
                    {/* Grid */}
                    <div className="grid grid-cols-5 gap-6 h-full">
                        {/* Grid Items */}
                        <div
                            id="education"
                            className="col-span-2 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
                        >
                            <div className="text-[var(--text)]">Education</div>
                        </div>
                        {/* Merged Projects Div (takes space of 3 projects divs) */}
                        <div
                            id="projects"
                            className="col-span-3 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
                        >
                            <div className="text-[var(--text)]">Projects</div>
                        </div>

                        <div
                            id="experience"
                            className="p-6 h-72 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover">
                            <div className="text-[var(--text)]">Experience</div>
                        </div>
                        {/* Merged Profile Div (takes space of 3 profile divs) */}
                        <div
                            id="profile"
                            className="col-span-3 p-6 h-72 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
                        >
                            <div className="text-[var(--text)]">Profile</div>
                        </div>
                        <div
                            id="skills"
                            className="p-6 h-72 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover">
                            <div className="text-[var(--text)]">Skills</div>
                        </div>
                        {/* Merged Achievements Div (takes space of 3 achievements divs) */}
                        <div
                            id="achievements"
                            className="col-span-3 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
                        >
                            <div className="text-[var(--text)]">Achievements</div>
                        </div>
                        {/* Merged Contact Div (takes space of 2 contact divs) */}
                        <div
                            id="contact"
                            className="col-span-2 p-6 h-56 bg-[var(--surface1)] rounded-lg shadow-md border border-[var(--surface0)] hover:shadow-lg transition-shadow smooth-hover"
                        >
                            <div className="text-[var(--text)]">Contact</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
