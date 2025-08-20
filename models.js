async function fetchData() {
    try {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "4a12ed0c79msha649e7eb40fcb9ap100284jsn90c1e48c44e8",
                "X-RapidAPI-Host": "openai80.p.rapidapi.com",
            },
        };
        const response = await fetch(
            "https://openai80.p.rapidapi.com/models",
            options
        );

        const record = await response.json();

        document.getElementById("aiModels").innerHTML = record.data
            .map((item) => `<li>${item.id}</li>`)
            .join("");
    } catch (error) {
        console.log("Error in getOpenAiModel", error);
    }
}

fetchData();
