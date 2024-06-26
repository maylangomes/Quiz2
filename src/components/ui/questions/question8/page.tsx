import React from 'react';
import { Slider } from "@nextui-org/react";

const InputQuestion8: React.FC<any> = ({setSliderValue}) => {

  return (
    <div className="mt-12">
        <h2 className="text-lg font-semibold">Question bonus : Quel pourcentage de chance a l'équipe de France d'être championne du monde en 2027 ?</h2>
        <p className='text-sm mb-2'>Avis perso : 92%.</p>
        <br />
        <Slider
        name="question8"
        label="Sélectionne ton pourcentage"
        step={1} 
        maxValue={100} 
        minValue={0} 
        defaultValue={40}
        onChange={(value) => setSliderValue(value)}
        />
    </div>
  );
};

export default InputQuestion8;