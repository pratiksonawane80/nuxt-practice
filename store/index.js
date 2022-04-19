export const state = () => ({
     showLoading: true
})


export const actions = {

}

export const getters = {
    async loadNews() {
        const news = await axios("https://newsdata.io/api/1/news?apikey=pub_6643dd8e1f6d808830638348d3e9d6d116a1&q=news&country=in&language=en&category=science,sports,technology ")
    }
}