module.exports = function check(str, bracketsConfig) {
	let stack = [];
	  for (let i = 0; i<str.length; i++){
	  for (let y = 0; y < bracketsConfig.length; y++) {
		if (str[i] === bracketsConfig[y][0] && str[i] === bracketsConfig[y][1] ) {
		stack[stack.length-1] !== y ? stack.push(y) :  stack.pop()
		}
			  else if (str[i] === bracketsConfig[y][0]){
				  stack.push(y)
			  } else if (str[i] === bracketsConfig[y][1]){
				if (stack[stack.length-1] === y) {
				  stack.pop()
				} else return false
			  } 
	  }
	  }
	return stack.length === 0 ? true : false;
  }

