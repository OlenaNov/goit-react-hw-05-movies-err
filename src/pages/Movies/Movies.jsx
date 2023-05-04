import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import fetchFilms from '../../utilites/api';
import SearchForm from 'components/SearchForm';
import ListSearchFilms from 'components/ListSearchFilms';
import { useRef } from "react";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchFilms, setSearchFilms] = useState([]);
    const state = useRef(searchFilms.length ?? searchFilms);

    const handleSubmit = async value => {
        try {
            setQuery(value);
            setIsLoading(true);
            const response = await fetchFilms('/3/search/movie', value);
            setSearchFilms([...response.results]);
            state.current = searchFilms;
        } catch(error) {
            console.log('OOps! Error loading information. Please, try again!');
        } finally {
            setIsLoading(false);
        };
    };

    // useEffect(() => async () => {
    //     // const controller = new AbortController();
    //     try {
            
    //         if(query === '') {
    //             return;
    //         };
    //         setIsLoading(true);
    //         const response = await fetchFilms('/3/search/movie', query);
    //         console.log(response);
    //         setSearchFilms([...response.results]);
    //         console.log('MAKE');
    //     } catch (error) {
    //         console.log('OOps! Error loading information. Please, try again!');
    //     } finally {
    //         setIsLoading(false);
    //     };

        // console.log(searchFilms);

        // const response = await fetchFilms('/3/search/movie', query);
        // setSearchFilms([...response.results]);
        // console.log(response);

        // return () => {
        //     controller.abort();
        // };
        
    // }, [query]);

    return (
        <>
        {isLoading && <SyncLoader color="#eb1736" />}
        <SearchForm 
            onSubmitForm={handleSubmit} 
        />
        {query 
        ? <ListSearchFilms items={searchFilms} />
        : null}
    </>
    );
};

export default Movies;
