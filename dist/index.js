import { concatenation } from "./concatenation.js";
const btn = document.querySelector("button");
const input = document.querySelector("input");
if (btn && input) {
    btn.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map