const fetchAlphaVantage = async () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f7cb400af0msh390df3d5b5af3a0p1ddaaejsna3a324577282',
			'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
		}
	};

	const response = await fetch('https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_WEEKLY&symbol=SPY&datatype=json', options).then(data => data.json())
	console.log(response);
	let timeSeries = [(response["Weekly Time Series"]['2002-11-01']['1. open']), (response["Weekly Time Series"]['2002-11-01']['4. close']), (response["Weekly Time Series"]['2002-11-08']['4. close']), (response["Weekly Time Series"]['2002-11-15']['4. close']), (response["Weekly Time Series"]['2002-11-22']['4. close']), (response["Weekly Time Series"]['2002-11-29']['4. close']), (response["Weekly Time Series"]['2002-12-06']['4. close']), (response["Weekly Time Series"]['2002-12-13']['4. close']), (response["Weekly Time Series"]['2002-12-20']['4. close']), (response["Weekly Time Series"]['2002-12-27']['4. close']), (response["Weekly Time Series"]['2003-01-03']['4. close']), (response["Weekly Time Series"]['2003-01-10']['4. close']), (response["Weekly Time Series"]['2003-01-17']['4. close'])];
	
	// let timeSeries = [(response["Weekly Time Series"]['2022-07-08']['1. open']), (response["Weekly Time Series"]['2022-07-08']['4. close']), (response["Weekly Time Series"]['2022-07-15']['4. close']), (response["Weekly Time Series"]['2022-07-22']['4. close']), (response["Weekly Time Series"]['2022-07-29']['4. close']), (response["Weekly Time Series"]['2022-08-05']['4. close']), (response["Weekly Time Series"]['2022-08-12']['4. close']), (response["Weekly Time Series"]['2022-08-19']['4. close']), (response["Weekly Time Series"]['2022-08-26']['4. close']), (response["Weekly Time Series"]['2022-09-02']['4. close']), (response["Weekly Time Series"]['2022-09-09']['4. close']), (response["Weekly Time Series"]['2022-09-16']['4. close']), (response["Weekly Time Series"]['2022-09-23']['4. close'])];
	console.log(timeSeries)	
	let highestValue = parseInt(timeSeries[5]);
	let lowestValue = parseInt(timeSeries[9]);
	let box = document.getElementById("logo");
		
		function map(value, low1, high1, low2, high2) {
			return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
		}

		for (let i = 0; i < 12; i++){
			let height = Math.abs(timeSeries[i+1] - timeSeries[i]) + lowestValue;
			let top = Math.min(highestValue - timeSeries[i+1], highestValue - timeSeries[i]) + lowestValue;

			console.log(top);

			let trueHeight = map(height, lowestValue, highestValue, 0, 20);
			let trueTop = map(top, lowestValue, highestValue, 0, 20);


			let currentBrick = document.createElement(`brick${i}`);

			currentBrick.style.position = "fixed";
			currentBrick.style.backgroundColor = "#121c40";
			currentBrick.style.left = (1.6 * i) + (0.065 * i) + "vw";
			currentBrick.style.top = trueTop + "vw";
			currentBrick.style.height = trueHeight + "vw";
			currentBrick.style.width = 1.6 + "vw";
			
			box.appendChild(currentBrick);
		}
		
}

fetchAlphaVantage();