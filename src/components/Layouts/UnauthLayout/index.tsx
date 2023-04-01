//components
import Card from "../../common/Card";
import Title from "../../common/Title";

//css
import ModuleCss from "./UnauthLayout.module.scss";

interface Props{
    children: JSX.Element
}

const UnauthLayout = ({children}:Props) => {
    return <div className={ModuleCss.layout}>
        <Card width={300} height={500}>
            <Title />
            {children}
        </Card>
    </div>
}

export default UnauthLayout;