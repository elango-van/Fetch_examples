fetch("https://open-weather13.p.rapidapi.com/city/landon", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "invalid-key",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com"
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network error');
  }
  return response.json();
})
.then(data => {
  // Do something with the data
})
.catch(error => {
  if (error instanceof TypeError && error.message.includes('API key')) {
    console.error('Invalid API key:', error);
  } else {
    console.error('There was a problem with the Fetch operation:', error);
  }
});

//********************************
//Network Error
fetch('http://example.com/api/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    console.error('There was a problem with the Fetch operation:', error);
  });

//********************************
//CORS error
fetch('http://example.com/api/data.json', {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    console.error('There was a problem with the Fetch operation:', error);
  });

//********************************
//Server errors

fetch('http://example.com/api/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Server returned ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    console.error('There was a problem with the Fetch operation:', error);
  });

//********************************
fetch(`YOUR-API`)
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});

//********************************
fetch(`YOUR-API`, {
	method: 'METHOD-NAME',
	body: JSON.stringify({
		payLoadkey: `value`
	})
})
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});

//********************************
// Fetch GET request with error handling
const element = document.querySelector('#get-request .result');
fetch('https://reqres.in/invalid-url')
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        element.innerHTML = JSON.stringify(data, null, 4);
    })
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
