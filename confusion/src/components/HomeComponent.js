import React from 'react';
import {Card,CardImg, CardTitle, CardSubtitle, CardText, CardBody} from 'reactstrap';
import {Loading} from './LoadingComponent.js';


function RenderCard({item,isLoading, errMess}){

	 if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }


	else{

	return(

		<Card>
			<CardImg src={item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> :null}
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>


		);

	}
}


function Home(props){


	return(



		<div className="container">
			<div className="row align-items-start">
			<div className ="col-12 m-1 col-md">
				<RenderCard item={props.dish}
				isLoading={props.dishesLoading}
				errMess={props.dishErrMess}/>
			</div>
			<div className="col-12 m-1 col-md">
				<RenderCard item={props.promotion}/>
			</div>
  
			<div className="col-12 m-1 col-md">
				<RenderCard item={props.leader}/>
			</div>
			</div>
		</div>

			


		);
}



export default Home;