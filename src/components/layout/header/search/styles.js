/* eslint-disable no-dupe-keys */
const styles = () => ({
  TypographyHeaderCenter: {
    width: "45%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchHeader: {
    width: "100%",
    borderRadius: 10,
    borderRadius: 5,
    fontSize: 11,
    "::-webkit-input-placeholder": {
      fontSize: 11,
    },
    // "&$focused": {
    //   borderColor: "red",
    // },
  },
  buttonMenuLeft: {
    width: "10%",
  },
  formHeader: {
    width: "70%",
  },
});
export default styles;
