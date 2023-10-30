import {Header} from "../components/Header/Header.tsx";
import {Footer} from "../components/Footer/Footer.tsx";

export function Contexte() {

    return (
        <>
            <Header/>
            <section className="container mx-auto">
                <h2 className="fw-bold fs-1">Contexte</h2>
                <p className="fs-3 mt-4">
                    La <span className="fw-bold">Green Bank</span>, fondée en 2022, est une institution financière novatrice axée
                    sur la durabilité et l'impact environnemental positif. Son objectif principal est
                    de catalyser des investissements et des initiatives qui favorisent la transition
                    vers une économie verte et durable.
                </p>
                <p className="fs-3">
                    Répondant à la nécessité croissante de mesurer et de comprendre l'impact
                    environnemental des activités humaines, <span className="fw-bold">la Green Bank souhaite lancer un
                    outil de calcul de l'empreinte écologique.</span>
                </p>
                <p className="fs-3">
                    Cet outil interactif permet aux individus de quantifier leur impact sur
                    l'environnement en termes de consommation d'énergie, d'émissions de gaz à
                    effet de serre et d'utilisation des ressources naturelles.
                </p>
            </section>
            <Footer/>
        </>
    )

}