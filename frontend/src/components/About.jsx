const About = () => {
    return (
        <section id="about" className="w-screen flex items-center justify-center h-screen py-12 px-6 pl-8 bg-cvBackground">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="section-title text-4xl font-bold text-cvAccent mb-4">{"{"}About Me{"}"}</h2>
                <p className="regular-text text-lg text-black leading-relaxed">
                    I’m a passionate full stack developer with a strong foundation in building efficient backend systems
                    and sleek user interfaces.
                    I love problem-solving and constantly strive to improve my skills by working on diverse projects.
                </p>
            </div>
        </section>
    );
};

export default About;
