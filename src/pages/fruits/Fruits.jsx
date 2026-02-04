function Fruits() {
    const fruitNames = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
    return (
        <>
            <h1>Fruits Page</h1>
            <ul>
                {
                    fruitNames.map(
                        (fruit) => (<p key={fruit}>{fruit}</p>)
                    )
                }
            </ul>
        </>
    )
}
export default Fruits