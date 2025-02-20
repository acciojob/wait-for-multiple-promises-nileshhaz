//your JS code here. If required.
const pros = [document.getElementById("pro1"), document.getElementById("pro2"), document.getElementById("pro3")];
const total = document.getElementById("total")
const proFunc = ()=> {
	return new Promise((resolve, reject) => {
		let time = Math.floor(Math.random() * 3) + 1;
			  setTimeout(()=>{
				  resolve(time)
			  }, time*1000);
			});
}
const startTime = performance.now();

const promise1 = proFunc()
const promise2 = proFunc()
const promise3 = proFunc()

Promise.all([promise1, promise2, promise3]).then((values) => {
const endTime = performance.now();
  for(let i =0; i<values.length; i++){
	  pros[i].innerText = values[i];
  }

  // const totalTime = Math.max(...values);
  const totalTime = (endTime - startTime) / 1000;
  total.innerText = totalTime.toFixed(3);
});