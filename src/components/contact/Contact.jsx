const Contact = () => {
  const handleOpenEmail = () => {
    window.location.href = "mailto:info@intecgs.com?subject=Contact";
  };
  return (
    <button className="btn btn-primary" onClick={handleOpenEmail}>
      Contact
    </button>
  );
};


export default Contact
