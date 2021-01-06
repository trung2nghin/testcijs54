const $template = document.getElementById("quizz");

class Qizz extends HTMLElement {
  correct = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$question = this.shadowRoot.getElementById("question");
    this.$checkbox = this.shadowRoot.getElementById("checkbox");
    this.$content = this.shadowRoot.getElementById("content");
  }

  static get observedAttributes() {
    return ["question", "correct"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "correct") {
      this.correct = newValue;
    }
    this.read();
  }
  read() {
    this.$content.innerHTML = this.correct;
  }
}
window.customElements.define("quizz-template", Qizz);
