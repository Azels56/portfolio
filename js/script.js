/* Tailwind Config */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["-apple-system", "sans-serif", "Poppins", "Segoe UI"]
            },
            boxShadow: {
                glow: "0 0 15px rgba(59,130,246,0.7)",
                glowGray: "0 0 12px rgba(156,163,175,0.5)",
            },
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) return; // safety if IDs missing

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});



/* Default Theme */
function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}

/* Glossy scroll animation  */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
        nav.classList.add(
            'backdrop-blur-md',
            'bg-white/40',
            'dark:bg-gray-800/40',
            'shadow-lg'
        );
    } else {
        nav.classList.remove(
            'backdrop-blur-md',
            'bg-white/40',
            'dark:bg-gray-800/40',
            'shadow-lg'
        );
    }
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-readmore]').forEach(card => {
        const p = card.querySelector('.clamp-text');
        const btn = card.querySelector('.readmore-btn');
        if (!p || !btn) return;

        const clone = p.cloneNode(true);
        clone.style.visibility = 'hidden';
        clone.style.position = 'absolute';
        clone.style.height = 'auto';
        clone.style.maxHeight = 'none';
        clone.style.width = p.offsetWidth + 'px';
        clone.classList.remove('line-clamp-3');
        document.body.appendChild(clone);
        const fullHeight = clone.scrollHeight;
        document.body.removeChild(clone);

        p.classList.add('line-clamp-3');
        const clampedHeight = p.clientHeight;

        if (fullHeight <= clampedHeight) {
            btn.style.display = 'none';
            p.classList.remove('line-clamp-3');
            return;
        }

        p.classList.add('line-clamp-3');
        btn.textContent = 'Read More';

        btn.addEventListener('click', () => {
            const isNowClamped = p.classList.toggle('line-clamp-3');
            btn.textContent = isNowClamped ? 'Read More' : 'Show Less';
        });
    });
});