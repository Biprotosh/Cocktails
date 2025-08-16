import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// These gsap plugins aren't autometcially active, and we have to do it in the app so that we can use these globally throughout the app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-3xl text-gradient">Hello GSAP</h1>
        </div>
    );
};

export default App;
