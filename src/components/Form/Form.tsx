import {energy, kilometrage, passengers, SelectOptions, vehicles, year} from "../../data/data.ts";
import {useRef, useState} from "react";
import CustomSelect from "./CustomSelect.tsx";
import {getBorrowingRate} from "../../function/function.ts";
import {Modal, useToggle} from "modal-cyril-bartz";

export function Form() {
    const [selectedOptionVehicles, setSelectedOptionVehicles] = useState<SelectOptions | null>(vehicles[0])
    const [selectedOptionEnergy, setSelectedOptionEnergy] = useState<SelectOptions | null>(energy[0])
    const [selectedOptionKilometrage, setSelectedOptionKilometrage] = useState<SelectOptions | null>(kilometrage[0])
    const [selectedOptionYear, setSelectedOptionYear] = useState<SelectOptions | null>(year[0])
    const [selectedOptionPassengers, setSelectedOptionPassengers] = useState<SelectOptions | null>(passengers[0])

    const fees = useRef(0)

    const {show, toggle} = useToggle(false)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const notes = selectedOptionEnergy!.note + selectedOptionEnergy!.note + selectedOptionKilometrage!.note + selectedOptionYear!.note
        const borrowingRate = getBorrowingRate(notes)
        const supplement = selectedOptionPassengers!.note
        fees.current = borrowingRate + supplement
        toggle()
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="#">
                <fieldset className="border p-2">
                    <legend className="float-none w-auto p-2">Simulateur d’emprunt pour l’achat d’une voiture</legend>
                    <CustomSelect name="Type de véhicule" img="vehicle" onChange={setSelectedOptionVehicles} value={selectedOptionVehicles} options={vehicles}/>
                    <CustomSelect name="Energie" img="energy" onChange={setSelectedOptionEnergy} value={selectedOptionEnergy} options={energy}/>
                    <CustomSelect name="Kilometrage par an" img="kilometrage" onChange={setSelectedOptionKilometrage} value={selectedOptionKilometrage} options={kilometrage}/>
                    <CustomSelect name="Année" img="year" onChange={setSelectedOptionYear} value={selectedOptionYear} options={year}/>
                    <CustomSelect name="Passagers" img="passengers" onChange={setSelectedOptionPassengers} value={selectedOptionPassengers} options={passengers}/>
                </fieldset>
                <button type="submit" className="btn btn-primary btn" style={{marginTop: "1rem"}}>Sauvegarder</button>
            </form>
            <Modal open={show} onClose={toggle}>
                <div>Vous devez donc payer <span className="fw-bold" style={{color: "green"}}>{fees.current} %</span> de frais pour cet emprunt</div>
            </Modal>
        </>
    )

}