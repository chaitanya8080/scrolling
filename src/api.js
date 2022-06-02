

  export const getNews = async (page)=>{

    const data = 
    await (await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=dd36b754cebe4126a138be676f59f6a6?page=${page}`)).json();
    return data.data.articles;

   }