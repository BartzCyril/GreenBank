import {Form} from "../components/Form/Form.tsx";
import {Header} from "../components/Header/Header.tsx";
import {Footer} from "../components/Footer/Footer.tsx";

export function App() {

    return (
        <>
            <Header/>
            <section className="container mx-auto">
                <Form/>
            </section>
            <Footer/>
        </>
    )
}


