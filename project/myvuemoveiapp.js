Vue.component('movie-detail',{

    props:['movie'],

    tamplate:
    <div>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
});

new Vue({
    el:"#mymovieapp",
    data:{
        searchKey:'',
        moviesList:[]
    },

    methods:{
        searchMovies()
        {
            var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=19662a8d';
            fetch(url)
            .then(Response=>Response.json())
            .then(data=>{
                this.moviesList=data;
            })
        }
    }
})