import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { SearchContext } from '../App';

import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { fetchPizzas, setIsLoading } from '../redux/slices/pizzaSlice';

const Home = () => {
  // const [pizzas, setPizzas] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  const sorting = ['rating', 'price', 'title'];
  const { searchItems } = React.useContext(SearchContext);
  const isLoading = useSelector((state) => state.pizzas.isLoading);

  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const category = useSelector((state) => state.allSort.category);
  const sortBy = useSelector((state) => state.allSort.sortItem);
  const currentPage = useSelector((state) => state.allSort.currentPage);

  const dispatch = useDispatch();

  const totalPages = 3;
  const elementOfPagination = 4;

  console.log(isLoading);
  React.useEffect(() => {
    setIsLoading(true);

    //   `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
    //     category > 0 ? `category=${category}` : ''
    //   }&sortBy=${
    //     sorting[sortBy]
    //   }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setPizzas(arr);
    //     setIsLoading(false);
    //   });
    // const fetchpizzas = async () => {
    //   try {
    //     const res = await axios.get(
    //       `https://64a48816c3b509573b579f95.mockapi.io/pizzas?${
    //         category > 0 ? `category=${category}` : ''
    //       }&sortBy=${
    //         sorting[sortBy]
    //       }&page=${currentPage}&limit=${elementOfPagination}&search=${searchItems}`,
    //     );
    //     setPizzas(res.data);
    //   } catch (error) {
    //     setPizzas([]);
    //     console.log('axios error', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    dispatch(
      fetchPizzas({ category, sorting, sortBy, currentPage, elementOfPagination, searchItems }),
    );
    // setPizzas
    // fetchpizzas();
  }, [category, sortBy, currentPage, searchItems]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((obj, i) => <Skeleton key={i} />)
          : pizzas.map((obj, i) => <PizzaBlock key={i} {...obj} />)}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Home;
