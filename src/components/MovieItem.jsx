// Import the Card component from React Bootstrap
import Card from 'react-bootstrap/Card';

// MovieItem component displays the details of one movie
export default function MovieItem(props){
    return (
        <div>
            {/* Previous version used normal HTML elements */}
            {/*<h2>{props.mymovie.Title}</h2>
            <p>{props.mymovie.year}</p>
            <img src = {props.mymovie.Poster} alt={props.mymovie.Title}/> */}


            //Create a Bootstrap card for the movie
            <Card style={{ width: '18rem' }}>

    //Display the movie poster at the top of the card
      <Card.Img variant="top" src= {props.mymovie.Poster}/>
      
                
    <Card.Body>
        //Display the movie title
        <Card.Title>{props.mymovie.Title}</Card.Title>

        //Displays movie year
        <Card.Text>
         {props.mymovie.Year}
        </Card.Text>
      </Card.Body>
    
      
    </Card>
                </div>
    )
}
