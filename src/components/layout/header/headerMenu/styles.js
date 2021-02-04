const styles = () => ({
  header: {
    width: "100%",
    height: "45px",
    backgroundColor: "black",
    display: "inline-block",
    textDecoration: "none",
    position: "sticky",
    top:"0px",
    zIndex: 555,
    transition:"2s"
  },
  container: {
    height: "45px",
    display: "flex",
    justifyContent: "start",
  },
  MenuItem: {
    width: 100,
    height: "100%",
    display: 'flex',
    justifyContent:"center",
    alignItems: 'center',
    textDecoration: "none",
  },
  item: {
    color: "white",
    fontSize: 12,
    textDecoration:"none",
    "&:hover":{
        color:"white"
    }
  },
  link:{
    textDecoration: "none",
  },
  menu:{
      display: 'block',
  }
});
export default styles;
