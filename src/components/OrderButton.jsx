import { useContext } from "react";
import { FaArrowsAltV } from "react-icons/fa";
import UserContext from "../store/User/user-context";

const OrderButton = ({ value, onChange }) => {
    const { orderBy } = useContext(UserContext);
    const handleChange = () => {
        onChange(value.value)
        orderBy(value);
    }

    return (
        <span onClick={handleChange}>
            <FaArrowsAltV />
        </span>
    )
}

export default OrderButton;
