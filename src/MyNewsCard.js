import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {
    return (
        <div>

            {articles.map((article, index) => (
                

 
            <Card  style={{ width: '100%' }}>
            	
			   	<Card.Img variant="top" src={article.strDrinkThumb} />
				

			   	
			    <Card.Body>
			      
			      	<Card.Title><Spinner animation="grow" variant="danger" /><Card.Link href="#" > {article.strDrink} </Card.Link>
			      </Card.Title>
			     <Card.Text><Spinner animation="grow" variant="success" /> About :- {article.strCategory}  -  {article.strAlcoholic} 
			       </Card.Text>
			       <Card.Text> <Spinner animation="grow" variant="info" /> Use Glass of type : {article.strGlass} 
			      </Card.Text>
			       <Card.Text><Spinner animation="grow" variant="warning" /> Instructions :- {article.strInstructions}   
			      </Card.Text>
<Card.Text>
			     { (article.strIngredient1 === 'null') ? <div></div> : <div><span class="label label-danger">{article.strIngredient1} - </span>  {article.strMeasure1}</div> 
					
				}	
			     { (article.strIngredient2 === 'null') ? <div></div> 
          											: <div> <span class="label label-primary">{article.strIngredient2}</span>  {article.strMeasure2}</div> 
					
				}
				{ (article.strIngredient3 === 'null') ? <div></div> 
          											: <div> <span class="label label-success">{article.strIngredient3}</span>  {article.strMeasure3}</div> 
					
				}
				{ (article.strIngredient4 === 'null') ? <div></div> 
          											: <div> <span class="label label-warning">{article.strIngredient4}</span>  {article.strMeasure4}</div> 
					
				}
				{ (article.strIngredient5 === 'null') ? <div></div> 
          											: <div> <span class="label label-info">{article.strIngredient5}</span>  {article.strMeasure5}</div> 
					
				}
				{ (article.strIngredient6 === 'null') ? <div></div> 
          											: <div> <span class="label label-default">{article.strIngredient6}</span>  {article.strMeasure6}</div> 
					
				}
				{ (article.strIngredient7 === 'null') ? <div></div> 
          											: <div> <span class="label label-info">{article.strIngredient7}</span>  {article.strMeasure7}</div> 
					
				}
				{ (article.strIngredient8 === 'null') ? <div></div> 
          											: <div> <span class="label label-warning">{article.strIngredient8}</span>  {article.strMeasure8}</div> 
					
				}
				{ (article.strIngredient9 === 'null') ? <div></div> 
          											: <div> <span class="label label-success">{article.strIngredient9}</span>  {article.strMeasure9}</div> 
					
				}
				{ (article.strIngredient10 === 'null') ? <div></div> 
          											: <div> <span class="label label-primary">{article.strIngredient10}</span>  {article.strMeasure10}</div> 
					
				}
				{ (article.strIngredient11 === 'null') ? <div></div> 
          											: <div> <span class="label label-danger">{article.strIngredient11}</span>  {article.strMeasure11}</div> 
					
				}
				{ (article.strIngredient12 === 'null') ? <div></div> 
          											: <div> <span class="label label-warning">{article.strIngredient12}</span>  {article.strMeasure12}</div> 
					
				}
				{ (article.strIngredient13 === 'null') ? <div></div> 
          											: <div> <span class="label label-danger">{article.strIngredient13}</span>  {article.strMeasure13}</div> 
					
				}{ (article.strIngredient14 === 'null') ? <div></div> 
          											: <div> <span class="label label-warning">{article.strIngredient14}</span>  {article.strMeasure14}</div> 
					
				}{ (article.strIngredient15 === 'null') ? <div></div> 
          											: <div> <span class="label label-danger">{article.strIngredient15}</span>  {article.strMeasure15}</div> 
					
				}




</Card.Text>
			    </Card.Body>	
		  </Card>
				

            ))} 
            

        </div>
    )
};

export default MyNewsCard;




