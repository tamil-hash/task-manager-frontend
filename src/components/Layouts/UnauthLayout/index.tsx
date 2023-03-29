//components
import Card from "../../common/Card";

import ModuleCss from "./UnauthLayout.module.scss";

interface Props{
    children: JSX.Element
}

const UnauthLayout = ({children}:Props) => {
    return <div className={ModuleCss.layout}>
        <Card width={300} height={500}>
            {children}
        </Card>
    </div>
}

export default UnauthLayout;