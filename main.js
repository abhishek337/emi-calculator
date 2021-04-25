function calculate(){
	
	const amount = document.querySelector("#amt").value;
	
	const interest = document.querySelector("#int").value;
	
	const month = document.querySelector("#time").value;
	
	const intrest = (amount * (interest * 0.01)) / month;
	
	const total = ((amount / month) + intrest).toFixed(2);
	
	const emi = (total * month);
	
	const total_int = (emi - amount).toFixed(2);
	
	
	document.querySelector("#total").innerHTML = "EMI (Rs.) : " + total;
	
	
	document.querySelector("#totalInt").innerHTML = "Total Intrest Paid : " + total_int;
}
