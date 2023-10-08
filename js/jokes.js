const btnEl = document.getElementById('btn');
const jokeEL = document.getElementById('joke');
const apiKey = '+wIy9FeXgA0KM0XtZ1sxEQ==e7ju3Q3Q65ZJ9I3j';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {

    try {
        jokeEL.innerText = 'Updating...';
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';

        jokeEL.innerText = data[0].joke;

    } catch (error) {
        jokeEL.innerText = 'An error happened, try later.';
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke';
        console.log(error);

    }

}

btnEl.addEventListener('click', getJoke);