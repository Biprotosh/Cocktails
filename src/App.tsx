import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

// These gsap plugins aren't autometcially active, and we have to do it in the app so that we can use these globally throughout the app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar/>
        </main>
    );
};

export default App;
