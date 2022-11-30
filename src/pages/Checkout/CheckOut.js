import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price } = service;
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            phone,
            message

        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order placed successfully!')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl my-5'>You are about to order: {title}</h2>
                <h4 className='text-3xl'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" />
                </div>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full' placeholder='Your Message' />
                <input className='btn' type='submit' value='PLace your order' />
            </form>
        </div>
    );
};

export default CheckOut;