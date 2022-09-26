// how to add preloader animation in React application?
// #loading-screen {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }


function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 18000);
    }, []);

    return (
        <div>
            {loading ? (<Loading />) :
                (
                    <main>
                        <Nav />
                    </main>
                )
            }
        </div>
    );
}


