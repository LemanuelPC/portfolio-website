const Projects = () => {
    return (
        <section id="projects" className="w-screen h-screen text-black bg-cvBackground p-12">
            <h2 className="section-title text-3xl font-bold">{"{"}Projects{"}"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded bg-white shadow-sm">
                    <h3 className="section-subtitle text-xl">BattleShipRoyale</h3>
                    <p className="regular-text">A Java-based implementation of the classic Battleship game.</p>
                    <a href="#" className="text-blue-500 underline">View on GitHub</a>
                </div>
                <div className="p-4 border rounded bg-white shadow-sm">
                    <h3 className="section-subtitle text-xl">Folder-Synchronization-Tool</h3>
                    <p className="regular-text">A tool for syncing files across directories.</p>
                    <a href="#" className="text-blue-500 underline">View on GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
