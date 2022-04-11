export const selectCustomStyles = {
  container: (styles) => ({ ...styles, width: "100%"}),
  control: (styles, { isDisabled, isFocused, isSelected }) => ({ 
    ...styles,
    "&:hover":{
      borderColor: "var(--red)",
    },
    borderRadius: "var(--border-radius)",
    backgroundColor: isDisabled
     ? null
     : isFocused 
       ? "rgba(0, 0, 0, 0.13)"
       : isSelected 
       ? "rgba(0, 0, 0, 0.13)"
       : "#F7F8FC", 
    borderColor: isDisabled 
    ? null
    : isFocused
      ? "var(--red)"
      : isSelected 
        ? "var(--red)"
        :"transparent",
    border: "0.5px solid transparent",
    boxShadow: "none",
    height:"44px"
  }),
  menu: (styles) => ({ 
    ...styles, 
    borderRadius: "var(--border-radius)",
    overflow: "hidden",
    backgroundColor:"#F7F8FC",
    boxShadow:"none",
    border:"0.5px solid var(--salmon)",
   }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? null
      : isSelected
        ? "var(--red)"
        : isFocused
          ? "var(--salmon)"
          : null,
    color: isDisabled
      ? "#ccc"
      : isSelected
        ? "#fff"
        : isFocused
          ? "#fff"
          : null,
    cursor: isDisabled ? "not-allowed" : "default",
    ":active": {
      ...styles[":active"],
      backgroundColor: (!isDisabled && isSelected) && "var(--salmon)",
    },
  }),

  }
