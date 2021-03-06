const API_KEY = process.env.API_KEY


export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/top_rated/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/dicover/movie?api_key=${API_KEY}&with_genres=28`
    },
  
   
}