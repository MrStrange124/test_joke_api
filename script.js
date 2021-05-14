const container = document.getElementById("container");
const btn = document.getElementById("btn");

generatejoke = async () => {
    try {
        const setHeader = {

            headers: {
                Accept: "application/json"
            }
        };

        // fetch("https://icanhazdadjoke.com", setHeader)
        //     .then((res) => (res.json()))
        //     .then((data) => container.innerHTML = (data.joke))
        //     .catch((err) => console.log(err));

        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();
        container.innerHTML = (data.joke)
    }
    catch (err) {
        console.log(err)
    }
}
btn.addEventListener('click', generatejoke)
generatejoke();