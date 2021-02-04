const styles=()=>({
    container:{
        width: "100%",
        height: "auto",
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        color:"white"
    },
    containerFooter:{
        width: "100%",
        height: "350px",
        paddingTop: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerItem:{
        width:"20%",
        height: "100%",
    },
    onTop:{
        position: "fixed",
        right: 20,
        bottom:20,
        cursor:"pointer",
        borderWidth: 1,
        borderColor:"#FC8009",
        borderStyle:"solid",
        padding: "5px 10px 5px 10px",
        borderRadius: "50%",
    },
    ArrowUpwardIcon:{
        color:"#FC8009",
        marginTop: 4,
    }
});
export default styles;