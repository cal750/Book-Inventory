module.exports = {
    get_bookmoji: () => {
      const randomNum = Math.random();
    // could substitute in font awesome book icons
      let book = "📗";
  
      if (randomNum > 0.7) {
        book = "📘";
      } else if (randomNum > 0.4) {
        book = "📙";
      }
  
      return `<span for="img" aria-label="book">${book}</span>`;
    },
};
  