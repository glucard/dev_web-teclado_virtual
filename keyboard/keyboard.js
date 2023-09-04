var caixa = document.querySelector(".uso-keyboard-input");

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },
    eventHandlers: {
        oninput: null,
        onclose: null,
    },
    content: {
        value: "bola",
        capsLock: false,
    },
    init() {
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());


        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        caixa.innerHTML = this.content.value;

    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "backspace",
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p",
            "caps",
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "enter",
            "done",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            ",",
            ".",
            "?",
            "space",
        ];

        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach((key) => {
            const keyElement = document.createElement("button");
            keyElement.textContent = key;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch(key){
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML(key);

                    keyElement.addEventListener("click", () => {
                        console.log(this.content.value);
                        this.content.value = this.content.value.substring(
                            0,
                            this.content.value.length - 1
                        );

                        caixa.innerHTML = this.content.value;

                    });
            }

            fragment.appendChild(keyElement);

            if (key == "backspace" || key=="p" || key == "enter" || key == "?") {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {},

    _toggleCapsLock() {},

    open(initialValue, oninput, onclose) {
        this.content.value = initialValue || "";
    },

    close() {},
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
})