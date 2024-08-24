function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    return { token, cbid }
//{ token: token, cbid: cbid }
}

export async function getUser(params) {
    const sessionData = getSession();
    const requestOptions ={
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${sessionData.token}`}
        };
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${sessionData.cbid}`, requestOptions);
    const data = await response.json();
    return data;
}

export async function getUserOrders() { 
    const sessionData = getSession();   
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${sessionData.cbid}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${sessionData.token}`}
    });

    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const sessionData = getSession();

    const order = {
        cartList: cartList,
        total: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id 
        }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${sessionData.token}`},
        body: JSON.stringify(order)
    });

    const data = await response.json();
    return data;
    
}