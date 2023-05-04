import SyncLoader from "react-spinners/SyncLoader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFilms from "utilites/api";

const Reviews = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [infoReviews, setInfoReviews] = useState(null);


    useEffect(() => async () => {
        try {
            setIsLoading(true);
            const response = await fetchFilms(`/3/movie/${movieId}/reviews`);
            setInfoReviews(response.results);
        } catch (error) {
            console.log('OOps! Error loading information. Please, try again!');
        } finally {
            setIsLoading(false);
        };
    }, [movieId]);

    return (
        <>
        {isLoading && <SyncLoader color="#eb1736" />}
        {infoReviews 
        ? (<ul>
                {infoReviews.map(item => (
                    <li key={item.id}>
                        <h3>{item.author}</h3>
                        <p>{item.content}</p>
                    </li>
                )) }
            </ul>) 
        : <div>
            <p>'We don`t have any reviews for this movie'</p>
            </div>}
        </>
    );
};

export default Reviews;
