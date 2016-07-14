import React from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.footer = [{
            "id":1,
            "link":"aboutUs",
            "title":"about us"
        },{
            "id":2,
            "link":"aboutUs1",
            "title":"rules"
        },{
            "id":3,
            "link":"aboutUs2",
            "title":"news"
        },{
            "id":4,
            "link":"aboutUs2",
            "title":"contact info"
        }]
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render() {
        return (
            <footer>
                {this.footer.map((el) => (
                    <Link className="footerElem" key={el.id} to={`/${el.link}`}>
                        {el.title}
                    </Link>
                ))}
            </footer>
        )
    }
}

export {Footer}