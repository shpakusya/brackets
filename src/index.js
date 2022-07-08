module.exports = function check(str, bracketsConfig) {
  let stack = [];
	for (let i = 0; i<str.length; i++){
		bracketsConfig.forEach((x,y) => {
			if (str[i] === x[0]){
				stack.push(y)
			} else if (str[i] === x[1] && stack[stack.length-1] === y){
				stack.pop()
			} else return false;
		});
	}
	return stack.length === 0 ? true : false;
}
