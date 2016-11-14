var	my_news	=	[
    {
        author:	'Саша	Печкин',
        text:	'В	четверг,	четвертого	числа...',
        bigText:	'в	четыре	с	четвертью	часа	четыре	чёрненьких	чумазеньких	чертёнка' +
        '	чертили	чёрными	чернилами	чертёж.'
    },
    {
        author:	'Просто	Вася',
        text: 'Считаю,	что	$	должен	стоить	35	рублей!',
        bigText:	'А	евро	42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший	сайт	-	http://localhost:3000',
        bigText: 'На	самом	деле	платно,	просто	нужно	прочитать	очень	длинное	лицензионное соглашение'
    }
    ];

var TestInput = React.createClass({
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    },
    getInitialState: function () {
        return {
            myValue: ''
        };
    },
    onChangeHandler:	function(e)	{
        this.setState(
            {
                myValue: e.target.value
            })
    },
    alertClick: function () {
        console.log(this.refs);
      alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },
        render: function () {
        return (
            <div>
                <input className='test-input'
                       defaultValue=''
                       placeholder='введите	значение'
                       ref='myTestInput'
                />
                <button onClick = {this.alertClick} ref='alert_button'>Alert</button>
            </div>
        );
    }
});



var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News 	data={my_news}	> </News>
                {/*<Comments></Comments>*/}
                <TestInput />
            </div>
        );
    }
});

var News = React.createClass({
    propTypes:	{
        data:	React.PropTypes.array.isRequired
    },
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                  <Article data={item} />
                </div>                        )
            });
            console.log(newsTemplate);
        }

        else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

            return (
            <div
                className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? "":'none'}>Всего новостей: {data.length} </strong>
            </div>
            );

    }
});

var Article = React.createClass({
    propTypes:	{
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {
            visible: false
        };
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: true
            });
    },
    readmoreClick1: function (e) {
        e.preventDefault();
        this.setState(
            {
                visible: false
            });
    },

   render: function (){
       var author = this.props.data.author;
       var text = this.props.data.text;
       var bigText	=	this.props.data.bigText;
       var visible	=	this.state.visible;

       return (
           <div	className="article">
               <p className="news__author">{author}:</p>
               <p className="news__text">{text}</p>
               <a href="#" 	onClick = {(visible	?	this.readmoreClick1 : this.readmoreClick )}  className={'news__readmore' + (visible	?	'none':	'')}> Подробнее </a>
               <p className = {'news__big-text ' + (visible ? '' : 'none')}> {bigText} </p>
           </div>
       )
}
});

/*var Comments = React.createClass({
    render: function () {
        return (
            <div className="comments">
                Нет	новостей	комментировать	нечего.
            </div>
        );

    }
});*/

ReactDOM.render(

    <App> </App>,
    document.getElementById('root'));
