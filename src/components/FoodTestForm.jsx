// src/components/FoodTestForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FoodTestForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      Apariencia: data.Apariencia,
      sabor: data.sabor,
      aroma: data.aroma,
      textura: data.textura,
    };

    console.log("Datos enviados:", formData);

    try {
      const response = await axios.post('URL_DE_TU_BACKEND', formData);
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="apariencia">Apariencia</label>
        <input
          id="apariencia"
          type="number"
          {...register('Apariencia', { required: true, min: 1, max: 10 })}
        />
        {errors.Apariencia && <span>Este campo es requerido y debe estar entre 1 y 10</span>}
      </div>

      <div>
        <label htmlFor="sabor">Sabor</label>
        <input
          id="sabor"
          type="number"
          {...register('sabor', { required: true, min: 1, max: 10 })}
        />
        {errors.sabor && <span>Este campo es requerido y debe estar entre 1 y 10</span>}
      </div>

      <div>
        <label htmlFor="aroma">Aroma</label>
        <input
          id="aroma"
          type="number"
          {...register('aroma', { required: true, min: 1, max: 10 })}
        />
        {errors.aroma && <span>Este campo es requerido y debe estar entre 1 y 10</span>}
      </div>

      <div>
        <label htmlFor="textura">Textura</label>
        <input
          id="textura"
          type="number"
          {...register('textura', { required: true, min: 1, max: 10 })}
        />
        {errors.textura && <span>Este campo es requerido y debe estar entre 1 y 10</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FoodTestForm;
