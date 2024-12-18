const Contact = () => {
    return (
        <section id="contact" className="w-screen h-screen text-black bg-cvBackground p-12">
            <h2 className="section-title text-3xl font-bold">{"{"}Contact{"}"}</h2>
            <form className="grid gap-4">
                <input className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500" type="text"
                       placeholder="Your Name"/>
                <input className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500" type="email"
                       placeholder="Your Email"/>
                <textarea className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Your Message"></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
            </form>
        </section>
    );
};

export default Contact;
