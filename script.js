//your JS code here. If required.
let student={name: "deepak"}
student.prototype.getKeys()=function getKeys(){
	let arr=[];
	for(let key in this){
		arr.push(key);
	}
	return arr;
}
