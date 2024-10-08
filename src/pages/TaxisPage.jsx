import React, { useEffect, useRef, useState } from 'react'
import { TaxiCard } from '../components/TaxiCard'
import { CreateTaxiForm } from '../components/CreateTaxiForm';

export const TaxisPage = () => {

    const taxisInitialArray = [
        {
            id: 1,
            avatar: 'data:image/png;base64,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',
            name: "Juan V",
            identityDocument: "12432143624",
            phone: "33333",
            vehicle: "4rffd6445",
            Description: "Conductor experimentado con amplio conocimiento en rutas urbanas y rurales.",
            age: 74,
            Goal:
            {
                units: 150,
                kilograms: 1200,
                goal: 300,
                commission: 5.0
            }
        },
        {
            id: 2,
            avatar: 'data:image/png;base64,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',
            name: "Pedro R",
            identityDocument: "092029092",
            phone: "2344324",
            vehicle: "fiat873",
            Description: "Conductor nuevo.",
            age: 56,
            Goal:
            {
                units: 100,
                kilograms: 800,
                goal: 200,
                commission: 4.0
            }
        },
        {
            id: 3,
            avatar: 'data:image/png;base64,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',
            name: "Andres N",
            identityDocument: "12432143624",
            phone: "6464455",
            vehicle: "chevrolet839",
            Description: "Conductor experimentado con camiones.",
            age: 30,
            Goal:
            {
                units: 200,
                kilograms: 1300,
                goal: 500,
                commission: 6.0
            }
        },
    ]

    const [taxisArray, setTaxisArray] = useState(taxisInitialArray)

    const createTaxi = (newTaxi) => {

        const newId = taxisArray.length > 0 ? taxisArray[taxisArray.length - 1].id + 1 : 1;

        // Crea un nuevo objeto taxi con ID único

        const newGoal = {
            units: newTaxi.unidades,
            kilograms: newTaxi.kilogramos,
            goal: newTaxi.goal,
            commission: newTaxi.comision
        }

        const { goal, unidades, kilogramos, comision, ...newTaxiWithoutGoal } = newTaxi

        const newTaxiWithNewGoalandId = {
            ...newTaxiWithoutGoal,
            Goal: newGoal,
            id: newId,
        }

        setTaxisArray([...taxisArray, newTaxiWithNewGoalandId]);
    }

    const editTaxi = (taxiId, updatedFields) => {


        // Edita un taxi existente con ID único

        const updatedGoal = {
            units: updatedFields.unidades,
            kilograms: updatedFields.kilogramos,
            goal: updatedFields.goal,
            commission: updatedFields.comision
        }

        const { goal, unidades, kilogramos, comision, ...updatedTaxiWithoutGoal } = updatedFields

        const updatedTaxiWithUpdatedGoal = {
            ...updatedTaxiWithoutGoal,
            Goal: updatedGoal,
        }

        setTaxisArray((prevArray) =>
            prevArray.map((taxi) =>
              taxi.id === taxiId ? { ...taxi, ...updatedTaxiWithUpdatedGoal } : taxi
            )
          );
    }
    
    // Elimina un Taxi por su ID

    const eliminateTaxi = (taxiId) => {
        setTaxisArray((prevArray) => prevArray.filter((taxi) => taxi.id !== taxiId));
    }

    useEffect(() => {
      console.log(taxisArray)
    }, [taxisArray])
    

    const modalRef = useRef();

    return (
        <main className=' p-5 max-h-[calc(100%-72px)] overflow-y-auto'>
            <div className=' h-full'>
                <div className=' flex w-full justify-between'>
                    <div className=' flex gap-5 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1528BA" className="size-10">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>

                        <h2 className=' text-3xl font-semibold'>
                            Choféres
                        </h2>
                    </div>
                    <button onClick={() => modalRef.current.openModal()} className=' py-5 px-3 bg-blue-800 text-white font-semibold rounded-2xl'>
                        Crear Chofér
                    </button>
                </div>

                <div className=' bg-white p-5 rounded-xl my-5 grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {
                        taxisArray.map((taxi) => (
                            <TaxiCard
                                key={taxi.id}
                                id={taxi.id}
                                img={taxi.avatar}
                                name={taxi.name}
                                goal={taxi.Goal.goal}
                                data={taxi}
                                eliminateTaxi={eliminateTaxi}
                                editTaxi={editTaxi}></TaxiCard>
                        ))
                    }
                </div>
            </div>

            <CreateTaxiForm createTaxi={createTaxi} ref={modalRef}></CreateTaxiForm>

        </main>
    )
}
