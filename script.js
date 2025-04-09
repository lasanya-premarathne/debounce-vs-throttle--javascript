// 🛠 Debounce Function
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`[DEBOUNCED] Function ran after ${delay}ms: "${args[0].target.value}"`);
            fn.apply(this, args);
        }, delay);
    };
}


// 🛠 Throttle Function
function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            console.log(`[THROTTLED] Function ran (every ${limit}ms max): "${args[0].target.scrollTop}"`);
            fn.apply(this, args);
        }
    };
}


// ===============================
// Debounce Example (Search Input)
// ===============================
const searchInput = document.getElementById('search');
const debouncedResult = document.getElementById('debounced-result');
const immediateResult = document.getElementById('immediate-result');

const handleSearch = debounce((e) => {
    debouncedResult.textContent = `Debounced: "${e.target.value}"`;
}, 500);

// Without Debounce
searchInput.addEventListener('input', (e) => {
    immediateResult.textContent = `Immediate: "${e.target.value}"`;
    console.log(`[IMMEDIATE] Typed: ${e.target.value}`);
});

// With Debounce
searchInput.addEventListener('input', handleSearch);


// ===============================
// Throttle Example (Scroll Box)
// ===============================
const scrollBox = document.getElementById('scroll-box');
const throttledOutput = document.getElementById('scroll-output');
const rawScrollOutput = document.getElementById('raw-scroll-output');

scrollBox.innerHTML += Array(50).fill("<p>Scroll content...</p>").join('');

// Without Throttle
scrollBox.addEventListener('scroll', () => {
    rawScrollOutput.textContent = `Raw Scroll: ${scrollBox.scrollTop}px`;
    console.log(`[RAW SCROLL] Scroll top: ${scrollBox.scrollTop}`);
});

// With Throttle
const handleScroll = throttle(() => {
    throttledOutput.textContent = `Throttled Scroll: ${scrollBox.scrollTop}px`;
}, 500);

scrollBox.addEventListener('scroll', handleScroll);
