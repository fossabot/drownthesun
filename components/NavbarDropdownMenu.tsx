import DropdownButton from "./DropdownButton"

type Props = {
    open: boolean
}

const NavbarDropdownMenu = (props: Props) => (
    <div className={`sm:hidden ${props.open ? "" : "hidden"} `}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
            <DropdownButton href="/" name="Home"></DropdownButton>
            <DropdownButton href="#" name="Music"></DropdownButton>
            <DropdownButton href="/tour" name="Tour"></DropdownButton>
            <DropdownButton href="contact" name="Contact"></DropdownButton>
        </div>
    </div>
)

export default NavbarDropdownMenu
