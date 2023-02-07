const Challenges = () => {
    
    const v1 = 2
    const v2 = 2
    
    return (
        <div>
            <h2>{v1} + {v2}</h2>
            <button onClick={() => console.log(v1 + v2)}>Soma</button>
        </div>
    )    
}

export default Challenges;