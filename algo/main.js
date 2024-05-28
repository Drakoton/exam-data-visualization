function twoSum(array, target) {
    const numIndices = {};  // Dictionnaire pour stocker les indices des éléments

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];  // Calculer le complément nécessaire pour atteindre la cible

        if (complement in numIndices) {
            // Si le complément existe dans le dictionnaire, retourner les indices
            return [numIndices[complement], i];
        }

        // Sinon, ajouter l'élément et son indice au dictionnaire
        numIndices[array[i]] = i;
    }

    // Puisqu'il est supposé qu'il y a toujours une solution, on n'a pas besoin de retourner quoi que ce soit en dehors de la boucle
}
