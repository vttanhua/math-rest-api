	var API__BASE_URL="http://localhost:4040/api/v1/math";

  function isPrimeClick(source,value){
    console.log(source.id+" value: "+value);
    try{
      isNumberArray([value]);
      fetchIsPrime(value,onMathAPIResponse);
    }
    catch(e){ 
      alert(e);
    }
      return false;
  }

  function isPrimeAndSumClick(source,value){
    console.log(source.id+" value: "+value);
    try{
      var valuesArray = value.replace(/\n/g,",").split(",");
      isNumberArray(valuesArray);
      fetchSumAndIsPrime(valuesArray,onMathAPIResponse);
    }
    catch(e){ 
      alert(e);
    }
      return false;
  }

  function onMathAPIResponse(responseData){
    console.log(responseData);
    var table = document.getElementById("resultsTable");
      var row = table.insertRow(1);
      var cellOriginalValue = row.insertCell(0);
      var cellSum = row.insertCell(1);
      var cellIsPrime = row.insertCell(2);
      var cellError = row.insertCell(3);
      cellOriginalValue.innerHTML = responseData.originalValue;
      cellSum.innerHTML = responseData.sum ? responseData.sum:responseData.originalValue;
      cellIsPrime.innerHTML = responseData.isPrime;
      cellError.innerHTML = responseData.error ? responseData.error:"";
  }  

  function isNumberArray(valuesArray){
    for(var i = 0; i < valuesArray.length; i++){
      if(typeof valuesArray[i] === "undefined" || valuesArray[i] == '' || isNaN(valuesArray[i])){
        throw "Provided value '"+valuesArray[i]+"'' is not a number!";
      } 
    }
    return true; 
  }

	function fetchIsPrime(value, onResponse){
		fetch(API__BASE_URL+'/isPrime/'+value)
      		.then(response => {
      				return response.json();
      		})
      		.then(data => 
      			{
      				if (data.message) {
    					console.error(data.message,data.stack);
    					onResponse({isPrime:false, error:data.message,originalValue:value});
  					} else {
      					console.log(data.isPrime+" is response for query: "+value);
      					onResponse(responseData = {isPrime:data.isPrime,originalValue:value});
      			}
      			})
      		.catch(function() {
        		console.log("Unknown error");
        		onResponse({error:"Unknown error",originalValue:value});
    		});
	}

	function fetchSumAndIsPrime(values,onResponse){
		var valuesString = '{"values":'+JSON.stringify(values)+"}";
		fetch(API__BASE_URL+'/calculateSum',
			 	{ method: 'post', body: valuesString, headers: {'Content-Type': 'application/json' }})
      		.then(response => {
      				return response.json();
      		})
      		.then(data => 
      			{
      				if (data.message) {
    					console.error(data.message,data.stack);
    					onResponse({isPrime:false, error:data.message,originalValue:values});
  					} else {
      					console.log(data.isPrime+" is response for query: "+values);
      					onResponse(responseData = {isPrime:data.isPrime,originalValue:values,sum:data.sum});
      			}
      			})
      		.catch(function() {
        		console.log("error");
        		onResponse({error:"Unknown error",originalValue:values});
    		});
	}