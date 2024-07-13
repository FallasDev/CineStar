const movieReleaseDates = [
    { name: "Del revés 2 (Inside Out 2)", releaseDate: new Date(2024, 6, 12, 10, 0, 0) }, // 12 de julio, 10:00 AM
    { name: "Gru 4. Mi villano favorito",  releaseDate: new Date(2024, 6, 13, 14, 0, 0) }, // 12 de julio, 11:00 AM
    { name: "Furiosa: De la saga Mad Max", releaseDate: new Date(2024, 6, 12, 12, 0, 0) }, // 12 de julio, 12:00 PM
    { name: "De naturaleza violenta", releaseDate: new Date(2024, 6, 13, 13, 0, 0) }, // 13 de julio, 1:00 PM
    { name: "Superdetective en Hollywood: Axel F.", releaseDate: new Date(2024, 6, 12, 11, 0, 0) }, // 13 de julio, 2:00 PM
    { name: "Bad Boys: Ride or Die", releaseDate: new Date(2024, 6, 13, 15, 0, 0) }, // 13 de julio, 3:00 PM
    { name: "Garfield: La película", releaseDate: new Date(2024, 6, 14, 16, 0, 0) }, // 14 de julio, 4:00 PM
    { name: "Civil War", releaseDate: new Date(2024, 6, 14, 17, 0, 0) }, // 14 de julio, 5:00 PM
    { name: "Un lugar tranquilo: Día uno", releaseDate: new Date(2024, 6, 14, 10, 0, 0) }, // 14 de julio, 10:00 AM
    { name: "Monkey Man", releaseDate: new Date(2024, 6, 15, 11, 0, 0) }, // 15 de julio, 11:00 AM
    { name: "Detonantes", releaseDate: new Date(2024, 6, 15, 12, 0, 0) }, // 15 de julio, 12:00 PM
    { name: "Los infalibles", releaseDate: new Date(2024, 6, 15, 13, 0, 0) }, // 15 de julio, 1:00 PM
    { name: "Los vigilantes", releaseDate: new Date(2024, 6, 16, 14, 0, 0) }, // 16 de julio, 2:00 PM
    { name: "Amigos imaginarios", releaseDate: new Date(2024, 6, 16, 15, 0, 0) }, // 16 de julio, 3:00 PM
    { name: "Descansa en paz", releaseDate: new Date(2024, 6, 16, 16, 0, 0) }, // 16 de julio, 4:00 PM
    { name: "Boneyard", releaseDate: new Date(2024, 6, 17, 17, 0, 0) }, // 17 de julio, 5:00 PM
    { name: "Infiltrada en la NASA", releaseDate: new Date(2024, 6, 17, 10, 0, 0) }, // 17 de julio, 10:00 AM
    { name: "La academia del Sr. Kleks", releaseDate: new Date(2024, 6, 17, 11, 0, 0) }, // 17 de julio, 11:00 AM
    { name: "Un asunto familiar", releaseDate: new Date(2024, 6, 18, 12, 0, 0) }, // 18 de julio, 12:00 PM
    { name: "Ultraman: El ascenso", releaseDate: new Date(2024, 6, 18, 13, 0, 0) } // 18 de julio, 1:00 PM
  ];  

export function GetMoviesForDate() {
    return movieReleaseDates
}