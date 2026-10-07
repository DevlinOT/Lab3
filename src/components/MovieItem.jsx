import Card from 'react-bootstrap/Card';

export default function MovieItem(props){
    return (
        <div>
            {/*<h2>{props.mymovie.Title}</h2>
            <p>{props.mymovie.year}</p>
            <img src = {props.mymovie.Poster} alt={props.mymovie.Title}/> */}

            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.mymovie.Poster}/>
      <Card.Body>
        <Card.Title>{props.mymovie.Title}</Card.Title>
        <Card.Text>
         {props.mymovie.Year}
        </Card.Text>
      </Card.Body>
    
      
    </Card>
                </div>
    )
}