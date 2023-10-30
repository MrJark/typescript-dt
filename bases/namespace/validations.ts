
namespace Validations {

  // destro de un namespace puedes tener muchas clases dentro de el y se usan cunaco se crean librerías o frameworks

  export const validateText = ( text: string ): boolean => {
    return ( text.length > 3 ) ? true : false
  }

  export const validateDate = ( myDate: Date): boolean => {
    return (isNaN(myDate.valueOf()))
      ? true
      : false
  }
  // solo si exportas las funciones se podrán usar fuera de este namespace
}

