import { politicians as existingPoliticians } from './data';
import { politicians as newPoliticians } from './new_data';

// Crear un mapa de los políticos existentes por nombre para fácil búsqueda
const existingPoliticiansMap = new Map(
  existingPoliticians.map(politician => [politician.name, politician])
);

// Filtrar los nuevos políticos para incluir solo los que no existen ya
const uniqueNewPoliticians = newPoliticians.filter(
  politician => !existingPoliticiansMap.has(politician.name)
);

// Combinar los políticos existentes con los nuevos únicos
const mergedPoliticians = [...existingPoliticians, ...uniqueNewPoliticians];

console.log(`Políticos originales: ${existingPoliticians.length}`);
console.log(`Nuevos políticos únicos añadidos: ${uniqueNewPoliticians.length}`);
console.log(`Total de políticos después de la fusión: ${mergedPoliticians.length}`);

// Generar el contenido del nuevo archivo
const fileContent = `
import { Politician } from '../types';

export const politicians: Politician[] = ${JSON.stringify(mergedPoliticians, null, 2)};
`;

// Escribir el resultado en un nuevo archivo
const fs = require('fs');
fs.writeFileSync('merged_data.ts', fileContent);
console.log('Archivo merged_data.ts creado exitosamente.');
