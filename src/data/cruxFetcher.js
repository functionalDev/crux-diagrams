const cruxHistoryApiUrl = "https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=AIzaSyBjHoAJ9LCokv_aZLFR9RYvtyhz_MXQCU4"
export const getData = async (url) => {
    const response = await fetch(
        cruxHistoryApiUrl,
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify({
                url,
            })
        }
    )
    return response.json();
}