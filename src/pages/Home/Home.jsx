import { useEffect, useState } from "react";
// import {  useSearchParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import fetchFilms from '../../utilites/api';
import ListTrendingFilms from "components/ListTrendingFilms";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [searchParams] = useSearchParams();

    // const filmId = searchParams.get("filmId") ?? "";
// console.log(filmId);

    useEffect(() => async () => {

            try {
                setIsLoading(true);
                const response = await fetchFilms('/3/trending/movie/day');
                setTrendingFilms([...response.results]);

            } catch (error) {
                console.log('OOps! Error loading information. Please, try again!');
            } 
            finally {
                setIsLoading(false);
            };
        }, []);

    return (
        <>
            {isLoading && <SyncLoader color="#eb1736" />}
            {trendingFilms.length 
            ? <ListTrendingFilms items={trendingFilms} />
            : null}
        </>
    );
};

export default Home;