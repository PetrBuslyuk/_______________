import React from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { footer: [] };
    }
    componentDidMount(){
    this.setState({footer: [{
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
        }]});
    }
    render() {
        var footer = this.state.footer;
        return (
            <footer>
                {footer.map((el) => (
                    <Link key={el.id} to={`/${el.link}`}>
                        <div className="footerElem">{el.title}</div>
                    </Link>
                ))}
            </footer>
        );
    }
}

export {Footer}