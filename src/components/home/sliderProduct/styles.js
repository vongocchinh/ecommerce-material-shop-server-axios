const styles=()=>({
    container:{
        width: "100%",
        height: "350px",
    },
    containerSlider:{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    slider:{
        width: "100%",
        height: "95%",
        display: 'flex',
        justifyContent:'center',
    },
    sliderItem:{
        width: "100%",
        height: "100%",
    },
    paper: {
        height: 270,
        width: 210,
        "&:hover": {
          cursor: "pointer",
          boxShadow: " 0 12px 26px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
      },
      containerMainProduct: {
        marginTop: 30,
        marginBottom: 20,
      },
      containerLayout: {
        display: "flex",
        alignItems: "center",
      },
      layoutImg: {
        height: "75%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      imagesProduct: {
        height: 170,
        width: 160,
        "&:hover": {
          marginTop: -10,
          transition: "0.5s",
        },
      },
      descriptionProduct: {
        height: "5%",
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
      },
      priceSale: {
        fontSize: 12,
        color: "#F57224",
        "&:hover": {
          color: "#168ED2",
        },
        width: "50%",
      },
      price: {
        fontSize: 11,
        color:"#4D4D4D"
      },
      descriptionNameProduct: {
        height: "10%",
        marginLeft: 10,
        marginRight: 10,
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        overflow: "hidden",
        color:"#4D4D4D"
      },
      nameProduct: {
        fontSize: 12,
    
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&:hover": {
          color: "#168ED2",
        },
      },
      titleProduct: {
        position: "absolute",
        fontSize: 10,
        marginLeft: 147,
        marginTop: 10,
        color: "white",
        backgroundColor: "#FF6A00",
        padding: 2,
        borderRadius: 5,
        zIndex: 333,
      },
      titleRadius: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        borderRadius: "50%",
        marginLeft: 140,
      },
      itemProduct: {
        width: "100%",
        marginLeft: 0,
        height: "auto",
        borderBottomColor: "#BEBEBE",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        backgroundColor: "white",
        padding: 5,
        borderColor: "#606060",
      },
      itemNameProduct: {
        color: "#0D6ECE",
        padding: 3,
        paddingRight: 10,
        fontSize: 11,
        "&:hover": {
          color: "#FF6A00",
          cursor: "pointer",
          transition: "0.3s",
        },
      },
      itemCategoryProduct: {
        width: "auto",
        // display:"none",
        "& @media (maxWidth: 620)": {
          display: "none",
        },
      },
      titleCategoryHome: {
        fontSize: 16,
        paddingTop: 7,
        paddingBottom: 7,
        height: "auto",
      },
      ratting: {
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "",
        alignItems: "center",
        marginTop: 5,
      },
      boxRatting: {
        marginLeft: -6,
        width: "50%",
      },
      boxRattingCount: {
        width: "10%",
        fontSize: 12,
        marginBottom: 5,
        color: "#868686",
        marginLeft: -15,
      },
      lazyLoadingImg: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      imgLazyLoadingImg: {
        width: "100%",
        height: "82%",
      },
      Link:{
        textDecoration:"none"
      },
      itemProductSlider:{
          width: "100%",
          height: "290px",
          borderWidth:0,
          borderStyle:"none",
          borderColor:"white",
          padding:10,
          display: "flex",
          justifyContent:"center",
          alignItems: 'center',
      },
      itemProductSliders:{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent:"center",
          alignItems: 'center',
      },
      titleName:{
          width: "100%",
          height: "40px",
          border:"1px solid #F3F3F3",
          marginBottom: 10,
      },
      titleP:{
          padding: 10,
          fontSize: 16,
          color:"#FC8009"
      }
});
export default styles;