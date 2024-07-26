import React, {useState, useEffect} from "react";
import reviewService from '../../service/review.service';
import { Link } from "react-router-dom";

const List = () => {
    const [reviewList, setReviewList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(()=>{
        reviewService.getAllReviews().then((response)=>{
            setReviewList(response.data);
        });
    }, []);

    const handleChange=(e)=>{
        setQuantity(e.target.value);
        console.log(quantity);
    }

    return(
        <div className="mt-3">
            {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
            {infoMessage && <div className='alert alert-success'>{infoMessage}</div>}
            <div>
                {reviewList.map((item, ind) => (
                    <div key={item.id} className='card home-card'>
                    <div className='card-body'>
                        <div className='card-title text-uppercase'>
                            <Link to={`/review/read/${item.rno}`} >{item.review_title}</Link>
                        </div>
                        <div className='card-subtitle text-muted'>{item.review_exp}</div>
                          <div className='card-subtitle text-muted'>{item.nickname}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default List;