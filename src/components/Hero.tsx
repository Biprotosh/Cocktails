import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" });
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            y: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(".right-leaf", {
            x: 100,
            duration: 1.8,
            ease: "expo.inOut",
        });

        gsap.from(".left-leaf", {
            x: -100,
            duration: 1.8,
            ease: "expo.inOut",
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            y: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1, // after the animation of title it will take 1 sec to render the paragraphs
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
            .to(".right-leaf", { y: 200 }, 0)
            .to(".left-leaf", { y: -200 }, 0);
    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <img
                    src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className="left-leaf"
                />
                <img
                    src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle ">
                                Every cocktail on our menuis a blend of premium
                                ingredients, creative flair, and timeless
                                recipes - designed to delight your sences.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
