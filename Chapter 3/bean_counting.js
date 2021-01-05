let counterB = 0;
let counterCh = 0;

const countBs = (str) => {
    for (let index = 0; index < str.length; index++) {
        if (str[index] == 'B'){ counterB++ }; 
    }
    return counterB;
};

const countChar = (str, cha) => {
	for(let index = 0; index < str.length; index++) {
		if (str[index] == cha){ counterCh++ }
	}
	return counterCh;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));