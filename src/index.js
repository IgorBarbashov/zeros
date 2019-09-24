// module.exports = function zeros(expression) {
function zeros(expression) {
  
  const multuplies = expression.split('*');

  multuplies.map(el => {
    const oper = el.slice(-2);
    if (oper === '!!') {
      const base = +el.slice(0, -2);
      return base % 2 === 0
        ? howMuchTwo(base) : howMuchTwo(base);
    }
    return 
  });
  


}
