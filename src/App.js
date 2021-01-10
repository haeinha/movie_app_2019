import React from 'react'
import PropTypes from "prop-types"

// function Food(props){
//   console.log(props)
//   return <h1>I like Potato</h1>
// }

/*
friends=["dal","mark","lynn"]
friends.map(function(current){
  console.log(current);
  return 0
})

friends.map(current=>{
  console.log(current);
  return 0
})
*/

function Food({name,picture,rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>rating {rating}/5</h4>
    <img src={picture}/>
  </div>
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired

}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating:5
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating:5
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating:5
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating:5
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating:5
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(dish=><Food name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
