import gsap from "gsap";

const SHOULD_SPLIT_CHARS: boolean = true;
const CHARS: string = "*&@#%$-_:/;!?+=<>";

/**
 * Initializes scramble effects on elements containing [data-scramble] within a scoped container.
 * @param container - The scoped root element containing the target text nodes
 * @param ctx - The active GSAP Context instance to safely record cleanups
 */
export function initScramble(container: HTMLElement | null, ctx?: gsap.Context): void {
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-scramble]");

    elements.forEach((el) => {
        const originalText = el.textContent?.trim() || "";
        if (!originalText || el.dataset.softHoverReady === "1") return;

        el.dataset.softHoverReady = "1";

        if (SHOULD_SPLIT_CHARS) {
            let iv: ReturnType<typeof setInterval> | null = null;

            const handleMouseEnter = (): void => {
                let iter = 0;
                if (iv) clearInterval(iv);

                iv = setInterval(() => {
                    el.textContent = originalText
                        .split("")
                        .map((c, i) => {
                            if (c === " ") return " ";
                            return i < iter
                                ? originalText[i]
                                : CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("");

                    iter += 0.5;
                    if (iter >= originalText.length) {
                        if (iv) clearInterval(iv);
                        el.textContent = originalText;
                    }
                }, 35);
            };

            const handleMouseLeave = (): void => {
                if (iv) clearInterval(iv);
                el.textContent = originalText;
            };

            const trigger = el.closest<HTMLElement>(
                "[data-scramble-trigger]"
            );

            const target = trigger ?? el;

            target.addEventListener("mouseenter", handleMouseEnter);
            target.addEventListener("mouseleave", handleMouseLeave);

            // Secure the non-GSAP cleanup inside the hook's context tracker
            if (ctx && typeof ctx.add === "function") {
                ctx.add(() => {
                    if (iv) clearInterval(iv);

                    target.removeEventListener("mouseenter", handleMouseEnter);
                    target.removeEventListener("mouseleave", handleMouseLeave);

                    delete el.dataset.softHoverReady;
                });
            }
            return;
        }

        // Fallback GSAP branch
        const handleGsapMouseEnter = (): void => {
            gsap.to(el, { filter: "blur(1.5px)", opacity: 0.75, duration: 0.16, ease: "power2.out" });
            gsap.to(el, { filter: "blur(0px)", opacity: 1, duration: 0.32, ease: "power2.out", delay: 0.16 });
        };

        el.addEventListener("mouseenter", handleGsapMouseEnter);

        if (ctx && typeof ctx.add === "function") {
            ctx.add(() => {
                el.removeEventListener("mouseenter", handleGsapMouseEnter);

                delete el.dataset.softHoverReady;
            });
        }
    });
}