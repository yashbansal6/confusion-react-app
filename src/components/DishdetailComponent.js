import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    function RenderComments({comments}) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        const cmnts = comments.map((comm) => {
            return (
                <li key={comm.id}>
                    <p>{comm.comment}</p>
                    <p>-- {comm.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comm.date))}
                    </p>
                </li>
            );
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        );
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    const Dishdetail = (props) => {
        const dish = props.selectedDish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={dish} />
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            );
        }    
        else {
            return (
                <div></div>
            );
        }
    }

export default Dishdetail;