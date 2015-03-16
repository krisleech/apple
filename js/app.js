var QuoteApp = React.createClass({
    render: function() {
        return (
                <div className="quote_app container">
                    <div className="row">
                        <h2>Make Quote</h2>
                        <MakeQuoteButton />
                    </div>
                    <Quotes />
                </div>
               );
    }
});

var MakeQuoteButton = React.createClass({
    getInitialState: function () {
        return {
            isEnabled: true
            };
    },

    onClick: function() {
        // disable button
         this.setState({isEnabled: false});

        // fake a request to a API
         var quotes = [ 'a', 'b', 'c', 'd' ];
         var result = _.sample(quotes);

         // update UI
         // TODO: add a new row to Quotes sibling component
         alert(result);

         // enable button
         this.setState({isEnabled: true});
    },

    render: function() {
        return (
                <button onClick={this.onClick} className="btn btn-lg btn-info" type="button">
                    { this.state.isEnabled ? 'Get me a quote' : 'Quoting...' }
                </button>
               );
    }
});

var Quotes = React.createClass({
    render: function() {
        return (
                <div className="quotes row">No quotes yet.</div>
               );
    }
});

React.render(
        <QuoteApp />,
        document.getElementById('content')
        );
