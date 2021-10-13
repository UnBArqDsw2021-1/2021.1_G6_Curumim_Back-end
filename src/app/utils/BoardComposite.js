class BoardComposite {
  #projects;
  #anotations;

  constructor(projects, anotations){
      this.#projects = projects;
      this.#anotations = anotations;
  }

  mountBoard(){

    var board = [];

    var i = 0;
    var j = 0;

    while (i < this.#projects.length && j < this.#anotations.length && (i + j) < 10) {
      if (this.#projects[i].date >= this.#anotations[j].createdAt) board.push(this.#projects[i++])
      else {
        board.push(this.#anotations[j++]);
      }
    } 

    while (i < this.#projects.length && (i + j) < 10)  board.push(this.#projects[i++]);
    while (j < this.#anotations.length && (i + j) < 10)  board.push(this.#anotations[j++]); 

      return {
        board
      }
  }

}

export default BoardComposite;