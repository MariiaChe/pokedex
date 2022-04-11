import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from "@mui/system";



const StyledButton = styled("button")(
  () => `
  font-size: 1rem;
  box-sizing: border-box;
  height: 44px;
  min-width: 300px;
  width:100%;
  background-color:#F7F8FC;
  border: 0.5px solid #F7F8FC;
  box-shadow: none;
  border-radius:var(--border-radius);
  padding: 10px 15px;
  text-align: left;
  line-height: 1.5;
  color: var(--black);

  &:hover {
    background-color: rgba(0, 0, 0, 0.13);
  }

  &:focus {
    border: 0.5px solid var(--red);
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

export const StyledListbox = styled("ul")(
  () => `
  font-size: 1rem;
  padding: 8px;
  margin: 8px 0;
  min-width: 300px;
  width:100%;
  height: 200px;
  border-radius: var(--border-radius);
  color: var(--black);
  overflow-y: scroll;
  background-color:#F7F8FC;
  border: 0.5px solid var(--salmon);
  z-index:9999;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
  scrollbar-width: none;
  `
);

export const StyledOption = styled(OptionUnstyled)(
  () => `
  z-index:9999;
  list-style: none;
  padding: 10px 15px;
  border-radius: var(--border-radius);
  cursor: default;
  margin-bottom:5px;
  &:hover {
    background-color: var(--beige);
    color: var(--black);
  }
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  &.${optionUnstyledClasses.selected} {
    background-color: var(--salmon);
    color: var(--black);
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

export function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType
  })
};