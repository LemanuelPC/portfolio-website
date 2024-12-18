const Skills = () => {
    return (
        <section id="skills" className="w-screen h-screen text-black bg-cvBackground p-12">
            <h2 className="section-title text-3xl font-bold">{"{"}Skills{"}"}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div>
                    <span className="section-subtitle">Languages:</span>
                    <span className="regular-text ml-2">JavaScript, Python, Java</span>
                </div>
                <div>
                    <span className="section-subtitle">Frameworks:</span>
                    <span className="regular-text ml-2">React, Node.js</span>
                </div>
                <div>
                    <span className="section-subtitle">Tools:</span>
                    <span className="regular-text ml-2">Git, Docker</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
