!function(){var t,n={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyElement:document.body};n.startBtn.addEventListener("click",(function(){n.startBtn.disabled=!0,n.stopBtn.disabled=!1,t=setInterval((function(){n.bodyElement.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1,n.stopBtn.disabled=!0})),n.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.3dd942e0.js.map
