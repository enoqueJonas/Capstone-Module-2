class Pokemon {
  constructor(id, name, image, type, likes = 121) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
    this.likes = likes;
  }

    getLikeSentence=() => {
      let res = '';
      if (this.likes <= 1) {
        res = '1 like';
      } else {
        res = `${this.likes} likes`;
      }
      return res;
    }
}
export default Pokemon;