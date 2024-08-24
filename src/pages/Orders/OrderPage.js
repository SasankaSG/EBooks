import React from 'react'
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFail } from './components/OrderFail';
import { useLocation } from 'react-router-dom';
import { useTitles } from '../../hooks/useTitles';

export const OrderPage = () => {
    const { state } = useLocation(); //getting the state from checkout Navigate
    useTitles("Order Summary");
    return (
    <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}
