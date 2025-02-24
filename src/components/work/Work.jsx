import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import imagen1 from './imagen/10.png'; // Ajusta la ruta a tu imagen
import imagen2 from './imagen/1.png'; // Ajusta la ruta a tu imagen

const Work = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para guardar la imagen seleccionada

  // Función para abrir el modal con la imagen seleccionada
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div style={styles.container}>
      {/* Imagen 1 */}
      <div style={styles.imageContainer}>
        <img
          src={imagen1}
          alt="Imagen 1"
          style={styles.image}
          onClick={() => handleImageClick(imagen1)} // Abre el modal al hacer clic
        />
        <h3 style={styles.title}>CMS Media Delivery</h3>
      </div>

      {/* Imagen 2 */}
      <div style={styles.imageContainer}>
        <img
          src={imagen2}
          alt="Imagen 2"
          style={styles.image}
          onClick={() => handleImageClick(imagen2)} // Abre el modal al hacer clic
        />
        <h3 style={styles.title}>Generate AI</h3>
      </div>

      {/* Modal para mostrar la imagen en pantalla completa */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body style={styles.modalBody}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagen en pantalla completa"
              style={styles.fullSizeImage}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  imageContainer: {
    textAlign: 'center',
    margin: '20px 0',
    cursor: 'pointer', // Cambia el cursor a una mano para indicar que es clickeable
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '10px',
  },
  title: {
    marginTop: '15px',
    fontSize: '2.5em',
    color: '#333',
  },
  modalBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
  },
  fullSizeImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '90vh', // Limita la altura máxima al 90% del viewport
    borderRadius: '10px',
  },
};

export default Work;