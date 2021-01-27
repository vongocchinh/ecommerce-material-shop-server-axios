const styles = () => ({
  TypographyHeaderRight: {
    width: "35%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItem:{
    fontSize: 12,
    marginLeft: 3,
  },
  componentItem:{
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    "&:hover":{
      cursor:"pointer",
      color:"#2E85C1"
    },
  },link:{
    textDecoration: "none",
    color:"black"
  },
  menuHover:{
    display: 'none',
  },
  componentItemUser:{
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    "&:hover ":{
      cursor:"pointer",
      color:"#2E85C1",
    },
  },
 

});
export default styles;
