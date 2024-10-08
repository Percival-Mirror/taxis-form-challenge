import { useState, useImperativeHandle, forwardRef } from 'react';

export const EditTaxiForm = forwardRef(({taxiData, editTaxi}, ref) => {

    const [isOpen, setIsOpen] = useState(false);

    // Permite al componente padre controlar la visibilidad del modal
    
    useImperativeHandle(ref, () => ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
    }));

    const [formData, setFormData] = useState({
        name: taxiData.name,
        identityDocument: taxiData.identityDocument,
        vehicle: taxiData.vehicle,
        phone: taxiData.phone,
        goal: taxiData.Goal.goal,
        kilogramos: taxiData.Goal.kilograms,
        unidades: taxiData.Goal.units,
        comision: taxiData.Goal.commission,
        age: taxiData.age,
        Description: taxiData.Description,
        avatar: taxiData.avatar,
    });

    // Función para actualizar el estado al cambiar los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editTaxi(taxiData.id, formData)
        setIsOpen(false)
    };

    return (
        <>
            {isOpen && (
                <div className=' absolute w-screen h-screen flex justify-center top-0 left-0 overflow-y-auto'>
                    <div className=' absolute bg-black opacity-20 w-full h-full z-10'></div>
                    <form onSubmit={handleSubmit} className=' flex flex-col gap-5 z-30 bg-gray-200 p-5 w-full max-w-96 my-5 rounded-xl overflow-y-auto'>
                        <div className='flex justify-between w-full'>
                            <h3 className=' text-xl font-bold'>
                                Crear Chofér
                            </h3>
                            <button onClick={() => setIsOpen(false)}>X</button>
                        </div>

                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Nombre del Chofer..."
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Documento de Identidad"
                            type="text"
                            name="identityDocument"
                            value={formData.identityDocument}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Número de Vehículo"
                            type="text"
                            name="vehicle"
                            value={formData.vehicle}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Número de Teléfono"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Goal..."
                            type="text"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Kilogramos..."
                            type="text"
                            name="kilogramos"
                            value={formData.kilogramos}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Unidades..."
                            type="text"
                            name="unidades"
                            value={formData.unidades}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Comisión"
                            type="text"
                            name="comision"
                            value={formData.comision}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Edad..."
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Descripción..."
                            type="text"
                            name="Description"
                            value={formData.Description}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="border border-black rounded-lg p-3"
                            placeholder="Link de la Imagen..."
                            type="text"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            required
                        />

                        <div className=' flex gap-5'>
                            <button type='submit' className=' p-3 bg-blue-700 text-white rounded-xl'>Crear</button>
                            <button onClick={() => setIsOpen(false)} type='button' className=' p-3 bg-gray-400 text-white rounded-xl'>Cerrar</button>
                        </div>


                    </form>
                </div>
            )}
        </>
    )
})
