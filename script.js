const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
	const encodedStr = encoder.encode(str);
	return encodedStr.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
