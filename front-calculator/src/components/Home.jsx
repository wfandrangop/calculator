import { useState } from 'react';
function Home({ goToThePage }) {

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => goToThePage('basicCalculator')}>App 1</button>
            <br />
            <br />
            <button onClick={() => goToThePage('calculator')}>App 2</button>
            <br />
            <br />
            <button onClick={() => goToThePage('api')}>App 3</button>
        </>
    )
}
export default Home;