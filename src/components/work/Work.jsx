
import imagen1 from './imagen/10.png'; // Ajusta la ruta a tu imagen
import imagen2 from './imagen/1.png'; // Ajusta la ruta a tu imagen


const Work = () => {
  return (
    
    <div style={styles.container}>
   <h2 className="display-4" >Projects<br/></h2>
      <div style={styles.imageContainer}>
        <img src={imagen1} alt="Imagen 1" style={styles.image} />
        <h3 style={styles.title}>CMS Media Delivery</h3>
      </div>
      <div style={styles.imageContainer}>
        <img src={imagen2} alt="Imagen 2" style={styles.image} />
        <h3 style={styles.title}>Generate AI</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    flexWrap: 'wrap', // Para que las imágenes se ajusten en pantallas pequeñas
  },
  imageContainer: {
    textAlign: 'center', // Centra el título debajo de la imagen
    margin: '10px',
  },
  image: {
    width: '100%', // Ajusta el ancho de las imágenes
    maxWidth: '300px', // Ancho máximo para evitar que sean demasiado grandes
    height: 'auto', // Mantiene la proporción de la imagen
    borderRadius: '10px', // Opcional: bordes redondeados
  },
  title: {
    marginTop: '10px', // Espacio entre la imagen y el título
    fontSize: '1.2em', // Tamaño del título
    color: '#333', // Color del texto
  },
};

export default Work;