class SpmObject {

    constructor() {
        this.questions = new Set();
        this.names = new Set();
        this.totalQuestions = 0;
        this.remainingQuestions = 0;
    }

    addSpm(spm) {
        this.questions.add(spm);
        this.remainingQuestions++;
        this.totalQuestions++;
    }

    addName(name) {
        this.names.add(name);
    }
    
    getSpm() {
        this.remainingQuestions--;
        let question = Array.from(this.questions)[Math.floor(Math.random() * this.questions.size)];
        this.questions.delete(question);

        if(this.remainingQuestions === 0) {
            return "Game Finished!";
        }
        return question;
    }

    getNames() {
        return this.names;
    }

    getNumPlayers() {
        return this.names.size;
    }

    getNumQuestions() {
        return this.totalQuestions;
    }

    getNumRemainingQuestions() {
        return this.remainingQuestions;
    }

}


class Snusboks {

    constructor() {
        this.snus = new Map();
    }

    createRoom() {
        let roomIds = this.snus.keys();
        let max = 1;

        for(let id of roomIds) {
            if(id > max) {
                console.log(id);
                max = id;
            }
        }

        let newRoomId = max + 1;
        this.snus.set(newRoomId, new SpmObject());
        return newRoomId
    }
    
    addQuestion(id, question) {
        this.snus.get(id).addSpm(question);
    }
    
    addPlayer(id, name) {
        this.snus.get(id).addName(name);
    }

    getPlayers(id) {
        return this.snus.get(id).getNames();
    }

    getQuestion(id) {
        let playable = this.snus.get(id);
        return playable.getSpm();
    }

    getNumQuestions(id) {
        return this.snus.get(id).getNumQuestions();
    }

    getRemainingQuestions(id) {
        return this.snus.get(id).getNumRemainingQuestions();
    }

}

export default Snusboks;
