const $gameScreen = document.getElementById('gameScreen');

class Game extends HTMLElement {
    question = '';
    answer = [];
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($gameScreen.content.cloneNode(true));
        this.$name = this.shadowRoot.getElementById('name');
        this.$answer = this.shadowRoot.getElementById('answer');
        this.$question = this.shadowRoot.getElementById('question');      
    }

    static get observedAttributes(){
        return ['answer','point','question'];
    }
    attributeChangedCallback(name, oldValue, newValue){
        if(name == 'point'){
            this.point = newValue;
        }else if(name == 'answer'){
            this.answer = newValue;
        } else if(name =='question'){
            this.question = newValue;
        }
        this.read();
    }

    set answer(answer){
        this.answer = answer;
    }

    read(){
        this.$answer.innerHTML ="";
        this.$question.innerHTML = this.question;
        this.$answer.innerHTML = `
    <quizz-template correct="${this.answer[0]}"></quizz-template>
    <quizz-template correct="${this.answer[1]}"></quizz-template>
    <quizz-template correct="${this.answer[2]}"></quizz-template>
    <quizz-template correct="${this.answer[3]}"></quizz-template>
    `
    }
}
window.customElements.define('game-screen', Game);