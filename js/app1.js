var	textArr	=	[
    {
        author:	'John',
        text:	'Text',
    },
    {
        author:	'Bob',
        text: 'Text',
    },
];

const App = React.createClass({
   displayName: 'App',
    getInitialState: function () {
        return {
            visible: false
        };
    },
    btnReadmoreClick: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: true
            });
    },
    btnReadmoreClick1: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: false
            });
    },

    render: function () {
        var visible	=	this.state.visible;

        return(
            <div className="main">        {/*-----Header-----*/}
                <Tabs selected={0} className="tabs__content article" >

                    <Tab label="Comments" className="article" >
                        {/*                    Menu                        */}
                        <a href="#" 	onClick = {(visible	?	this.btnReadmoreClick1 : this.btnReadmoreClick )}
                           className={'comments__readmore' + (visible	?	'none':	'')}>  Show Comments </a>
                        <div className = {'comments__big-text ' + (visible ? '' : 'none')}>
                            <Comments data={textArr}>{/*       CONTENT      */} </Comments>
                        </div>
                    </Tab>


                   <Tab label="Text">
                       {/*                    Menu                        */}
                        <a href="#" 	onClick = {(visible	?	this.btnReadmoreClick1 : this.btnReadmoreClick )}
                           className={'comments__readmore' + (visible	?	'none':	'')}> Show Text </a>
                        <div className = {'comments__big-text ' + (visible ? '' : 'none')}>

                            <p > Text {/*       CONTENT      */} </p>
                        </div>
                    </Tab>

                     <Tab label="Animals">
                         {/*                    Menu                        */}

                        <Cat>{/*       CONTENT      */}</Cat>
                        <Dog>{/*       CONTENT      */}</Dog>
                    </Tab>

                </Tabs>
            </div>
        )
    }
});
const Dog = React.createClass({
    getInitialState: function () {
        return {
            visible: false
        };
    },
    btnReadmoreClick: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: true
            });
    },
    btnReadmoreClick1: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: false
            });
    },
    render() {
        var visible	=	this.state.visible;
        return(
            <div>
                <a href="#" 	onClick = {(visible	?	this.btnReadmoreClick1 : this.btnReadmoreClick )}
                   className={'comments__readmore' + (visible	?	'none':	'')}> Show Dogs </a>
                <div className = {'comments__big-text ' + (visible ? '' : 'none')}>
                    <img src="https://pbs.twimg.com/profile_images/621531738078969856/KePrZ2Rk.jpg"> </img>
                </div>
            </div>
    )}
});
const Cat = React.createClass({
    getInitialState: function () {
        return {
            visible: false
        };
    },
    btnReadmoreClick: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: true
            });
    },
    btnReadmoreClick1: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: false
            });
    },
    render() {
        var visible	=	this.state.visible;
        return(
            <div>
                <a href="#" 	onClick = {(visible	?	this.btnReadmoreClick1 : this.btnReadmoreClick )}
                   className={'comments__readmore' + (visible	?	'none':	'')}> Show Cats </a>
                <div className = {'comments__big-text ' + (visible ? '' : 'none')}>
                    <img src="https://pbs.twimg.com/profile_images/619376781360017409/XThKeCR5.jpg"> </img>
                </div>
            </div>
        )}
});

const Tabs = React.createClass({
    displayName: 'Tabs',
    propTypes: {
        selected: React.PropTypes.number,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
        ]).isRequired
    },
    getDefaultProps() {
        return {
            selected: 0
        };
    },
    getInitialState() {
        return {
            selected: this.props.selected
        };
    },
    handleClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    },
    _renderTitles() {
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                    <a href="#"
                       className={activeClass}
                       onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
            );
        }
        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    },
    _renderContent() {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        );
    },
    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        );
    }
});

const Tab = React.createClass({
    displayName: 'Tab',
    propTypes: {
        label: React.PropTypes.string.isRequired,
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});
const Comments = React.createClass({
    propTypes:	{
        data:	React.PropTypes.array.isRequired
    },
    render: function () {
        var data = this.props.data;
        var commentsTemplate;

        if (data.length > 0) {
            commentsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>                        )
            });
            console.log(commentsTemplate);
        }

        else {
            commentsTemplate = <p>NO data</p>
        }

        return (
            <div
                className="comments">
                {commentsTemplate}
            </div>
        );

    }
});

const Article = React.createClass({
    propTypes:	{
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    render: function (){
        var author = this.props.data.author;
        var text = this.props.data.text;
        return (
            <div	className="article">
                <p className="comments__author">{author}:</p>
                <p className="comments__text">{text}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <App> </App>,
    document.getElementById('root1'));

