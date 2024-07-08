/*
 * Every codeblock has "pre > code" structure, some highlighted codeblocks have
 * "div.highlight > pre.chroma > code" structure. So, use the simple CSS selector
 * to query all codeblocks.
 */
document.addEventListener("DOMContentLoaded",
  () => {
    var codeblocks = document.querySelectorAll(".single .content pre code");

    console.log("codeblocks length:", codeblocks.length);

    codeblocks.forEach(
      (codeblock) => {
        let elementPre = codeblock.parentElement;

        let button = document.createElement("div");
        button.classList.add("copyCodeButton");
        button.innerHTML = "copy";
        button.addEventListener("click",
          () => {
            navigator.clipboard.writeText(codeblock.textContent);

            button.innerHTML = "copied!";
            setTimeout(
              () => { button.innerHTML = "copy"; },
              1000
            );
          }
        );

        elementPre.appendChild(button);
      }
    );
  }
);

