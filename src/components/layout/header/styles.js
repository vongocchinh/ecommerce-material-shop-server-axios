const styles = () => ({
  headerTitle: {
    width: "100%",
    height: 50,
    backgroundColor: "#F7F7F7",
  },
  headerLayout: {
    width: "90%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonHeader: {
    fontSize: 11,
    color: "#A4A4A4",
    "&:hover": {
      backgroundColor: "#F7F7F7",
      color: "#2E85C1",
    },
  },
  headerMenu:{
    width: "100%",
    height: "80px",
    backgroundColor:"white"
  },
  TypographyHeaderLeft:{
    width: "100%",
    height: "100%",
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg:{
    width: "80%",
    // height: 0,
  },
  TypographyHeaderCenter:{
    width: "100%",
    height: "100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  searchHeader:{
    width: "70%",
    borderRadius: 10,
    fontSize:11,
    '::-webkit-input-placeholder' :{
      fontSize:11,
  }
  },
  buttonMenuLeft:{
    width: "10%",
  },
  Link:{
    decoration:"none",
    width: "15%",
  },
  clear:{
    clear: "both"
  }
});
export default styles;
