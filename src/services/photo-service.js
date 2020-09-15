
const accessKey = "TCHEt1UgRpPmWN7v1JY1zZ1oY8Ei2j76AvfWverMFBM"
const baseUrl ='https://api.unsplash.com/search/photos'



const fetchData = async (searchTerm) => {
    const newUrl = `${baseUrl}?query=${searchTerm}`
    const response = await fetch(newUrl,{
        method:'GET',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            Authorization: `Client-ID ${accessKey}`
        }
    })

    try {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        return await response.json()
    } catch (error) {
        console.log(`somthing went wrong: ${error.message}`)
        throw new Error(error)
    }
     
}

export default fetchData