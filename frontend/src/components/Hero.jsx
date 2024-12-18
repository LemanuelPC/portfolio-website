const Hero = () => {
    return (
        <section id="hero" className="w-screen h-screen text-black flex items-center justify-center bg-cvBackground">
            <div className="text-center">
                <h1 className="title text-6xl font-bold text-cvAccent">Luis {"{"}arvalho</h1>
                <p className="subtitle text-2xl mt-4 text-cvText">Junior Full Stack Developer</p>
                <p className="regular-text mt-6 text-cvText">"Building efficient and elegant solutions for the web"</p>
            </div>
        </section>
    );
};

export default Hero;
