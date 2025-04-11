function Footer() {
    return (
      <footer style={styles.footer}>
        <p>All prices include VAT. The crossed out price indicates the manufacturer’s recommended retail price.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#333",
      color: "#fff",
      marginTop: "25px",
      bottom: 0,
      width: "100%",
    }
  };
  
  export default Footer;
  