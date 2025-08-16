import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import type { TNavLink } from "../types";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
                // bottom of the navbar touches the top of the viewport, that time we start the animation
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparant'},{
            backgroundColor: '#00000050',
            backgroundFilter: 'blue(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    }, []);

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {
                        // if we use {} we have to write return keyword but as we are using () it will return autometically
                    }
                {navLinks.map((navLink: TNavLink) => (
                        <li key={navLink.id}>
                            <a href={`#${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
